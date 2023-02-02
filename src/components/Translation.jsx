import React from 'react'

function Translation({doStuff, setInput, result}) {
  return (
    <div className='text-center p-4'>
        <textarea name="" id="" cols="80" rows="10"
        onChange={(e) => setInput(e.target.value)}
        className='text-area'>
        
        </textarea>
        <button onClick={doStuff}
         className='btn btn-outline-info m-2'
        >DO YOU STUFF!</button>

        <div className="">
            <h3>Result: {result.length > 0 ?  result :  ""}</h3>
        </div>
    </div>
    
  )
}

export default Translation