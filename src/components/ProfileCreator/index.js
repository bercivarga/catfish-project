import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../../context';
import './styles.css';

export default function ProfileCreator() {
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [hobbies, setHobbies] = useState()
  const [age, setAge] = useState()
  const [picture, setPicture] = useState()

  const { setUserState } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("catuserdata");
    
    if (!user) {
      return
    }

    const toObj = JSON.parse(user);
    setUserState(toObj);
    navigate('/explore');
  }, [navigate, setUserState])

  function handleSubmit(event) {
    event.preventDefault();

    if (!checkFormValidity()) {
      console.error('Form is not filled out correctly')
      return
    }

    const user = {
      name,
      description,
      hobbies,
      age,
      picture
    }

    setUserState(user);
    localStorage.setItem("catuserdata", JSON.stringify(user));
    navigate('/explore');
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
          <input type={'text'} required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>Describe yourself</label>
          <textarea value={description} required onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>Your hobbies</label>
          <input type={'text'} value={hobbies} required onChange={(e) => setHobbies(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>When were you born?</label>
          <input type={'date'} value={age} required onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>Choose your profile picture!</label>
          <button type='button' className='randomize-button' onClick={getRandomCat}>Randomize</button>
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