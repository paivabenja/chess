import { useState, useEffect } from 'react';
import { Circle } from './Circle';
import '../styles/Piece.css';

const Piece = ({ thisPiece, color }) => {
  switch (thisPiece) {
    case 'empty':
      return;
    case 'circle':
      return <Circle></Circle>;
    default:
      return (
        <>
          {thisPiece} <br /> {color}
        </>
      );
  }
};

export { Piece };
