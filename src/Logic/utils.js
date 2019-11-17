export function getDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth()).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let hour = String(today.getHours()).padStart(2, '0');
    let minutes = String(today.getMinutes()).padStart(2, '0');
    let seconds = String(today.getSeconds()).padStart(2, '0');
    return (`${year}-${month}-${day}T${hour}:${minutes}:${seconds}`);
}

export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function sortNotes(allNotes, setAllNotes) {
    setAllNotes(allNotes.slice(0).sort((a, b) => a.date - b.date));
}