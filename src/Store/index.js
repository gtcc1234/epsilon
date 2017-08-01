import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedContents: [
      {
        imageUrl: 'https://bitcoin.org/img/icons/opengraph.png', id: '1', title: 'Trying Content 1', date: '2017-07-17'
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL_dAHmx6dx9W1ITcKJFryZEuLJYavVHJuDDiXu6lq85db8fMtQ', id: 'aaaa41231123aa2', title: 'Trying Content 2', date: '2017-07-19'
      }
    ],
    user: {
      id: 'asdasd',
      registeredContents: ['123123123']
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedContents (state) {
      return state.loadedContents.sort((contentA, contentB) => {
        return contentA.date > contentB.date
      })
    },
    featuredContents (state, getters) {
      return getters.loadedContents.slice(0, 5)
    },
    loadedContent (state) {
      return (contentId) => {
        return state.loadedContents.find((content) => {
          return content.id === contentId
        })
      }
    }

  }
})
