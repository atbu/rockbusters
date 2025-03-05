"use client"

import React from 'react';
import type { RockbusterWithEpisode } from 'types/types';

interface Props {
  rockbuster: RockbusterWithEpisode
}

const AnswerBox = ({rockbuster}: Props) => {
  function keyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key == 'Enter') {
      const target = e.target as HTMLInputElement;
      const match = rockbuster.answer.toLowerCase() == target.value.toLowerCase();
      if (match) {
        target.disabled = true;
        document.getElementById('skip').classList.add('hidden');
        document.getElementById('shownOnCorrect')?.classList.remove('hidden');
      }
    }
  }

  function nextOrSkipButtonClicked() {
    window.location.reload();
  }

  return (
    <>
      <p>{rockbuster.clue} ({rockbuster.initials.toString()})</p>
      <input type="text" placeholder="Type answer here" className="input" onKeyUp={keyUp} />
      <button className="btn" onClick={nextOrSkipButtonClicked} id="skip">Skip</button>
      <div className="hidden" id="shownOnCorrect">
        <button className="btn btn-success" onClick={nextOrSkipButtonClicked}>Next</button>
        <br />
        <p>Correct!</p>
        <p>This Rockbuster was featured on S{rockbuster.episode.series}E{rockbuster.episode.episode} ({new Date(rockbuster.episode.release_date).toLocaleDateString('en-GB')}).</p>
        <p>The episode was won by {rockbuster.episode.winner}, who won {rockbuster.episode.prize}.</p>
      </div>
    </>
  )
}

export default AnswerBox;