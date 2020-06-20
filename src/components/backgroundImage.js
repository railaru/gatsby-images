import React from "react"

import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundImageSection = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { filename, className, innerContent } = props

      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return (
        <BackgroundImage fluid={imageSizes} className={className}>
          {innerContent}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundImageSection
