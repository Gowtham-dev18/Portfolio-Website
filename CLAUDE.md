# Portfolio Project — Claude Rules

> Claude must read this file completely before doing anything.
> After reading, switch model to: claude-sonnet-4-6 (if not already active)

---

## Model

- Always use: `claude-sonnet-4-6`
- Do NOT use extended thinking unless explicitly asked
- Do NOT use Opus unless the task is architecture-level design

---

## Project Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + `app/globals.css` for custom CSS
- **Animation**: GSAP
- **Structure**: `app/` directory routing

---

## Folder Structure

```
PORTFOLIO/
├── app/
│   ├── fonts/          → edosz.ttf, Valty_DEMO.otf
│   ├── images/         → astronaut.png
│   ├── globals.css     → global styles, CSS variables, custom animations
│   ├── layout.tsx      → root layout
│   └── page.tsx        → home page
├── components/
│   ├── About.tsx
│   ├── Astronaut.tsx
│   ├── CircularBadge.tsx
│   ├── Contact.tsx
│   ├── Cursor.tsx
│   ├── Experience.tsx
│   ├── FloatingTech.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── StarField.tsx
│   └── ThemeProvider.tsx
├── public/
├── AGENTS.md
├── CLAUDE.md           → this file
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.*
└── tsconfig.json
```

---

## Token Optimization Rules

### File Reading
- Do NOT read files unless I explicitly say: `"read X file"`
- Do NOT scan multiple files to "understand context" — ask me instead
- If you need a file, ask: `"Should I read [filename]?"`

### Response Format
- No long explanations unless I ask `"explain this"`
- No comments in code unless I say `"add comments"`
- No `console.log` unless I say so
- Never rewrite the full file — only show the changed section with clear markers:
  ```
  // --- CHANGED: ComponentName.tsx (lines 10-25) ---
  ```

### Image Handling
- Do NOT ask me to attach images to understand the project
- Read folder structure from CLAUDE.md
- If I attach an image, treat it as visual reference only — do not re-read or re-describe it back to me
- Extract intent from image descriptions in text, not image tokens

### Prompting Behavior
- Do exactly what I ask — nothing more, nothing less
- Do NOT add extra features I didn't ask for
- Do NOT refactor surrounding code while fixing a specific issue
- Do NOT rename variables or restructure unless asked
- If my prompt is unclear, ask ONE clarifying question only

---

## Code Conventions

### Styling
- Use Tailwind classes as first choice
- Use `app/globals.css` for custom CSS variables and animations
- Do NOT create new CSS files
- Do NOT add inline styles unless no other option
- Check `globals.css` for existing variables before creating new ones

### Animations
- Use GSAP for complex animations
- Use CSS `@keyframes` in `globals.css` for simple animations
- Do NOT mix Framer Motion unless already present in component

### Components
- Functional components only
- Keep component logic in its own file under `components/`
- Do NOT split into sub-files unless I ask

### TypeScript
- Always type props with `interface`, not `type` unless union is needed
- No `any` unless explicitly told

---

## Anti-Hallucination Rules

- Do NOT assume package versions — check `package.json` if needed (ask first)
- Do NOT invent CSS variable names — check `globals.css` first (ask first)
- Do NOT assume file content — ask before reading
- If unsure about anything, say: `"I'm not sure, should I check [file]?"`
- Do NOT make up component props that don't exist

---

## Rogue File Prevention

- Do NOT create new files unless I explicitly say `"create a new file"`
- Do NOT delete files
- Do NOT move files
- Do NOT install packages without asking
- Do NOT run the dev server
- Do NOT modify `next.config.ts`, `tsconfig.json`, or `tailwind.config.*` unless explicitly asked

---

## Task Execution

When I give a task:
1. Confirm what you understood in one line
2. Ask if unsure (max 1 question)
3. Execute only what was asked
4. Show only changed code sections

Example:
> Me: "Add hover animation to Navbar links"
> Claude: "Got it — adding CSS hover animation to Navbar links only."
> [shows only the changed JSX + CSS]

---

## Prompt Faithfulness

- Whatever I describe in my prompt — build exactly that
- If I describe an animation behavior, replicate it as described
- Do NOT simplify or "improve" my idea without asking
- If something I asked is technically complex, warn me first — don't silently downgrade it