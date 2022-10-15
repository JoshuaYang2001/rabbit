import {createStore} from 'vuex'
import createPersistedstate from "vuex-persistedstate";
import user from './user'
import cart from "@/store/cart";
import catagory from "@/store/catagory";

export default createStore({
  modules: {
    user, cart, catagory
  },
  plugins: createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
  })
})
