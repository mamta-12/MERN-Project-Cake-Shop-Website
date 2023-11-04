import React from 'react'
import Layout from "./Layout";
import {Row,Col,Form,Button,Input} from 'antd'
import { Link } from "react-router-dom";
import '../style/LoginStyle.css';
// import { loginUser } from '../redux/actions/userActions'


function Login() {

  function login(values){

    

}

return (
  <Layout>
  <div className="login" onClick={login}>
    <Row justify="center" className="flex align-items-center">
      <Col lg={5}><h1 ></h1></Col>
      <Col lg={10} sm={24} className="bs p-5 login-form">
        <h3>Login</h3>
        <hr />
        <Form layout="vertical">
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password/>
          </Form.Item>

          <Button htmlType="submit" className='mb-3'>Login</Button><br />

          <Link to='/Signup' className='mt-3'>Not registerd ? , Click here to register</Link>
        </Form>
      </Col>
      <Col lg={5}><h1 ></h1></Col>
    </Row>
  </div>
  </Layout>
);
}

export default Login;