// Import React
import * as React from 'react'
import Layout from '../components/layout'

// Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby</p>
        </Layout>
    )
}

export const Head = () => (
    <main>
        <title>About Me</title>
        <meta name="description" content="Yourdescription" />
    </main>
)

// Export your component
export default AboutPage