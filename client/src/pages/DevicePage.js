import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import bigStar from '../assets/BigStar.png'
import { fetchOneDevices } from "../http/deviceApi";

const Device = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(() =>{
        fetchOneDevices(id).then(data => setDevice(data))
    },[])
    return (
        <Container className='mt-3'>
           <Row>
            <Col md={4}>
                    <Image width={300} height={300} src={'http://localhost:5000/' + device.img}/>
                </Col>
                <Col md={4}>
                <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div 
                            className='d-flex align-items-center justify-content-center'
                            style={{background:`url(${bigStar}) no-repeat center center`, width:240, height:240,backgroundSize:'cover'}}
                        >
                        {device.rating}  
                        </div>
                </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {device.info.map(item =>
                <Row key={item.id} style={{background:item.id % 2 === 0 && 'lightgray', padding:10}}>
                    {item.title}: {item.description}
                </Row>
                )}
            </Row> 
        </Container>
    )
}

export default Device