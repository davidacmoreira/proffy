import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Available Teachers">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Day of Week</label>
            <input id="week_day" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hour</label>
            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>
    </div>
  )
}

export default TeacherList;
