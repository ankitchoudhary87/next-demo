import Head from "next/head";
import Header from './header';
function Productdescription() {
    return (
        <div>
            <Head>
                <title>This is Product Main Page</title>
                <meta name="description" content="This is product main page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            Test
        </div>
    );
}

export default Productdescription;