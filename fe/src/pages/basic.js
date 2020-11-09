import React, { useState } from "react"
import { Link } from "gatsby"
import DecBinRow from '../components/DecBinRow'
import LogicCard from '../components/LogicCard'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Basic = () => {
  const [numA, setNumA] = useState(2)
  const [numB, setNumB] = useState(7)
  
  return (
    <Layout>
      <SEO title="Bits Basic Opeations" />
      <div>
        <DecBinRow
          name="A"
          dec={numA}
          onChange={setNumA}
        />
        <DecBinRow
          name="B"
          dec={numB}
          onChange={setNumB}
        />

        {/* <div className="row"> */}
        <LogicCard
          nameA="A"
          nameB="B"
          valueA={numA}
          valueB={numB}
          operation="AND"
        />
        <LogicCard
          nameA="A"
          nameB="B"
          valueA={numA}
          valueB={numB}
          operation="OR"
        />
        <LogicCard
          nameA="A"
          nameB="B"
          valueA={numA}
          valueB={numB}
          operation="XOR"
        />
        {/* </div> */}
      </div>
    </Layout>
  )

}

export default Basic
