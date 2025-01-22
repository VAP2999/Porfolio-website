import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0); // Tracks which word to type
  const [typingSpeed, setTypingSpeed] = useState(100); // Faster Typing Speed
  const [deletingSpeed, setDeletingSpeed] = useState(50); // Faster Deleting Speed

  const words = ['Software Engineer']; // Words to type

  useEffect(() => {
    const currentWord = words[loop % words.length]; // Cycle through words
    const typeEffect = () => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause before deleting (longer delay when the word is typed fully)
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setLoop(loop + 1); // Move to next word
          setTypingSpeed(700); // Reset speed for typing
        }
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer); // Cleanup timeout
  }, [text, isDeleting, typingSpeed, loop, words, deletingSpeed]);

  return (
    <section id="home" className="home-section">
      <h1>Hi, I'm</h1>
      <h2>
        Vanshi <span className="highlight">Ashishbhai</span> Patel.
      </h2>
      <p className="tagline">{text}</p>
    </section>
  );
};

export default Home;
