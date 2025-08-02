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
      <NoteForm onAdded={note => setNotes(n => [note, ...n])} />
      <ul>
        {notes.map(n => (
          <li key={n.id}>
            <em>{new Date(n.created_at).toLocaleString()}</em>
            <p>{n.decrypted}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
