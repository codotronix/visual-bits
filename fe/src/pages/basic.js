import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Basic = () => (
  <Layout>
    <SEO title="Bits Basic Opeation" />
    <h1>Hi from Bits Basic Opeation</h1>
    <p>Welcome to page Bits Basic Opeation</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Basic
