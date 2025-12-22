"use client";

import { Editor } from '@tiptap/react';
import { Bold, Italic, Strikethrough, Heading1, Heading2, Sparkles, Loader2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ToolbarProps = {
  editor: Editor;
};

const Toolbar = ({ editor }: ToolbarProps) => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAI = async (task: 'summarize' | 'tips' | 'acronym') => {
    // Get current selection or full document text
    const { from, to, empty } = editor.state.selection;
    const text = empty ? editor.getText() : editor.state.doc.textBetween(from, to, ' ');

    if (!text || text.length < 5) {
      alert("Please select some text or write more content first!");
      return;
    }

    setLoading(true);
    setIsAiOpen(false);

    try {
      const res = await fetch('/api/ai/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text, task }),
      });

      const data = await res.json();

      if (data.text) {
        editor.chain().focus().insertContent(`
          <blockquote>
            <strong>✨ AI Output (${task}):</strong><br/>
            ${data.text}
          </blockquote>
          <p></p>
        `).run();
      }
    } catch (err) {
      console.error(err);
      alert("AI Failed to generate response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-lg shadow-slate-200/20 transition-all hover:shadow-xl hover:bg-white">

        {/* Text Formatting Group */}
        <div className="flex items-center gap-0.5 px-1 border-r border-slate-200/60 pr-2 mr-1">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('bold') ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            title="Bold"
          >
            <Bold size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('italic') ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            title="Italic"
          >
            <Italic size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('strike') ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            title="Strikethrough"
          >
            <Strikethrough size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Heading Group */}
        <div className="flex items-center gap-0.5 border-r border-slate-200/60 pr-2 mr-1">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            title="Heading 1"
          >
            <Heading1 size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            title="Heading 2"
          >
            <Heading2 size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* AI Action Button */}
        <div className="relative">
          <button
            onClick={() => setIsAiOpen(!isAiOpen)}
            className={`flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-lg transition-all font-medium text-sm border ${isAiOpen ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-gradient-to-br from-rose-500 to-amber-500 border-transparent text-white shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/30'
              }`}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} fill="currentColor" className="opacity-90" />}
            <span>Ask AI</span>
            <ChevronDown size={14} className={`opacity-80 transition-transform ${isAiOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* AI Dropdown Menu */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-xl shadow-xl shadow-slate-200/20 overflow-hidden flex flex-col p-1"
          >
            <div className="px-3 py-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              AI Actions
            </div>
            <button
              onClick={() => handleAI('summarize')}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg text-left transition-colors"
            >
              📝 Summarize Note
            </button>
            <button
              onClick={() => handleAI('tips')}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg text-left transition-colors"
            >
              💡 Study Tips
            </button>
            <button
              onClick={() => handleAI('acronym')}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg text-left transition-colors"
            >
              🔠 Make Acronym
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toolbar;