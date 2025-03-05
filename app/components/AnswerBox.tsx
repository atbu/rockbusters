"use client"

import React from 'react';
import type { RockbusterWithEpisode } from 'types/types';

export interface Props {
  rockbuster: RockbusterWithEpisode
}

const AnswerBox: React.FC<Props> = (props) => {
  function keyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key == 'Enter') {
      const target = e.target as HTMLInputElement;
      const match = props.rockbuster.answer.toLowerCase() == target.value.toLowerCase();
      if (match) {
        target.disabled = true;
        document.getElementById('shownOnCorrect')?.classList.remove('hidden');
      }
    }
  }

  function nextButtonClicked() {
    window.location.reload();
  }

  return (
    <>
      <p>{props.rockbuster.clue} ({props.rockbuster.initials.toString()})</p>
      <input type="text" placeholder="Type answer here" className="input" onKeyUp={keyUp} />
      <div className="hidden" id="shownOnCorrect">
        <button className="btn btn-success" onClick={nextButtonClicked}>Next</button>
        <br />
        <p>Correct!</p>
        <p>This Rockbuster was featured on {new Date(props.rockbuster.episode.release_date).toLocaleDateString('en-GB')}.</p>
        <p>The episode was won by {props.rockbuster.episode.winner}, who won {props.rockbuster.episode.prize}.</p>
      </div>
    </>
  )
}

export default AnswerBox;