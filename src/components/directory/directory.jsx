import React, { useState } from 'react';
import MenuItem from '../menuItem/MenuItem'
import './directory.styles.scss';
import Sections from './directory.data'
const Directory = () => {

    const [section] = useState(Sections);

    return (
            <div className='directory-menu'>
            {
                section.map(({title,imageUrl,id,size}) => {
                   return <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} /> 
                })
            }
            </div>
    )
}

export default Directory;
