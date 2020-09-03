import React,{useState} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const [search, setSearch] = useState(false)

    const  searchHandler=(e)=>{
        e.preventDefault();
        console.log("Searched");
    }

    const openSearch=()=>{
        setSearch(true);
    }

    const classes=['searchInput'];
    if(search){
        classes.push('active');
    }
    return (
        <div className="Navbar">
           <ul className="NavbarMenu">
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/about-us">About us</NavLink></li>
               <li><NavLink to="/post">Post</NavLink></li>
               <li><NavLink to="/contact-us">Contact Us</NavLink></li>
           </ul>
           <div className="Search">
               <form onSubmit={searchHandler}>
                    <input type="text" placeholder="Search" className={classes.join(' ')}/>
                    <img onClick={openSearch} src={require('../../assests/icons/search.png')} alt="Search"  className="searchIcon"/>
               </form>
              
           </div>
        </div>
    )
}

export default Navbar;
