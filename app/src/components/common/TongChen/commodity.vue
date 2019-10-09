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
        <span>{{item.pname}}</span>
        <span>{{item.price}}</span>
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
ul {
  list-style: none;
  display: flex;
	justify-content: center;
	align-items: center;
	padding:0;

}
img {
  width: 100px;
  height: 100px;
}
</style>