<template>
  <section class="section">
    <div class="container">
      <p class="content has-text-centered" v-if="!notes.length">There are no notes in the database</p>

      <div class="columns">
        <NoteCard
          v-for="note in notes"
          :key="note._id"
          :note="note"
          @deleteNote="handleDeleteNote(note._id)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import NoteCard from "./NoteCard";
import note from "../services/noteService";

export default {
  name: "Notes",
  components: {
    NoteCard
  },
  data() {
    return {
      notes: []
    };
  },
  methods: {
    async fetchAllNotes() {
      try {
        const { data } = await note.fetchNotes();
        this.notes = data;
      } catch (err) {
        alert(err.response.data);
      }
    },
    async handleDeleteNote(id) {
      try {
        await note.deleteNote(id);
        await this.fetchAllNotes();
      } catch (err) {
        alert(err.response.data);
      }
    }
  },
  async created() {
    await this.fetchAllNotes();
  }
};
</script>

<style scoped>
.columns {
  flex-wrap: wrap;
}
</style>
