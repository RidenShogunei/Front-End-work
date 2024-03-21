<template>
  <div class="diary">
    <a-card>
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
      <div class="write">
        <div class="title">日记本</div>
        <a-textarea v-model:value="value1" placeholder="在此输入你的日记" auto-size />
      </div>
      <div class="search">
        <div class="title">搜索</div>
        <a-textarea v-model:value="searchline" placeholder="在此输入查找片段" auto-size />
        <a-date-picker v-model:value="searchtime" style="margin-right: 10%;" />
        <a-button type="primary" @click="search">搜索</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "写日记",
      items: ["写日记", "查找日记", "所有日记"],
      searchline: '',
      searchtime: '',
      getcontent: ''
    };
  },
  methods: {
    navigate() {
      // 跳转
      this.$router.push('/mainpage');
    },
    search() {
      this.$axios.post('/diaries/search', { time: this.searchtime, content: this.searchline })
        .then(response => {
          // 处理响应数据
          console.log(response.data);
          this.getcontent = response.data;
        })
        .catch(error => {
          // 处理错误情况
          console.log(error);
        });
    },
  },
  created() {

  },
};
</script>

<style scoped>
.diary {
  background-image: url('../assets/blacktiane.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.write {
  width: 39%;
  margin-right: 10%;
}

.title {
  font-family: 'Times New Roman', Times, serif;
  /* 设置字体为 Times New Roman */
  font-style: italic;
  /* 设置字体样式为斜体 */
  text-align: center;
  font-size: 20px;
}
</style>