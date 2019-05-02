import React from 'react';
import Loader from './Loader';

function PageLoading() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%'
  }
  return (
    <div style={style}>
      <Loader/>
    </div>
  );
}

export default PageLoading;