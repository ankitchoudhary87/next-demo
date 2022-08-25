import Head from 'next/head';
const Playvideo = ({vidid}) => {
    return (
        <>
            <Head>
                <title>Single Video Page Title</title>
                <meta name="description" content="This is category related videos main page description 123" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ marginTop: '15px', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                <iframe width="95%" height="450" frameBorder="0"  allow="autoplay; encrypted-media" allowFullScreen src={`https://youtube.com/embed/${vidid}?autoplay=1`}>
                </iframe>
            </div>
        </>
    )
}
export default Playvideo;