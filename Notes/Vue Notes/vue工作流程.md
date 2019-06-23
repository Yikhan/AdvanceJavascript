## Vue的实现流程
### 1. 解析模版成render函数
  - with的用法
    with可以简化代码块中this的使用(变量前面可以省略this.)，但实际开发时自己不要用

  - 模版中的所有信息都被render函数包括了
  
  - 模版中的用到的data属性都变成了JS变量
  
  - 模版中的v-model v-for v-on都变成了JS内置逻辑
  
  - render函数返回vnode(虚拟节点，借用了snabdom这一开源库的实现，snabdom的主要render函数为h，在Vue中被重新命名为_c)

### 2. 响应式开始监听
主要的实现方法就是使用JS的defineProperty函数
```javascript
// Vue定义data对象
var vm = {}
// 把data挂载到vm上，实际上相当于把data挂载到一个Vue实例上，这就是为什么data中定义的变量可以在组件的所有地方使用this.[定义的变量名]的方式被调用
var data = {
  price: 100,
  name: 'Jack'
}

// Vue的实现
for (key in data) {
  (function (key) {
    Object.defineProperty(vm, key, {
      get: function () {
        return data[key]
      },
      set: function (newVal) {
        data[key] = newVal
      }
    })
  })
}
```
- Object.defineProperty中get和set函数的设置实现了变化监听和双向绑定
- 将data的属性挂载到vm上(Vue实例)

### 3. 首次渲染，显示页面并且绑定依赖
- 初次渲染，执行updateComponent，执行vm._render()
  
- 执行render函数，访问申明的属性值，比如上面申明的data.name, data.price
  
- 会被响应式的get方法监听(通过监听get方法可以知道有哪些data变量是被实际引用的，没有被引用的变量不用监听更新，节省资源)
  
- 执行updateComponent，会调用vdom的patch方法

- patch把vnode渲染成Dom，初次渲染完成

```javascript
vm._update(vnode) {
  const prevVnode = vm._vnode
  vm._vnode = vnode
  if (!prevVnode) {
    // 首次渲染时把vnode挂载到Dom容器中，这是patch函数的第一种用法
    vm.$el = vm.__patch__(vm.$el, vnode)
  }
  else {
    // patch函数的第二种用法，更新节点
    vm.$el = vm.__patch__(prevVnode, vnode)
  }
}

function updateComponent () {
  vm._update(vm._render())
}
```

### 4. data属性变化，触发rerender
- 修改属性，被响应式的set监听到
  
- set中执行updateComponent

- updateComponent重新执行vm._render()
  
- 生成的vnode和preVnode会通过patch函数进行对比，只更新有变化的部分
