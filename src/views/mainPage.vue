<template>
    <div class="main">
        <el-card class="box-card">
            <div class="avatar">
                <el-avatar :size="200" :src="require('../assets/me.jpg')" />
            </div>
            <h1>姓名: 陈瑾旭</h1>
            <h1>学校：同济大学</h1>
            <h1>专业：软件工程</h1>
            <h1>兴趣爱好：编程，阅读，足球</h1>
            <h1>联系方式：13870105832</h1>
            <h1>个人简介：对新技术充满热情，善于解决问题，具有良好的团队合作精神。</h1>
        </el-card>
    </div>
</template>

<script>

</script>

<style>
.main {
    background-image: url('../assets/lrosrick.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.box-card {
    width: 500px;
    height: 700px;
    background-color: rgba(121, 134, 10, 0.033);
    position: relative;
    top: 10px;
    left: 20px;
    padding: 20px;
    box-sizing: border-box;
}

.avatar {
    display: flex;
    justify-content: center;
}


h1, h2, h3, h4 {
    margin: 10px 0;
    color: rgb(222, 230, 220)
}
</style>