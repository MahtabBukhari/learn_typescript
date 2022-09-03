

import React from 'react'

type compThree={
  arr:{
    name:string,
    age:Number,
    work:string
  }[]
}

const HomePageComponentThree = (props:compThree) => {
  return (
    <div><br/>HomePageComponentThree
{      props.arr.map(data=>{
  return(
    <> ` {data.name} {data.age} {data.work}` </>
  )
})}
    </div>
  )
}

export default HomePageComponentThree