import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsCounter</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/technology">Technology</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button type="button" onClick={props.toggleStyle} className="btn btn-outline-info me-2">{props.btnicon}</button>
              <input className="form-control me-2" onChange={handleChange} type="search" value={searchTerm} placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" onClick={props.onSearch} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar;