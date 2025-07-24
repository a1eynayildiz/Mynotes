import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

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
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
             <ArrowLeft/>
          </Link>
        </h3>
        

      </div>

      <h1>Note #{id}</h1>
      
      <textarea defaultValue={note?.body}></textarea> {/* note varsa gösterir, yoksa boş kalır */}
    </div>
  )
}

export default NotePage
