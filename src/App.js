import './App.css';
import {useEffect, useState} from 'react';
import Board from './/components/Board/Board';
const emojiList = [...'💣🤖🎩🌮🎱🌶🍕🦖'];

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlocks, setSelectedMemoBlocks] = useState([null]);
  const [animating , setAnimating] = useState(false);
  useEffect(() => {
    const shufledEmojilist = shuffleArray([...emojiList,...emojiList]);
    setShuffledMemoBlocks(shufledEmojilist.map((emoji, i) => ({index:i, emoji, flipped:false}) ));
  }, []);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  
  return a;
  }

  const handleMemoClick = memoblock => {
  
    

  }

  return (
    <Board memoBlocks = {shuffledMemoBlocks}/>
  );

}

export default App;
