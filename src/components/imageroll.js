import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"

const ImageRoll = () => {
    const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)


  return (
  <div className="columns is-multiline">
    {data.allImageSharp.edges.map(({node}) =>
                                            <div className="column is-one-quarter">
                                              <figure className="image">
                                                <Img fluid={node.fluid} durationFadeIn={75}/>  
                                              </figure>
                                            </div>
                                        )
    }
  </div>)
};

export default ImageRoll