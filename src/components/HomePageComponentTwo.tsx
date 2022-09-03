
import React from 'react'

type compTwo={
  data:{
    name:string,
    age:Number,
    work:string
  }
}

const HomePageComponentTwo = (props:compTwo) => {
  return (
    <><br/>HomePageComponentTwo
       user data is {props.data.name} {props.data.age} {props.data.work}
    </>
  )
}

export default HomePageComponentTwo