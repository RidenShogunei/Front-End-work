<template>
    <div class="blog">
        <el-card>
            <el-descriptions class="margin-top" title="个人简介" :column="3" :size="size" border>
                <template #extra>
                    <el-button type="primary" @click="copy">复制信息</el-button>
                </template>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon :style="iconStyle">
                                <user />
                            </el-icon>
                            名字
                        </div>
                    </template>
                    陈瑾旭
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon :style="iconStyle">
                                <iphone />
                            </el-icon>
                            电话
                        </div>
                    </template>
                    13870105832
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon :style="iconStyle">
                                <location />
                            </el-icon>
                            地址
                        </div>
                    </template>
                    嘉定
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon :style="iconStyle">
                                <tickets />
                            </el-icon>
                            就读学校
                        </div>
                    </template>
                    <el-tag size="small">同济大学</el-tag>
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon :style="iconStyle">
                                <office-building />
                            </el-icon>
                            详细地址
                        </div>
                    </template>
                    曹安公路4800号
                </el-descriptions-item>
            </el-descriptions>
            
        </el-card>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
    Iphone,
    OfficeBuilding,
    Tickets,
    User,
} from '@element-plus/icons-vue'

const size = ref('default')
const iconStyle = computed(() => {
    const marginMap = {
        large: '8px',
        default: '6px',
        small: '4px',
    }
    return {
        marginRight: marginMap[size.value] || marginMap.default,
    }
})

const copy = () => {
    navigator.clipboard.writeText('姓名:陈瑾旭,电话:13870105832').then(() => {
        alert("复制成功！");
    }).catch(err => {
        alert('出错了，未能复制！', err);
    });
}
</script>

<style scoped>
.blog {
    /* 之前的样式不变 */
    background-image: url('../../assets/blog.jpg');
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
</style>