import React from 'react'
import { NextPage } from 'next'

import Layout from '@components/layouts/Layout'
import ResetPassword from '@components/auth/ResetPassword'

const ResetPage: NextPage = () => (
  <Layout title={'Восстановление пароля'}>
    <ResetPassword />
  </Layout>
)

export default ResetPage
