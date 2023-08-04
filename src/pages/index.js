// Import React
import * as React from 'react'
import Layout from '../components/layout'

// Define you component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>seungmin is making this</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

// Export your component
export default IndexPage

