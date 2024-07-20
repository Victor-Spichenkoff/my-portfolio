interface IAnimatedItem {
    children: React.ReactNode
    right?: boolean
}




import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const AnimatedItemProjects = ({ children, right = false }: IAnimatedItem) => {
    const controls = useAnimation();
    const ref = useRef(null);

    const handleScroll = (entries:any) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            controls.start('visible');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    const variants = {
        hidden: { width: 0, opacity: 0, x: right? '-100%' : '100%' },
        visible: { width: '100%', opacity: 1, x: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="overflow-visible relative"
        >
            <div className={`absolute inset-0 bg-gradient-to-r from-white to-transparent transition-opacity duration-1000 opacity-0 ${right ? '' : 'bg-gradient-to-l'}`}></div>
            {children}
        </motion.div>
    );
};