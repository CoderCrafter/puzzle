import type { NextPage } from 'next'
import {useState} from 'react'
import Countdown from '../comps/Countdown.tsx'

console.log(process.env)

const Home = (props) => {
  let date = new Date("2022-08-17T11:30:00.000-05:00")

  let cypher = "QFYBOFRP ZIXRAFRP ZXBPXO PXVP: KgX0Jgh2JgBvJQF4="
  let test = new Date("8/12/22")
  test.setHours(10,35)

  return (
      <>
        <Countdown date={date} cypher={cypher}/>
      </>
  )
}

export default Home
