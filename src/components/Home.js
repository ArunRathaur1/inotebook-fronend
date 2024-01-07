import React from 'react'
import Notes from './Notes';
import AddNotes from './AddNotes';
export default function Home(props) {
  return (
    <>
        <AddNotes change={props.change}></AddNotes>
         <h2 style={{marginLeft:"30px"}}>Your Notes</h2>
         <Notes change={props.change}></Notes>
         </>
  );
}
