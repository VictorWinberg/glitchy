<template>
  <div>
    <project-edit-form :id="id"></project-edit-form>
    <b-button variant="outline-dark" @click="back()">
      GO BACK
    </b-button>
    <b-button variant="outline-primary" @click="showProject(id)">
      SHOW
    </b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectEditForm from "@/app/project/edit/project-edit-form.vue";

export default Vue.extend({
  name: "ProjectEdit",
  components: {
    ProjectEditForm
  },
  props: {
    id: { type: String, required: true }
  },
  methods: {
    showProject(id: string) {
      this.$router.push({
        name: "ProjectShow",
        params: { id }
      });
    },
    back() {
      this.$router.push({ name: "ProjectList" });
    }
  }
});
</script>

<style lang="scss"></style>
