import Head from 'next/head';
import Header from '../header';
import { useRouter } from 'next/router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { bloglist } from '../api/blog';
/* export const getStaticPaths = async () => {
    const paths = bloglist.map((item) => {
        return {
            params: {
                id: item.id.toString()
            },
        };
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const blogdetail = bloglist.filter((item) => {
        return item.id == id
    })
    return {
        props: {
            data:blogdetail
        },
    };
}; */
export const getServerSideProps = async (context) => {
    const id = context.params.id
    const blogdetail = bloglist.filter((item) => {
        return item.id == id
    })
    return {
        props: {
            data:blogdetail
        },
    };
}
function DynamicData({data}) {
    const router = useRouter();
    const { page } = router.query;
    return (
        <div>
            <Head>
                <title>{data[0].title}</title>
                <meta name="description" content={data[0].body} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{ marginTop: '10px', textAlign: 'center' }}>

            {
                page && page!=='' && page!=1?
                    <Button variant="primary" onClick={() => router.push(`/blog?page=${page}`)} style={{ marginTop: '10px', marginBottom: '15px' }}>Back to Blog</Button>
                :
                    <Button variant="primary" onClick={() => router.push('/blog')} style={{ marginTop: '10px', marginBottom: '15px' }}>Back to Blog</Button>
            }

                {/* <Button variant="primary" onClick={() => router.push('/blog')} style={{ marginTop: '10px', marginBottom: '15px' }}>Back to Blog</Button> */}
            </div>
            <Container style={{ width: '75%', marginTop: '20px' }}>
                <Row>
                    {
                        data && data.length > 0 ?
                            <Col style={{ border: 'solid gray 1px', fontSize: '17px', padding: '5px' }}>
                                <strong>{data[0].title}</strong><br /><br />
                                <div dangerouslySetInnerHTML={{__html: data[0].body}}></div>
                            </Col>
                            :
                            <Col style={{ border: 'solid gray 1px', fontSize: '17px', padding: '5px' }}>
                                No Data Found
                            </Col>
                    }
                </Row>
            </Container>
        </div>
    );
}
export default DynamicData;