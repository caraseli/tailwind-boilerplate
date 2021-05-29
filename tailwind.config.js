module.exports = {
  purge: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../../assets/icons/Patterns.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      }),
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      height: {
        "50h": "50vh",
      },
      width: {
        "50w": "50vw",
      },
    },
  },
  variants: {},
  plugins: [],
};
