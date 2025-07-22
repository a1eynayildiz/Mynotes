import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
  const { id } = useParams()
  const [note, setNote] = useState(null) 

  useEffect(()=> {
    
  }
  )

  const getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`)  // proxy sayesinde http://127.0.0.1:8000 yazmama artık gerek yok
    let data = await response.json()
    setNote(data)
  }

  return (
    <div>
        <h1>Single Note {id}</h1>
    </div>
  )
}

export default NotePage
