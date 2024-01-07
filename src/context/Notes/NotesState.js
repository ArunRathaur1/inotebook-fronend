import React, { useState } from "react";
import NotesContext from './NotesContext';
const NotesP = (props) => {
  const[api,changeapi]=useState("");
  const host="http://localhost:5000";
  const notestinital=[]
  const [notes, updatenotes] = useState(notestinital);
  const fetchnotes =async()=>{
    console.log({api:api});
    const response = await fetch(`${host}/notes/getnotes`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization":api
      },
    });
    const json=await response.json();
    updatenotes(json);
  }
 async function changeeapi(api){
     changeapi(api);
    console.log(api);
    fetchnotes();
  }
 async function addNote(title,description){

    const response = await fetch(`${host}/notes/postnotes`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization":api
      },
      body: JSON.stringify({title,description}),
    });
    fetchnotes();
  }
  async function deletenote(id) {
      const response = await fetch(`${host}/notes/deletenote/${id}`, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Authorization":api
        },
      });
    console.log(id);
    fetchnotes();
    // const updatedNotes = notes.filter(note => note._id !== id);
    // updatenotes(updatedNotes);
}
async function editNote(title,description,id){
  const response = await fetch(`${host}/notes/updatenote/${id}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization":api
    },body: JSON.stringify({title,description}),
  });
  fetchnotes();
}
  return (
    <NotesContext.Provider value={{notes,updatenotes,addNote,deletenote,fetchnotes,editNote,changeeapi,api}}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesP;
