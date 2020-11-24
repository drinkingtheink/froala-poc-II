<template>
<section class="fdb-block">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 text-center">
        <button v-on:click="toggleEditMode" class="edit-toggle">
          <span v-if="editMode"><i class="fas fa-save"></i></span>
          <span v-else><i class="fas fa-pen"></i></span>
        </button>
        <froalaView v-if="!editMode" v-model="model" class="lead"></froalaView>

        <froala v-if="editMode" :tag="'p'" v-model="model"></froala>

        <p class="mt-5 mt-sm-4">
          <a class="btn btn-primary" href="https://www.froala.com">Download</a>
        </p>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'CTA1',
  data() {
    return {
      editMode: false,
      model: '"\nSeparated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."\n'
    }
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    }
  }
};
</script>
