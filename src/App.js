import { useState } from "react";

export function Square() {

  let [value, setvalue] = useState(null);

  function handleClick() {
    setvalue('x');
  }
  return (
    <>
      <button style={{ height: 40, width: 40 }} onClick={handleClick}>{value}</button>
    </>
  )
}



export default function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>

  )
}
