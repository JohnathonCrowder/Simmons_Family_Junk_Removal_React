export const scrollAnimationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-20%" },
    transition: { duration: 0.5, ease: "easeOut" }
  };