<template>
  <div class="api">
    <button @click="f_btn_click">버튼 테스트</button>

    <template v-for="map in testList">
      <div v-bind:key="map.main_key">
        <img src="https://picsum.photos/id/3/100/100" class="image" />
        {{map.main_key}} / {{map.sub_key}}
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      testList: []
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