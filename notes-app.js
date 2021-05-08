const notes = getNotes()
renderNotes(notes)

document.querySelector('#create-note').addEventListener('click', (e) => {
    location.assign('./create-note.html')
})

document.querySelector('#sort-by').addEventListener('change', e => {
    const  sortBy = e.target.value
    sortNotes(notes,sortBy)
    renderNotes(notes)
})


console.log(notes)
