import './App.css';
import Child1 from './Child1';

function App() {
 
 
  return (
    <div className="App">
      <Child1 data={"This is data from Parent"} param={"another param test"}></Child1>
      
    </div>
  );
}

export default App;
