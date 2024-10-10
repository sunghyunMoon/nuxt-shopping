<template>
    <div class="container">
        <h1 class="list-title">카트 페이지</h1>
        <CartList></CartList>
        <div class="extra-panel">
        <button>구매하기</button>
        </div>
    </div>
</template>

<script>
import CartList from '~/components/CartList.vue'


export default { 
    components: {CartList},
}
</script>

<style 
CartListscoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>