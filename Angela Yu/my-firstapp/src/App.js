import { useState } from "react";



function App() {

  let [counter, setCounter] = useState(0);


  const addValue = () => {

    if (counter < 20) {
      setCounter(counter + 1);
    }

  }
  const removeValue = () => {

    if (counter > 0) {
      setCounter(counter - 1);
    }

  }
  return (
    <>
      <h1>counter:{counter}</h1>
      <button onClick={addValue}>Add counter </button>
      <button onClick={removeValue}>remove counter</button>


    </>

  );
}

export default App;
