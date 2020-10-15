<template>
  <header id="header">
    <ul>
      <router-link tag="li" to="/standard">
        <p>标准</p>
      </router-link>
      <router-link tag="li" to="/exchangrate">
        <p>汇率</p>
      </router-link>
      <router-link tag="li" to="/unitconversion">
        <p>单位换算</p>
      </router-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header {
  width: 360px;
  height: 50px;
  background: white;
  position: fixed;
  left: center;
  top: 0;
}
#header ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#header ul li {
  flex: 1;
  height: 40px;
}
#header ul li.active {
  color: #f03d37;
}
#header ul li.router-link-active {
  color: #f03d37;
}
#header ul i {
  font-size: 20px;
}
#header ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>
