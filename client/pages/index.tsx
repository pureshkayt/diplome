import React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layouts/Layout'
import Main from '@components/main/Main'

const IndexPage: NextPage = () => (
  <Layout title="Главная | CherryPizza">
    <Main />
  </Layout>
)

export default IndexPage
