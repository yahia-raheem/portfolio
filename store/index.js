import axios from 'axios'
export const state = () => ({
  pages: [],
  general: [],
  images: [],
  blogs: [],
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
  blogs(state) {
    return state.blogs
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
  SET_BLOGS(state, blogs) {
    state.blogs = blogs
  },
  ADD_BLOG(state, blog) {
    state.blogs.push(blog)
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
  setBlogs({ commit }, blogs) {
    commit('SET_BLOGS', blogs)
  },
  addBlog({ commit }, blog) {
    commit('ADD_BLOG', blog)
  },
  async nuxtServerInit(vcontext, context) {
    const { data } = await axios.get(
      `${process.env.baseUrl}/wp-json/generaldata/v1/social/`
    )
    vcontext.commit('SET_GENERAL', data)
    const blogsres = await axios.get(
      `${process.env.baseUrl}/wp-json/wp/v2/blog/`
    )
    vcontext.commit('SET_BLOGS', blogsres.data)
  },
}
