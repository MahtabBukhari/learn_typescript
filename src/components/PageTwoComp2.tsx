type childProps={
    children:string
}

const PageTwoComp2 = (props:childProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default PageTwoComp2