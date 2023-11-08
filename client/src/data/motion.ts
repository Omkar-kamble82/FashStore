export const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};

export const textVariant = (delay: number) => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .60,
            delay,
        },
    },
});
export const buttonVariant = (delay: number) => ({
    hidden: {
        x: -50,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .60,
            delay,
        },
    },
});
export const buttonrightVariant = (delay: number) => ({
    hidden: {
        x: 50,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .60,
            delay,
        },
    },
});

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const planetVariants = (direction: string) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : '100%',
        rotate: 120,
    },
    show: {
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.8,
            delay: 0.5,
        },
    },
});

export const zoomIn = (delay: number, duration: number) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};
