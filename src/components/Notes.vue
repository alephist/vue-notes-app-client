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

      <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
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
      isLoading: false,
      notes: []
    };
  },
  methods: {
    async fetchAllNotes() {
      const { data } = await note.fetchNotes();
      this.notes = data;
    },
    async handleDeleteNote(id) {
      this.isLoading = true;
      try {
        await Promise.all([
          await note.deleteNote(id),
          await this.fetchAllNotes()
        ]);
      } catch (err) {
        alert(err.response.data);
      } finally {
        this.isLoading = false;
      }
    }
  },
  async created() {
    this.isLoading = true;
    try {
      await this.fetchAllNotes();
    } catch (err) {
      alert(err.response.data);
      this.notes = [];
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.columns {
  flex-wrap: wrap;
}
</style>
