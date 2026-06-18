# CLAUDE.md — Portfolio Project Rules

> Claude must read this file completely before doing anything.

---

## 1. Always Do First

- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Update CLAUDE.md** with any new learnings, patterns, or corrections discovered during work — so we don't repeat the same mistakes.

---

## 2. Model

- Always use: `claude-sonnet-4-6`
- Do NOT use extended thinking unless explicitly asked
- Do NOT use Opus unless the task is architecture-level design

---

## 3. Project Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + `app/globals.css` for custom CSS
- **Animation**: GSAP
- **Structure**: `app/` directory routing

---

## 4. Folder Structure

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

## 5. Task Execution

When I give a task:
1. Confirm what you understood in one line
2. Ask if unsure (max 1 question)
3. Execute only what was asked
4. Show only changed code sections

**Example:**
> Me: "Add hover animation to Navbar links"
> Claude: "Got it — adding CSS hover animation to Navbar links only."
> [shows only the changed JSX + CSS]

---

## 6. Token Optimization Rules

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

## 7. Code Conventions

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

## 8. Design & Frontend Rules

### Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

### Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

### Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

### Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

### Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

---

## 9. Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

---

## 10. Hard Rules

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## 11. Anti-Hallucination Rules

- Do NOT assume package versions — check `package.json` if needed (ask first)
- Do NOT invent CSS variable names — check `globals.css` first (ask first)
- Do NOT assume file content — ask before reading
- If unsure about anything, say: `"I'm not sure, should I check [file]?"`
- Do NOT make up component props that don't exist

---

## 12. Rogue File Prevention

- Do NOT create new files unless I explicitly say `"create a new file"`
- Do NOT delete files
- Do NOT move files
- Do NOT install packages without asking
- Do NOT run the dev server
- Do NOT modify `next.config.ts`, `tsconfig.json`, or `tailwind.config.*` unless explicitly asked

---

## 13. Prompt Faithfulness

- Whatever I describe in my prompt — build exactly that
- If I describe an animation behavior, replicate it as described
- Do NOT simplify or "improve" my idea without asking
- If something I asked is technically complex, warn me first — don't silently downgrade it
