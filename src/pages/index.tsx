import { useRouter } from 'next/router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import CanvasBackground from '@/components/canvas/CanvasBackground';
import Head from 'next/head';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>NexusNote | Where ideas find their form</title>
      </Head>

      <main className="relative min-h-screen w-full overflow-hidden bg-[rgb(var(--login-background-rgb))] text-[rgb(var(--login-foreground-rgb))] selection:bg-rose-200 selection:text-rose-900">
        <CanvasBackground />

        <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">

          {/* Left Column: Brand & Hero */}
          <div className="hidden flex-col justify-center p-12 lg:p-24 md:flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/40 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-5 w-5 text-rose-500" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-rose-900/60">Productivity V2.0</span>
              </div>

              <h1 className="font-display text-7xl font-light tracking-tight text-slate-900 lg:text-8xl">
                Nexus<span className="font-semibold text-rose-500">Note</span>
              </h1>

              <p className="mt-8 max-w-md text-xl leading-relaxed text-slate-600">
                Where ideas find their form. A unified workspace for your thoughts, tasks, and creative chaos.
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="mt-12 h-px bg-gradient-to-r from-rose-400 to-transparent"
              />
            </motion.div>
          </div>

          {/* Right Column: Login Form */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card w-full max-w-[400px] rounded-3xl p-8 shadow-2xl backdrop-blur-xl sm:p-12"
            >
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome back</h2>
                <p className="mt-2 text-slate-500">Enter your details to access your workspace.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="peer w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 placeholder:text-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3.5 origin-[0] -translate-y-7 scale-75 cursor-text text-sm font-medium text-slate-400 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-rose-500"
                  >
                    Email Address
                  </label>
                </div>

                <div className="group relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="peer w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 placeholder:text-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-4 top-3.5 origin-[0] -translate-y-7 scale-75 cursor-text text-sm font-medium text-slate-400 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-rose-500"
                  >
                    Password
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, translateY: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleLogin}
                  className="btn-glow relative mt-4 w-full overflow-hidden rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-slate-900/30 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Sign In <ArrowRight className="h-4 w-4" />
                  </span>
                </motion.button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-500">
                <span>New here?</span>
                <a href="#" className="font-semibold text-rose-500 transition-colors hover:text-rose-600 hover:underline">
                  Create an account
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}