import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedContents: [
      {
        imageUrl: 'https://bitcoin.org/img/icons/opengraph.png', id: '1', title: 'Bitcoin', date: '2017-07-17', link: 'https://bitcoin.org', author: 'John Doe', publication: 'Publication'
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL_dAHmx6dx9W1ITcKJFryZEuLJYavVHJuDDiXu6lq85db8fMtQ', id: 'aaaa41231123aa2', title: 'Etherium', date: '2017-07-19', link: 'https://www.ethereum.org', author: 'John Doe', publication: 'Publication'
      },
      {
        imageUrl: 'http://technode.com/wp-content/uploads/2015/12/technode-logo-ob-200.png', id: '3', title: 'Technode', date: '2017-07-04', link: 'http://technode.com/2017/07/20/ant-financial-invests-shanghai-based-fintech-startup-vfinance/', author: 'John Doe', publication: 'Publication'
      },
      {
        imageUrl: 'http://www.businessinsider.com/', id: '4', title: 'Business Insider', date: '2017-07-10', link: 'http://www.businessinsider.com/global-fintech-funding-rebounds-2017-7', author: 'John Doe', publication: 'Publication'
      }
    ],
    user: {
      id: 'asdasd',
      registeredContents: ['123123123']
    }
  },
  mutations: {
    createContent (state, payload) {
      state.loadedContents.push(payload)
    }
  },
  actions: {
    createContent ({commit}, payload) {
      const content = {
        title: payload.title,
        link: payload.link,
        imageUrl: payload.imageUrl,
        description: payload.description,
        author: payload.author,
        publication: payload.publication,
        date: payload.date
      }
      // Reach out to firebase to store
      commit('createContent', content)
    }
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
