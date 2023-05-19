import React from 'react';
import '../styles/LoadingSPChildren.css'

export function LoadingSPChildren() {
  return (
    <div className='LoadingSPChildren-container'>
      <span className='LoadingSPChildren-image'></span>
      <div className='LoadingSPChildren-content'>
        <span className='LoadingSPChildren-title-song'></span>
        <span className='LoadingSPChildren-artist-song'></span>
      </div>
    </div>
  );
}
