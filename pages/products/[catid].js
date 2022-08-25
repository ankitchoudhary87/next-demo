import Head from 'next/head';
import axios from 'axios'
import Header from '../header';
import { useRouter } from 'next/router'
import { Container, Button, Card, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
/* export const getStaticPaths = async () => {
    const res = await axios("https://fakestoreapi.com/products/categories");
    const data = res.data;
    const paths = data.map((item) => {
        return {
            params: {
                catid: item.toString()
            },
        };
    })
    return {
        paths,
        fallback: false,
    }
} 
/* export const getStaticProps = async (context) => {
    const res = await axios("https://fakestoreapi.com/products");
    const datalatest = res.data;
    return {
        props: {
            data: datalatest,
        },
    };
}; */
const Mydata = () => {
    const [data, setData] = useState([])
    const router = useRouter()
    const { catid } = router.query
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/category/${catid}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.error(error);
            })

    }, [catid])
    return (
        <div>
            <Head>
                <title>{catid}</title>
                <meta name="description" content="This is category related products main page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{ marginTop: '15px', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                {catid}
            </div>
            {<Container style={{ marginTop: '10px' }} fluid>
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
                                    <Button variant="primary" onClick={() => router.push({pathname: `/desc/${item.id}`, query: { type: 'catpage', cat: item.category }})}>Read More</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{item.category}</small>
                                </Card.Footer>
                            </Card>
                        })
                    }
                </Row>
            </Container>}
        </div >
    )
}



export default Mydata;