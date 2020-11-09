import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Visual Bits Home" />
    <Link to="/basic">Visual Bits Basic</Link>
  </Layout>
)

export default IndexPage
