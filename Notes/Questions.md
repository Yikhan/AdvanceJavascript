## 要点问题总结
### 使用jQuery和框架的区别
- 数据和视图的分离解耦

- 以数据驱动视图，只关心数据变化，Dom操作被封装

## 什么是MVVM
- MVVM - Model View ViewModel
  
- 三者之间的联系，如何对应到实际的代码

- ViewModel的理解，联系View和Model

## Vue三要素
- 响应式: Vue如何监听data中属性的变化
  
- 模版引擎: Vue的模版如何被解析，指令如何处理
  
- 渲染: Vue的模版如何被渲染成html? 以及渲染过程

## Vue如何实现响应式
- 关键是理解Object.defineProperty
  
- 将data的属性代理到vm上
  
## Vue如何解析模版
- 模版: 字符串，逻辑，嵌入JS变量

- 模版必须被转化为JS代码

- render函数是什么样子的
  
- render函数执行返回vnode

- updateComponent

## Vue实现的整体流程
1. 解析模版为render函数 
   
2. 响应式监听(get, set都要监听)
   
3. 首次渲染，显示页面，绑定依赖
   
4. data属性变化，触发rerender