// put ? after the props type name that is optional means some time its value comes sometime not
type compProps={
  name:string,
  messageCount?:Number,
  age:Number
}

const PageTwoComp4 = (props:compProps) => {
  // set defualt value
  let {messageCount=0}=props
  return (
    <div>{`${props.name} ${messageCount} ${props.age}`}</div>
  )
}

export default PageTwoComp4