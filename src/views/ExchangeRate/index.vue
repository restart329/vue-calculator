<template>
  <div id="main">
    <Header />
    <div class="inputs">
      <div class="box1">
        <b>人民币(CNY)：</b>
        <input
          type="number"
          v-model="cny"
          placeholder="100"
          @input="conversion"
          @click="clear"
        />
      </div>
      <div class="box1">
        <b>美元(USD)：</b>
        <input
          type="number"
          v-model="usd"
          placeholder="14.94"
          @input="conversion1"
          @click="clear"
        />
      </div>
      <div class="box1">
        <b>欧元(EUR)：</b>
        <input
          type="number"
          v-model="eur"
          placeholder="111.53"
          @input="conversion2"
          @click="clear"
        />
      </div>
      <div class="box1">
        <b>港币(HKD)：</b>
        <input
          type="number"
          v-model="hkd"
          placeholder="14.16"
          @input="conversion3"
          @click="clear"
        />
      </div>
      <div class="box1">
        <b>日元(JPY)：</b>
        <input
          type="number"
          v-model="jpy"
          placeholder="1979.67"
          @input="conversion4"
          @click="clear"
        />
      </div>
      <div class="box1">
        <b>英镑(GBP)：</b>
        <input
          type="number"
          v-model="gbp"
          placeholder="10.14"
          @input="conversion5"
          @click="clear"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "exchangrate",
  components: {
    Header
  },
  data() {
    return {
      cny: "",
      usd: "",
      hkd: "",
      eur: "",
      jpy: "",
      gbp: ""
    };
  },
  methods: {
    clear() {
      this.cny = "";
      this.usd = "";
      this.hkd = "";
      this.eur = "";
      this.jpy = "";
      this.gbp = "";
    },
    conversion() {
      if (this.cny == "") {
        this.usd = "";
        this.hkd = "";
        this.eur = "";
        this.jpy = "";
        this.gbp = "";
      } else {
        this.usd = (this.cny / 6.69).toFixed(6);
        this.hkd = (this.cny * 1.25).toFixed(6);
        this.eur = (this.cny / 7.07).toFixed(6);
        this.jpy = (this.cny * 19.8).toFixed(6);
        this.gbp = (this.cny / 9.86).toFixed(6);
      }
    },
    conversion1() {
      if (this.usd == "") {
        this.cny = "";
        this.hkd = "";
        this.eur = "";
        this.jpy = "";
        this.gbp = "";
      } else {
        this.cny = (this.usd * 6.21).toFixed(6);
        this.hkd = (this.usd * 7.75).toFixed(6);
        this.eur = (this.usd / 1.14).toFixed(6);
        this.jpy = (this.usd * 122.86).toFixed(6);
        this.gbp = (this.usd / 1.59).toFixed(6);
      }
    },
    conversion2() {
      if (this.eur == "") {
        this.cny = "";
        this.hkd = "";
        this.usd = "";
        this.jpy = "";
        this.gbp = "";
      } else {
        this.cny = (this.eur * 7.06).toFixed(6);
        this.hkd = (this.eur * 8.82).toFixed(6);
        this.usd = (this.eur * 1.14).toFixed(6);
        this.jpy = (this.eur * 139.81).toFixed(6);
        this.gbp = (this.eur / 1.4).toFixed(6);
      }
    },
    conversion3() {
      if (this.hkd == "") {
        this.cny = "";
        this.usd = "";
        this.eur = "";
        this.jpy = "";
        this.gbp = "";
      } else {
        this.cny = (this.hkd / 1.24).toFixed(6);
        this.usd = (this.hkd / 7.75).toFixed(6);
        this.eur = (this.hkd / 8.82).toFixed(6);
        this.jpy = (this.hkd * 15.85).toFixed(6);
        this.gbp = (this.hkd / 12.32).toFixed(6);
      }
    },
    conversion4() {
      if (this.jpy == "") {
        this.cny = "";
        this.hkd = "";
        this.eur = "";
        this.usd = "";
        this.gbp = "";
      } else {
        this.cny = (this.jpy / 19.8).toFixed(6);
        this.hkd = (this.jpy / 15.85).toFixed(6);
        this.eur = (this.jpy / 139.81).toFixed(6);
        this.usd = (this.jpy / 122.86).toFixed(6);
        this.gbp = (this.jpy / 195.18).toFixed(6);
      }
    },
    conversion5() {
      if (this.gbp == "") {
        this.cny = "";
        this.hkd = "";
        this.eur = "";
        this.jpy = "";
        this.usd = "";
      } else {
        this.cny = (this.gbp * 9.86).toFixed(6);
        this.hkd = (this.gbp * 123.18).toFixed(6);
        this.eur = (this.gbp * 1.4).toFixed(6);
        this.jpy = (this.gbp * 195.18).toFixed(6);
        this.usd = (this.gbp * 1.59).toFixed(6);
      }
    }
  }
};
</script>

<style scoped>
.inputs {
  margin-top: 60px;
  margin-left: 10px;
  width: 320px;
  position: absolute;
}
.box1 {
  position: relative;
  line-height: 40px;
}
input {
  position: absolute;
  top: 6px;
  right: 0px;
  height: 25px;
  width: calc(100% - 115px);
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: grey 1px 1px 2px;
  font-weight: bold;
}
</style>
