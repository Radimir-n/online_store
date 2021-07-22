import {React, useContext, useState} from 'react'
import { Form, Modal,Button, Dropdown, Col, Row } from 'react-bootstrap'
import { Context } from '../../index'

const CreateDevice = ({show, onHide}) =>{
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const [type, setType] = useState(null)
    const [brand, setBrand] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const selectFiles = e =>{
        setFile(e.target.files[0])
    }

    

    const addInfo = () =>{
        setInfo([...info,{title:'', description:'', number:Date.now()}])
    }
    const removeInfo =(number) =>{
        setInfo(info.filter(i => i.number !== number))
    }
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Добавить устройства
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div className='d-flex'>
                    <Dropdown className='mr-3'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key = {type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mr-3'>
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key = {brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className ='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder = 'Введите название устройства'
                    />

                    <Form.Control
                        className='mt-3'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        placeholder = 'Введите стоимость устройства'
                        type='number'
                    />

                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange ={selectFiles}
                    />
                </div>
                <hr/>
                <Button 
                    variant = 'outline-ddark'
                    onClick={addInfo}
                >
                    Добавить новое устройство
                </Button>
                {
                    info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите название свойства'
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите описание свойства'
                                />
                            </Col>

                            <Col md={4}>
                                <Button 
                                    variant={'outline-danger'}
                                    onClick={()=>removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant = 'outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant = 'outline-success' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
        </Modal>
    )
}
export default CreateDevice