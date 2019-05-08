<template>
  <FormHelper title="Add Note">
    <template v-slot:form>
      <form @submit.prevent="addNewNote">
        <b-field label="Title">
          <b-input v-model.trim="title"></b-input>
        </b-field>

        <b-field label="Content">
          <b-input type="textarea" v-model.trim="content"></b-input>
        </b-field>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-info" :class="{ 'is-loading': isLoading }">Submit</button>
          </div>

          <div class="control">
            <router-link :to="{ name: 'Notes' }" class="button">Cancel</router-link>
          </div>
        </div>
      </form>
    </template>
  </FormHelper>
</template>

<script>
import FormHelper from "./FormHelper";
import note from "../services/noteService";

export default {
  name: "AddNote",
  components: {
    FormHelper
  },
  data() {
    return {
      title: "",
      content: "",
      isLoading: false
    };
  },
  methods: {
    async addNewNote() {
      this.isLoading = true;
      try {
        await note.addNote(this.title, this.content);
        this.$router.push({ name: "Notes" });
      } catch (err) {
        alert(err.response.data);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
</style>
