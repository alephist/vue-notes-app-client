<template>
  <div>
    <FormHelper title="Edit Note" v-if="note">
      <template v-slot:form>
        <form @submit.prevent="updateNote">
          <b-field label="Title">
            <b-input v-model.trim="title"></b-input>
          </b-field>

          <b-field label="Content">
            <b-input type="textarea" v-model.trim="content"></b-input>
          </b-field>

          <div class="field is-grouped">
            <div class="control">
              <button
                class="button is-info"
                :class="{ 'is-loading': isLoading }"
                @click="updateNote"
              >Submit</button>
            </div>

            <div class="control">
              <router-link :to="{ name: 'Notes' }" class="button">Cancel</router-link>
            </div>
          </div>
        </form>
      </template>
    </FormHelper>
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
import FormHelper from "./FormHelper";
import note from "../services/noteService";

export default {
  name: "EditNote",
  components: {
    FormHelper
  },
  data() {
    return {
      noteId: this.$route.params.id,
      note: null,
      title: "",
      content: "",
      isLoading: false
    };
  },
  async created() {
    this.isLoading = true;
    try {
      const { data } = await note.fetchNote(this.noteId);
      this.note = data;
      this.title = this.note.title;
      this.content = this.note.content;
    } catch (err) {
      alert(err.response.data);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    async updateNote() {
      this.isLoading = true;
      try {
        await note.updateNote(this.noteId, this.title, this.content);
        this.$router.push({ name: "Notes" });
      } catch (err) {
        alert(err.response.data);
      }
    }
  }
};
</script>

<style>
</style>
