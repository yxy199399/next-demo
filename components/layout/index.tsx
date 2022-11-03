import { ReactNode } from 'react'
import AppHead from '../head'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AppHead />
      <main>{children}</main>
    </div>
  )
}
