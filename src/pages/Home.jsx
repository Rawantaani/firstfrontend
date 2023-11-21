import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setworkouts] = useState([])
  const [show, setshow] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const resp = await ax.get('https://firstbackend-w80a.onrender.com/api/workouts')
      console.log(resp.data)
      setworkouts(resp.data)
    }
    getData()
  }, [show])


  return (
    <div className="home">
      <div className="workouts">
        {
          workouts && workouts.map((work) =>
           (<WorkoutDetails workout={work} show={show} setshow={setshow} key={work._id}/>)

          )

        }




      </div>
      <WorkoutForm  show={show} setshow={setshow}/>
    </div>
  )
}

export default Home