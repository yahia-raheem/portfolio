import axios from 'axios'
export const state = () => ({
  pages: [],
  general: [],
  images: [],
})

export const getters = {
  pages(state) {
    return state.pages
  },
  general(state) {
    return state.general
  },
  images(state) {
    return state.images
  },
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  },
  ADD_PAGE(state, page) {
    state.pages.push(page)
  },
  SET_GENERAL(state, general) {
    state.general = general
  },
  ADD_IMAGE(state, image) {
    state.images.push(image)
  },
}

export const actions = {
  setPages({ commit }, pages) {
    commit('SET_PAGES', pages)
  },
  addPage({ commit }, page) {
    commit('ADD_PAGE', page)
  },
  addImage({ commit }, image) {
    commit('ADD_IMAGE', image)
  },
  async nuxtServerInit(vcontext, context) {
    const { data } = await axios.get(
      'http://portfolio.local/wp-json/generaldata/v1/social/'
    )
    vcontext.commit('SET_GENERAL', data)
  },
}
