import { ReactNode, ReactElement } from 'react'
import Layout from '@c/layout'

function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      登录容器
      {children}
    </main>
  )
}

LoginLayout.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default LoginLayout
