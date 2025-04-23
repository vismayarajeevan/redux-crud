import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/crudSlice'


const Home = () => {

  const {users} = useSelector(state=>state.crud)

  const dispatch = useDispatch()

  const [data, setData] = useState({name:"",email:''})
  console.log("data",data);

  const handlesubmit =(e)=>{
    e.preventDefault();
    if(data.name && data.email){
      dispatch(addUser(data))
      setData({name:"",email:""})
    }
  }
  

  return (
    <Container className="mt-4">
     <h2 className="text-center mb-4">React Redux CRUD App</h2>
      <Form onSubmit={handlesubmit}>
        <Row>
          <Col md={5}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={data.name}
                onChange={e => setData({...data,name: e.target.value})}
                required
                placeholder="Enter name"
              />
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={data.email}
                onChange={e => setData({...data, email: e.target.value})}
                required
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button type="submit" className="w-100">
                Add
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "220px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length>0 ? (

            
            users.map((user,index)=>(

              <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
            ))
          ):
          (
      <tr>
        <td colSpan="4" className="text-center">No user list</td>
      </tr>          
      )
          }
          
            
            
        </tbody>
      </Table>
    </Container> 
    
)
}

export default Home