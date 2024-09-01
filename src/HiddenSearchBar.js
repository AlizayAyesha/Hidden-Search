import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = (e) => {
    // Close input if clicked outside the input element
    if (e.target.className === 'container') {
      setShowInput(false);
      setBgColor('white');
    }
  };

  return (
    <>
      <section
        className='container'
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        {showInput ? (
          <input
            type='text'
            placeholder='Search...'
            onFocus={() => setBgColor('#1a1a1a')} // Change background color when input is focused
          />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </section>
      <p>hi</p>
    </>
  );
}

export default HiddenSearchBar;
