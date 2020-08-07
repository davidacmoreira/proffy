import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''}

  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''}

    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Ok');
      history.push('/');
    }).catch(() => {
      alert('Error');
    });

    console.log({name, avatar, bio, whatsapp, cost, subject, scheduleItems});
  }

  function setScheduleItemValue(position: Number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Amazing that you want to teach leasons"
        description="Start be fill this form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Personal Info</legend>

            <Input
              name="name"
              label="Name"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {setAvatar(e.target.value)}}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />
            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => {setBio(e.target.value)}}
            />
          </fieldset>
          
          <fieldset>
            <legend>About Class</legend>

            <Select
              name="subject"
              label="Subject"
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
              options={[
                { value: 'Science', label: 'Science' },
                { value: 'English', label: 'English' },
                { value: 'Math', label: 'Math' }
              ]}
            />
            <Input
              name="cost"
              label="Cost"
              value={cost}
              onChange={(e) => {setCost(e.target.value)}}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available Hours
              <button type="button" onClick={addNewScheduleItem}>
                + New Hour
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Week Day"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                  <Input
                    type="time"
                    name="from"
                    label="From"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    type="time"
                    name="to"
                    label="To"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
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

            <button type="submit">
              Send
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;
