# vue-dragging
vue-dragging，一个自己写的vue插件，可以给任意标签添加拖拽的功能
### Install
`npm install vue-dragging`
### How to use
首先添加`  <script src="./vue.js"></script>`和`<script src="./vue-drag.js"></script>`标签 (记住是vue-drag.js不是vue-dragging.js!!!)
在html当中添加标签，假设为：
```html
<div class="demo">
  <div class="drag"  v-drag></div>
</div>
```
然后给要实现拖拽的标签添加css属性：
```css
.drag {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 200px;
      height: 200px;
      background: green;
    }
```
记住，必须要有position:absolute属性！！！
然后就是vue的一个初始化工作
```js
new Vue({
      el: '.demo',
      data: {

      }
    })
```
可以下载demo进行测试
