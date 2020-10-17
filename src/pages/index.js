import React from "react"

import Layout from "../components/layout"
import ImageRoll from "../components/imageroll"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageRoll/>
  </Layout>
)

export default IndexPage
