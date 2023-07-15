import { ChapterProps } from './chapter/chapterProps';
import { Page } from './page/Page';

export const Intro = (props: ChapterProps) => {

    return (
        <Page
            id={`intro`} 
            type="instant" 
            chaptersCompleted={props.chaptersCompleted}
            currentChapter={0}>
        </Page>)
}