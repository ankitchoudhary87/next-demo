import Head from 'next/head';
import axios from 'axios'
import Header from '../header';
import { useRouter } from 'next/router'
import { Container, Button, Card, Row } from 'react-bootstrap';
export const getStaticProps = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    const data = res.data;
    return {
        props: {
            data
        },
    };
};
const Products = ({ data }) => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>This is Product Main Page 2</title>
                <meta name="description" content="This is product main page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container style={{ marginTop: '20px' }} fluid>
                <Row className="justify-content-center">
                    {
                        data.map((item) => {
                            return <Card style={{ width: '18rem', margin: '22px' }} key={item.id}>
                                <Card.Img variant="top" src={item.image} style={{ paddingTop: '10px' }} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description.substring(0, 100)}......
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => router.push(`/desc/${item.id}`)}>Read More</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{item.category}</small>
                                </Card.Footer>
                            </Card>
                        })
                    }
            </Row>
        </Container>
        </div >
    )
}
export default Products;