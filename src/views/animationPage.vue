<template>
  <div class="animation">
    <div class="sample">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    navigate() {
      // 跳转
      this.$router.push('/mainpage');
    }
  },
  created() {

  }
};
</script>

<style scoped>
.animation {
  /* 之前的样式不变 */
  background-image: url('../assets/yaya.png');
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

@keyframes example {
  0%   {background-color: red;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
.sample {
  width: 500px;
  top: 500px;
  animation-name: example;
  animation-duration: 4s;
}
</style>