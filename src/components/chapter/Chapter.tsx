import { ChapterProps } from "./chapterProps";
import './chapter.scss';
import { menu } from "../../utils/menuitems";
import { Page } from "../page/Page";
import { useEffect } from "react";

export const Chapter = (props: ChapterProps) => {
    
    useEffect(() => {
        props.addCompletedChapter(props.currentChapter);
    }, [props]);

    return (
        <Page
            id={`chapter-${props.currentChapter}`} 
            type="instant" 
            chaptersCompleted={props.chaptersCompleted}
            currentChapter={props.currentChapter}>
            <header 
                style={{
                    backgroundImage: `url(${menu.getItemByChapternumber(props.currentChapter).image})`
                }}>
                <div className="chapter-label">
                    <h1>{menu.getItemByChapternumber(props.currentChapter).label}</h1>
                </div>
            </header>
        </Page>)
}