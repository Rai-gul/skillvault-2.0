import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NoteForm from './NoteForm'

export default function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('/api/notes/').then(resp => setNotes(resp.data))
  }, [])

  return (
    <div>
      <NoteForm onAdded={n => setNotes(prev => [n, ...prev])} />
      <ul className="note-list">
        {notes.map(n => (
          <li className="note-item" key={n.id}>
            <em>{new Date(n.created_at).toLocaleString()}</em>
            <p>{n.decrypted}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
