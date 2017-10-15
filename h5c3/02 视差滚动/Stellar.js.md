## Stellar.js
  > Stellar.js是什么？

    stellar.js 是一个 jQuery插件，能很容易地给网站添加视差滚动效果。 尽管已经停止了维护，但它非常稳定，与最新版本的jQuery兼容，很多开发者也在使用它。 这个插件在jQuery插件库里很流行。

    官网:http://markdalgleish.com/projects/stellar.js/ 
    
### 引用 js包 

```javascript
<script src="path/to/jquery/jquery.min.js"></script>
<script src="path/to/jquery.stellar.min.js"></script>
```

### 引用html

```html
<div class="content" id="content1">
    <p>TEXT HERE</p>
</div>
<div class="content" id="content2">
    <p>TEXT HERE</p>
</div>
<div class="content" id="content3" data-stellar-background-ratio="0.5">
    <p>TEXT HERE</p>
</div>
<div class="content" id="content4" data-stellar-background-ratio="0.5">
    <p>TEXT HERE</p>
</div>
<div class="content" id="content5" data-stellar-background-ratio="0.5">
    <p>TEXT HERE</p>
</div>
<div class="content" id="content6" data-stellar-background-ratio="0.5">
    <p>TEXT HERE</p>
</div> 
```

### 引入CSS

~~~CSS
body {
    font-size: 20px;
    color: white;
    text-shadow: 0 1px 0 black, 0 0 5px black;
}
p {
    padding: 0 0.5em;
    margin: 0;
}
.content {
    background-attachment: fixed;
    height: 400px;
}
#content1 {
    background-image: url("xxx.jpg");
}
#content2 {
    background-image: url("xxx.jpg");
}
#content3 {
    background-image: url("xxx.jpg");
}
#content4 {
   background-image: url("xxx.jpg");
}
#content5 {
   background-image: url("xxx.jpg");");
}
#content6 {
    background-image: url("xxx.jpg");
}
~~~

### js调用函数

~~~javascript
$.stellar({
    horizontalScrolling: false,
    responsive: true
});
~~~



### 详细参数

| 名称                                      | 说明                                       |
| --------------------------------------- | ---------------------------------------- |
| horizontalScrolling 和 verticalScrolling | 该配置项用来设置视差效果的方向。horizontalScrolling设置水平方向，verticalScro设置垂直方向， 为布尔值，默认为true |
| responsive                              | 该配置项用来制定load或者resize时间触发时是否刷新页面，其值为布尔值，默认为false |
| hideDistantElements                     | 该配置项用来设置移出视线的元素是否隐藏，其值为布尔值，若不想隐藏则设置为false` |
| data-stellar-ratio="2"                  | 定义了此元素针对页面滚动的速度比率，比如，0.5为页面滚动的50%，2为页面滚动的200%，所以数值越大，你可以看到页面元素滚动速度越快。 |
| data-stellar-background-ratio           | 该配置项用在单个元素中，其值为一个正数，用来改变被设置元素的影响速度。 例如 值为0.3时，则表示背景的滚动速度为正常滚动速度的0.3倍。如果值为小数时最好在样式表中设置 |