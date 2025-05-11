import React, { use, useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props){
  let [search ,setSearch]=useState("")
  function postSearch(e){
    e.preventDefault();
   props.changeSearch(search)
 setSearch("")
  }
  
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary background">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/" onClick={()=>props.changeSearch("")}>NewsApp</NavLink>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-symbols-outlined text-light border-light">menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item"><NavLink className="nav-link text-light" to="/All"  onClick={()=>props.changeSearch("")}>All</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Politices"  onClick={()=>props.changeSearch("")}>Politices</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Crime"  onClick={()=>props.changeSearch("")}>Crime</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Science"  onClick={()=>props.changeSearch("")}>Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Technology"  onClick={()=>props.changeSearch("")}>Technology</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Entertainment"  onClick={()=>props.changeSearch("")}>Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Sports"  onClick={()=>props.changeSearch("")}>Sports</NavLink></li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link text-light dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Other
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/Cricket">Cricket</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/IPL">IPL</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Economics">Economics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/International">International</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/India">India</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Jokes">Jokes</NavLink></li>
                  
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link text-light dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
                </NavLink>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={()=>props.changeLanguage("hi")} >Hindi</button></li>
                  <li><button className="dropdown-item" onClick={()=>props.changeLanguage("en")} >English</button></li>               
                </ul>
              </li>
              
            </ul>
            <form className="d-flex" role="search" onSubmit={(e)=>postSearch(e)}>
              <input className="form-control me-2" type="search" name='search' placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  
}
