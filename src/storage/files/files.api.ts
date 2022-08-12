import {IFileInfo} from "../../models/files_models";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

export function useProducts(){

  const [products, setProducts] = useState<IFileInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  async function fetchProducts(){
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IFileInfo[]>('http://127.0.0.1:8000/files/all',
        {headers: {"Access-Control-Allow-Origin": "*"} })
      setProducts(response.data)
      setLoading(false)
    } catch (e: any) {
      let errorText = e as AxiosError
      setLoading(false)
      setError(errorText.message)
      return
    }
  }
  useEffect(() => {
    fetchProducts()
  },[])

  return {products, setProducts, error, loading}
}

export async function deleteFile(id: string){
  try {
    return await axios.delete<IFileInfo>(`http://127.0.0.1:8000/files/?file_id=${id}`,
      {headers: {"Access-Control-Allow-Origin": "*"}})
  } catch (e: any) {
    return e as AxiosError
  }
}