import React from 'react'
import ftoNow from 'date-fns/formatDistanceToNow'
import ax from 'axios'
const WorkoutDetails = ({ workout ,show,setshow}) => {
const handelDelete=async()=>{
await ax.delete('https://firstbackend-w80a.onrender.com/api/workouts/'+workout._id)
setshow(!show)
}

  return (
    <div className='workout-details '>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg):</strong>{workout.load}</p>
      <p><strong>Number of reps:</strong>{workout.reps}</p>
      <p>{ftoNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handelDelete} className="material-symbols-outlined">
        delete
      </span>



    </div>

  )
}

export default WorkoutDetails