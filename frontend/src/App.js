import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import ReadStudents from './components/ReadStudents';
import UpdateStudent from './components/UpdateStudent';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <div> 
        <Header/>
        <Routes>
          <Route path="/add" element = {<AddStudent/>}/>
          <Route path="/update" element = {<UpdateStudent/>}/>
          <Route path="/" element = {<ReadStudents/>}/>
        </Routes>
        
      </div>
    </Router>    
    
  );
}

export default App;
