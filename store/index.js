import { fetchCartItems } from '~/api'

export const FETCH_CART_ITEM = 'FETCH_CART_ITEM'

export const state = () => ({
  cartItem: [],
})

export const mutations = {
  addCartItem(state, item) {
      const newCartItem = {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }
    state.cartItem.push(newCartItem)
  },
  setCartItems(state, carts) {
    state.cartItem = carts
  },
}

export const actions = {
  async [FETCH_CART_ITEM](context) {
    const { data } = await fetchCartItems()
    const items = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    context.commit('setCartItems', items)
  },
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch(FETCH_CART_ITEM)
 }
}

