import React from 'react'
import PageTwoComp from '../components/PageTwoComp'
import PageTwoComp2 from '../components/PageTwoComp2'
import PageTwoComp3 from '../components/PageTwoComp3'
import PageTwoComp4 from '../components/PageTwoComp4'

function PageTwo() {
  return (
    <div>
      <PageTwoComp status="loading"/>
      {/* passing data as children to copmonent */}
      <PageTwoComp2>this text is working as child of this component</PageTwoComp2>

      {/* passing react component as child to other component */}

      <PageTwoComp3> <PageTwoComp2>component as child of other component</PageTwoComp2> </PageTwoComp3>

      {/* What we do if we not want to pass any props */}
      <PageTwoComp4 name='ali' age={23} />
    </div>
  )
}

export default PageTwo
