import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from '../components/TypeBar'
import { fetchTypes,fetchBrands,fetchDevices } from "../http/deviceApi";
import { observer } from "mobx-react-lite";

const Shop = observer(() => {
    const {device} = useContext(Context)
    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    },[])
    return (
        <Container>
            <Row className ='mt-3'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop