import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import NotesContext from '../context/Notes/NotesContext';
import Notesitem from './Notesitem';
import { useNavigate } from 'react-router-dom';
export default function Notes(props) {
  const navigate=useNavigate();
  const[etitle,chnagetitle]=useState("");
  const[edescription,changedescription]=useState("");
  const[eid,chnageeid]=useState("");
  const contextValue = useContext(NotesContext);
  const { notes, fetchnotes, editNote,api } = contextValue;
  useEffect(() => {
    if(api===''){
      navigate('/login')
    }else{
      fetchnotes();
    }
      
    
    
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);

  const updatenote = (id,description,title) => {
    ref.current.click();
    chnageeid(id);
    changedescription(description);
    chnagetitle(title);
    
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const chnageetitle=(event)=>{
      chnagetitle(event.target.value);
  }
  const changeedescription=(event)=>{
    changedescription(event.target.value);
}
const savingchnages=()=>{
  editNote(etitle,edescription,eid);
  props.change("Note is Edited Succesfully","success")
}
  return (
    <>
      <button type="button" ref={ref} onClick={openModal} style={{width:"0px",height:"0px",border:"none"}}>
      </button>

      {isModalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div>
            <div style={{ width: "50%", margin: "auto" }}>
                <h3>Add A Note</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" onChange={chnageetitle} value={etitle} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" onChange={changeedescription} value={edescription} />
                    </div>
                </form>
            </div>
        </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={savingchnages}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.isArray(notes)&& notes.map((note) => {
          return <Notesitem key={note._id} title={note.title} description={note.description} id={note._id} updatenote={updatenote} change={props.change}/>;
        })}
      </div>
    </>
  );
}
