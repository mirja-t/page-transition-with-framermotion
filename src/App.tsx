import { useState } from 'react'
import { AnimatedRoutes } from './components/animatedRoutes/AnimatedRoutes';
import { HashRouter } from 'react-router-dom';

function App() {

  const [chaptersCompleted, setChaptersCompleted] = useState<number[]>([]);
  const addCompletedChapter = (num: number) => {
    const chaptersDone = chaptersCompleted;
    if(!chaptersDone.includes(num)) {
      setChaptersCompleted( [...chaptersDone, num] );
    }
  }

  return (
    <HashRouter>
      <AnimatedRoutes
        chaptersCompleted={chaptersCompleted} 
        addCompletedChapter={addCompletedChapter} 
        currentChapter={0}/>
    </HashRouter>
  )
}

export default App
