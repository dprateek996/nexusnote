import MainLayout from '@/components/layout/MainLayout';
import { StickyNoteStack } from '@/components/dashboard/StickyNoteStack';
import { Plus } from 'lucide-react';
import ExpenseTrackerWidget from '@/components/dashboard/ExpenseTrackerWidget';

const BentoDashboard = () => {
  const notes = [
    { id: 1, title: 'Meeting Notes', description: 'Q3 roadmap discussion...', link: '/note/1' },
    { id: 2, title: 'Brainstorming', description: 'New feature ideas for the canvas...', link: '/note/2' },
    { id: 3, title: 'Personal Goals', description: 'Read "The Pragmatic Programmer"...', link: '/note/3' },
    { id: 4, title: 'UI/UX Feedback', description: 'Simplify the onboarding flow...', link: '/note/4' },
    { id: 5, title: 'Marketing Ideas', description: 'Focus on "Aesthetic Productivity"...', link: '/note/5' },
  ];

  return (
    <MainLayout>
      <div className="p-8 w-full h-full dot-grid-background">
        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-6 w-full h-full">
          
          {/* Sticky Note Stack - The Main Component */}
          <div className="lg:col-span-2 lg:row-span-2">
            <StickyNoteStack items={notes} />
          </div>

          {/* New Note Button */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-slate-100 transition-colors">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <Plus size={32} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-800">New Note</h3>
            <p className="mt-1 text-sm text-slate-500">Start fresh with a blank page.</p>
          </div>

          {/* Expense Tracker Widget */}
          <ExpenseTrackerWidget />
        </div>
      </div>
    </MainLayout>
  );
};

export default BentoDashboard;