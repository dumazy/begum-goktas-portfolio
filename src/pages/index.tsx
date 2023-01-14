import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Portrait from "../homepage/Portrait"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Portrait />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Begüm Göktas</title>
