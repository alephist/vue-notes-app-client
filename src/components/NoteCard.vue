<template>
  <div class="column is-4">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ note.title }}</p>
      </header>

      <div class="card-content">
        <div class="content">{{ note.content }}</div>
      </div>

      <footer class="card-footer">
        <router-link
          :to="{ name: 'EditNote', params: { id: note._id } }"
          class="card-footer-item"
        >Edit</router-link>
        <a class="card-footer-item" @click="deleteNote">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteCard",
  props: ["note"],
  methods: {
    deleteNote() {
      this.$emit("deleteNote");
    }
  }
};
</script>

<style>
</style>
