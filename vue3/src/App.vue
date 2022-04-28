<script></script>

<template>
  <div>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="bg-white w500 h100">233</div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/base.css';
$bg-red: rgb(255, 172, 172);

.bg-white{
  background: $bg-red;
}

.w500{
  width: 500px;
}

.h100{
  height: 100px;
}


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
