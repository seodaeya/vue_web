<template>
  <div class="page2">
    <button @click="f_btn_click">버튼 테스트</button>

    <h1>#화면 새로고침 테스트</h1>
    <span>왜 api는 새로고침하면 화이트라벨 에러(404) 뜨고, 왜 얜 되지?</span>

    <h1>#목록 테스트</h1>
    <template v-for="map in testList">
      <div v-bind:key="map.main_key">
        <img src="https://picsum.photos/id/3/100/100" />
        {{map.main_key}} / {{map.sub_key}}
      </div>
    </template>

    <h1>#셀렉트박스 테스트 + 변경 시, 이미지 변경</h1>
    <template>
        <select v-model="testSelected" @change="f_selectbox_change" >
            <option v-for="map in testList" v-bind:key="map.main_key" v-bind:value="map.main_key">{{ map.sub_key }}</option>
        </select>
    </template>

    <img v-bind:src="imgSrc" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      testList      : []
      ,testSelected : 'value2_1'
      ,imgSrc       : 'https://picsum.photos/id/4/100/100'
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
    f_selectbox_change(value) {
      console.log("셀렉트박스가 바뀌었쥬~")
      this.imgSrc = 'https://picsum.photos/id/' + ('value1_1' === value.target.value ? 1 : 2) + '/100/100'
    }
  },
};
</script>