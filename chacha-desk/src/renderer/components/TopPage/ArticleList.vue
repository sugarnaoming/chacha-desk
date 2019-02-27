<template>
  <div>
    <h1>Article list</h1>
    <article-card></article-card>
  </div>
</template>

<script>
import ArticleCard from './ArticleList/ArticleCard'

export default {
  name: 'article-list',
  components: { ArticleCard }
}
</script>
