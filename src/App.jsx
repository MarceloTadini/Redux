import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector(state => state.data)
  return (
    <ul>
      {
        tasks.map(task => <li>{task}</li>)
      }
    </ul>
  );
}

export default App;
