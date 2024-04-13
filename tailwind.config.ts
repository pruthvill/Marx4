import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        marx:"#EDEDED",
        walmart: "#0171dc",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "#000",
        "neutral-900": "#080808",
        "neutral-200": "#e6e6e6",
        "gray-900": "#131316",
        "neutral-white": "#fff",
        gray1: {
          "100": "#292526",
          "200": "#05000b",
          "300": "rgba(5, 0, 11, 0.7)",
        },
        mediumblue: "#0047ff",
        blue: "#0126ff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "3xs": "10px",
        mini: "15px",
        "80xl": "99px",
        "69xl": "88px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
        '0.75rem': '0.75rem',
        // Add more as needed
      },
      fontFamily: {
        "body-small": "Inter",
        poppins: "Poppins",
      },
      fontSize: {
        sm: "0.875rem",
        "18xl": "2.313rem",
        "3xl": "1.375rem",
        "11xl": "1.875rem",
        mini: "0.938rem",
        base: "1rem",
        "21xl": "2.5rem",
        "10xl": "1.813rem",
        "4xl": "1.438rem",
        "37xl": "3.5rem",
        "15xl": "2.125rem",
        "26xl": "2.813rem",
        "5xl": "1.5rem",
        lgi: "1.188rem",
        "7xl": "1.625rem",
        "2xl": "1.313rem",
        "50xl": "4.313rem",
        "22xl": "2.563rem",
        "36xl": "3.438rem",
        inherit: "inherit",
      },
      screens: {
        lg: {
          max: "1200px",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
