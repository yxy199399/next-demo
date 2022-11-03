import { ReactElement } from 'react'
import LoginLayout from './layout'
function Login() {
  return <main>登录</main>
}

export default Login

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}
