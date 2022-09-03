import React from 'react'
import PageTwoComp from '../components/PageTwoComp'
import PageTwoComp2 from '../components/PageTwoComp2'

function PageTwo() {
  return (
    <div>
      <PageTwoComp status="loading"/>
      {/* passing data as children to copmonent */}
      <PageTwoComp2>this text is working as child of this component</PageTwoComp2>
    </div>
  )
}

export default PageTwo
