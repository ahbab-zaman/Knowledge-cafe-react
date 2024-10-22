import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [reading, setReadingTime] = useState(0);
  // bookmark button control, when clicking it it will add a description form the card and show it in the bookmark section
  const handleBookmark = (card) =>{
    const newBookMarks = [...bookmarks, card]
    setBookmarks(newBookMarks)
  }
  const handleReadingTime = time => {
    setReadingTime(reading + time);
  }

  return (
    <div className='w-11/12 mx-auto py-4 '>
     {/* header section */}
     <Header></Header>
     <div className="border-b-2 py-2"></div>
    <div className='flex gap-4'>
       {/* cards section */}
     <Cards handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Cards>
     {/* sidebar section */}
     <Bookmarks reading={reading} bookmarks={bookmarks}></Bookmarks>
    </div>
    </div>
  )
}

export default App
