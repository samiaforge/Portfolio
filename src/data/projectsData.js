
/**
 * Projects Data
 * Verified projects: FitLog, BazarDor, and BookNook.
 * Includes GitHub repositories and live deployment URLs.
 */

export const projectsData = [
  {
    id: "fitlog",
    title: "FitLog — Workout Library & Daily Planner",
    category: "Full-Stack Web App",
    description:
      "A modern, responsive fitness platform and workout library. Enables users to browse structured workouts filtered by muscle group, difficulty, and equipment, track their daily routine on 'Today's Plan', view calorie metrics, and save exercises for future training sessions.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "FitLog API",
      "React Hot Toast",
    ],
    features: [
      "Categorized workout browsing with equipment and calorie metrics",
      "Interactive daily workout planner and exercise tracker",
      "Bookmarkable 'Save for Later' workout management",
      "Responsive UI with interactive toast notifications",
    ],
    github: "https://github.com/samiaforge/Fit-Log",
    githubClient: null,
    githubServer: null,
    liveUrl: "https://fit-log-six-iota.vercel.app/",
    imagePlaceholderText: "FitLog Workout Library UI",
  },

  {
    id: "bazardor",
    title: "BazarDor — Commodity & Market Price Tracker",
    category: "Full-Stack Web App",
    description:
      "A web-based grocery platform designed to help consumers explore products and access market-related product information through a responsive interface.",
    tags: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "Google OAuth",
      "GitHub OAuth",
    ],
    features: [
      "Product browsing with category-based navigation",
      "Product information through API integration",
      "User authentication with Google and GitHub sign-in",
      "Responsive interface for different screen sizes",
    ],
    github: "https://github.com/samiaforge/Bazar-Dor",
    githubClient: null,
    githubServer: null,
    liveUrl: "https://bazar-dor-psi-seven.vercel.app/",
    imagePlaceholderText: "BazarDor Marketplace UI",
  },

  {
    id: "booknook",
    title: "BookNook — Online Library Platform",
    category: "Full-Stack Web App",
    description:
      "A full-stack online library platform built with a separate Next.js client and Express.js server. Users can explore books, add their own books, borrow available books, and manage their borrowing activities.",
    tags: [
      "Next.js",
      "React",
      "JavaScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Book catalog with book browsing and management",
      "Add and manage personal book collections",
      "Borrow and return books with borrowing records",
      "Duplicate borrowing restriction and protected user actions",
    ],
    github: null,
    githubClient: "https://github.com/samiaforge/Booknook-client",
    githubServer: "https://github.com/samiaforge/Booknook-server",
    liveUrl: "https://booknook-client-bay.vercel.app/",
    imagePlaceholderText: "BookNook Online Library UI",
  },
];
