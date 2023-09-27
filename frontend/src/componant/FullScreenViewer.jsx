import React from 'react'
import styled from 'styled-components'

export const FullScreenViewer = ({imageUrl, onClose}) => {
  return (
    <DIV className="full-screen-viewer" onClick={onClose}>
    <img src={imageUrl} alt="Full Screen" />
  </DIV>
    
  )
}


const DIV = styled.div`

/* FullScreenViewer.css */

.full-screen-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-screen-viewer img {
  width: 100%;
  max-height: 100%;
  /* object-fit: contain; */
  object-fit: cover;
}
    
`