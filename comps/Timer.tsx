const Timer = (props) => {
  return(
    <table>
        <tr>
          {
            props.time.split("").map((a, i) => (
              <td key={i}>{a}</td>
            ))
          }
        </tr>
    </table>
  )
}

export default Timer