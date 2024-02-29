<template>
    <div class="home" @click="navigate">
        <h1>Welcome to my website</h1>
        <h2>Press anywhere to enter</h2>
    </div>
</template>

<script>
export default {
    methods: {
        navigate() {
            // 跳转
            this.$router.push('/mainpage');
        }
    }
}
</script>

<style>
.home {
  /* 之前的样式不变 */
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* 使用 flexbox 将内容居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction 为 column 可以使 h1 和 h2 垂直排列 */
  flex-direction: column;
}

.home h1 {
  font-size: 4em;
  color: aliceblue;
  /* 为 h1 添加底部边距 */
  margin-bottom: 20px;
}

.home h2 {
  /* 为 h2 添加样式 */
  font-size: 3em;
  color: rgb(230, 52, 21);
}
</style>