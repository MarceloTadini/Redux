import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [inputTask, setInputTask] = useState()

  const tasks = useSelector(state => state.data)
  const dispatch = useDispatch()

  function handleInput(event){
    setInputTask(event.target.value)
  }

  function handleSubmit(){
    dispatch({
      type: 'ADD_TASK',
      payload: inputTask,
    })
  }

  function handleRemove(task){
    dispatch({
      type: 'REMOVE_TASK',
      payload: task
    })
  }

  return (
    <>
      <ul>
        {
          tasks.map(task => <li key={task}>{task} <button onClick={handleRemove(task)}>Remover</button></li>)
        }
      </ul>
      <input type="text" onChange={handleInput} />
      <button onClick={handleSubmit}>Inserir</button>
    </>

  );
}

export default App;
