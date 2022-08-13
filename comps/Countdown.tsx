import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import styles from '../styles/landing.module.css'
import Timer from './Timer.tsx'
import Type from './Type.tsx'
import Image from 'next/image'
const Countdown = (props) => {

  let date = props.date

  let [time, setTime] = useState(new Date(date) - Date.now())
  let [inv, setInv] = useState(0)
  let [bg, setBg ] = useState("white")
  let [font, setFont] = useState("Special Elite")
  let [revealed, setRevealed] = useState(false)

  let days = Math.floor((time) / ( 1000 *60 * 60 * 24 ))
  let hours = Math.floor((time  % ( 1000 *60 * 60 * 24 )) / ( 1000 * 60 * 60 ))
  let minutes = Math.floor((time % ( 1000 * 60 * 60 )) / ( 1000 * 60 ))
  let seconds = Math.floor((time % ( 1000 * 60 )) / 1000)

  let countdown = `${days.toString().padStart(3, 0)}:${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${(seconds + (time % 1000)/1000).toFixed(3).toString().padStart(6,0)}`
  let test = [1,2,3,4,5]

  setInterval(() => {
    setTime( new Date(date) - Date.now())
  } , 1)

  //setTime( new Date(date) - Date.now())

  useEffect(() => {
    if(time <= 0){
    setTime(time + Math.abs(time))
    setInv(1)
    setBg("black")
    setTimeout(() => {
      setFont("Code Page")
      setRevealed(true)
    }, 1000)
  }
  })
  
  

  let cicadaStyle = {
    //"min-width":"0px",
    //"min-height":"0px",
    "max-width":"50vw",
    "max-height":"30vh",
    "aspect-ratio":640/389,
    "filter": `invert(${inv})`,
    "transition": `filter 1s`,
  }
  
  return (
      <div style={{
        display:"flex",
        background: bg,
        "justify-content":"center",
        "align-items":"center",
        width: "100%",
        height: "100%",
        "font-family": `${font}, sans-serif`,
        "font-variant-numeric": "tabular-nums",
        "text-align": "center",
        "transition": `background 1s`,
      }}>
        <div className={styles.countdown}>
          <img src={"https://upload.wikimedia.org/wikipedia/en/7/7e/Cicada_3301_logo.jpg"} style={cicadaStyle}></img>
          {
            revealed?
            <Type cypher={props.cypher}/>
            :
            <Timer time={countdown}/>
          }
        </div>
      </div>
  )
}

export default Countdown
