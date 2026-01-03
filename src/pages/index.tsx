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
              <div className="flex items-center" style={{ marginBottom: 'var(--spacing-lg)', gap: 'var(--spacing-md)' }}>
                <div
                  className="flex items-center justify-center bg-white/40 shadow-sm backdrop-blur-md"
                  style={{ height: 'var(--size-md)', width: 'var(--size-md)', borderRadius: 'var(--radius-lg)' }}
                >
                  <Sparkles className="text-rose-500" style={{ height: 'var(--size-sm)', width: 'var(--size-sm)' }} />
                </div>
                <span
                  className="text-rose-900/60 uppercase tracking-widest"
                  style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}
                >
                  Productivity V2.0
                </span>
              </div>

              <h1 className="font-display text-7xl font-light tracking-tight text-slate-900 lg:text-8xl">
                Nexus<span className="font-semibold text-rose-500">Note</span>
              </h1>

              <p className="text-slate-600 leading-relaxed" style={{ marginTop: 'var(--spacing-xl)', maxWidth: '28rem', fontSize: 'var(--font-size-xl)' }}>
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
              className="glass-card w-full max-w-[400px] backdrop-blur-xl"
              style={{ borderRadius: 'var(--radius-2xl)', padding: 'var(--spacing-xl)', boxShadow: 'var(--shadow-2xl)' }}
            >
              <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 className="text-slate-900 tracking-tight" style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-semibold)' }}>Welcome back</h2>
                <p className="text-slate-500" style={{ marginTop: 'var(--spacing-sm)' }}>Enter your details to access your workspace.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="peer w-full border border-slate-200 bg-white/50 text-slate-900 outline-none placeholder:text-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    placeholder="Email Address"
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-sm) var(--spacing-md)',
                      transition: 'all var(--transition-slow) var(--ease-out-expo)'
                    }}
                  />
                  <label
                    htmlFor="email"
                    className="absolute origin-[0] -translate-y-7 scale-75 cursor-text text-slate-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-rose-500"
                    style={{
                      left: 'var(--spacing-md)',
                      top: 'var(--spacing-sm)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      transition: 'all var(--transition-base) var(--ease-out)'
                    }}
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
                    className="peer w-full border border-slate-200 bg-white/50 text-slate-900 outline-none placeholder:text-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    placeholder="Password"
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-sm) var(--spacing-md)',
                      transition: 'all var(--transition-slow) var(--ease-out-expo)'
                    }}
                  />
                  <label
                    htmlFor="password"
                    className="absolute origin-[0] -translate-y-7 scale-75 cursor-text text-slate-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-rose-500"
                    style={{
                      left: 'var(--spacing-md)',
                      top: 'var(--spacing-sm)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      transition: 'all var(--transition-base) var(--ease-out)'
                    }}
                  >
                    Password
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, translateY: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleLogin}
                  className="relative w-full overflow-hidden bg-slate-900 text-white hover:bg-slate-800 active:scale-95 flex items-center justify-center"
                  style={{
                    marginTop: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-sm)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    boxShadow: 'var(--shadow-lg)',
                    transition: 'all var(--transition-base) var(--ease-out-expo)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                >
                  <span className="relative flex items-center justify-center" style={{ zIndex: 'var(--z-base)', gap: 'var(--spacing-sm)' }}>
                    Sign In <ArrowRight style={{ height: 'var(--size-xs)', width: 'var(--size-xs)' }} />
                  </span>
                </motion.button>
              </form>

              <div className="flex items-center justify-center text-slate-500" style={{ marginTop: 'var(--spacing-xl)', gap: 'var(--spacing-md)', fontSize: 'var(--font-size-sm)' }}>
                <span>New here?</span>
                <a href="#" className="text-rose-500 transition-colors hover:text-rose-600 hover:underline" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
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