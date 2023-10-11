import React from "react";

export function useFetch (url) {
const [appi, setAppi]= React.useState(null )
const [loading, setLoading] = React.useState(true)
const [error, setError] = React.useState("")
const [controller, setController] = React.useState(null)

React.useEffect(()=>{

    const abortController= new AbortController()
    setController(abortController)

    setLoading(true)
    fetch(url, {signal:abortController.signal})
    .then((response)=>response.json())
    .then((data)=>setAppi(data))
    .catch((error)=>{
        if (error.name==="AbortError"){
            console.log('Respuesta cancelada')
        }
        setError(error)} )
    .finally(()=>setLoading(false))
  
     return () => abortController.abort()
   },[]);

   const handleCancelRequest = () => {
    if (controller){
        controller.abort()
        setError("Respuesta cancelada")
    }
   }

   return {appi, loading, error, handleCancelRequest}
}

//"https://jsonplaceholder.typicode.com/users"