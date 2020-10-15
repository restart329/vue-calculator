<template>
  <div class="inputs">
    <div class="box1">
      <b>千克(kg)：</b>
      <input
        type="number"
        placeholder="100"
        v-model="kg"
        @input="conversion"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>吨(t)：</b>
      <input
        type="number"
        placeholder="0.1"
        v-model="t"
        @input="conversion1"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>磅(lb)：</b>
      <input
        type="number"
        placeholder="220.46"
        v-model="lb"
        @input="conversion2"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>担(dan)：</b>
      <input
        type="number"
        placeholder="2"
        v-model="dan"
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
      kg: "",
      t: "",
      lb: "",
      dan: ""
    };
  },
  methods: {
    clear() {
      this.kg = "";
      this.t = "";
      this.lb = "";
      this.dan = "";
    },
    conversion() {
      if (this.kg == "") {
        this.t = "";
        this.lb = "";
        this.dan = "";
      } else {
        this.t = (this.kg / 1000).toFixed(2);
        this.lb = (this.kg * 2.21).toFixed(2);
        this.dan = (this.kg / 50).toFixed(2);
      }
    },
    conversion1() {
      if (this.t == "") {
        this.kg = "";
        this.lb = "";
        this.dan = "";
      } else {
        this.kg = (this.t * 1000).toFixed(2);
        this.lb = (this.t * 2204.62).toFixed(2);
        this.dan = (this.t * 20).toFixed(2);
      }
    },
    conversion2() {
      if (this.lb == "") {
        this.kg = "";
        this.t = "";
        this.dan = "";
      } else {
        this.kg = (this.lb / 2.21).toFixed(2);
        this.t = (this.lb / 2204.62).toFixed(2);
        this.dan = (this.lb / 110.23).toFixed(2);
      }
    },
    conversion3() {
      if (this.dan == "") {
        this.kg = "";
        this.t = "";
        this.lb = "";
      } else {
        this.kg = (this.dan * 50).toFixed(2);
        this.t = (this.dan / 20).toFixed(2);
        this.lb = (this.dan * 110.23).toFixed(2);
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
  width: calc(100% - 85px);
  height: 25px;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: grey 1px 1px 2px;
  font-weight: bold;
}
</style>
