import React, { useState } from 'react'
import ax from 'axios'

const WorkoutForm = ({show,setshow}) => {
    const [title,settitle]=useState(''); 
    const [Load,setLoad]=useState(''); 
    const [Reps,setReps]=useState(''); 
    const [error,seterror]=useState(''); 
const handelSubmit=async(e)=>{
e.preventDefault();
seterror('')
try {
    await ax.post('https://firstbackend-w80a.onrender.com/api/workouts/',{title : title,load:Load,reps:Reps})
    setshow(!show)
    settitle('')
    setReps('')
    setLoad('')
} catch (error) {
    seterror('Please fill out all fields ')
}
    }
  return (
    <form className='create' onSubmit={handelSubmit}>
<h3>Add  New Workout</h3>
<label >Excersize title:</label>
<input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
<label >Load (in Kg):</label>
<input type="number"   value={Load} onChange={(e)=>setLoad(e.target.value)}/>
<label >Reps:</label>
<input type="number"   value={Reps} onChange={(e)=>setReps(e.target.value)}/>
<button>Add Workout</button>
{error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm