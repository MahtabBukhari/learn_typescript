import React from 'react'
import PageTwoComp from '../components/PageTwoComp'
import PageTwoComp2 from '../components/PageTwoComp2'
import PageTwoComp3 from '../components/PageTwoComp3'

function PageTwo() {
  return (
    <div>
      <PageTwoComp status="loading"/>
      {/* passing data as children to copmonent */}
      <PageTwoComp2>this text is working as child of this component</PageTwoComp2>

      {/* passing react component as child to other component */}

      <PageTwoComp3> <PageTwoComp2>component as child of other component</PageTwoComp2> </PageTwoComp3>
    </div>
  )
}

export default PageTwo
