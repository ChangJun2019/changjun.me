---
layout: content
title: 了不起的 Vue3
date: 2021-11-11
tag: Vue
image:
  src: https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/了不起的Vue3.png
  alt: Gradient background, including Caddy and Nuxt logo
---

2020 年 9 月 18 日 Vue3 发布，距今已经有一年多的时间。在这一年多的时间里 Vue 团队也相继发布了 3.1 和 3.2 两个小版本，其中 3.1 版本主要做了一些对 Vue2 的兼容，3.2 新增了一些新特性（例如 `<script setup>` ）和对性能进一步做了提升，详细可以查看 [更新日志](https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md)

据 [@Evan You](https://github.com/yyx990803) 所说，当新的 Vue3 文档完成后，会对 [vue](https://www.npmjs.com/package/vue) npm 包的最新版本进行变更。

2022年2月7日，Vue3已经是新的默认版本。

当我们运行  `npm install vue`  现在默认安装 Vue3。

可能有两个地方需要注意（指定好安装版本）：

- 当通过 CDN 链接使用 Vue 时。
- 当在 ` package.json `中使用 `latest` 标签安装 Vue 时。

## Vue3 新文档

2021 年 12 月 25 日，[@Evan You](https://github.com/yyx990803) 在其推特公布了新的[Vue3 文档](https://staging.vuejs.org/)。目前新的文档中某些部分还未完成（90%已完成），最终发布可能会在 2022 年 1 月中旬。

新的文档采用了 [VitePress](https://github.com/vuejs/vitepress)，源码在 [Vue docs](https://github.com/vuejs/docs/tree/next)。

新的文档有了：新的设计、对示例代码提供了 Composition API / Options API 切换、更好的解释、对新手更友好、更好的使用/学习建议等等。

你可以从文档中获取关于 Vue3 的一切，相信你肯定会有收获。 

## Vue3 的优势？

**更小的体积**：引入 `tree-shaking`，减少打包体积

**更好的性能**：数据劫持优化（`Object.defineProperty 到 Proxy `）和编译优化(Block tree patchFlags 和静态提升)

**最佳的开发体验**：`Composition API` （优化逻辑组织和复用）和源码使用 `Typescrip` 更好的类型支持

## 我认为的 Vue

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/我认为的Vue.png)

## 好的开发体验

### 最佳实践 vitesse

强烈推荐可以看一下 [vitesse](https://github.com/antfu/vitesse) 这个模板，可以看到一些 Vue3 结合 Vite 的最佳实践，可以用来参考或者作为你的学习入门模板。

### 编辑器插件 volar

使用更强大支持 Vue3 新特性的 [volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) 作为编辑器插件。(禁止Vetur，以免造成冲突。)

### script setup

`<script setup>` 是在单文件组件 (SFC) 中使用 [组合式 API](https://v3.cn.vuejs.org/api/composition-api.html) 的编译时语法糖。如果还不知道如何使用可以查看 [官方文档](https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)，在这里 [在线体验](https://sfc.vuejs.org/) 体验和查看编译后的内容。

可以结合 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 按需导入组件和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 自动导入API插件获得更好的开发体验。

### style v-bind

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/vue-style-bind.png)

### Ref Sugar(实验性)

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/ref_sugar.png)

[Ref sugar RFC](https://github.com/vuejs/rfcs/discussions/369)


### setup props 解构(实验性)

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/props.png)

[查看更多 RFC](https://github.com/vuejs/vue-next/pull/4690)
	
## 你可能会用到的周边库

### Vue3 的组件库

PC 端：
- [Ant Design of Vue](https://next.antdv.com/docs/vue/introduce-cn)
- [element-plus](https://element-plus.gitee.io/zh-CN/guide/installation.html)
- [Arco Design Vue](https://arco.design/vue/docs/start) 

移动端：
- [Vant](https://youzan.github.io/vant/v3/#/zh-CN)
- [NutUI](https://nutui.jd.com/#/intro)
- [Ionic](https://ionicframework.com/docs/vue/overview)

当然还有其它很多非常优秀的组件库，这里仅列举了我觉着有一定生态的组件库。

### pinia 下一代状态管理库

[pinia](https://pinia.esm.dev/introduction.html) 是一个 Vue 的极轻量的状态管理库，它依赖于新的响应式系统（ reactivity ）和 composition api构建，最近受到了很多的关注，作者也是 Vue 的团队成员。它有着一下优点：

- 完整的 TypeScript 支持
- API设计非常友好，使用足够简单。（接近 [Vuex 5 RFC](https://github.com/vuejs/rfcs/discussions/270)）
- 模块化设计，支持代码自动拆分。
- 支持 Vue devtools
- 极轻量（1kb 左右）

pinia 的作者声明，pinia 并不是为了替代 Vuex，它旨在让开发者能够容易迁移到 Vuex，未来和 Vuex 融合。详情可以查看 [Comparison with Vuex](https://pinia.esm.dev/introduction.html#comparison-with-vuex)  (Evan You也说了 pinia 是事实上的 Vuex5)

### 其它

- [Nuxt 3 beta](https://github.com/nuxt/framework)
- [vitesse](https://github.com/antfu/vitesse) vue3 vite Starter Template
- [Vue vben admin](https://github.com/anncwb/vue-vben-admin) 基于Vue3, vite and TypeScript的后台管理模板
- [vueuse](https://github.com/vueuse/vueuse) 适用于 Vue2 和 Vue3 可组合的函数库
- [vue-demi](https://github.com/vueuse/vue-demi) 为 Vue2 和 Vue3 创建通用库

## Vue2 to Vue3

### 迁移指南和工具

 1. [官方迁移指南](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)
 2. [GoGoCode](https://gogocode.io/zh)阿里开源的一个迁移工具。

### 仍然使用 Vue2

你可以使用 [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2) 和 [unplugin-script-setup-vue2
](https://github.com/antfu/unplugin-vue2-script-setup) 仍然获得非常不错的开发体验。

2.7 将会是 Vue2 的最后一个小版本。

## Vue devtools 

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/vue-devtools.png)

[Chrome 安装Beta](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

如果有安装稳定版的话，先禁用，以免产生冲突。如果你发现开发者工具当中并没有 Vue 选项，建议你刷新页面并重新打开 devtools 。

## 辅助工具

- [Vue SFC Playground](https://sfc.vuejs.org/)
- [Vue 3 Template Explorer](https://vue-next-template-explorer.netlify.app/) Vue3 的模板编译

## composition api

以 `setup` 函数作为入口，提供了一系列的响应式的 API、生命周期，使得不依赖 options API 就可以开发一个组件。**可以将同一个功能逻辑组合在一起，不再分散，使代码有更好的可维护和复用性**

容易复用、可以灵活组合、更好的上下文支持、更好的类型支持、逻辑组织不再分散 

强烈推荐可以学习和使用同时支持 2 和 3 的 [vueuse](https://github.com/vueuse/vueuse) 组合式 API 工具包 。

## 组件数据通信

组件通信的情况大概有这么几种情况 父与子 | 兄弟之间 | 祖孙与后代 | 啥关系没有 

那么 Vue 组件通信的方法有这么几种：

- 组件 props 传递 (父传子)
- $emit 触发自定义事件 (子传父)
- 使用 ref (父使用子的实例)
- EventBus （兄弟）
- attrs 与 listeners （祖先传子孙）
- Provide 与 Inject （祖先传后代）
- Vuex （跨组件和集中式存储）

这里主要提及一下可以代替 Vuex 的 `provide / Inject` (依赖注入)。（你会在 vue-router-next 和 pinia 的源码中看到它）

使用方法：

```javascript
// 祖父组件中 响应式的话注入 ref 或 reactive 响应式对象
provide(key,value)
// 孙子组件中
inject(key)
// ts 中可以通过 InjectionKey 同步类型
```

原理（源码在`packages/runtime-core/src/apiInject.ts`）：

子组件继承父组件的 `provides` 属性，因此可以一层一层的访问，其中 `provide` 方法是写入 `key-value` 到当前实例上的 `provides` 如果 key 存在就覆盖(因此如果有重命名的 key 访问的是最近的) `inject` 是从当前实例上的 `provides` 获取 `key`

## 生命周期

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/vue3-lifecycle.png)

调试钩子 `renderTracked` 和 `renderTriggered`

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/Vue3调试钩子.png)

## 指令和内置组件

### v-memo

`v-memo` 是 3.2 新增的一个指令，跟 `v-once` 类似，不同的是 `v-once` 后停止后续的更新，`v-memo` 会有条件的停止部分模板的后续更新。

```html
// 接收一个数组，如果数组中的每个值和上次渲染时候相同，则整个该子树的更新会被跳过。
<div v-memo="[valueA, valueB]">
  ...
</div>
```

## 深入组件

### createApp 做了啥？

在 `createApp` 前面运用 `debugger` 大法。

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
debugger;
const app = createApp(App)
app.use(router)
app.config.isCustomElement = tag => tag.startsWith('wx-open')
app.config.globalProperties.$utils = {}
app.mount('#app')
```

```javascript
// vue-next-master/packages/runtime-dom/src/index.ts
const createApp = (...args)=>{
  // 如果你仅使用了reactivity响应式，
  // 没有显示的调用 createApp 那么渲染器代码将不会被打包
  const app = ensureRenderer().createApp(...args)
  app.mount = (containerOrSelector)=> {}
  return app
}
```

```javascript
// vue-next-master/packages/runtime-dom/src/index.ts
// 创建了一个渲染器对象
const ensureRenderer = () => {
  const render = (vnode, container, isSVG)=>{
    // 组件渲染的逻辑
  }
  function createAppAPI(render) {
    return function createApp(rootComponent, rootProps = null){
      // 创建 app 对象
      const app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        use(){},
        mixin(){},
        component(){},
        ...
        mount(){}
      }
    }
  }
  return {
    render,
    createApp: createAppAPI(render)
  }
}
```

```javascript
// vue-next-master/packages/runtime-core/src/apiCreateApp.ts
// 标准的挂载方法
const mount = (rootContainer)=>{
  // 创建 vnode
  const vnode = createVNode(rootComponent, rootProps)
  // 渲染 vnode
  render(vnode, rootContainer)
  app._container = rootContainer
  return vnode.component.proxy
}
// 重写的 mount 方法
const mount = (containerOrSelector)=>{
  // 对于传入字符串的，将其转化成 dom 对象
  const container = normalizeContainer(containerOrSelector)
  // 挂载前清空 html
  container.innerHTML = ''
  // 执行组件的挂载
  // 参数依次是容器，isHydate， 是否是 svg
  return mount(container, false, container instanceof SVGElement)
}
```

### 组件渲染的流程：

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/组件渲染.png)

```javascript
// app.vue
<template>
  <div id="app" class="app-class">
    <p>hello vue</p>
  </div>
</template>
```

假设我们的组件模板如上，在 `.mount` 前打上 **`debugger`**，开始调试吧。

那么组件渲染的主流程如下：

1. 为传入的 App 组件创建 vnode `createVNode`
2. 开始渲染 vnode `render`
3. 进入 `patch`, 由于 vnode 类型是组件，所以进入处理组件的方法 `processComponent`
4. 进入 `mountComponent` 开始挂载组件，创建组件实例，设置组件实例，运行带副作用的渲染函数
5. 进入 `setupRenderEffect`, 渲染生成子树 vnode
6. 再次进入 `patch` 挂载子树 vnode ，由于类型是 DOM 元素
7. 进入 `processElement` 处理 DOM 元素，进入 `mountElement`，创建元素节点，子元素是数组，进入`mountChildren`，遍历子节点 `pach` 挂载到父节点上。
8. 进入 `hostInsert` 将创建的节点插入到 `#app` 上。

源码中的主流程：

```javascript
// vue-next-master/packages/runtime-core/src/renderer.ts
// 渲染 vnode
const render = (vnode, container) => {
  if (vnode == null) {
    // 销毁组件
  } else {
    // 创建更新组件
    patch(container._vnode || null, vnode, container)
  }
}
```

```javascript
// vue-next-master/packages/runtime-core/src/renderer.ts
// 主要参数 旧节点，新节点，DOM 容器
const patch = (n1,n2,container)=> {
  const { type, ref, shapeFlag } = n2
  switch (type) {
    // 根据节点类型分别处理不同 vnode
    // 例如 processText 处理文本
    // processComponent 处理组件
  }
}

```

```javascript
// 处理 vnode 类型是组件
const processComponent = (n1,n2,container)=> {
  if(n1 == null){
    // 挂载组件
    mountComponent()
  }else{
    // 更新组件
    updateComponent()
  }
}

// 挂载组件
const mountComponent = ()=>{
  // 创建组件实例
 const instance = createComponentInstance()
  // 设置组件实例
  setupComponent(instance)
  // 设置带副作用的渲染函数
  setupRenderEffect(
    instance, 
    initialVNode, 
    container, 
    anchor, 
    parentSuspense, 
    isSVG, 
    optimized
  )
}
// 带副作用的渲染函数，比如当数据修改的时候会执行渲染函数
const setupRenderEffect= ()=> {
  instance.update = effect(function componentEffect(){
    if (!instance.isMounted){
      // 渲染组件
      const subTree = (instance.subTree = renderComponentRoot(instance))
      // 挂载子树 vnode，继续 patch
      patch(null,subTree,container,anchor,instance,parentSuspense,isSVG)
    }else{
      // 更新组件
    }
  })
}
```

```javascript
// 如果 vnode 类型是元素的情况
const processElement = () => {
  if(n1 == null){
    mountElement()
  }else{
    // 更新元素
  }
}

// 挂载元素
const mountElement = ()=>{
  el = vnode.el = hostCreateElement()
  // 如果子节点是数组的情况 挂载子节点
  mountChildren()
}

const mountChildren = () => {
  // for 循环子项再进行 patch挂载
  for(){
    patch()
  }
}

```

### 组件更新

组件更新的主要流程：

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/组件更新流程.png)

当元素子节点更新的时候：

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/元素子节点更新.png)

```javascript
// 设置副作用渲染函数
const setupRenderEffect= ()=> {
  instance.update = effect(function componentEffect(){
    if (!instance.isMounted){
      // 渲染组件
    }else{
      // 更新组件
      let { next, bu, u, parent, vnode } = instance
      // next：新的组件 vnode 
      if (next) {
        next.el = vnode.el
        // 更新组件 vnode 信息
        updateComponentPreRender(instance, next, optimized)
      } else {
        next = vnode
      }
      // 渲染新的子树 vnode
      const nextTree = renderComponentRoot(instance)
      // 旧的子树 vnode
      const prevTree = instance.subTree
      // 更新子树 vnode
      instance.subTree = nextTree
      // 组件更新 进行新旧子树patch
      patch(
        prevTree,
        nextTree,
        hostParentNode(prevTree.el!)!,
        getNextHostNode(prevTree),instance,parentSuspense,isSVG
      )
    }
  })
}

// 更新组件的方法
const updateComponent = (n1,n2,optimized) => {
  // 会否需要更新子组件
  if (shouldUpdateComponent(n1, n2, optimized)){
    instance.next = n2
    // 避免子组件重复更新
    invalidateJob(instance.update)
    // 子组件副作用渲染函数
    instance.update()
  }else{
    // 不需要更新，复制属性
    n2.component = n1.component
    n2.el = n1.el
    instance.vnode = n2
  }
}



```


## 响应式系统

### 响应性原理

![响应性原理](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/响应性.png)

### Vue 响应性原理

![Vue 响应性原理](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/Vue响应式原理.png)

### 调试 computed 3.2+

```javascript
// computed可以调试，仅在开发模式下生效
const getCount = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 作为依赖被追踪时触发
    debugger
  },
  onTrigger(e) {
    // 当 count.value 被修改时触发
    debugger
  }
})

// 访问 getCount，应该触发 onTrack
console.log(getCount.value)
// 修改 count.value，应该触发 onTrigger
count.value++

```

### watch 和 watchEffect

- `watch` 是惰性的，只有当侦听源发生变化才执行回调
- `watch` 明确的知道什么状态应该触发回调
- `watch` 可以访问状态前后变化的值
- `watchEffect` 立即执行传入的函数，并在其依赖变更时重新运行
- `watchPostEffect` 组件更新后重新运行 和 `watchSyncEffect` 始终强制同步触发 (3.2+)

### effectScope 作用域 API 3.2+

`effectScope` 是一个 API，创建一个作用域对象，以捕获其内部创建的响应式 effect（计算属性/侦听器等），使其可以统一处理，主要面向库的作者。[RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md)

例如你可以在 `pinia` 的相关源码中看到它。

```javascript
export function createPinia(): Pinia {
	// 创建一个副作用作用域对象 detached: true 分离模式 不会被父的副作用作用域收集
	const scope = effectScope(true)
	...
}

// 定义dispose 用于删除 store 停止相关的副作用 以及清空订阅（devtools停止显示）
function $dispose() {
	scope.stop()
	subscriptions = []
	actionSubscriptions = []
	pinia._s.delete($id)
}

```

## 模板编译

当我们通过 `<template></template>` 来书写组件结构时候，Vue 会将其编译成组件的 `render` 函数，你可以通过 [模板导出工具](https://vue-next-template-explorer.netlify.app/) 在线查看编译后的结果。

模板编译大致会经历三个过程，解析 template 到 AST、转换 AST、生成代码。你可以在这里 [AST导出工具](https://astexplorer.net/) 查看AST结构。

### 模板编译的流程

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/Vue模板编译.png)

### 模板编译时的优化

- Block Tree 和 PatchFlags 优化
- 静态提升
- Cache Event handler

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/Vue编译优化.png)

### 关于 patchFlags 和 shapFlags

![](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/patchFlags和shapeFlags.png)

`patchFlags` (packages/shared/src/patchFlags.ts) 是编译时 `transform` 给 AST 节点 打上的优化标识，当在 diff 期间，我们就可以准确的更新。

`shapFlags` (packages/shared/src/shapeFlags.ts) 顾名思义，其实就是元素的类型定义。例如元素、函数组件、插槽等。


## 更新记录

我会持续保持这篇内容最新...

- 12 月 26 日: 新增了 Vue3 新文档的内容
- 2 月 7 日：新增了  Vue3 成为新的默认版本的内容


## 写在最后的

谢谢你读到这里，如果你对这篇文有一些建议/指正，欢迎你告诉我。如果觉着可以，点个赞/转发。

愿此时的你能够开心，下次见！💖



