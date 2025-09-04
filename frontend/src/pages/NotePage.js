import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const NotePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState(null)

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`/api/notes/${id}/`)
      if (response.ok) {
        const data = await response.json()
        setNote(data)
      }
    }
    getNote()
  }, [id])

  const updateNote = async () => {
    await fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  const handleSubmit = () => {
    updateNote()
    navigate('/')
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
        </h3>
      </div>

      <h1>Note #{id}</h1>

      <textarea
        onChange={(e) => setNote({ ...note, 'body': e.target.value })}
        defaultValue={note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage
