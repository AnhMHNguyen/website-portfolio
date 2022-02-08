export const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {duration: 3, ease: "easeInOut"}
  }
}

export const fadeInLeftVariants = {
  initial: {
    opacity: 0,
    x: '-100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}
  }
}
export const fadeInDownVariants = {
  initial: {
    opacity: 0,
    y: '-10vh'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {duration: 1, ease: "easeInOut"}
  }
}
export const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: '10vh'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: "easeInOut"}
  }
}

export const staggerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const rotateZVariants = {
  tap: {
    scale: 0.5,
    transition: {duration: 0.1}
  }
}