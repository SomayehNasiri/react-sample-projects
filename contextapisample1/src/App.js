import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';
import Child from './Child';

function App() {
  return (
    <UserContext.Provider value={"This is data from Parent"}>
   
      

        <Child></Child>
    </UserContext.Provider>
  );
}

export default App;
