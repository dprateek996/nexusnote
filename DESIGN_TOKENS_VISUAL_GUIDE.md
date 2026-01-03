# Design Token Visual Guide

## 🎨 Quick Visual Reference for NexusNote Design Tokens

---

## Spacing System
```
┌─────────────────────────────────────────┐
│  --spacing-xs    4px   ▪                │
│  --spacing-sm    8px   ▪▪               │
│  --spacing-md    16px  ▪▪▪▪             │ ← DEFAULT
│  --spacing-lg    24px  ▪▪▪▪▪▪           │
│  --spacing-xl    32px  ▪▪▪▪▪▪▪▪         │
│  --spacing-2xl   48px  ▪▪▪▪▪▪▪▪▪▪▪▪     │
└─────────────────────────────────────────┘
```

---

## Size System
```
┌─────────────────────────────────────────┐
│  --size-xs     24px  ■                  │ ← Icons (small)
│  --size-sm     32px  ■■                 │ ← Icons, small buttons
│  --size-md     40px  ■■■                │ ← Default button height
│  --size-lg     48px  ■■■■               │ ← Large buttons
│  --size-xl     64px  ■■■■■■             │ ← Avatars
│  --size-2xl    96px  ■■■■■■■■■          │ ← Hero elements
└─────────────────────────────────────────┘
```

---

## Border Radius
```
┌──────────────────────────────────────────┐
│  --radius-sm    6px   ╭─╮               │
│  --radius-md    8px   ╭──╮              │
│  --radius-lg    12px  ╭───╮             │ ← Cards
│  --radius-xl    16px  ╭────╮            │
│  --radius-2xl   24px  ╭─────╮           │
│  --radius-full  ∞     ●                 │ ← Pills, avatars
└──────────────────────────────────────────┘
```

---

## Font Sizes
```
┌──────────────────────────────────────────┐
│  --font-size-xs     12px  Labels        │
│  --font-size-sm     14px  Small text    │
│  --font-size-base   16px  Body text     │ ← DEFAULT
│  --font-size-lg     18px  Large body    │
│  --font-size-xl     20px  Subtitle      │
│  --font-size-2xl    24px  Section h2    │
│  --font-size-3xl    30px  Page title    │
│  --font-size-4xl    36px  Hero heading  │
└──────────────────────────────────────────┘
```

---

## Shadow Levels
```
┌──────────────────────────────────────────┐
│  --shadow-xs    Minimal depth           │  █
│  --shadow-sm    Subtle elevation        │   █
│  --shadow-md    Default cards           │    █
│  --shadow-lg    Elevated elements       │     █
│  --shadow-xl    Modal dialogs           │      █
│  --shadow-2xl   Maximum depth           │       █
└──────────────────────────────────────────┘
```

---

## Component Recipes

### 🎴 Card Component
```tsx
<div style={{
  padding: 'var(--spacing-lg)',          // 24px
  borderRadius: 'var(--radius-xl)',       // 16px
  boxShadow: 'var(--shadow-md)',          // Default shadow
  gap: 'var(--spacing-md)'                // 16px
}}>
  <h3 style={{
    fontSize: 'var(--font-size-2xl)',     // 24px
    fontWeight: 'var(--font-weight-semibold)', // 600
    marginBottom: 'var(--spacing-md)'     // 16px
  }}>
    Card Title
  </h3>
  <p style={{
    fontSize: 'var(--font-size-base)',    // 16px
    lineHeight: 'var(--line-height-relaxed)' // 1.75
  }}>
    Content
  </p>
</div>
```

### 🔘 Button Component
```tsx
<button style={{
  height: 'var(--size-md)',               // 40px
  padding: '0 var(--spacing-lg)',         // 0 24px
  fontSize: 'var(--font-size-sm)',        // 14px
  fontWeight: 'var(--font-weight-semibold)', // 600
  borderRadius: 'var(--radius-md)',       // 8px
  boxShadow: 'var(--shadow-sm)',          // Subtle shadow
  transition: 'all var(--transition-base) var(--ease-out-expo)'
}}>
  Click Me
</button>
```

### 📝 Input Component
```tsx
<input style={{
  padding: 'var(--spacing-sm) var(--spacing-md)', // 8px 16px
  fontSize: 'var(--font-size-base)',      // 16px
  borderRadius: 'var(--radius-lg)',       // 12px
  transition: 'all var(--transition-slow) var(--ease-out-expo)'
}} />
```

