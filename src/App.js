// eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';
import Image from './img/people.svg'

function App() {
  const [comment, setComment] = React.useState();
  const [allcomments, setallcomments] = React.useState([]);

  function textarea(eventtextarea) {
    setComment(eventtextarea.target.value);
  }

  function clickbutton() {
    const lastcomments = [...allcomments, comment];
    setallcomments(lastcomments);
  }


  return (
    <div>
      <img src={Image} alt="imagem-pessoas" />
      <textarea placeholder="Comment here !" onChange={textarea}></textarea>
      <button onClick={clickbutton}>Comment</button>

      <ul>
        {allcomments.map((comments) => (
          <li key={comments} >{comments}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
