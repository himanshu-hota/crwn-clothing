import React from 'react';
import './homepage.styles.scss' ;
import {Link} from 'react-router-dom';
import Directory from '../directory/directory'


const Homepage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Link to='/topics' >Topics</Link>
            <div className="directory-menu">

            <Directory />    
        
            </div>
        </div>
    )
}


export default Homepage;