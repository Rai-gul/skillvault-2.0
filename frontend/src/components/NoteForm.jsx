import React, { useState } from 'react'
import axios from 'axios'

export default function NoteForm({ onAdded }) {
  const [text, setText] = useState('')

  const submit = async e => {
    e.preventDefault()
    const { data } = await axios.post('/api/notes/', { text })
    onAdded(data)
    setText('')
  }

  return (
    <form className="note-form" onSubmit={submit}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write your note..."
        required
      />
      <button type="submit">Save Note</button>
    </form>
  )
}
