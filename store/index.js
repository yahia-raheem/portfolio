export const state = () => ({
  pages: [],
})

export const getters = {
  pages(state) {
    return state.pages
  },
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  },
  ADD_PAGE(state, page) {
    state.pages.push(page)
  },
}

export const actions = {
  setPages({ commit }, pages) {
    commit('SET_PAGES', pages)
  },
  addPage({ commit }, page) {
    commit('ADD_PAGE', page)
  },
}
