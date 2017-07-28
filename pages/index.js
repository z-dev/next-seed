import React, { Component } from 'react'
import Header from 'components/header'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'

const PageContainer = styled(Div)`
  flex-direction: column;
`
export default class Index extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <Header />
        </PageContainer>
      </Page>
    )
  }
}
