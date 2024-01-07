import './App.css';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import NevBar from './components/NevBar';
import About from './components/About';
import Home from './components/Home';
import NotesP from './context/Notes/NotesState';
import Alert from './components/Alert';
import Login from './components/Login';
import {  useState } from 'react';
import Signin from './components/Signin';
function App() {
  const [data,changemessage]=useState({message:"success",type:"success"});
  function change(message,type){
    changemessage({
      message:message,
      type:type
    })
  }
  setTimeout(() => {
    changemessage({
      message:"",
      type:data.type
    })
  }, 2000);
  return (
    <>
    <NotesP>
    <BrowserRouter>
    <NevBar></NevBar>
    {(data.message!=="")&&<Alert message={data.message} type={data.type}></Alert>}
    <Routes>
      <Route path='/' element={<Home change={change}></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login change={change}></Login>}></Route>
      <Route path="/signin" element={<Signin change={change}></Signin>}></Route>
    </Routes>
    </BrowserRouter>
    </NotesP>
    </>
  );
}

export default App;
