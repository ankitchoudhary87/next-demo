import Head from 'next/head';
import Header from './header'
function About() {
    return (
        <div>
            <Head>
                <title>This is About Page</title>
                <meta name="description" content="This is about page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                This is our About Page.
            </div>
        </div>
    );
}

export default About;