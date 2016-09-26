export default function createUI (className, domType = 'div') {
  if (!className || className.length === 0) {
    console.warn('createComp\'s className arguments need a values.')
    return
  }
  let className1 = className[0]
  let className2 = className[1]

  if (className.length === 1) {
    className2 = className1
    className1 = ''
  }

  return {
    name: className2,
    props: {
      type: {
        type: String
      },
      class: {
        type: String,
        default: ''
      },
      css: {
        type: String,
        default: ''
      },
      setting: {
        type: Object
      },
      domType: {
        type: String,
        default: domType
      }
    },
    computed: {
      className: function () {
        return this.class ? this.class : this.css
          ? `${className1} ${this.css} ${className2}`
          : `${className1} ${className2}`
      }
    },
    render (h) {
      const data = {
        class: this.className,
        on: {
          click: (e) => this.$emit('click', e),
          dbclick: (e) => this.$emit('dbclick', e)
        }
      }

      if (this.domType === 'img') {
        data.src = this.src || ''
      }

      if (className2 === 'progress') {
        data.attrs['data-percent'] = this.value != null ? this.value : 0
      } else if (className2 === 'rating') {
        data.attrs['data-rating'] = this.value
        data.attrs['data-max-rating'] = this.max
      } else if (className2 === 'sides') {
        return h(this.domType, data, [h('div', { class: 'sides' }, [this.$slots.default])])
      } else if (className2 === 'avatar') {
        return h(this.domType, data, [h('img', { attrs: { src: this.src }}, [this.$slots.default])])
      }

      return h(this.domType, data, this.$slots.default)
    }
  }
}
