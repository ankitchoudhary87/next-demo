import Head from "next/head";
import Header from '../../header';
import axios from 'axios';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
/* import { Rating } from 'react-simple-star-rating' */
export const getStaticPaths = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    const data = res.data;
    const paths = data.map((item) => {
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
    const res = await axios(`https://fakestoreapi.com/products/${id}`);
    const data = res.data;
    return {
        props: {
            data
        },
    };
};
function Productdescription({ data }) {
    const router = useRouter();
    const { cat, type } = router.query
    return (
        <div>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                {
                    type && type!=='' && type==='catpage' && cat && cat!==''?
                        <Button variant="primary" onClick={() => router.push(`/products/${cat}`)} style={{ marginTop: '10px', marginBottom: '15px' }}>Back to Product</Button>
                    :
                        <Button variant="primary" onClick={() => router.push('/products')} style={{ marginTop: '10px', marginBottom: '15px' }}>Back to Product</Button>
                }
            </div>
            {
                data && Object.entries(data).length > 0 ?
                    <Container>
                        <Row>
                            <Col xs={5} style={{ border: 'solid gray 1px' }}><Card.Img variant="top" src={data.image} style={{ paddingTop: '10px', width: '70%' }} /></Col>
                            <Col xs={7} style={{ border: 'solid gray 1px' }}>
                                <Container>
                                    <Row>
                                        <Col style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            {data.title}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ fontSize: '15px', marginTop: '15px', textAlign: 'left' }}>
                                            {data.description}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '15px', textAlign: 'left' }}>
                                            INR. {data.price}
                                        </Col>
                                    </Row>
                                    {/* <Row>
                                        <Col style={{ marginTop: '15px', textAlign: 'left' }}>
                                            <Rating size="20" initialValue={data.rating.rate} readonly />
                                        </Col>
                                    </Row> */}
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    : <div style={{ fontWeight: 'bold', paddingTop: '15px' }}>Loading, Please Wait......</div>
            }
        </div>
    );
}

export default Productdescription;