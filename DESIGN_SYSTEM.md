# NexusNote Design System

This document outlines the design tokens and CSS variables used throughout the NexusNote application to maintain consistency.

## 🎨 How to Use

All design tokens are defined in `/src/styles/globals.css` as CSS custom properties (variables). Use them consistently across your components instead of hard-coded values.

### Usage in CSS/Tailwind

```css
/* In CSS modules or style tags */
.my-component {
  padding: var(--spacing-md);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base) var(--ease-out-expo);
}

/* Inline styles in JSX */
<div style={{ padding: 'var(--spacing-lg)' }}>
```

---

## 📏 Spacing System

Use these for consistent spacing (padding, margin, gaps):

| Variable | Value | Pixels | Usage |
|----------|-------|--------|-------|
| `--spacing-xs` | 0.25rem | 4px | Minimal spacing, tight layouts |
| `--spacing-sm` | 0.5rem | 8px | Small gaps, compact UI |
| `--spacing-md` | 1rem | 16px | **Default spacing** |
| `--spacing-lg` | 1.5rem | 24px | Section spacing |
| `--spacing-xl` | 2rem | 32px | Large section gaps |
| `--spacing-2xl` | 3rem | 48px | Hero sections, major dividers |

**Example:**
```tsx
<div className="p-[var(--spacing-md)] gap-[var(--spacing-sm)]">
  {/* Content */}
</div>
```

---

## 📐 Size System

Use these for element dimensions (width, height, icon sizes):

| Variable | Value | Pixels | Usage |
|----------|-------|--------|-------|
| `--size-xs` | 1.5rem | 24px | Small icons |
| `--size-sm` | 2rem | 32px | Regular icons, small buttons |
| `--size-md` | 2.5rem | 40px | **Default button height** |
| `--size-lg` | 3rem | 48px | Large buttons |
| `--size-xl` | 4rem | 64px | Avatar images |
| `--size-2xl` | 6rem | 96px | Hero elements |

**Example:**
```tsx
<button style={{ height: 'var(--size-md)', padding: '0 var(--spacing-lg)' }}>
  Click me
</button>
```

---

## 📝 Typography

### Font Sizes

| Variable | Value | Pixels | Usage |
|----------|-------|--------|-------|
| `--font-size-xs` | 0.75rem | 12px | Labels, captions |
| `--font-size-sm` | 0.875rem | 14px | Small text |
| `--font-size-base` | 1rem | 16px | **Body text** |
| `--font-size-lg` | 1.125rem | 18px | Large body text |
| `--font-size-xl` | 1.25rem | 20px | Subtitle |
| `--font-size-2xl` | 1.5rem | 24px | Section headers |
| `--font-size-3xl` | 1.875rem | 30px | Page titles |
| `--font-size-4xl` | 2.25rem | 36px | Hero headings |

### Font Weights

| Variable | Value | Usage |
|----------|-------|-------|
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Emphasis |
| `--font-weight-semibold` | 600 | Headings |
| `--font-weight-bold` | 700 | Strong emphasis |

### Line Heights

| Variable | Value | Usage |
|----------|-------|-------|
| `--line-height-tight` | 1.25 | Headings |
| `--line-height-normal` | 1.5 | **Body text** |
| `--line-height-relaxed` | 1.75 | Long-form content |

**Example:**
```css
.heading {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}
```

---

## 🔲 Border Radius

| Variable | Value | Pixels | Usage |
|----------|-------|--------|-------|
| `--radius-sm` | 0.375rem | 6px | Small elements |
| `--radius-md` | 0.5rem | 8px | Buttons, inputs |
| `--radius-lg` | 0.75rem | 12px | **Cards** |
| `--radius-xl` | 1rem | 16px | Large cards |
| `--radius-2xl` | 1.5rem | 24px | Hero cards |
| `--radius-full` | 9999px | Full | Avatars, pills |

**Example:**
```tsx
<div className="rounded-[var(--radius-lg)]">
  {/* Card content */}
</div>
```

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-rgb: 147, 51, 234;              /* Purple */
--primary-foreground-rgb: 255, 255, 255;  /* White */
```

Use with rgb():
```css
background: rgb(var(--primary-rgb));
background: rgba(var(--primary-rgb), 0.5); /* 50% opacity */
```

### Accent Colors
```css
--accent-rose-rgb: 239, 150, 150;  /* Rosewater for notes */
```

### Theme Colors
```css
/* Main App */
--background-light-rgb: 250, 250, 252;
--foreground-light-rgb: 15, 23, 42;
--border-light-rgb: 226, 232, 240;

