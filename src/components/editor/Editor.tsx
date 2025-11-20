"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';

const Editor = () => {
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
        // This is the class that will style our editor's content area
 class: 'prose max-w-none focus:outline-none pt-24 p-8 md:p-12',      },
    },
           immediatelyRender: false,

  });

  if (!editor) {
    return null;
  }

  return (
    <div className="relative h-full">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="h-full overflow-y-auto" />
    </div>
  );
};

export default Editor;