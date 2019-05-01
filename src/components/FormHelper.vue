<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">{{ title }}</h1>

      <slot name="form"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "FormHelper",
  props: ["title"]
};
</script>

<style>
</style>
