import './chapternavigation.scss'
import { menu } from '../../utils/menuitems';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


const menuitems = menu.menuitems;

interface ChapterNavigationProps {
    chaptersCompleted: number[];
    currentChapter: number;
}

const transitionDuration = 1000;

export const ChapterNavigation = ({ chaptersCompleted, currentChapter }: ChapterNavigationProps) => {

    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({
        threshold: 0.5
    });

    const [prevItemIdx, setPrevItemIdx] = useState<number>(currentChapter);
    const [hoveredLinkIdx, setHoveredLinkIdx] = useState<number>(Infinity);
    const [transformation, setTransformation] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseEnter = (index: number) => {
        const current = hoveredLinkIdx;
        if(current < menuitems.length) setPrevItemIdx(current);
        if(!transformation) { 
            setHoveredLinkIdx(index);
            setHovered(true);
        }
    }

    const handleMouseLeave = () => {
        if(!transformation) {
            setPrevItemIdx(currentChapter);
            setHoveredLinkIdx(currentChapter+1 % menuitems.length-1);
            setHovered(false);
        }
    }

    const handleClick = (path: string) => {
        setTransformation(true);
        setTimeout(()=>{
            navigate(path);
        }, transitionDuration);
    }

    useEffect(() => {
        if(inView) {
            window.scrollTo({
                top: (containerRef?.current?.getBoundingClientRect().y || 0) + window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [inView]);

    useEffect(() => {
        setPrevItemIdx(0);
        const currentIdx = (currentChapter < menuitems.length-1) ? currentChapter : Infinity;
        setHoveredLinkIdx(currentIdx);
    }, [currentChapter]);
        

    return (<>
        <div 
            ref={ref} 
            className={transformation ? `chapternavigation transform` : `chapternavigation`}>
            <div 
                className="chapternavigation-image-container" >
                { menuitems.map((item, index) => (
                    <div 
                        key={index}
                        id={item.id}
                        className={
                            hoveredLinkIdx === index || (hoveredLinkIdx >= menuitems.length && index===0) ? 'image next' : 
                            prevItemIdx===index ? 'image prev' : 
                            'image'
                        }
                        style={{
                            backgroundImage: `url(${item.image})`,
                            left: 
                                hoveredLinkIdx >= menuitems.length ? `0%` :
                                hoveredLinkIdx!==index && hoveredLinkIdx < index ? `100%` :
                                hoveredLinkIdx!==index && hoveredLinkIdx > index ? `-100%` :
                                `0%`,
                            zIndex: 
                                hoveredLinkIdx >= menuitems.length && index===0 ? 2 :
                                hoveredLinkIdx===index ? 1 : 0,
                        }}
                    />
                ))}
            </div>
            <div 
                ref={containerRef} 
                className="chapternavigation-link-container">
                <div/>
                <div>
                    <ul>
                        { menuitems.map((item, index) => (
                            <li 
                                key={index} 
                                onMouseEnter={
                                    () => handleMouseEnter(index) 
                                }
                                onMouseLeave={
                                    handleMouseLeave 
                                }
                                className={ 
                                    (hoveredLinkIdx === index) ? 'next' : 
                                    chaptersCompleted.includes(index+1) ? 'completed' : ''
                                }
                                style={{
                                    height: `max(3vw, 1.2em)`
                                }}>
                                <button 
                                    onClick={ 
                                        currentChapter !== index+1 ? 
                                        () => handleClick(item.path) : 
                                        ()=>{}
                                    }
                                    style={{
                                        fontSize: 
                                        hovered ? 
                                            `max(${2 + Math.pow((1-(Math.abs(hoveredLinkIdx-index))/(menuitems.length-1)),3)}vw, 0.8em)` : 
                                            `max(2vw, 0.8em)`,
                                            pointerEvents: transformation ? 'none' : 'auto',
                                    }}>
                                        <span>{item.label}</span>
                                        {chaptersCompleted.includes(index+1) && <span className="completed-icon">✓</span>}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>)
}