import styles from '../styles/type.module.css'
import {useState, useEffect} from 'react'

const Type = (props) => {
  let [cypherString, setCypherString] = useState("")
  let [i, setI] = useState(0)
  let [typing, setTyping] = useState(false)

    
      let letters = props.cypher.split("")
  useEffect(() => {
    setTimeout(() => {
      let str = typeof letters[i]==="undefined"?"":letters[i]
      if(typeof letters[i] === "undefined"){
        setTyping(false)
      }
      else{
        setTyping(true)
      }
        setCypherString(cypherString + str)
        if(i < letters.length){
          setI(i+1)
        }
      }, 100)
    })

  return(
    <>
      <span style = {{
        display: "inline",
        width:"100%",
        "text-align":"left",
        "font-size":"4vh",
        "word-wrap":"break-word"
      }}>
        <p style={{
          "color":"green",
          "display": "inline"
        }}>{cypherString}</p>
        <p style={{
          "color":"green",
          "display":"inline"
        }}className={typing?"":styles.blink}>█</p>
      </span>
    </>
  )
}

export default Type