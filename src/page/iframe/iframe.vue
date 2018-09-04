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
      this.query = window.localStorage.getItem('query');
    }
  }
</script>

<style scoped>
  .iframeView {
    position: absolute;
    width: 87%;
    background: var(--viewBackgroundStyle);
    border-radius: 5px;
    min-height: calc(100% - 110px);
    border: 0;
  }
</style>
