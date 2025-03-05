"use client"

import React, { useEffect } from 'react';
import type { Rockbuster } from '@prisma/client';

const AnswerBox = ({ rockbuster }: { rockbuster: Rockbuster }) => {
  function keyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const match = rockbuster.answer.toLowerCase() == target.value.toLowerCase();
    if (match) {
      target.classList.add('input-success');
    } else {
      target.classList.remove('input-success');
    }
  }

  return (
    <>
      <p>{rockbuster.clue}</p>
      <input type="text" placeholder="Type answer here" className="input" onKeyUp={keyUp} />
    </>
  )
}

export default AnswerBox;