### 🖼️ Icon Component
```tsx
<IconComponent style={{
  height: 'var(--size-sm)',               // 32px
  width: 'var(--size-sm)'                 // 32px
}} />
```

---

## Color Usage Patterns

### Primary Color
```tsx
// Solid
background: 'rgb(var(--primary-rgb))'

// With opacity
background: 'rgba(var(--primary-rgb), 0.1)'  // 10%
background: 'rgba(var(--primary-rgb), 0.5)'  // 50%
background: 'rgba(var(--primary-rgb), 0.8)'  // 80%
```

### Accent Color (Rosewater)
```tsx
background: 'rgb(var(--accent-rose-rgb))'
background: 'rgba(var(--accent-rose-rgb), 0.2)'
```

---

## Transition Patterns

### Hover Effects
```tsx
style={{
  transition: 'all var(--transition-base) var(--ease-out-expo)',
  // Changes on hover:
  // - transform
  // - box-shadow
  // - background-color
}}
```

### Smooth Animations
```tsx
style={{
  transition: 'transform var(--transition-slow) var(--ease-out-back)'
  // For smooth, bouncy animations
}}
```

### Quick Interactions
```tsx
style={{
  transition: 'opacity var(--transition-fast) var(--ease-out)'
  // For quick fade ins/outs
}}
```

---

## Z-Index Layering

```
┌────────────────────────────────────────────┐
│  --z-tooltip        70  🔝                 │  Highest
│  --z-popover        60                     │
│  --z-modal          50  🗨️                 │  Dialogs
│  --z-modal-backdrop 40  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  Overlay
│  --z-fixed          30  📌                 │  Fixed elements
│  --z-sticky         20  📍                 │  Sticky headers
│  --z-dropdown       10  ▼                  │  Dropdowns
│  --z-base            1  📄                 │  Default content
└────────────────────────────────────────────┘
```

---

## Common Combinations

### Glass Card
```tsx
className="glass-card"
style={{
  borderRadius: 'var(--radius-2xl)',
  padding: 'var(--spacing-xl)',
  boxShadow: 'var(--shadow-xl)'
}}
// Uses: --glass-bg, --glass-border, --glass-shadow, --glass-blur
```

### Interactive Card
```tsx
style={{
  padding: 'var(--spacing-lg)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-md)',
  transition: 'all var(--transition-base) var(--ease-out-expo)'
}}

onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  e.currentTarget.style.transform = 'translateY(-4px)';
}}
```

### Premium Button
```tsx
style={{
  height: 'var(--size-md)',
  padding: '0 var(--spacing-lg)',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 'var(--font-weight-bold)',
  borderRadius: 'var(--radius-full)',
  boxShadow: 'var(--shadow-lg)',
  transition: 'all var(--transition-base) var(--ease-out-expo)'
}}
```

---

## Consistency Checklist

When creating a new component, ask:

- [ ] Am I using spacing tokens for padding/margin?
- [ ] Am I using size tokens for dimensions?
- [ ] Am I using font-size tokens for typography?
- [ ] Am I using radius tokens for border-radius?
- [ ] Am I using shadow tokens for box-shadow?
- [ ] Am I using transition tokens for animations?
- [ ] Am I using z-index tokens for layering?

If any answer is "no", refactor to use design tokens!

---

## Pro Tips

### ✅ DO
```tsx
// Use tokens
<div style={{ padding: 'var(--spacing-lg)' }}>

// Combine tokens
<div style={{ 
  padding: 'var(--spacing-md) var(--spacing-xl)',
  gap: 'var(--spacing-sm)'
}}>

// Computed values
<div style={{ 
  padding: 'calc(var(--spacing-md) / 2)'
}}>
```

### ❌ DON'T
```tsx
// Hard-coded values
<div style={{ padding: '23px' }}>

// Inconsistent spacing
<div className="p-[17px]">

// Random z-index
<div style={{ zIndex: 9999 }}>
```

---

## Responsive Design

Use design tokens with Tailwind breakpoints:

```tsx
<div 
  className="p-[var(--spacing-md)] lg:p-[var(--spacing-xl)]"
  style={{
    borderRadius: 'var(--radius-lg)'
  }}
>
```

Or use media queries:

```css
.component {
  padding: var(--spacing-md);
  
  @media (min-width: 1024px) {
    padding: var(--spacing-xl);
  }
}
```

---

## 🎯 Remember

**The goal:** Every component should use design tokens exclusively.  
**The benefit:** Change once, update everywhere.  
**The result:** Professional, consistent, maintainable design system.

---

Happy coding with design tokens! 🚀
