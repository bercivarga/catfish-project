import { useState } from 'react';
import './styles.css';

export default function ProfileCreator() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState('');

  // TODO: Make sure that users are referred to the /explore page if there's already an account logged in

  function handleSubmit(event) {
    event.preventDefault();

    if (!checkFormValidity()) {
      console.error('Form is not filled out correctly')
      return
    }
  }

  function checkFormValidity() {
    return name && description && hobbies && age && picture
  }

  async function getRandomCat() {
    try {
      const res = await fetch('https://cataas.com/cat?json=true');
      const data = await res.json();
      setPicture('https://cataas.com/' + data.url);
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className='profile-creator'>
      <form onSubmit={handleSubmit}>
        <h2>Welcome to PURRMANCE!</h2>
        <div className='field-wrapper'>
          <label>Your name</label>
          <input type={'text'} required value={''} onChange={(e) => console.log(e)} />
        </div>
        <div className='field-wrapper'>
          <label>Describe yourself</label>
          <textarea value={''} required onChange={(e) => console.log(e)} />
        </div>
        <div className='field-wrapper'>
          <label>Your hobbies</label>
          <input type={'text'} value={''} required onChange={(e) => console.log(e)} />
        </div>
        <div className='field-wrapper'>
          <label>When were you born?</label>
          <input type={'date'} value={''} required onChange={(e) => console.log(e)} />
        </div>
        <div className='field-wrapper'>
          <label>Choose your profile picture!</label>
          <button type='button' className='randomize-button' onClick={() => console.log('a cat?')}>Randomize</button>
        </div>
        <button type='submit' className='submit-button'>Submit</button>
      </form>

      <div className='profile-image-wrapper'>
        {!picture && <h3>Who'll you be? 😺</h3>}
        {picture && <img src={picture} alt="your-profile-pic" />}
      </div>
    </div>
  )
}