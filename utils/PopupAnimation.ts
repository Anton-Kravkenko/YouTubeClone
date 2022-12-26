export const variants = {
  open: {
    opacity: 1,
    boxShadow: "black 0px 0px 643px",
    display: 'block',
    zIndex: 1000,
    transition: {
      type: 'spring', duration: 0.3, stiffness: 300, damping: 54,
    },
  },
  closed: {
    opacity: 0,
    zIndex: -1,
    transition: {
      type: 'spring', duration: 0.3, stiffness: 300, damping: 54,
      
    },
    
  },
}