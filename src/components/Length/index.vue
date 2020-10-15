<template>
  <div class="inputs">
    <div class="box1">
      <b>米(m)：</b>
      <input
        type="number"
        placeholder="100"
        v-model="m"
        @input="conversion"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>千米(km)：</b>
      <input
        type="number"
        placeholder="0.1"
        v-model="km"
        @input="conversion1"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>里(li)：</b>
      <input
        type="number"
        placeholder="0.2"
        v-model="li"
        @input="conversion2"
        @click="clear"
      />
    </div>
    <div class="box1">
      <b>英里(mi)：</b>
      <input
        type="number"
        placeholder="0.06"
        v-model="mi"
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
      m: "",
      km: "",
      li: "",
      mi: ""
    };
  },
  methods: {
    clear() {
      this.m = "";
      this.km = "";
      this.li = "";
      this.mi = "";
    },
    conversion() {
      if (this.m == "") {
        this.km = "";
        this.li = "";
        this.mi = "";
      } else {
        this.km = (this.m / 1000).toFixed(6);
        this.li = (this.m / 500).toFixed(6);
        this.mi = (this.m / 1609.35).toFixed(6);
      }
    },
    conversion1() {
      if (this.km == "") {
        this.m = "";
        this.li = "";
        this.mi = "";
      } else {
        this.m = (this.km * 1000).toFixed(6);
        this.li = (this.km * 2).toFixed(6);
        this.mi = (this.km / 1.61).toFixed(6);
      }
    },
    conversion2() {
      if (this.li == "") {
        this.m = "";
        this.km = "";
        this.mi = "";
      } else {
        this.m = (this.li * 500).toFixed(6);
        this.km = (this.li / 2).toFixed(6);
        this.mi = (this.li / 3.22).toFixed(6);
      }
    },
    conversion3() {
      if (this.mi == "") {
        this.m = "";
        this.km = "";
        this.li = "";
      } else {
        this.li = (this.mi * 3.22).toFixed(6);
        this.m = (this.mi * 1609.35).toFixed(6);
        this.km = (this.mi * 1.61).toFixed(6);
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
