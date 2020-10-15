<template>
  <div class="inputs">
    <div class="box1">
      <b>平方米(㎡)：</b>
      <input
        type="number"
        v-model="m2"
        placeholder="100"
        @input="conversion"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>平方公里(k㎡)：</b>
      <input
        type="number"
        v-model="km2"
        placeholder="0.0001"
        @input="conversion1"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>公顷(ha)：</b>
      <input
        type="number"
        v-model="ha"
        placeholder="0.01"
        @input="conversion2"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>市亩(mu)：</b>
      <input
        type="number"
        v-model="mu"
        placeholder="0.15"
        @input="conversion3"
        @click="clear"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      m2: "",
      km2: "",
      ha: "",
      mu: ""
    };
  },
  methods: {
    clear() {
      this.m2 = "";
      this.km2 = "";
      this.ha = "";
      this.mu = "";
    },
    conversion() {
      if (this.m2 == "") {
        this.km2 = "";
        this.ha = "";
        this.mu = "";
      } else {
        this.km2 = (this.m2 / 1000000).toFixed(2);
        this.ha = (this.m2 / 10000).toFixed(2);
        this.mu = (this.m2 / 666.67).toFixed(2);
      }
    },
    conversion1() {
      if (this.km2 == "") {
        this.m2 = "";
        this.ha = "";
        this.mu = "";
      } else {
        this.m2 = (this.km2 * 1000000).toFixed(2);
        this.ha = (this.km2 * 100).toFixed(2);
        this.mu = (this.km2 * 1500).toFixed(2);
      }
    },
    conversion2() {
      if (this.ha == "") {
        this.m2 = "";
        this.km2 = "";
        this.mu = "";
      } else {
        this.m2 = (this.ha * 1000).toFixed(2);
        this.km2 = (this.ha / 100).toFixed(2);
        this.mu = (this.ha * 15).toFixed(2);
      }
    },
    conversion3() {
      if (this.mu == "") {
        this.m2 = "";
        this.km2 = "";
        this.ha = "";
      } else {
        this.ha = (this.mu / 15).toFixed(2);
        this.m2 = (this.mu * 666.67).toFixed(2);
        this.km2 = (this.mu / 1500).toFixed(2);
      }
    }
  }
};
</script>

<style scoped>
.inputs {
  margin-top: 15px;
  margin-left: 20px;
  width: 320px;
}
.box1 {
  position: relative;
  line-height: 50px;
}
input {
  position: absolute;
  top: 12px;
  right: 0px;
  width: calc(100% - 120px);
  height: 25px;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: grey 1px 1px 2px;
  font-weight: bold;
}
</style>
