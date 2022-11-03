import { ReactElement } from 'react'
import MainLayout from '../layout'
function MainHome() {
  return <main>home</main>
}

MainHome.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainHome
