import { ReactElement, ReactNode } from 'react'
import Layout from '@c/layout'
function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      主页
      {children}
    </main>
  )
}

MainLayout.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default MainLayout
