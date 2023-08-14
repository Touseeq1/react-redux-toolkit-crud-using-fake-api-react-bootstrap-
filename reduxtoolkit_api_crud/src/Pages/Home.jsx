import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Table, FloatingLabel, Button, Container } from 'react-bootstrap'
import { userFunction } from '../Store/AllSlice'
import { postUserFunction } from '../Store/AllSlice'
import { deleteUserFunction } from '../Store/AllSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const storeData = useSelector((state) => state.data)
    // console.log(storeData)
    const [inputField, setInputField] = useState({})
    const handleChange = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })

    }
    const handlePost = () => {
        dispatch(postUserFunction(inputField))
        document.getElementById('fromSubmit').reset();
    }
    const handleDelete = (val) => {
        // console.log("Delete Val", id)
        dispatch(deleteUserFunction(val))
    }
    const handleEdit = (val) => {
        navigate(`/edit/${val.id}`)

    }
    useEffect(() => {
        dispatch(userFunction())
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <h1>React Redux toolkit Crudd using fake API (React-Bootstrap)</h1>
                    </Col>
                </Row>
                <Row className=' mx-auto'>
                    <Col className='g-4' sm={12} lg={6} xl={6} xxl={6}>
                        <Form id='fromSubmit'>
                            <Form.Group>
                                <FloatingLabel controlId="floatingInput" label="Enter Name" className="mb-3">
                                    <Form.Control type='text' placeholder='Enter Name' name="name" onChange={handleChange} />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatingInput" label="Enter Email" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleChange} />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatingInput" label="Enter Password" onChange={handleChange} className="mb-3">
                                    <Form.Control type='number' placeholder='Enter Password' name="password" />
                                </FloatingLabel>
                            </Form.Group>
                            <Button onClick={handlePost}>Add User</Button>
                        </Form>
                    </Col>
                    <Col className='g-4' sm={12} lg={6} xl={6} xxl={6} style={{ height: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <td colSpan={2}>Name</td>
                                    <td colSpan={2}>Email</td>
                                    <td colSpan={2}>Password</td>
                                    <td colSpan={2}>Action</td> </tr> </thead><tbody>
                                {storeData.map((val, i) => (
                                    <tr key={i}>
                                        <td >{val.id}</td>
                                        <td colSpan={2}>{val.username}</td>
                                        <td colSpan={2}>{val.email}</td>
                                        <td colSpan={2}>{val.password}</td>
                                        <td colSpan={2}>
                                            <div className='d-flex justify-content-center'>
                                                <Button variant="outline-primary" onClick={() => handleEdit(val)}>Edit</Button>
                                                <Button variant="outline-danger" style={{ marginLeft: "5px" }} onClick={() => handleDelete(val)} >Del </Button>
                                            </div></td> </tr>))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home