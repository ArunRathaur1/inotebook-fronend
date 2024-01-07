import React from "react";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import NotesContext from "../context/Notes/NotesContext";
import { Link } from "react-router-dom";
function NevBar(){
  const Notes = useContext(NotesContext);
  const { changeeapi ,api} = Notes;
  function handlecontrol(){
    changeeapi('');
  }
    return(
        <>
        <div className="fullbox">
        <nav className="navbar navbar-expand-lg bg-body-tertiary hello">
  <div className="container-fluid" style={{backgroundColor:"#232323"}}>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page"><Link to="/" className="nevbutton">Home</Link></p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" ><Link to="/textanalier" className="nevbutton">Text Anyliser</Link></p>
        </li>
        <li className="nav-item">
          <p className="nav-link active"><Link to="/about" className="nevbutton">About</Link></p>
        </li>
      </ul>
      <form className="d-flex" role="search">
      {(api==='')?
      <div>
        <Link to="/signin"><button className="nev1button" type="submit">SigIn</button></Link>
        <Link to="/login"><button className="nev1button " type="submit">Login</button></Link></div>
        :
        <Link to="/login"><button className="nev1button" type="submit" onClick={handlecontrol}>Log Out</button></Link>
      }
      </form>
    </div>
  </div>
</nav>
</div>
        </>
    )
}
export default NevBar;