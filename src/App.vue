<template>
  <div id="app">
    <div class="demo">
        <div class="drag" v-drag>普通的拖动</div>
        <div class="demo2" v-drag:dragable>
            <div id="dragable"><span>这里可以拖动</span></div>
            <div class="content"><span>这里不可以</span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.drag {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 200px;
            height: 200px;
            background: green;
            cursor: move;
        }

        #dragable {
            position: relative;
            top: 0px;
            left: 0px;
            width: 220px;
            height: 50px;
            background: #0fcebd;
            color: #ffffff;
            cursor: move;
        }

        #dragable span {
            width: 220px;
            line-height: 50px;
        }

        .demo2 {
            position: absolute;
            top: 20px;
            left: 500px;
            z-index: 1111;
            background: red;
        }

        .content {
            width: 220px;
            height: 300px;
        }
</style>
