<template>
    <div class="home">
        <div class="chose">
            <div class="music" @dblclick="gotomusic">music</div>
            <div class="diary" @dblclick="gotodiary">diary</div>
            <div class="game" @dblclick="gotogame">game</div>
            <div class="learn" @dblclick="gotolearn">learn</div>
            <div class="crazy" @dblclick="gotocrazy">crazy</div>
            <div class="animation" @dblclick="gotoanimation">animation</div>
            <div class="TODO">TODO</div>
            <div class="TODO">TODO</div>
            <div class="TODO">TODO</div>
        </div>
    </div>
</template>

<script>
import interact from 'interactjs';
export default {
    data() {
        return {
        };
    },
    methods: {
        gotodiary() {
            this.$router.push('/diary')
        },
        gotogame() {
            this.$router.push('/enter')
        },
        gotoanimation() {
            this.$router.push('/animation');
        },
        gotomusic() {
            this.$router.push('/music');
        },
        gotolearn() {
            this.$router.push('/learn');
        },
        gotocrazy() {
            this.$router.push('/crazy');
        },
        setDraggable() {
            interact('.chose').draggable({
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
    created() {
        // 在组件创建时执行的逻辑
        this.setDraggable();
    }
};
</script>

<style scoped>
.home {
    /* 之前的样式不变 */
    background-image: url('../assets/trueback.jpg');
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

.chose {
    display: grid;
    grid-template-columns: auto auto auto;
    /* 创建三列 */
    grid-gap: 10px;
    /* 定义网格线的大小 */
    padding: 10px;
}

.music {
    background-color: rgba(224, 23, 23, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.diary {
    background-color: rgba(228, 181, 10, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.game {
    background-color: rgba(0, 191, 255, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.crazy {
    background-color: rgba(171, 4, 255, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.learn {
    background-color: rgb(255, 255, 255, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.animation {
    background-color: rgba(84, 239, 18, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.TODO {
    background-color: rgba(41, 27, 27, 0.5);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    transition: background-color 0.5s ease, font-size 0.5s ease;
}

.animation:hover,
.music:hover,
.diary:hover,
.game:hover,
.crazy:hover,
.learn:hover,
.TODO:hover {
    background-color: rgba(239, 7, 146, 0.8);
    padding: 60px;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 50px;
    color: aqua;
}
</style>