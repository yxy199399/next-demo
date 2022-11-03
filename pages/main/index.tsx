import { ReactElement } from 'react'
import MainLayout from './layout'

function Main() {
  return <main>主页容器</main>
}

Main.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default Main
