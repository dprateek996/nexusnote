"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import { useEffect, useState, useCallback } from 'react';

const Editor = () => {
  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);
  const [hasGeneratedTitle, setHasGeneratedTitle] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: `
      <h1>Untitled Note</h1>
      <p>Start typing your detailed notes here. Use the toolbar to format your text...</p>
      <ul>
        <li>Bullet points are supported.</li>
        <li>So are <strong>bold</strong> and <em>italic</em> text.</li>
      </ul>
      <blockquote>
        Blockquotes for your important thoughts.
      </blockquote>
    `,
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none pt-24 p-8 md:p-12',
      },
    },
    immediatelyRender: false,
  });

  // AI-native title generation
  const generateTitle = useCallback(async (content: string) => {
    if (isGeneratingTitle || hasGeneratedTitle) return;

    setIsGeneratingTitle(true);
    try {
      const response = await fetch('/api/ai/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: content.substring(0, 200), // Send first 200 chars
          task: 'generate-title'
        }),
      });

      const data = await response.json();
      if (data.text && editor) {
        // Find the h1 heading and update it
        const headingNode = editor.state.doc.firstChild;
        if (headingNode?.type.name === 'heading' && headingNode.textContent === 'Untitled Note') {
          editor.commands.setTextSelection({ from: 0, to: headingNode.nodeSize });
          editor.commands.insertContent(`<h1>${data.text.trim()}</h1>`);
          setHasGeneratedTitle(true);
        }
      }
    } catch (error) {
      console.error('Title generation failed:', error);
    } finally {
      setIsGeneratingTitle(false);
    }
  }, [editor, isGeneratingTitle, hasGeneratedTitle]);

  // Monitor editor content for auto-title generation
  useEffect(() => {
    if (!editor || hasGeneratedTitle) return;

    const updateHandler = () => {
      const content = editor.getText();
      const headingNode = editor.state.doc.firstChild;
      const isUntitled = headingNode?.textContent === 'Untitled Note';

      // Trigger title generation when content > 50 chars and title is still "Untitled Note"
      if (isUntitled && content.length > 50 && !isGeneratingTitle) {
        // Debounce by waiting 1.5 seconds
        const timeoutId = setTimeout(() => {
          generateTitle(content);
        }, 1500);

        return () => clearTimeout(timeoutId);
      }
    };

    editor.on('update', updateHandler);
    return () => {
      editor.off('update', updateHandler);
    };
  }, [editor, generateTitle, hasGeneratedTitle, isGeneratingTitle]);

  if (!editor) {
    return null;
  }

  return (
    <div className="relative h-full">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="h-full overflow-y-auto" />
      {isGeneratingTitle && (
        <div className="absolute top-4 right-4 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
          ✨ Generating title...
        </div>
      )}
    </div>
  );
};

export default Editor;