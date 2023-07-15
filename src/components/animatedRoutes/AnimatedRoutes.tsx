import { Route, Routes, useLocation } from "react-router-dom";
import { ChapterProps } from "../chapter/chapterProps";
import { Chapter } from "../chapter/Chapter";
import { menu } from "../../utils/menuitems";
import { Intro } from "../Intro";


export function AnimatedRoutes(props: ChapterProps) {
    const location = useLocation();
    
    const chapterProps: {
        chaptersCompleted: number[];
        addCompletedChapter: (chapter: number) => void;
    } = {
        chaptersCompleted: props.chaptersCompleted, 
        addCompletedChapter: props.addCompletedChapter,
    }
    
    return (
       
            <Routes location={location} key={location.pathname}>
                <Route 
                    key={0} 
                    path={`/`}
                    element={<Intro {...chapterProps} currentChapter={0} />} />
                { menu.menuitems.map((item, index) => (
                    <Route 
                        key={index+1} 
                        path={item.path}
                        element={<Chapter 
                            {...chapterProps} 
                            currentChapter={index+1} />} />
                ))}
            </Routes>)
}