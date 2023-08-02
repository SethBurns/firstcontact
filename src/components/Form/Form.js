import { useState } from 'react'
import './Form.css'
import { postSighting } from '../../apiCalls'

export const Form = ({setSightings, sightings}) => {

  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const submitSighting = (e) => {
    e.preventDefault();
    let sighting = {
      location: location,
      description: description,
    }
    postSighting(sighting).then(data => {
      console.log(data)
      setSightings([...sightings, data])
    })
  }


  return (
    <form>
      <label htmlFor='location'>Location: </label>
      <input type='text' placeholder='Area 51' value={location} name='location' onChange={(e) => {setLocation(e.target.value)}}></input>
      <label htmlFor='description'>Description: </label>
      <textarea rows='5' cols='80' placeholder='What Happened?' value={description} name='description' onChange={(e) => {setDescription(e.target.value)}}></textarea>
      <button onClick={(e)=> {submitSighting(e)}} id='submit'>SPOTTED!</button>
    </form>
  )
}