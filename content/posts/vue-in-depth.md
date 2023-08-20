---
layout: content
title: 关于 Vue3
date: 2021-08-04
duration: 10min
tag: 前端
cover: https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com//31D1D75D-BD9A-419B-9EF3-A1656F96CE82_1_105_c.jpeg
---

## Composition API

以 `setup` 函数作为入口，提供了一系列的响应式的 API、生命周期，使得不依赖 options API 就可以开发一个组件。**可以将同一个功能逻辑组合在一起，不再分散，使代码有更好的可维护和复用性**

### setup

- `setup()` 在创建组件之前执行，Composition API 入口，等同于 `beforeCreate` 和 `created`
- **组件实例尚未被创建**，因此无法访问组件中声明的任何属性（`data`、`computed`、`methods`）
- 参数是 `props` 和 `context`
- `props` 是响应式的，不能使用解构，可以使用 `toRefs`
- `context` 是一个包含 `attrs`、`slots`、`emit` 的对象，不是响应式的，可以解构。
- 返回一个对象或者一个渲染函数，对象可以在模板中使用。

```javascript
<script>
import { ref, reactive, toRefs, toRef } from "vue";

export default {
  props: {
    title: String,
  },
  setup(props, { attrs, slots, emit }) {
    // const { title } = toRefs(props)
    // title 是可选的 toRef可以自动创建一个
    const title = toRef(props, "title");
    // 返回一个对象
    return { title };
    // 返回一个渲染函数
    // return () => h("div", [title?.value])
  },
};
</script>
```

### 生命周期钩子

- `beforeMount` > `onBeforeMount`
- `mounted` > `onMounted`
- `beforeUpdate` > `onBeforeUpdate`
- `updated` > `onUpdated`
- `beforeUnmount` > `onBeforeUnmount`
- `unmounted` > `onUnmounted`
- `errorCaptured` > `onErrorCaptured`
- `renderTracked` > `onRenderTracked`
- `renderTriggered` > `onRenderTriggered`


### 从 options 到 Composition

思考一个最简单的场景：
1. 根据组件的 `props`, 获取列表
2. 当组件的 `props` 更新，重新获取列表
3. 通过计算属性获取列表中状态正常的项

```javascript
import { featchList } from "@/api/list";
export default {
  name: "list",

  props: {
    houseType: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      status: 0,
      list: [],
    };
  },

  computed: {
    filterList() {
      return this.list.filter((item) => (item.status = this.status));
    },
  },

  watch: {
    houseType() {
      this.getList();
    },
  },

  mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      const params = {
        houseType: this.houseType,
      };
      const list = await featchList(params);
      this.list = list;
    },
  },
};
```

```javascript
import { defineComponent, toRefs } from "vue";
import useGetList from "@/assets/useGetList.js";
import useFilterList from "@/assets/useFilterList.js";
export default defineComponent({
  props: {
    houseType: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    // setup  使用 Composition API 位置
    // toRefs 将响应式对象转化为普通对象，
    // 其中每个属性都是指向原始对象对应属性的 ref，因此可以使用解构，不会丢失响应性。
    const { houseType } = toRefs(props);
    const { list, getList } = useGetList(houseType);
    const { status, filterList } = useFilterList(list);
    return {
      list: filterList,
      getList,
      status,
    };
  },
});
```

```javascript
// useGetList.js
import { featchList } from "@/api/list";
import { onMounted, ref, watch } from "vue";

export default function useGetList(houseType) {
  // ref 函数创建一个响应式变量
  // ref 将值封装在一个对象中，通过.value 访问或者修改响应式变量的值
  const list = ref([]);

  const getList = async () => {
    const params = {
      houseType: houseType.value,
    };
    // 通过 .value修改响应式变量的值
    list.value = await featchList(params);
  };

  // 生命周期钩子，只能在 setup 中使用，因为需要依赖调用 setup 的组件实例
  onMounted(getList);

  // watch 等同于 this.$watch 或者 options watch
  // 监听一个响应式引用或者一个 getter 函数
  // 如果需要监听多个 watch([one, tow], ([new1,new2], [old1,old2]) => { /* ... */ })
  watch(houseType, (newValue, oldValue) => {
    getList();
  });

  return {
    list,
    getList,
  };
}
```

```javascript
// useFilterList.js
import { computed, ref } from "vue";

export default function useFilterList(list) {
  const status = ref(0);

  // computed 等同于 options 的 computed
  // 接受一个 getter函数 返回一个只读的响应式引用
  // 也可以接受一个包含 get 和 set 函数的对象来创建可写的响应式引用
  const filterList = computed(() => {
    return list.value.filter((item) => item.status === status);
  });

  return {
    status,
    filterList,
  };
}
```

### Teleport

