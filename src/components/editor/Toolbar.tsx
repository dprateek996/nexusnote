"use client";

import { Editor } from '@tiptap/react';
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, Pilcrow } from 'lucide-react';

type ToolbarProps = {
  editor: Editor;
};

const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="flex items-center gap-1 p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-md ${editor.isActive('bold') ? 'bg-primary text-white' : 'hover:bg-white/20'}`}
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-md ${editor.isActive('italic') ? 'bg-primary text-white' : 'hover:bg-white/20'}`}
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded-md ${editor.isActive('strike') ? 'bg-primary text-white' : 'hover:bg-white/20'}`}
        >
          <Strikethrough size={18} />
        </button>

        <div className="w-px h-6 bg-white/20 mx-2"></div>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded-md ${editor.isActive('heading', { level: 1 }) ? 'bg-primary text-white' : 'hover:bg-white/20'}`}
        >
          <Heading1 size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-md ${editor.isActive('heading', { level: 2 }) ? 'bg-primary text-white' : 'hover:bg-white/20'}`}
        >
          <Heading2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;