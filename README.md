# vue-dragging 1.1.0

  vue-dragging，一个自己写的vue插件，可以给任意标签添加拖拽的功能
### Install
`yarn add vue-dragging `

### 演示(demo)
<a href="https://boseny.github.io/vue-drag/">点击这里</a>

### How to use

普通html
```javascript
<script src="./vue.js"></script>
<script src="./vue-drag.min.js"></script>
```
是vue-drag.js不是vue-dragging.js

如果你的项目使用vue-cli搭建的 那么请这样使用:
```javascript
import Vue from 'vue'
import vueDrag from 'vue-dragging'
Vue.use(vueDrag)
```

在html当中添加标签，然后添加一个'v-drag'，假设为：
```html
<div class="demo">
  <div class="drag" v-drag></div>
</div>
```

这样绑定的dom就可以拖拽


### 1.1.0

加入了一个可拖拽区域和不可拖区域的方法，示例如下:

```html
        <div class="demo2" v-drag="'#dragable'">
            <div id="dragable"><span>这里可以拖动</span></div>
            <div class="content"><span>这里不可以</span></div>
        </div>
```

value传的是一个选择器，会让当前dom下第一个找到的seletor允许拖拽

如果你想让鼠标指针变成move，那么这样：

```html
        <div class="demo2" v-drag.cursor="'#dragable'">
            <div id="dragable"><span>这里可以拖动</span></div>
            <div class="content"><span>这里不可以</span></div>
        </div>
```
当然你也可以自己写样式去替换