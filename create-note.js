const notes = getNotes()
const createOrUpdateBtn = document.querySelector('#create')
const title = document.querySelector('#note-title')
const description = document.querySelector('#note-description')
const noteId = location.hash.substr(1)
const note = notes.find(note => note.id === noteId)
if (note) {
    title.value = note.title
    description.value = note.description
    createOrUpdateBtn.textContent = 'Update'
}

createOrUpdateBtn.addEventListener('click', (e) => {
    if (note) {
        note.edited = moment.now()
        note.title = title.value
        note.description = description.value
    } else {
        notes.push({
            id: uuidv4(),
            title: title.value,
            description: description.value,
            edited: moment.now(),
            created: moment.now()
        })
        sortNotes(notes)
    }
    saveNotes(notes)
    location.assign('./index.html')
})