import React from 'react';
import { LoadingChildren } from './LoadingChildren';
import '../styles/LoadingDataFile.css'

export function LoadingDataFile() {
  return (
    <div className='LoadingDataFile'>
      <LoadingChildren />
      <LoadingChildren />
      <LoadingChildren />
      <LoadingChildren />
      <LoadingChildren />
    </div>
  );
}
