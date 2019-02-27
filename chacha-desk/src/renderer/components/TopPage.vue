<template>
    <div>
      <rss-list></rss-list>
      <article-list></article-list>
    </div>
</template>

<script>
  import RssList from './TopPage/RssList'
  import ArticleList from './TopPage/ArticleList'

  export default {
    name: 'top-page',
    components: { RssList, ArticleList }
  }
</script>

<style>

</style>
