import Head from 'next/head'
function home() {
    return (
        <div style={{ marginTop: '100px', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
            <Head>
                <title>This is Home Page</title>
                <meta name="description" content="This is home page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Welcome to our Website
        </div>
    );
}
export default home;