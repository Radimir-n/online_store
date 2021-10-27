import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import { Button, Modal, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { fetchTypes, fetchBrands, createDevice } from "../../http/deviceApi";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    },[])

    const addInfo = () =>{
        setInfo([...info, {title:'', description:'', number:Date.now()}])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) =>{
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addDivice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Добавить новое устройство
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className='mt-3 mb-2'>
                    <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item 
                                key={type.id}
                                onClick={() => device.setSelectedType(type)}
                            >
                                {type.name}
                            </Dropdown.Item>     
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-3 mb-2'>
                    <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item 
                                key={brand.id}
                                onClick={() => device.setSelectedBrand(brand)}
                            >
                                {brand.name}
                            </Dropdown.Item>     
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className='mt-3'
                    placeholder='Введите название устройства'
                />
                <Form.Control 
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}  
                    className='mt-3'
                    placeholder='Введите стоимость устройства'
                    type='number'
                />
                <Form.Control 
                    className='mt-3'
                    type='file'
                    onChange={selectFile}
                />
                <hr/>
                <Button 
                    variant={'outline-dark'} 
                    className='mt-2'
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(item =>
                    <Row className='mt-4' key={item.number}>
                        <Col md={4}>
                            <Form.Control
                                value={item.title}
                                onChange={(e)=>changeInfo('title', e.target.value, item.number)}
                                placeholder='Введите название характеристики'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={item.description}
                                onChange={(e)=>changeInfo('description', e.target.value, item.number)}
                                placeholder='Введите описание характеристики'
                            />
                        </Col>
                        <Col md={4}>
                            <Button 
                                variant={'outline-danger'}
                                onClick={()=> removeInfo(item.number)}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline-success' onClick={addDivice}>Добавить</Button>
        </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice