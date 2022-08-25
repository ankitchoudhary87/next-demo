import Head from 'next/head';
import Header from '../header';
import { useRouter } from 'next/router'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { videos } from '../api/videosdetaills';
import { useState } from 'react';
import Playvideo from './playvideo';
const Videos = () => {
    const [data, setData] = useState(videos);
    const [runningvideo, setRunningvideo] = useState(videos.slice(0,1).map((item)=>item.url));
    const router = useRouter();
    const videoID = (videoID) => {
        if(videoID && videoID!==''){
            setRunningvideo(videoID);
        }
    }
    return (
        <div>
            <Head>
                <title>This is Video Main Page 2</title>
                <meta name="description" content="This is video main page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <div style={{ marginTop: '25px' }}>
                <Container>
                    <Row>
                        <Col xs={9} style={{ border: 'solid gray 1px' }}>
                            <Playvideo vidid={runningvideo} />
                        </Col>
                        <Col xs={3} style={{ border: 'solid gray 1px' }}>
                            <div style={{ marginTop: '15px', textAlign: 'center', overflow:'scroll', height:'500px' }}>
                                <Container>
                                    {
                                        data.map((item) => {
                                            return <Row key={item.id} style={{marginTop:'20px', cursor:'pointer'}} onClick={()=>{videoID(`${item.url}`)}}>
                                                <Col>
                                                    <img src={`https://img.youtube.com/vi/${item.url}/mqdefault.jpg`} style={{ width: '100%' }} />
                                                </Col>
                                            </Row>
                                        })
                                    }
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <Container style={{ marginTop: '20px' }} fluid>
                <Row className="justify-content-center">
                    {
                        data.map((item) => {
                            return <Card style={{ width: '18rem', margin: '20px' }} key={item.id}>
                                <Card.Body>
                                    <Card.Text>
                                        <img src={`https://img.youtube.com/vi/${item.url}/mqdefault.jpg`} style={{ width: '100%' }} />
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
            </Container> */}
        </div >
    )
}
export default Videos;