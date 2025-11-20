import type { Config } from 'tailwindcss'

const config: Config = {
  // THIS 'content' SECTION IS THE PART WE ARE FIXING
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Keep the 'import' and 'content' sections as they are.



  // Inside your tailwind.config.ts file...

// Inside your tailwind.config.ts file...

  theme: {
    extend: {
      colors: { /* ... your colors ... */ },
      animation: { /* ... your animations ... */ },
      keyframes: { /* ... your keyframes ... */ },
      
      // ADD THESE TWO NEW PROPERTIES FOR THE BUTTON EFFECT
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },

// ... (plugins)
// ... (the rest of the file, e.g., plugins)

// ... (the rest of the file, e.g., plugins)
// Keep the 'plugins' section as it is.
  plugins: [
    require('@tailwindcss/typography'), // ADD THIS LINE
  ],
}
export default config