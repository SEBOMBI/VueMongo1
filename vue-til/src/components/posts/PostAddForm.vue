<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">contents: </label>
          <textarea id="contents" rows="5" type="text" v-model="content" />
        </div>
        <button type="submit" class="btn">ADD</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAddForm',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    submitForm() {
      console.log('submit');
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #dae1e7;
}
</style>
