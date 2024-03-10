<template>
    <div class="detile">
        <div class="music">
            <div class="title">This is a random music player</div>
            <div class="name">{{ name }}</div>
            <br>
            <div class="album">
                <img :src="pictureurl" alt="专辑封面">
            </div>
            <br>
            <audio class="player" :key="musicurl" controls>
                <source :src="musicurl" type="audio/mpeg">
            </audio>
            <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import interact from 'interactjs';
export default {
    data() {
        return {
            musicurl: '',
            pictureurl: '',
            name: '',
        }
    },
    methods: {
        takesong() {
            axios.get('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json')
                .then(response => {
                    console.log(response.data.data);
                    this.musicurl = response.data.data.url;
                    this.pictureurl = response.data.data.picurl;
                    this.name = response.data.data.name;
                    console.log(this.musicurl)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        setDraggable() {
            interact('.music').draggable({
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                autoScroll: true,
                // 提供拖动完成后的反弹效果。
                onmove: this.dragMoveListener,
            });
        },
        dragMoveListener(event) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
                target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        },
    },
    mounted() {
        this.takesong();
        this.setDraggable();
    }
}
</script>

<style lang="less">
.detile {
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

.music {
    height: 30%;
    width: 30%;
    background-color: brown;
    opacity: 0.8;
    padding-bottom: 10px;
}

.title {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    font-size: 37px;
    text-align: center;
    color: #000000;
    justify-content: center;
    display: flex;
}

.name {
    font-family: 'Times New Roman', Times, serif;
    /* 设置字体为 Times New Roman */
    font-style: italic;
    /* 设置字体样式为斜体 */
    font-size: 30px;
    text-align: center;
    color: #e1dede;
}

.album {
    display: flex;
    justify-content: center;
    width: 35%;
    height: 35%;
    margin: 0 auto;
    /* 添加自动外边距 */
}

.player {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    /* 添加自动外边距 */
}
</style>