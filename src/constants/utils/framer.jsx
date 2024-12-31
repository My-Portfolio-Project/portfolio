


export const slideUp = {
    initial: {
        opacity: 0,
        y: "100%",
    },
    animate:(i) => ( {
        opacity:1,
        animate: "0",
        transition: {  duration: 0.5, delay: i * 0.01},
    }),
    exit: {
        opacity:0,
        y: "100%"
    }
}

export const largeSlideUp = {
    initial: {
        opacity: 0,
        y: "70%",
    },
    animate: (i) => ({
  opacity: 1,
      y: "0",
        transition: { duration: 0.7, delay: i * 0.01}
    }), 
    exit: {
        opacity: 0,
        y: "70%"

    }
}