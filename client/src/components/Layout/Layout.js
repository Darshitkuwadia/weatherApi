import React from 'react';
import './Layout.css';

function Layout(props) {
  const {
    title,
    subTitle,
    children,
  } = props

  return (
    <div className="layout">
      <div className="header">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default Layout