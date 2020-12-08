import axios from 'axios'
export default (context, inject) => {
  const fetchPage = async (id) => {
    const pages = context.store.getters.pages
    const page = pages.find((el) => String(el.id) === String(id))
    if (page) {
      return page
    } else {
      const res = await axios.get(
        `http://portfolio.local/wp-json/wp/v2/pages/${id}`
      )
      context.store.dispatch('addPage', res.data)
      return res.data
    }
  }
  inject('fetchPage', fetchPage)
}
