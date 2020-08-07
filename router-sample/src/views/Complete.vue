<template>
  <div class="complete">
    <h1>処理が完了しました</h1>
    <p>3秒後にトップページに移動します</p>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push("/")
      // 以下の書き方でも可
      // this.$router.push({name: "Home"})
    }, 3000)
  }
}
</script>