/* Login Page */
--login-background-rgb: 254, 240, 238;
--login-foreground-rgb: 30, 41, 59;
```

---

## ✨ Glass Morphism

Pre-configured glassmorphism effects:

```css
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-border: rgba(255, 255, 255, 0.3);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
--glass-blur: 12px;
```

**Usage with Tailwind class:**
```tsx
<div className="glass-card">
  {/* Uses all glass variables automatically */}
</div>
```

---

## 🌑 Shadows

| Variable | Usage |
|----------|-------|
| `--shadow-xs` | Minimal depth |
| `--shadow-sm` | Subtle elevation |
| `--shadow-md` | **Default cards** |
| `--shadow-lg` | Elevated elements |
| `--shadow-xl` | Modal dialogs |
| `--shadow-2xl` | Maximum depth |

**Example:**
```css
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-xl);
}
```

---

## ⚡ Transitions

### Duration
```css
--transition-fast: 150ms;    /* Quick interactions */
--transition-base: 200ms;    /* Default */
--transition-slow: 300ms;    /* Smooth animations */
--transition-slower: 500ms;  /* Dramatic effects */
```

### Easing Functions
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);      /* Smooth deceleration */
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Bouncy */
--ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1);  /* Circular easing */
```

**Example:**
```css
.button {
  transition: 
    transform var(--transition-base) var(--ease-out-expo),
    box-shadow var(--transition-base) var(--ease-out-expo);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}
```

---

## 📚 Z-Index Scale

Use these to maintain consistent layering:

| Variable | Value | Usage |
|----------|-------|-------|
| `--z-base` | 1 | Default content |
| `--z-dropdown` | 10 | Dropdowns |
| `--z-sticky` | 20 | Sticky headers |
| `--z-fixed` | 30 | Fixed elements |
| `--z-modal-backdrop` | 40 | Modal backdrops |
| `--z-modal` | 50 | Modal content |
| `--z-popover` | 60 | Popovers, tooltips |
| `--z-tooltip` | 70 | Highest tooltips |

**Example:**
```css
.modal-backdrop {
  z-index: var(--z-modal-backdrop);
}

.modal {
  z-index: var(--z-modal);
}
```

---

## 🎯 Best Practices

### ✅ DO
- **Always use design tokens** instead of hard-coded values
- Use `--spacing-*` for padding/margin
- Use `--size-*` for element dimensions
- Use `--font-size-*` for typography
- Combine variables: `transition: all var(--transition-base) var(--ease-out-expo);`

### ❌ DON'T
- Avoid magic numbers: ❌ `padding: 23px` → ✅ `padding: var(--spacing-lg)`
- Don't create one-off values: ❌ `font-size: 1.234rem` → ✅ `font-size: var(--font-size-xl)`
- Don't use arbitrary z-index: ❌ `z-index: 999` → ✅ `z-index: var(--z-modal)`

---

## 📦 Component Examples

### Card Component
```tsx
<div 
  className="glass-card"
  style={{
    padding: 'var(--spacing-lg)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-md)',
  }}
>
  <h3 style={{ 
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 'var(--font-weight-semibold)',
    marginBottom: 'var(--spacing-md)'
  }}>
    Card Title
  </h3>
  
  <p style={{ 
    fontSize: 'var(--font-size-base)',
    lineHeight: 'var(--line-height-relaxed)'
  }}>
    Card content goes here...
  </p>
</div>
```

### Button Component
```tsx
<button
  style={{
    height: 'var(--size-md)',
    padding: '0 var(--spacing-lg)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--radius-md)',
    background: 'rgb(var(--primary-rgb))',
    color: 'rgb(var(--primary-foreground-rgb))',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all var(--transition-base) var(--ease-out-expo)',
  }}
>
  Click Me
</button>
```

---

## 🔄 Updating the Design System

When you need to change a design value (e.g., primary color, spacing scale):

1. **Update only the variable** in `globals.css`
2. All components using that variable will update automatically
3. No need to change individual components

This is the power of design tokens! 🎉
