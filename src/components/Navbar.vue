<template>
  <nav class="navbar is-info">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'Notes' }"
          class="navbar-item is-size-5 has-text-weight-bold"
        >Vue Notes</router-link>

        <a class="navbar-burger" :class="{ 'is-active': menuIsActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': menuIsActive }">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <router-link :to="{ name: 'Notes' }" class="navbar-item">Home</router-link>
          <router-link :to="{ name: 'AddNote' }" class="navbar-item">Add Note</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuIsActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive;
    }
  }
};
</script>

<style>
</style>
