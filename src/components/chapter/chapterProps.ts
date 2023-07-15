export interface ChapterProps {
    chaptersCompleted: number[] 
    addCompletedChapter: (num: number) => void 
    unlockMenu?: () => void
    currentChapter: number
}