import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Device = () =>{
    const device = {id:1, name:'Iphone 12 pro', price: '109000', rating:5, img:``},
    const description = [
        {id:1, title: 'Оперативная память', description: '5gb'},
        {id:2, title: 'Камера', description: '12 мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'Кол-во ядер', description: '2'},
        {id:5, title: 'Аккумулятор', description: '4000'}

    ]
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className ='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                        className = 'd-flex flex-column align-items-center justify-content-center'
                        >{device.rating}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    
                </Col>
            </Row>
        </Container>
    )
}
export default Device