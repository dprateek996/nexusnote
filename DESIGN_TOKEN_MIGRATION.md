# Design Token Migration Guide

This guide shows how to refactor existing hard-coded values to use design tokens.

## 🔄 Before & After Examples

### Example 1: Spacing

**❌ Before (Hard-coded)**
```tsx
<div className="p-6 gap-4 mt-8">
  <h2 className="mb-4">Title</h2>
</div>
```

**✅ After (Design Tokens)**
```tsx
<div className="p-[var(--spacing-lg)] gap-[var(--spacing-md)] mt-[var(--spacing-xl)]">
  <h2 className="mb-[var(--spacing-md)]">Title</h2>
</div>
```

---

### Example 2: Border Radius

**❌ Before (Hard-coded)**
```tsx
<div className="rounded-xl">
  {/* Content */}
</div>
```

**✅ After (Design Tokens)**
```tsx
<div className="rounded-[var(--radius-xl)]">
  {/* Content */}
</div>
```

---

### Example 3: Sizes

**❌ Before (Hard-coded)**
```tsx
<button className="h-10 px-6">
  Click me
</button>
```

**✅ After (Design Tokens)**
```tsx
<button style={{
  height: 'var(--size-md)',
  padding: '0 var(--spacing-lg)'
}}>
  Click me
</button>
```

---

### Example 4: Typography

**❌ Before (Hard-coded)**
```tsx
<h1 className="text-4xl font-semibold leading-tight">
  Heading
</h1>
```

**✅ After (Design Tokens)**
```tsx
<h1 style={{
  fontSize: 'var(--font-size-4xl)',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-tight)'
}}>
  Heading
</h1>
```

---

### Example 5: Shadows & Transitions

**❌ Before (Hard-coded)**
```tsx
<div 
  className="shadow-lg"
  style={{
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
  }}
>
  Card
</div>
```

**✅ After (Design Tokens)**
```tsx
<div style={{
  boxShadow: 'var(--shadow-lg)',
  transition: 'all var(--transition-base) var(--ease-out-expo)'
}}>
  Card
</div>
```

---

### Example 6: Complete Card Component

**❌ Before (Inconsistent values)**
```tsx
<div 
  className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl"
  style={{
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 300ms ease-out'
  }}
>
  <h3 className="text-2xl font-semibold mb-4">Card Title</h3>
  <p className="text-base leading-relaxed">Card content</p>
</div>
```

**✅ After (Design Tokens)**
```tsx
<div 
  className="glass-card"
  style={{
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--spacing-xl)',
    transition: 'all var(--transition-slow) var(--ease-out)'
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
    Card content
  </p>
</div>
```

---

## 🎯 Tailwind to Design Token Conversion

| Tailwind Class | Design Token | Example |
|----------------|--------------|---------|
| `p-4` | `var(--spacing-md)` | `p-[var(--spacing-md)]` |
| `gap-6` | `var(--spacing-lg)` | `gap-[var(--spacing-lg)]` |
| `h-10` | `var(--size-md)` | `h-[var(--size-md)]` |
| `text-xl` | `var(--font-size-xl)` | `text-[var(--font-size-xl)]` |
| `rounded-lg` | `var(--radius-lg)` | `rounded-[var(--radius-lg)]` |
| `shadow-md` | `var(--shadow-md)` | `shadow-[var(--shadow-md)]` |

---

## 🚀 Quick Win: Update Current Components

### 1. Update Login Page (`index.tsx`)

Find lines like:
```tsx
className="rounded-xl border border-slate-200 bg-white/50 px-4 py-3.5"
```

Replace with:
```tsx
style={{
  borderRadius: 'var(--radius-xl)',
  padding: 'var(--spacing-sm) var(--spacing-md)',
  ...
}}
```

### 2. Update Dashboard Cards

Current:
```tsx
<div className="rounded-2xl p-6 shadow-lg">
```

Better:
```tsx
<div style={{
  borderRadius: 'var(--radius-2xl)',
  padding: 'var(--spacing-lg)',
  boxShadow: 'var(--shadow-lg)'
}}>
```

---

## 📋 Migration Checklist

- [ ] Replace hard-coded spacing (4px, 8px, etc.) with `--spacing-*`
- [ ] Replace hard-coded sizes (24px, 32px, etc.) with `--size-*`
- [ ] Replace font sizes (text-xl, etc.) with `--font-size-*`
- [ ] Replace border radius values with `--radius-*`
- [ ] Replace shadow values with `--shadow-*`
- [ ] Replace transition values with `--transition-*` and `--ease-*`
- [ ] Replace z-index values with `--z-*`
- [ ] Use `.glass-card` class instead of writing glassmorphism manually

---

## 💡 Pro Tips

1. **Combine with inline styles when needed**
   ```tsx
   <div 
     className="flex items-center gap-[var(--spacing-md)]"
     style={{ padding: 'var(--spacing-lg)' }}
   >
   ```

2. **CSS Modules work great**
   ```css
   .myComponent {
     padding: var(--spacing-md);
     border-radius: var(--radius-lg);
     box-shadow: var(--shadow-md);
   }
   ```

3. **Computed values**
   ```css
   /* Half spacing */
   padding: calc(var(--spacing-md) / 2);
   
   /* Double spacing */
   margin: calc(var(--spacing-lg) * 2);
   ```

---

## 🎨 Theme Consistency Benefits

✅ **Change once, update everywhere**  
✅ **No more random values**  
✅ **Better developer handoff**  
✅ **Easier to maintain**  
✅ **Professional consistency**
