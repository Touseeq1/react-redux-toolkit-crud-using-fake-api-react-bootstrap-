import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Table, FloatingLabel, Button } from 'react-bootstrap'
import { putUserFunction } from '../Store/AllSlice'

const EditUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const storeData = useSelector((state) => state.data)
    // console.log("StoreData", storeData)
    const [inputField, setInputField] = useState()
    console.log("INPUTFIELD", inputField)
    const handleChange = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (id) {
            const filterData = storeData.filter((val) => val.id == id)
            setInputField(filterData[0])                                  //Here we receive array of Object with index zero [0]
        }
    }, [])

    const handlePut = () => {
        dispatch(putUserFunction(inputField))
    }
    const handleBack = () => {
        navigate('/')
    }
    return (
        <div>
            <Row className=' mx-auto d-flex justify-content-center'>
                <Col sm={12} md={6}  lg={6} className='g-4'>
                    <Form>
                        <Form.Group>
                            <FloatingLabel controlId="floatingInput" label="" className="mb-3">
                                <Form.Control type='text' placeholder='Enter Name' value={id} name="name" onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId="floatingInput" label="Enter Name" className="mb-3">
                                <Form.Control type='text' placeholder='Enter Name' value={inputField && inputField.username} name="name" onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId="floatingInput" label="Enter Email" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" value={inputField && inputField.email} name="email" onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId="floatingInput" label="Enter Password" onChange={handleChange} className="mb-3">
                                <Form.Control type='text' placeholder='Enter Password' value={inputField && inputField.password} name="password" />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="outline-primary" className='m-3' onClick={handlePut}>uplad User</Button>
                        <Button onClick={handleBack}>Back to Home</Button>
                    </Form>
                </Col>
            </Row>
        </div >
    )
}

export default EditUser