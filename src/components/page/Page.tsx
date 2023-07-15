import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import './page.scss';
import { ChapterNavigation } from '../chapternavigation/ChapterNavigation';
import { fade, instant, slide } from './variants';

interface PageProps {
    children: React.ReactNode;
    id: string;
    chaptersCompleted: number[];
    currentChapter: number;
    className?: string;
    type?: string;
}

export function Page({ children, id, chaptersCompleted, currentChapter, className = '', type = 'fade' }: PageProps) {

    let transition: Variants;
    switch(type){
        case 'fade':
            transition = fade;
            break;
        case 'instant':
            transition = instant;
            break;
        case 'slide':
            transition = slide;
            break;
        default:
            transition = fade;
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <motion.div 
            className={className ? `page ${className}` : `page`}
            id={id}
            variants={transition}
            initial='initial'
            animate='animate'
            exit='exit'>
                { children }
            <ChapterNavigation 
                chaptersCompleted={chaptersCompleted}
                currentChapter={currentChapter}/>
        </motion.div>
    )
}