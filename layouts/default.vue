<template>
  <header>Layout Header</header>

  <nav>
    <div>pages:</div>
    <ul>
      <li><RouterLink to="/">首页</RouterLink></li>
      <li><RouterLink to="/about">关于</RouterLink></li>
    </ul>

    <div>api:</div>
    <ul>
      <li><a href="/api/test" target="_blank">test</a></li>
    </ul>
  </nav>

  <slot></slot>

  <footer>Layout Footer</footer>
</template>
