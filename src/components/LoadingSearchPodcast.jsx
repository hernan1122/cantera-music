import React from 'react';
import { LoadingSPChildren } from './LoadingSPChildren';
import '../styles/LoadingSearchPodcast.css'

export function LoadingSearchPodcast() {
  return (
    <div className='LoadingSearchPodcast'>
      <LoadingSPChildren />
      <LoadingSPChildren />
      <LoadingSPChildren />
      <LoadingSPChildren />
      <LoadingSPChildren />
    </div>
  );
}
