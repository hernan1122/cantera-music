import React from 'react';
import '../styles/LoadingChildren.css'

export function LoadingChildren() {
  return (
    <div className='LoadingChildren-container'>
      <span className='LoadingChildren-image'></span>
      <div className='LoadingChildren-content'>
        <span className='LoadingChildren-title-song'></span>
        <span className='LoadingChildren-artist-song'></span>
      </div>
    </div>
  );
}
