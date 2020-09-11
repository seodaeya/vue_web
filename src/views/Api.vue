<template>
  <div class="api">
    <button @click="f_btn_click">버튼 테스트</button>

    <h1>#목록 테스트</h1>
    <template v-for="map in testList">
      <div v-bind:key="map.main_key">
        <img src="https://picsum.photos/id/3/100/100" class="image" />
        {{map.main_key}} / {{map.sub_key}}
      </div>
    </template>

    <h1>#셀렉트박스 테스트</h1>
    <template>
        <select v-model="testSelected">
            <option v-for="map in testList" v-bind:key="map.main_key" v-bind:value="map.main_key">{{ map.sub_key }}</option>
        </select>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      testList: []
      ,testSelected:'value2_1'
    };
  },
  mounted() {
    axios({
      url: "/api/test/getList",
      method: "GET",
    })
      .then((res) => {
        console.log("통신 됐쥬~");
        this.testList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    f_btn_click() {
      console.log("버튼 눌렀쥬~");
    },
  },
};
</script>