import ModalEdit from "./Componentes/ModalEdit";
import Tabla from "./Componentes/Tabla";
import {Button, Modal} from "antd"
import React from 'react'
import { useFetch } from "./customHooks/useFetch";

var dataSource=[
  {
      key:1, id:1, nombre:'Juanchito', edad: 24, direccion: 'Avenida Lopez Mateos no 63',accion:null
  },
  {
      key:2, id:2, nombre:'Penelope', edad: 20, direccion: 'Fraternidad 17',accion:null
  },
  {
      key:3, id:3, nombre:'Alejandro', edad: 12, direccion: 'Venustiano carranza',accion:null
  },
  {
      key:4, id:4, nombre:'Javier', edad: 18, direccion: 'Constitución 45',accion:null
  },
  {
    key:5, id:5, nombre:'Bonito', edad: 28, direccion: 'Coyote',accion:null
}
]

const columns=[
  {title:"id",dataIndex:"id",key:"id"},
  {title:"nombre",dataIndex:"nombre",key:"nombre"},
  {title:"edad",dataIndex:"edad",key:"edad"},
  {title:"direccion",dataIndex:"direccion",key:"direccion"},
  {title:"accion",dataIndex:"accion",key:"accion"}
]


function App() {
  

  const [dataSourceH, setDataSourceH] = React.useState(dataSource)
  const [columnsH, setColumnsH] = React.useState(columns)

  const [isOpenModal, setIsOpenModal]= React.useState(false)
  const [nombreModal,setNombreModal] = React.useState("")
  const [keyEdit, setKeyEdit] = React.useState(null)

  const okButton=()=>{
    setIsOpenModal(false)
  }
  const cancelButton = () => {
    setIsOpenModal(false)
  }
  const openModalButton = () => {
    setNombreModal("Agregar Persona")
    setIsOpenModal(true)
  }

  const openModalEdit = (keyEdit) => {
    setIsOpenModal(true)
    setNombreModal("Editar Persona")
    setKeyEdit(keyEdit)
  }

  

  const eliminar = (key) => {
    console.log(key)
    var cloneDAtaSourceHE = dataSourceH
    let auxvar=cloneDAtaSourceHE.filter((item)=>item.key!==key)
    //console.log(auxvar)
    setDataSourceH(auxvar)
  }

  const backDatos = (regresoDatos) =>{
    if (nombreModal==="Agregar Persona")
    {
  const constPush={key:dataSourceH.length+1,id:dataSourceH.length+1,nombre:regresoDatos.nombre,edad:regresoDatos.edad,direccion:regresoDatos.direccion,accion:null}
  const cloneDataSource = [...dataSourceH,constPush]
  console.log(cloneDataSource)
   //dataSource.push(constPush)
   setDataSourceH(cloneDataSource)
   console.log(dataSourceH)
  }
  else {
    let newArray=dataSourceH
    newArray[keyEdit-1].nombre=regresoDatos.nombre
    newArray[keyEdit-1].edad=regresoDatos.edad
    newArray[keyEdit-1].direccion=regresoDatos.direccion
    setDataSourceH(newArray)
  }
 }

 

const {appi, loading, error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users")
  



  return (
    <div>
      <br/>
      <Button 
      onClick={openModalButton}
      type="primary">Insertar Persona</Button>
      <br/>
      <br/>
      <Tabla 
      openModalEdit={openModalEdit} 
      columnsH={columnsH} 
      dataSourceH={dataSourceH}
      eliminar={eliminar}
      />
      <ModalEdit 
      isOpenModal={isOpenModal} 
      nombreModal={nombreModal} 
      backDatos={backDatos  }
      okButton={okButton} 
      cancelButton={cancelButton}
      />

      
      <div>
        {
        appi ?
        (appi.map((item) => (<li   key={item.id}>{JSON.stringify(item.name)}</li>))):(<div>cargando</div>)
      }
      </div>
      <Button onClick={handleCancelRequest}>
        PARAR
      </Button>
 
        
    </div>
  );
}

export default App;
  