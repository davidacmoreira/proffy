import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''}

  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''}

    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Amazing that you want to teach leasons"
        description="Start be fill this form"
      />

      <main>
        <fieldset>
          <legend>Personal Info</legend>

          <Input name="name" label="Name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>
        
        <fieldset>
          <legend>About Class</legend>

          <Select
            name="subject"
            label="Subject"
            options={[
              { value: 'Science', label: 'Science' },
              { value: 'English', label: 'English' },
              { value: 'Math', label: 'Math' }
            ]}
          />
          <Input name="cost" label="Cost" />
        </fieldset>

        <fieldset>
          <legend>
            Available Hours
            <button type="button" onClick={addNewScheduleItem}>
              + New Hour
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Week Day"
                  options={[
                    { value: '0', label: 'Sunday' },
                    { value: '1', label: 'Monday' },
                    { value: '2', label: 'Tuesday' },
                    { value: '3', label: 'Wednesday' },
                    { value: '4', label: 'Thrusday' },
                    { value: '5', label: 'Friday' },
                    { value: '6', label: 'Saturday' }
                  ]}
                />
                <Input type="time" name="from" label="From" />
                <Input type="time" name="to" label="To" />
              </div>
            );
          })}
                
        </fieldset>
        
        <footer>
          <p>
            <img src={warningIcon} alt="Warning" />
            Important <br />
            All fields required
          </p>

          <button type="button">
            Send
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
