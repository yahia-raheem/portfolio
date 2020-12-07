// import aspectratio from '~/mixins/aspectratio.js'
// export default {
//   mixins: [aspectratio],
// }

export default {
  mounted() {
    this.aspectRatio()
  },
  methods: {
    aspectRatio() {
      const aspectRatio = document.querySelectorAll('[data-aspectRatio]')
      if (typeof aspectRatio !== 'undefined' && aspectRatio.length > 0) {
        aspectRatio.forEach((one) => {
          const width = one.offsetWidth
          const aspectRatio = one.getAttribute('data-aspectRatio')
          const height = detHeight(aspectRatio, width)
          one.style.height = `${height}px`
        })
        window.addEventListener('resize', () => {
          aspectRatio.forEach((one) => {
            const width = one.offsetWidth
            const aspectRatio = one.getAttribute('data-aspectRatio')
            const height = detHeight(aspectRatio, width)
            one.style.height = `${height}px`
          })
        })
      }
    },
  },
}

const detHeight = (aspectRatio, width) => {
  const data = aspectRatio.split('/')
  const aspectWidth = data[0]
  const aspectHeight = data[1]
  const height =
    (parseInt(width) * parseInt(aspectHeight)) / parseInt(aspectWidth)
  return height
}
