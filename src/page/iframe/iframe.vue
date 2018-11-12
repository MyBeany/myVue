<template>
  <div>
    <keep-alive>
      <iframe :src="query" class="iframeView"></iframe>
    </keep-alive>
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
