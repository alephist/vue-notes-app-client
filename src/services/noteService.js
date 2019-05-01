import api from './api';

function fetchNotes() {
  return api.get('/notes');
}

function fetchNote(id) {
  return api.get(`/notes/${id}`);
}

function addNote(title, content) {
  return api.post('/notes', { title, content });
}

function updateNote(id, title, content) {
  return api.put(`/notes/${id}`, { title, content });
}

function deleteNote(id) {
  return api.delete(`/notes/${id}`);
}

export default {
  fetchNotes,
  fetchNote,
  addNote,
  updateNote,
  deleteNote
};
