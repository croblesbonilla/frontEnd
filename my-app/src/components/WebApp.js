import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

const WebApp = () => {

  const [ data, setData ] = useState({effects: [], helps: []})
  const [ formData, setFormData ] = useState({effects: '', helps: ''})
  
    const fetchingData = () => {
        axios
        .get('https://medcabinet-ds-0820.herokuapp.com/labels')
        .then(res => setData(res.data))
        .catch(err => console.error(err));
        
    }
    console.log(data)

  useEffect(() => {
    fetchingData()
  }, []) 

const handleSubmit = (e) => {
  e.preventDefault()
  const setData = {effects: [formData.effects], helps: [formData.helps], count: 1}
  axios.post('https://medcabinet-ds-0820.herokuapp.com/recommends', setData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

console.log(formData)
  return (
      <>
    <Form>
      <FormGroup>
        <Label for="effects">Effects</Label>
        <select name="effects" value={formData.effect} onChange={handleChange}>
        {data.effects.map(effect => {
          return(<option key={effect} >{effect}</option>)
        })}
        </select>
        <Label for="helps">Helps</Label>
        <select name="helps" value={formData.help} onChange={handleChange}>
        {data.helps.map(help => {
          return(<option key={help} >{help}</option>)
        })}
        </select>
      </FormGroup>
      <button onClick={handleSubmit}>go</button>
      </Form>
      </>
  );
};

export default WebApp;