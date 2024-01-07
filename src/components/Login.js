import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import NotesContext from "../context/Notes/NotesContext";
export default function Login(props) {
  const Notes = useContext(NotesContext);
  const { changeeapi } = Notes;
  const navigate = useNavigate(); // Corrected spelling

  const [data, setData] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);

  const submitchanges = async () => {
    const response = await fetch(`http://localhost:5000/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const json = await response.json();
    setShow(json.success);
    if (json.success) {
      props.change("Logged in SuccesFully","success")
      changeeapi(json.authToken);
      navigate('/'); // Use navigate function to redirect
    }
    else{
      props.change("Invalid Crediential","Danger")
    }
  };

  const passwordChange = (event) => {
    setData({
      email: data.email,
      password: event.target.value,
    });
  };

  const emailChange = (event) => {
    setData({
      email: event.target.value,
      password: data.password,
    });
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={data.email}
          onChange={emailChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={data.password}
          onChange={passwordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitchanges}>
        Submit
      </button>
      {show && <h3>Welcome</h3>}
    </div>
  );
}
