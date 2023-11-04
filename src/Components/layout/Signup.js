import React from 'react'
import {Row,Col,Form,Button,Input,message} from 'antd'

import { Link } from "react-router-dom";
import Layout from './Layout';
function signup() {

 
return (
  <Layout>
  <div className="register">
   <Row justify="center" className='flex align-items-center'>
   <Col lg={5}><h1 ></h1></Col>
     <Col lg={10} sm={24} className="bs p-5 register-form">
       <h3>Register</h3>
       <hr />
       <Form layout="vertical" onClick={signup}>
         <Form.Item
           label="Name"
           name="name"
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

        <Form.Item
           label="confirm password"
           name="confirmpassword"
           rules={[{ required: true }]}
         >
           <Input.Password/>
         </Form.Item>

         <Button htmlType="submit" className='mb-3' >Register</Button> <br />

         <Link to='/login' className='mt-3'>Already registered ? , Click here to login</Link>
       </Form>
     </Col>
     <Col lg={5}><h1 ></h1></Col>
   </Row>
 </div>
 </Layout>
);
}

export default signup