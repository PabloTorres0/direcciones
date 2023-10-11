import { Space, Table, Tag, Button } from 'antd'
import React from 'react'


const Tabla = (props) => {

var array=props.dataSourceH 
array.map((item) => (
    item.accion=(<div><Button
    type="primary"
    onClick={()=>{props.openModalEdit(item.key)}}
    >Editar</Button>  <Button
    onClick={()=>{props.eliminar(item.key)}}
    type= "primary" danger
    >Eliminar</Button></div>)

)) 


  return (
    <div>
        <Table dataSource={array} columns={props.columnsH}/>
    </div>

  )
}

export default Tabla