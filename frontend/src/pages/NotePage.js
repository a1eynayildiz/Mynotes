import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
  const { id } = useParams()
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

  return (
    <div>
      <h1>Note #{id}</h1>
      <p>{note?.body}</p> {/* note varsa gösterir, yoksa boş kalır */}
    </div>
  )
}

export default NotePage
