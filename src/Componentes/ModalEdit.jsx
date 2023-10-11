import React from 'react'
import {Modal} from "antd"
import { Button, Checkbox, Form, Input } from 'antd';





const ModalEdit = (props) => {
  const [nuevoNombre, setNuevoNombre]= React.useState("")
  const [nuevaEdad, setNuevaEdad]= React.useState("")
  const [nuevaDireccion, setNuevaDireccion]= React.useState("")
 
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const okButtonModal=()=>{
    props.backDatos( {nombre:nuevoNombre,edad:nuevaEdad,direccion:nuevaDireccion})
      console.log(nuevoNombre)
      props.okButton()
  }  
 


  return (

    <div>
        <Modal title={props.nombreModal} open={props.isOpenModal} onOk={okButtonModal} onCancel={props.cancelButton} >
                  <Form
              name="basic"
              labelCol={{
                span: 8,  
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre"
                name="Nombre"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor Ingresa Un Nonmbre!',
                  },
                ]}
              >
                <Input onChange={(e)=>{setNuevoNombre(e.target.value)}}/>
              </Form.Item>

              <Form.Item
                label="Edad"
                name="Edad"
                rules={[
                  {
                    required: true,
                    message: 'Ingresa la edad!',
                  },
                ]}
              >
                <Input onChange={(e)=>{setNuevaEdad(e.target.value)}}/>
              </Form.Item>

              <Form.Item
                label="Dirección"
                name="Dirección"
                rules={[
                  {
                    required: true,
                    message: 'Ingresa la edad!',
                  },
                ]}
              >
                <Input onChange={(e)=>{setNuevaDireccion(e.target.value)}}/>
              </Form.Item>


              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
              </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}

export default ModalEdit