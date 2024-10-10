<template>
    <div class="list-wrapper">
    <ul>
            <li v-for="cart in $store.state.cartItem" :key="cart.id" class="list-item">
                <img class="thumbnail" :src="cart.imageUrl" :alt="cart.name" />
                <div class="description">
                    <p>{{ cart.name }}</p>
                    <span>{{ cart.price }}</span>
                </div>
            </li>
    </ul>
    </div>
  
</template>

<script>
export default {

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