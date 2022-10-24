// 存储的分类数据
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
import category from "@/views/category";

export default {
  namespaced: true,
  state: () => {
    return {
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 加载数据成功后需要修改list所以需要mutations函数
  mutations: {
    setList (state, headCategory) {
      state.list = headCategory
    },
    show (state,id) {
      const category = state.list.find(item => item.id === id)
      category.open = true
    },
    hide (state,id) {
      const category = state.list.find(item => item.id === id)
      category.open = false
    },
  },
  // 需要向后台加载数据，所以需要actions函数获取数据
  actions: {
    async getList ({ commit }) {
      const { result } = await findAllCategory()
      result.forEach(item => {
        item.open = false
      }) // 返回的result是一个数组，在每一个数组元素中添加一个open方法
      console.log(result)
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', result)
    }
  }
}
