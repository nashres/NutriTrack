import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function Nav() {

    const [toggle, setToggle] = useState(false)
    const menuToggle=() => {
        setToggle((toggle===false)?true:false);
    }
    
    return (
        <>
            <ul className={toggle?"toggle":""}>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/analysis">Analysis</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/login">Sign In </Link></li>
                <li className="close" onClick={menuToggle}><CancelIcon /> </li>
            </ul>
            <div className="menu" onClick={menuToggle}><MenuIcon/>
            </div>
        </>
    )
}
