<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in data"
        :key="index"
        :pic="`127.0.0.1:8080/header/`+item.pic"
        :pname="data.pname"
        :price="data.price"
      >
        <img :src="`http://127.0.0.1:8080/header/`+item.pic">
        <p>{{item.pname}}</p>
        <p>{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: { default: "" }
  }
};
</script>
<style lang="scss" scoped>
@import url("../../../../assets/scss/reset.scss");
ul {
  display: flex;
  width: 1240px;
  justify-content: center;
  align-items: center;
  padding: 0;
  li{
    text-align: center;
    font-size: 12px;
    width: 142px;
    color: #333;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
    position: relative;
    z-index: 99;
    opacity: 0.7;
    &:hover{
      opacity: 1;
    }
  }
}
img {
  width: 100px;
  height: 100px;
}
</style>