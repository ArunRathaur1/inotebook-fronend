import React from 'react'
import { useContext } from 'react'
import NotesContext from "../context/Notes/NotesContext";
export default function Notesitem(props) {
  const Notes = useContext(NotesContext);
  const{deletenote}=Notes;
  const deleting=()=>{
    deletenote(props.id);
    props.change("Note is Deleted Succes Fully","success")
  }
  return (
    <div  style={{width:"5cm", margin:"20px"}} >
        <div className="card">
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <i className="fa-solid fa-trash mx-2" style={{cursor:"pointer"}}onClick={deleting}></i>
        <i className="fa-solid fa-pen-to-square mx-3"style={{cursor:"pointer"}} onClick={()=>{props.updatenote(props.id,props.description,props.title)}}></i>
        </div>
        </div>
    </div>
  )
}
