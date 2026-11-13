# Meheli Akther Samia — Developer Portfolio

A personal developer portfolio website for **Meheli Akther Samia**, featuring a dark cinematic visual design, modern component-driven React architecture, and clean separation of data.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## 📁 How to Customize Your Content

All personal content, links, and text are centralized in `src/data/` so you can update them without modifying React component JSX:

### 1. Adding Your Resume PDF
- Drop your actual resume PDF named `resume.pdf` into the `public/` folder (`public/resume.pdf`).
- The **Download Resume** buttons in the Hero section and Navbar are already pre-wired to `/resume.pdf`.

### 2. Replacing the Portrait Image
- Drop your professional photo into `public/images/` (e.g. `public/images/my-photo.jpg`).
- Open `src/data/profileData.js` and update `portraitUrl`:
  ```javascript
  portraitUrl: "/images/my-photo.jpg",
  ```

### 3. Updating Project Links (Live Demo & Repositories)
- Open `src/data/projectsData.js`.
- Update the `liveUrl`, `github`, `githubClient`, or `githubServer` fields for **FitLog**, **BazarDor**, and **BookNook**:
  ```javascript
  {
    id: "fitlog",
    title: "FitLog — Workout Library & Daily Planner",
    github: "https://github.com/samiaforge/Fit-Log",
    liveUrl: "https://your-fitlog-live-link.vercel.app",
    ...
  }
  ```

### 4. Activating the Contact Form via Formspree
- Create a free form at [formspree.io](https://formspree.io).
- Copy your Form ID (e.g. `xpwzaqwe`).
- Open `src/data/profileData.js` and paste your ID into `formspreeId`:
  ```javascript
  contact: {
    email: "mehelisamia823@gmail.com",
    formspreeId: "xpwzaqwe",
    ...
  }
  ```
  *Note: Direct email communication is always guaranteed via the 1-click Copy Email button and direct `mailto:` link.*

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Font Awesome SVG Icons (`@fortawesome/react-fontawesome`)
- **Typography:** Inter & JetBrains Mono

---

## 🌐 Website Sections
1. **Home / Hero:** Neutral greeting, name, role, short intro, Download Resume CTA, project/contact buttons, and right-column glowing portrait.
2. **About Me:** 100% image-free narrative focusing on BBA in AIS, software transition, Prime Bank PLC internship context, and 4 compact strength cards.
3. **Skills:** Category tabs (*All Skills, Frontend, Backend & DB, Tools & Workflow*) with clean icon cards (no fake percentages).
4. **Projects:** FitLog, BazarDor, and BookNook (with separate client & server GitHub links for BookNook).
5. **Education:** BBA in Accounting & Information Systems (AIS) and Prime Bank PLC corporate experience.
6. **Contact:** Direct email with 1-click copy action, location, social links, and pre-wired message form.
