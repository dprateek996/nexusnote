import Link from 'next/link';
import { Search } from 'lucide-react';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { StickyNote } from '@/components/dashboard/StickyNote';
import { SmartAlignment } from '@/components/dashboard/SmartAlignment';
import { StudyLab } from '@/components/dashboard/StudyLab';

// Canvas Component with Dot Matrix Background
const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div
    className="col-span-12 lg:col-span-8 bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm min-h-[700px] relative overflow-hidden"
    style={{
      backgroundImage: `radial-gradient(#E2E8F0 1.5px, transparent 1.5px)`,
      backgroundSize: '32px 32px'
    }}
  >
    {/* Live Canvas Header with Ping Animation */}
    <div className="flex items-center gap-2 mb-10 relative z-10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Live Canvas</h2>
    </div>
    {children}
  </div>
);

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F8F9FA] p-6 lg:p-10 font-sans text-slate-900 selection:bg-[#EAB3B1] selection:text-white">

        {/* Refined Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex items-center gap-2 text-sm self-start md:self-auto uppercase">
            <span className="text-slate-400 font-semibold text-[10px] tracking-widest">NEXUS</span>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-800 text-[10px] tracking-widest">DASHBOARD</span>
          </div>

          <div className="flex gap-4 items-center w-full md:w-auto">
            {/* Ghost-Input Search Bar */}
            <div className="relative flex items-center w-full md:w-64">
              <Search size={16} strokeWidth={2.5} className="absolute left-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes..."
                className="w-full bg-slate-50 border border-slate-100 rounded-full py-2.5 pl-11 pr-4 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:border-[#EAB3B1]/50 focus:bg-white transition-all"
              />
            </div>

            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block"></div>

            <button className="bg-[#EAB3B1] text-white px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-[#EAB3B1]/30 hover:bg-[#d9a09e] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex-shrink-0 ring-offset-2 focus:ring-2 ring-[#EAB3B1]">
              + New Note
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8 max-w-[1600px] mx-auto">

          {/* Canvas Section with Dot Matrix */}
          <Canvas>
            {/* Sticky Notes - Scattered Layout with Varied Rotations */}
            <div className="relative h-full w-full min-h-[550px]">
              <Link href="/note/1" passHref className="block">
                <div className="absolute top-0 left-0 md:left-4 w-64 md:w-72">
                  <StickyNote
                    title="Gym Routine"
                    content="Push/Pull/Legs split details. Remember to increase weight on compound lifts."
                    category="Personal"
                    color={{ bg: 'bg-[#F5E1E0]', text: 'text-[#d9a09e]' }}
                    rotation="rotate-[-2deg]"
                  />
                </div>
              </Link>

              <Link href="/note/2" passHref className="block">
                <div className="absolute top-24 left-10 md:left-[22rem] w-64 md:w-72">
                  <StickyNote
                    title="Project Ideas"
                    content="Voice-based expense tracker UI revamp using the new shadcn/ui components."
                    category="Work"
                    color={{ bg: 'bg-slate-100', text: 'text-slate-600' }}
                    rotation="rotate-[1deg]"
                  />
                </div>
              </Link>

              <Link href="/note/3" passHref className="block">
                <div className="absolute top-[20rem] left-0 md:left-24 w-64 md:w-72">
                  <StickyNote
                    title="Biology 101"
                    content="Review mitosis phases. Create flashcards for cell structures."
                    category="Study"
                    color={{ bg: 'bg-blue-50', text: 'text-blue-500' }}
                    rotation="rotate-[-1deg]"
                  />
                </div>
              </Link>
            </div>
          </Canvas>

          {/* Right Sidebar Bento */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

            {/* Glassmorphic Study Lab */}
            <StudyLab />

            {/* Smart Alignment */}
            <div className="flex-1 min-h-[300px]">
              <SmartAlignment />
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;