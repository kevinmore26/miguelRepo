import axios from 'axios'

const URL = `https://6104aae64b92a000171c5ca7.mockapi.io`
//https://6104aae64b92a000171c5ca7.mockapi.io
const obtenerProductos = async ()=>{
    try{

        let {data} = await axios.get(`${URL}/Productos`)
        return data

    }catch(error){
        throw error
    }
}

const obtenerProductosPorId = async (id)=>{
    try{
        let {data} = await axios.get(`${URL}/Productos/${id}`)
        return data

    }catch(error){
        throw error
    }
}



export{
    obtenerProductos,
    obtenerProductosPorId
}