import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'

function App() {
  const dispatch=useDispatch()
  const data=useSelector(state => state)
  const handleClick=()=>{
    dispatch({type:"Increament"})
  }
  const handleClick_dec=()=>{
    dispatch({type:"Decreament"})

  }
  return (
    <div className="App">
      <button onClick={handleClick}>Increament</button>
      <button onClick={handleClick_dec}>Deccreament</button>

    <h2> {JSON.stringify(data)}</h2>
    </div>
  );
}

export default App;
