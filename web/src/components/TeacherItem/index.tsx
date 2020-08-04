import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/64630240?s=460&u=2a159f04d3188f066078b9a439ccdb9d8dc09703&v=4" alt="Name" />
        <div>
          <strong>Name</strong>
          <span>Class</span>
        </div>
      </header>

      <p>
        Description
        <br />
        Teacher
        <br />
      </p>

      <footer>
        <p>
          Price/Hour
          <strong>100</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contact Teacher" />
          Contact Teacher
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
