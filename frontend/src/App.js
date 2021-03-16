import './App.css';
import Tasks from './components/Tasks';
import AddBar from './components/addBar';
import { useState } from 'react';

function App() {
  const [notes, setnotes] = useState([]);

  
  return (
   <div className="container">
      <AddBar notes={notes} setnotes={setnotes}/>
      <Tasks notes={notes} setnotes={setnotes}/>
   </div>
  );
}

export default App;
