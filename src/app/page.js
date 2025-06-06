'use client';

import React, { useState } from 'react';

export default function ColorScreen() {
  const colors = ['#f472b6', '#fde047', '#60a5fa', '#4ade80', '#c084fc', '#6366f1'];
  const [bgColor, setBgColor] = useState('#000');

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: bgColor,
        position: 'fixed',
        top: 0,
        left: 0,
        cursor: 'pointer',
        transition: 'background-color 0.5s ease',
      }}
    />
  );
}
