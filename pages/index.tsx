import type { NextPage } from 'next'
import {useState} from 'react'
import Countdown from '../comps/Countdown.tsx'

const Home = (props) => {

  let date = new Date("8/17/22")
  date.setHours(11)

  let cypher = "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  let test = new Date("8/12/22")
  test.setHours(10,35)

  return (
      <>
        <Countdown date={date} cypher={cypher}/>
      </>
  )
}

export default Home
