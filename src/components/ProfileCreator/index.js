import { useState } from 'react'
import useAppContext from '../../context'
import './styles.css'

export default function ProfileCreator() {
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [hobbies, setHobbies] = useState()
  const [age, setAge] = useState()
  const [picture, setPicture] = useState()

  const { setUserState } = useAppContext();

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name,
      description,
      hobbies,
      age,
      picture
    }

    setUserState(user);
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
          <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>Describe yourself</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>Your hobbies</label>
          <input type={'text'} value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
        </div>
        <div className='field-wrapper'>
          <label>When were you born?</label>
          <input type={'date'} value={age} onChange={(e) => setAge(e.target.value)} />
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