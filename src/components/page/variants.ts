import { Variants } from "framer-motion";

export const fade: Variants = {
    initial: {
        opacity: 0,
    },
    animate: { 
        opacity: 1,
        transition: { duration: 0.75, delay: 0.5 }
    },
    exit:{ 
        opacity: 0, 
        transition: { duration: 0.5 }
    }
}

export const instant: Variants = {
    initial: { 
        opacity: 1,
    },
    animate: { 
        opacity: 1,
        transition: { duration: 0, delay: 0 }
    },
    exit:{ 
        opacity: 1, 
        transition: { duration: 0 }
    }
}

export const slide: Variants = {
    initial: { 
        x: window.innerWidth,
        opacity: 0
    },
    animate: { 
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.5 }
    },
    exit:{ 
        x: -window.innerWidth,
        opacity: 0, 
        transition: { duration: 1, delay: 0 }
    }
}