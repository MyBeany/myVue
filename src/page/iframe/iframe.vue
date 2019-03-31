<template>
  <div>
    <iframe :src="query" class="iframeView"></iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query: '',
      }
    },
    created: function () {
      this.query = this.$route.params.path;
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>
  .iframeView {
    width: 100%;
    background: var(--viewBackgroundStyle);
    border-radius: 5px;
    min-height: calc(100% - 20px);
    border: 0;
  }
</style>
