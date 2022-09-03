import React from 'react'

type userData={    //custom dataType whose type is string and Number
    name:string,
    age:Number,
    work:string
}

                // props of type string and number
const HomePageComponentOne = (props:userData) => {
  return (
    <>HomePageComponentOne
       user data is {props.name} {props.age} {props.work}
    </>
  )
}

export default HomePageComponentOne