const createNoteItem = (note) => {
    const noteEl = document.createElement('p')
    const textEl = document.createElement('span')
    const dateEl = document.createElement('span')
    const deleteBtn = document.createElement('button')
    textEl.textContent = note.title
    textEl.style.fontSize = '200%'
    dateEl.textContent = ` #Edited: ${moment(note.edited).fromNow()} and Created: ${moment(note.created).fromNow()}`
    deleteBtn.textContent = 'x'

    noteEl.appendChild(textEl)
    noteEl.appendChild(dateEl)
    noteEl.appendChild(deleteBtn)

    textEl.addEventListener('click', () => {
        location.assign(`./create-note.html#${note.id}`)
    })

    deleteBtn.addEventListener('click', e => {
        removeNote(note.id)
    })

    return noteEl
}

const renderNotes = (notes) => {
    const notesDiv = document.querySelector('#notes')
    notesDiv.innerHTML = ''
    notes.forEach(note => {
        notesDiv.appendChild(createNoteItem(note))
    })
}
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const getNotes = () => {
    const notesJOSN = localStorage.getItem('notes')
    return notesJOSN ? JSON.parse(notesJOSN) : []
}

const removeNote = (id) => {
    const index = notes.findIndex(note => note.id === id)
    if (index !== -1) {
        notes.splice(index, 1)
        saveNotes(notes)
        renderNotes(notes)
    }
}