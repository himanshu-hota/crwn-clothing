import React from 'react';
import './homepage.styles.scss' ;
import Directory from '../directory/directory'

const Homepage = () => {
    return (
        <div className="homepage">

            <div className="directory-menu">

            <Directory />    
        
            </div>
        </div>
    )
}


export default Homepage;