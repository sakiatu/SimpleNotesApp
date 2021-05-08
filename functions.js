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

const sortNotes = (notes,sortBy)=>{
    if (sortBy === 'alphabetically') {
        notes.sort((a, b) => {
            if (a.title > b.title) return 1
            else if (b.title > a.title) return -1
            else return 0
        })
    } else if (sortBy === 'created') {
        notes.sort((a, b) => {
            if (a.created < b.created) return 1
            else if (b.created < a.created) return -1
            else return 0
        })
    } else {
        notes.sort((a, b) => {
            if (a.edited < b.edited) return 1
            else if (b.edited < a.edited) return -1
            else return 0
        })
    }
}