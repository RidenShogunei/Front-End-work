<template>
  <div class="diary">
    <a-card>
      <a-menu v-model:selectedKeys="activeTab" mode="horizontal" :items="items" />
      <div class="write" v-if="current === 'write'">
        <div class="title">日记本</div>
        <a-textarea v-model:value="value1" placeholder="在此输入你的日记" auto-size />
      </div>
      <div class="search" v-elseif="current === 'search'">
        <div class="title">搜索</div>
        <a-textarea v-model:value="searchline" placeholder="在此输入查找片段" auto-size />
        <a-date-picker v-model:value="searchtime" style="margin-right: 10%;" />
        <a-button type="primary" @click="search">搜索</a-button>
      </div>
    </a-card>
  </div>
</template>


<script setup>
import { ref } from 'vue'
let activeTab = ref('write');
let items = ref([
  {
    key: 'write',
    label: '写日记',
  },
  {
    key: 'search',
    label: '搜日记',
  },
  {
    key: 'all',
    label: '全部日记',
  }
]);
let searchline = ref('');
let searchtime = ref('');
let current = ref('write');
let value1 = ref('');



let search = () => {
  // Put your search function logic here
};

</script>

<style scoped>
.a-layout-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.a-layout {
  height: 100vh;
}

.diary-textarea {
  margin-bottom: 10px;
}

.search-input {
  margin-bottom: 10px;
}

.box-card {
  margin-bottom: 20px;
}
</style>