<template>
  <div class="inputs">
    <div class="box1">
      <b>立方米(m³)：</b>
      <input
        type="number"
        placeholder="100"
        v-model="m3"
        @input="conversion"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>升(L)：</b>
      <input
        type="number"
        placeholder="100000"
        v-model="l"
        @input="conversion1"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>立方分米(dm³)：</b>
      <input
        type="number"
        placeholder="100000"
        v-model="dm3"
        @input="conversion2"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>公石(hl)：</b>
      <input
        type="number"
        placeholder="1000"
        v-model="hl"
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
      m3: "",
      l: "",
      dm3: "",
      hl: ""
    };
  },
  methods: {
    clear() {
      this.m3 = "";
      this.l = "";
      this.dm3 = "";
      this.hl = "";
    },
    conversion() {
      if (this.m3 == "") {
        this.l = "";
        this.dm3 = "";
        this.hl = "";
      } else {
        this.l = (this.m3 * 1000).toFixed(2);
        this.dm3 = (this.m3 * 1000).toFixed(2);
        this.hl = (this.m3 * 10).toFixed(2);
      }
    },
    conversion1() {
      if (this.l == "") {
        this.m3 = "";
        this.dm3 = "";
        this.hl = "";
      } else {
        this.m3 = (this.l / 1000).toFixed(2);
        this.dm3 = (this.l * 1).toFixed(2);
        this.hl = (this.l / 100).toFixed(2);
      }
    },
    conversion2() {
      if (this.dm3 == "") {
        this.m3 = "";
        this.l = "";
        this.hl = "";
      } else {
        this.m3 = (this.dm3 / 1000).toFixed(2);
        this.l = (this.dm3 * 1).toFixed(2);
        this.hl = (this.dm3 / 100).toFixed(2);
      }
    },
    conversion3() {
      if (this.hl == "") {
        this.m3 = "";
        this.dm3 = "";
        this.l = "";
      } else {
        this.m3 = (this.hl / 10).toFixed(2);
        this.dm3 = (this.hl * 100).toFixed(2);
        this.l = (this.hl * 100).toFixed(2);
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
