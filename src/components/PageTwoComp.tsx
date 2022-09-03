import React from 'react'

type statusProps={
    // status:string
    // below method is used to get specific data like loading, success, error  otherwise ts through error
    status:'loading' | 'success' | 'error'
}

const PageTwoComp = (props:statusProps) => {
    let message;
    if(props.status==='loading'){
        message='loading...'
    }else if(props.status==='success'){
        message = 'fetch data successfully'
    }else if(props.status==='error'){
        message='error'

    }
  return (
 <h1>{message}</h1>
  )
}

export default PageTwoComp