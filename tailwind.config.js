/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)", "Quicksand", "sans-serif"],
        cursive: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
      },
      colors: {
        cream: "#FFF8F0",
        "rose-gold": {
          DEFAULT: "#B76E79",
          light: "#C9868F",
          dark: "#9E5A63",
        },
        blush: "#F9E4E4",
        rose: "#E8A0A0",
        petal: "#FDE8E8",
        wine: "#722F37",
      },
      borderRadius: {
        card: "24px",
        pill: "9999px",
      },
      boxShadow: {
        "rose-sm": "0 2px 8px rgba(183,110,121,0.12)",
        "rose-md": "0 4px 16px rgba(183,110,121,0.2)",
        "rose-lg": "0 8px 32px rgba(183,110,121,0.25)",
        "rose-xl": "0 12px 48px rgba(183,110,121,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "bounce-soft": "bounceSoft 0.6s ease-in-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "float-heart": "floatHeart 6s ease-in-out infinite",
        "float-heart-delay": "floatHeart 8s ease-in-out 2s infinite",
        "float-heart-slow": "floatHeart 10s ease-in-out 4s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatHeart: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": {
            transform: "translateY(-100vh) rotate(720deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
