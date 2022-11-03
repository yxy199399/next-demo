import type { ReactElement } from 'react'
import Layout from '../components/layout'

export default function Page() {
  return <div>主页</div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
