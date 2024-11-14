import React from 'react'

const Filter = (props) => {
return (
<> 
        <span onClick={props.buttonFilter} 
        className={`filter-button ${props.category.name === props.activeButton ? 'active' : ''}`}
        id={props.category.name}>
            {props.category.name} 
        </span> 
  </>
  )
}

export default Filter
