import React, { useContext, useState } from "react";
import NotesContext from "../context/Notes/NotesContext";

export default function AddNotes(props) {
    const Notes = useContext(NotesContext);
    const { addNote } = Notes;
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addnote = () => {
        if(title!=="" &&description!==""){
            addNote(title,description);
            setTitle("");
            setDescription("");
            props.change("Note is Added Succes Fully","success")
        }
       
    }

    const onChnageTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChnageDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            <div style={{ width: "50%", margin: "auto" }}>
                <h3>Add A Note</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={onChnageTitle} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={description} onChange={onChnageDescription} />
                        <button type="button" className="btn btn-primary my-3" onClick={addnote}>Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