`Teleport`，Vue 3 内置组件，顾名思义，它的出现主要解决了可以将某个组件或者组件中的一部分挂载到指定的 DOM 节点上，例如全局弹框。

```html
<!-- to 必须是有效的选择器 -->
<teleport to="#modals">
  <div class="model">弹框</div>
</teleport>
```

### Fragments

在 Vue 3 中，组件支持了可以多个根节点。（终于可以不用套 `<div>` 了！）

```html
<template>
  <div></div>
  <div></div>
</template>
```

### Suspense
`Suspense` Vue 3 内置组件，主要是配合异步组件使用（要返回一个 `Promise`）,如果在加载组件中发生了错误可以在 `errorCaptured` 中捕获错误，进行相应处理。
```html
<Suspense>
  <!-- 默认 -->
  <template #default>
    <!-- 异步组件 -->
    <async-show></async-show>
  </template>
  <!-- 加载中要显示的 -->
  <template #fallback>
    <h1>加载中...</h1>
  </template>
</Suspense>
```



### JSX 或者 TSX 使用

Vue CLI 中 [`@vue/babel-plugin-jsx`](https://github.com/vuejs/jsx-next)

```bash
npm install @vue/babel-plugin-jsx -D
```

```javascript
// .babelrc
{
  "plugins": ["@vue/babel-plugin-jsx"]
}
```

vite 中 [`@vitejs/plugin-vue-jsx`](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)

```javascript
// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'
export default {
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ]
}
```

```javascript
// TestJsx.tsx
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup(){
    const state = reactive({
      name:'chang'
    })

    return ()=> {
      return (<p>{state.name}</p>)
    } 
  }
})
```

### 全局配置的修改
Vue3 提供了一个 `createApp` 函数用来创建应用实例。**因为**：
- 测试期间，全局配置污染其它测试用例
- 更改配置会同时影响到多个根实例

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// 全局 API 的修改
// createApp 返回一个应用实例
const app = createApp(App)
// use全局 API 将不在使用
// 必须在实例上显示的使用插件
app.use(router)
// Vue.config.productionTip 移除 
// Vue.config.ignoredElements > config.isCustomElement
// Vue.component > app.component
// Vue.directive > app.directive
// Vue.mixin > app.mixin
app.config.isCustomElement = tag => tag.startsWith('wx-open')
app.config.globalProperties.$utils = {}
debugger;
app.mount('#app')
```


## Vue3 优化了什么？
**源码优化**：使用了 monorepo 和 TypeScript 管理和开发源码，提升了自身的代码可维护性。
**性能优化**：源码体积的优化，移除了不用的 API ，引入了tree-shaking，减少打包体积；数据劫持优化 Object.defineProperty 到 Proxy 
**编译优化**：编译阶段对静态模板分析，提升 vnode 更新性能
**语法优化**： Composition API

## 源码调试

克隆源码之后使用 `vite` 或者` vue-cli`，`dev` 模式下  结合 debugger 或者 源码目录下`yarn build -s` 开启 sourcemap 调试， html 文件中引入生成文件调试


## 深入 Vue3

### createApp 
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

createApp，这个函数主要做了什么？
1. 创建了 APP 对象
2. 重写了 mount 方法

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
  //...中间省略
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

### 组件是如何渲染的？

组件渲染的流程：

![组件渲染](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/组件渲染.png)

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
3. 进入 `patch`,由于 vnode 类型是组件，所以进入处理组件的方法 `processComponent`
4. 进入 `mountComponent` 开始挂载组件，创建组件实例，设置组件实例，运行带副作用的渲染函数
5. 进入 `setupRenderEffect`,渲染生成子树 vnode
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

1. 更新组件的 vnode 节点
2. 渲染新的子树 vnode
3. 新旧子树 vnode patch
4. 如果是组件的话，执行更新组件的方法。
5. 判断子组件是否需要更新，如果需要则执行子组件的副作用渲染函数，不需要更新的话只复制属性
6. 如果是普通元素的话，则执行更新元素的方法。
7. 更新元素的属性和更新元素的子节点

其中一个元素的子节点有三种情况，纯文本、vnode 数组、空。

如果旧是纯文本：
   1. 新（纯文本）则替换文本
   2. 新（空）则删除旧
   3. 新（vnode 数组）清空旧，添加新的子节点

如果旧是空：
  1. 新（纯文本）添加新文本
  2. 新（空）无
  3. 新（vnode 数组）添加新
   
如果旧是 vnode 数组：
   1. 新（纯文本）删除旧，添加新
   2. 新（空）删除旧
   3. 新（vnode 数组）diff 新旧子节点（核心 diff 算法）

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


### 响应式原理

![响应性原理](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/响应性.png)


![Vue 响应性原理](https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/Vue响应式原理.png)








