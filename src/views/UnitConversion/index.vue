<template>
  <div id="main">
    <Header />
    <div class="unitconversion_menu">
      <ul>
        <router-link tag="li" to="/unitconversion/length">
          <p>长度</p>
        </router-link>
        <router-link tag="li" to="/unitconversion/area">
          <p>面积</p>
        </router-link>
        <router-link tag="li" to="/unitconversion/volume">
          <p>体积</p>
        </router-link>
        <router-link tag="li" to="/unitconversion/weight">
          <p>重量</p>
        </router-link>
      </ul>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "UnitConversion",
  components: {
    Header
  }
};
</script>

<style scoped>
.unitconversion_menu {
  width: 360px;
  height: 50px;
  background: white;
  position: fixed;
  left: center;
  top: 50px;
}
.unitconversion_menu ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
.unitconversion_menu ul li {
  flex: 1;
  height: 40px;
}
.unitconversion_menu ul li.active {
  color: #f03d37;
}
.unitconversion_menu ul li.router-link-active {
  color: #f03d37;
}
.unitconversion_menu ul i {
  font-size: 20px;
}
.unitconversion_menu ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>
