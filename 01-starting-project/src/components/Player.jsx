import { useState, useRef } from 'react';



export default function Player() {
  const playerNmae = useRef();

  const [enterplayerNmae, setEnterPlayerName] = useState(null);

  function handclick() {
    setEnterPlayerName(playerNmae.current.value);
    playerNmae.current.value = ' ';
  }

  return (
    <section id="player">
      <h2>Welcome {enterplayerNmae ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNmae}
          type="text" />
        <button onClick={handclick}> Set Name</button>
      </p>
    </section>
  );
}
