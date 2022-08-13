import type { NextPage } from 'next'
import {useState} from 'react'
import Countdown from '../comps/Countdown.tsx'

console.log(process.env)

const Home = (props) => {
  let date = new Date("2022-08-17T11:30:00.000-06:00")

  let cypher = "test"
  let test = new Date("8/12/22")
  test.setHours(10,35)

  return (
      <>
        <Countdown date={date} cypher={cypher}/>
      </>
  )
}

export default Home
