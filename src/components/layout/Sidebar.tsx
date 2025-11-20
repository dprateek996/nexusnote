import { Search, StickyNote, Folder, Settings, LogOut, Plus, BarChart, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <aside className="w-72 flex-col p-4 bg-slate-50 border-r border-slate-200 hidden md:flex">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-primary" />
        <h1 className="text-xl font-bold text-slate-800">NexusNote</h1>
      </div>
      <nav className="flex-1 space-y-1">
        <a href="#" className="relative flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-rose-800">
          <motion.div layoutId="activePill" className="absolute inset-0 bg-rose-100 rounded-lg" />
          <FileText className="w-5 h-5 relative z-10" />
          <span className="relative z-10">All Notes</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-slate-600 transition-colors hover:bg-slate-200">
          <StickyNote className="w-5 h-5" />
          <span>Sticky Wall</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-slate-600 transition-colors hover:bg-slate-200">
          <BarChart className="w-5 h-5" />
          <span>Expense Tracker</span>
        </a>
      </nav>
      <div>
        <a href="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 transition-colors hover:bg-slate-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;