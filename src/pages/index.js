import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundImageSection from "../components/backgroundImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <h2>reusable gatsby img component</h2>
      <Image filename={"gatsby-astronaut.png"} alt="" />
      <h2 style={{margin:'100px 0'}}>reusable gatsby background img component</h2>
      <BackgroundImageSection
        filename={"gatsby-astronaut.png"}
        className={"bg-img"}
        innerContent={
          <>
            <h2>inner heading</h2>
            <p>inner paragraph</p>
          </>
        }
      />
    </div>
  </Layout>
)

export default IndexPage
