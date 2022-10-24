import {createStore} from 'vuex'
import createPersistedstate from "vuex-persistedstate";
import user from './modules/user'
import cart from "@/store/modules/cart";
import category from "@/store/modules/category";

export default createStore({
  modules: {
    user, cart, category
  },
   plugins: [
     createPersistedstate({
       key: 'erabbit-client-pc-store',
       paths:['user','cart']
     })
   ]
})
