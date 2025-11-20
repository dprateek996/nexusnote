import { useRouter } from 'next/router';
import { ArrowRight } from 'lucide-react';
import CanvasBackground from '@/components/canvas/CanvasBackground';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <main className="relative min-h-screen" style={{ backgroundColor: 'rgb(var(--login-background-rgb))', color: 'rgb(var(--login-foreground-rgb))' }}>
      <CanvasBackground />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        
        <div className="hidden md:flex flex-col justify-center items-start p-12 lg:p-24">
          <h1 className="text-6xl lg:text-7xl font-thin tracking-tighter text-current">
            NexusNote
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            Where ideas find their form.
          </p>
          <div className="w-24 h-px bg-slate-400/50 mt-8"></div>
        </div>
        
        <div className="flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-sm bg-white/20 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/30">
            <h2 className="text-3xl font-light text-current mb-8">Sign In</h2>
            <form className="space-y-10">
              <div>
                <input id="email" name="email" type="email" required placeholder="Email Address" className="w-full pb-3 bg-transparent border-0 border-b border-gray-300/80 placeholder-slate-400 text-current focus:ring-0 focus:border-primary focus:border-b-2 transition-all duration-300" />
              </div>
              <div>
                <input id="password" name="password" type="password" required placeholder="Password" className="w-full pb-3 bg-transparent border-0 border-b border-gray-300/80 placeholder-slate-400 text-current focus:ring-0 focus:border-primary focus:border-b-2 transition-all duration-300" />
              </div>
              <button 
                type="button"
                onClick={handleLogin}
                className="w-full group flex items-center justify-center gap-2 px-4 py-3 font-semibold text-primary-foreground bg-primary rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80 transition-all duration-300"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
            <p className="mt-10 text-center text-sm text-slate-500">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-primary hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}