import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content' onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );

export default withRouter(MenuItem) ;