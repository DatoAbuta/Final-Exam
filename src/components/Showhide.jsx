import React, { useState } from 'react'

export default function Showhide() {

    const [show,setShow] = useState(false)

  return (
    <div>
        <button onClick={() => setShow(!show)}>Show</button>
        {show ? <p>sagol simon</p>: null}
    </div>
  )
}
