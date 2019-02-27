<template>
  <div>
    <h1>RSS list</h1>
    <ul>
      <li v-for="rss in rssUrls">
        {{ rss.url }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rssUrls: [
        {url: 'https://qiita.com/'},
        {url: 'http://b.hatena.ne.jp/'},
        {url: 'https://nlab.itmedia.co.jp/'}
      ]
    }
  }
}
</script>
