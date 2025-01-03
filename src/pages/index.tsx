import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import App from "../components/app"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <App />
    </main>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>To Do List</title>