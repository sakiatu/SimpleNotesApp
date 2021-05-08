const notes = getNotes()
renderNotes(notes)

document.querySelector('#create-note').addEventListener('click', (e) => {
    location.assign('./create-note.html')
})

document.querySelector('#sort-by').addEventListener('change', e => {
    const  sortBy = e.target.value
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

    renderNotes(notes)
})


console.log(notes)
