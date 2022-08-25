import Head from 'next/head';
import Header from '../header';
import { useRouter } from 'next/router'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { videos } from '../api/videosdetaills';
import Playvideo from './playvideo';
const Dynamicdata = () => {
    const [data, setData] = useState(videos)
    const [latestvideo, setLatestvideo] = useState([])
    const [runningvideo, setRunningvideo] = useState("");
    const router = useRouter()
    const { vidcat } = router.query
    useEffect(()=>{
        if(vidcat && vidcat!==''){
            if(data && data.length>0){
                const updatevideos = data.filter((catvid)=>{
                    return catvid.category === vidcat
                })
                const runvid = updatevideos.slice(0,1).map((item)=>{
                    return item.url
                })
                setLatestvideo(updatevideos);
                setRunningvideo(runvid);
            }
        }
    }, [vidcat])
    const videoID = (videoID) => {
        if(videoID && videoID!==''){
            setRunningvideo(videoID);
        }
    }
    return (
        <div>
            <Head>
                <title>{vidcat} Categories Videos</title>
                <meta name="description" content="This is category related videos main page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{ marginTop: '10px', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                {vidcat}
            </div>
            <div style={{ marginTop: '10px' }}>
                <Container>
                    <Row>
                        <Col xs={9} style={{ border: 'solid gray 1px' }}>
                            <Playvideo vidid={runningvideo} />
                        </Col>
                        <Col xs={3} style={{ border: 'solid gray 1px' }}>
                            <div style={{ marginTop: '15px', textAlign: 'center', overflow:'scroll', height:'475px' }}>
                                <Container>
                                    {
                                        latestvideo.map((item) => {
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
            {/*<Container style={{ marginTop: '10px' }} fluid>
                <Row className="justify-content-center">
                    {
                        latestvideo.map((item) => {
                            return <Card style={{ width: '18rem', margin: '20px' }} key={item.id}>
                                <Card.Body>
                                    <Card.Text>
                                        <iframe width="235" height="235" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" src={`https://youtube.com/embed/${item.url}`}>
                                        </iframe>
                                        <img src={`https://img.youtube.com/vi/${item.url}/mqdefault.jpg`} style={{width:'100%'}} />
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
                </Container>*/}
        </div >
    )
}
export default Dynamicdata;