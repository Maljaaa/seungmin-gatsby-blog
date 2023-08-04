// Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Define you component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>seungmin is making this</p>
      <StaticImage
        alt="my photo"
        src="../images/blog-main.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

// Export your component
export default IndexPage

