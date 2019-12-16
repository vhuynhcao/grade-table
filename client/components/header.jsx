import React from 'react';

function Header(props) {
  return (
    <div className="d-flex justify-content-between alight-items-center">
      <h1 className="sgtTitle">{ props.text}</h1>
      <h2 className="avgGrade">Average Grade: <span className="badge badge-secondary">{props.average}</span></h2>
    </div>
  );
}

export default Header;
