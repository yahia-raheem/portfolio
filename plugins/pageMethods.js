import axios from 'axios'
export default (context, inject) => {
  const fetchPage = async (id) => {
    const pages = context.store.getters.pages
    const page = pages.find((el) => String(el.id) === String(id))
    if (page) {
      return page
    } else {
      const res = await axios.get(
        `${process.env.baseUrl}/wp-json/wp/v2/pages/${id}`
      )
      context.store.dispatch('addPage', res.data)
      return res.data
    }
  }
  const getImage = async (id) => {
    const images = context.store.getters.images
    const check = images.find((el) => Number(el.id) === Number(id))
    if (check) {
      return check
    } else {
      const res = await axios.get(
        `${process.env.baseUrl}/wp-json/generaldata/v1/getimage/${Number(id)}`
      )
      context.store.dispatch('addImage', res.data)
      return res.data
    }
  }
  inject('fetchPage', fetchPage)
  inject('getImage', getImage)
}
