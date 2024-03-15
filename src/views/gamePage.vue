<template>
  <div class="game">
    <div class="panzi">
      <table id="minesweeper">
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td class="gezi" v-for="(col, colIndex) in rows[row]" :key="colIndex" @click="clickCell(rowIndex, colIndex)">
              <div v-if="!col.isRevealed">?</div> <!-- If not revealed, show a question mark. -->
              <div v-else-if="col.mine">💣</div> <!-- If revealed and it's a mine, show a bomb. -->
              <div v-else>0</div> <!-- If revealed and it's not a mine, show a zero. -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
      rowNum: 10,
      colNum: 10,
      leiNum: 10,
    };
  },
  methods: {
    clickCell(rowIndex, colIndex) {
      // 标记格子为已揭示
      console.log(rowIndex, colIndex)
      this.rows[rowIndex].cols[colIndex].isRevealed = true;
      console.log(this.rows)
    },
    start() {
      let rows = Array(this.rowNum).fill().map(() => Array(this.colNum).fill({ mine: false, isRevealed: false }));

      // 随机分布雷
      let count = 0;
      while (count < this.leiNum) {
        let rowIndex = Math.floor(Math.random() * this.rowNum);
        let colIndex = Math.floor(Math.random() * this.colNum);
        if (!rows[rowIndex][colIndex].mine) {
          rows[rowIndex][colIndex].mine = true;
          count++;
        }
      }
      // 更新rows
      this.rows = rows;
    },
    navigate() {
      // 跳转
      this.$router.push('/mainpage');
    }
  },
  created() {
    this.start()
  }
};
</script>

<style scoped>
.game {
  /* 之前的样式不变 */
  background-image: url('../assets/starhunter.png');
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

.panzi {
  height: 80%;
  width: 50%;
  background-color: brown;
  opacity: 0.8;
  padding-bottom: 10px;
  margin: 10px;
}

#minesweeper {
  font-family: 'Times New Roman', Times, serif;
  /* 设置字体为 Times New Roman */
  font-style: italic;
  /* 设置字体样式为斜体 */
  font-size: 37px;
  text-align: center;
  color: #000000;
  justify-content: center;
  align-items: center;
  display: flex;

}

.gezi {
  padding-left: 25px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 25px;
  border: white solid;
}
</style>