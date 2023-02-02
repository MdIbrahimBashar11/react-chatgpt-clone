import React from 'react'

function OptionSeletion({arrayItem, selectOption}) {
  return (
    <div className='container'>
        <h2 className='text-center p-3'>React AI App</h2>
        <br />
        <div className="grid-main">
            {/* {arrayItem.map((item, index) => {
                 return <div className='grid-child'
                 onClick={() => selectOption(item.option) }>
                   
                  </div>
            })} */}
            { arrayItem.map((item, index) =>
               <div key={index} onClick={() => selectOption(item.option) } className='grid-child'>
                <h3>{item.name}</h3>
                   <p>{item.decription}</p>
             </div>)
             
             }

        </div>
    </div>
  )
}

export default OptionSeletion