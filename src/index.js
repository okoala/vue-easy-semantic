import createUI from './createUI'
import merge from 'deepmerge'

// elements
const Button = createUI(['ui', 'button'], 'button')
const Buttons = createUI(['ui', 'buttons'])
const Container = createUI(['ui', 'container'])
const Icon = createUI(['icon'], 'i')
const Divider = createUI(['ui', 'divider'])
const Flag = createUI(['flag'], 'i')
const Header = merge(createUI(['ui', 'header']), {
  mounted () {
    if (this.type) {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
const SubHeader = createUI(['sub', 'header'])
const Image = merge(createUI(['ui', 'image'], 'img'), {
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.type && this.type !== 'img') {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = `<img src="${this.src}">`
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
const Input = createUI(['ui', 'input'])
const Label = merge(createUI(['ui', 'label']), {
  mounted () {
    if (this.type) {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      if (this.type !== 'a') {
        newNode.className = this.class ? this.class : this.css ? `${this.css} label` : 'label'
      } else newNode.className = this.$el.className
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
const List = createUI(['ui', 'list'])
const Loader = createUI(['ui', 'loader'])
const Rail = createUI(['ui', 'rail'])
const Reveal = createUI(['ui', 'reveal'])
const Segment = createUI(['ui', 'segment'])
const Segments = createUI(['ui', 'segments'])
const Step = createUI(['ui', 'step'])
const Steps = createUI(['ui', 'steps'])

// collections
const Grid = createUI(['ui', 'grid'])
const Column = createUI(['ui', 'column'])
const Row = createUI(['ui', 'row'])
const Breadcrumb = createUI(['ui', 'breadcrumb'])
const Section = merge(createUI(['section']), {
  mounted () {
    if (this.type) {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
const Form = createUI(['ui', 'form'], 'form')
const Field = createUI(['field'])
const Fields = createUI(['fields'])
const Menu = createUI(['ui', 'menu'])
const Message = createUI(['ui', 'message'])
const Table = merge(createUI(['ui', 'table']), {
  mounted () {
    const newNode = document.createElement('table')
    for (let i = 0; i < this.$el.attributes.length; i++) {
      newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
    }
    newNode.innerHTML = this.$el.innerHTML
    this.$el.parentNode.replaceChild(newNode, this.$el)
  }
})

// modules
const Accordion = merge(createUI(['ui', 'accordion']), {
  mounted () {
    $(this.$el).accordion()
  }
})
const Checkbox = createUI(['ui', 'checkbox'])
const Dimmer = merge(createUI(['ui', 'dimmer']), {
  methods: {
    show () {
      $(this.$el).dimmer('show')
    },
    hide () {
      $(this.$el).dimmer('hide')
    }
  }
})
const Dropdown = merge(createUI(['ui', 'dropdown']), {
  props: {
    multiple: String
  },
  beforeMount () {
    if (this.multiple) {
      this.attrs.multiple = this.multiple
    }
  },
  mounted () {
    if (this.type) {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }

    $(this.$el).dropdown(this.setting)
  }
})
const Modal = merge(createUI(['ui', 'modal']), {
  methods: {
    show () {
      $(this.$el).modal('show')
    }
  }
})
const Nag = merge(createUI(['ui', 'nag']), {
  methods: {
    show () {
      $(this.$el).nag('show')
    }
  }
})
const Popup = createUI(['ui', 'popup'])
const Progress = merge(createUI(['ui', 'progress']), {
  props: {
    value: {
      type: Number
    }
  },
  mounted () {
    $(this.$el).progress()
  }
})
const Bar = merge(createUI(['ui', 'bar']), {
  props: {
    percent: ''
  },
  mounted () {
    if (this.percent) {
      this.$el.innerHTML = '<div class="progress"></div>'
    }
  }
})
const Rating = merge(createUI(['ui', 'rating']), {
  props: {
    value: {
      default: 0
    },
    max: {
      default: 5
    }
  },
  mounted () {
    $(this.$el).rating()
  }
})
const Search = createUI(['ui', 'search'])
const Results = createUI(['ui', 'results'])
const Shape = merge(createUI(['ui', 'shape']), {
  mounted () {
    $(this.$el).shape()
  }
})
const Sides = createUI(['sides'])
const Side = createUI(['side'])
const Sidebar = merge(createUI(['ui', 'sidebar']), {
  methods: {
    show () {
      $(this.$el).sidebar('show')
    },
    hide () {
      $(this.$el).sidebar('hide')
    },
    toggle () {
      $(this.$el).sidebar('toggle')
    }
  }
})
const Pusher = createUI(['pusher'])
const Sticky = merge(createUI(['ui', 'sticky']), {
  props: {
    pushing: {
      default: false
    },
    jitter: {
      default: 5
    },
    observeChanges: {
      default: false
    },
    context: {
      default: false
    },
    scrollContext: {
      default: typeof window !== 'undefined' ? window : null
    },
    offset: {
      default: 0
    },
    bottomOffset: {
      default: 0
    }
  },
  methods: {
    refresh () {
      $(this.$el).sticky('refresh')
    }
  },
  mounted () {
    $(this.$el).sticky({
      pushing: this.pushing,
      jitter: this.jitter,
      observeChanges: this.observeChanges,
      context: this.context,
      scrollContext: this.scrollContext,
      offset: this.offset,
      bottomOffset: this.bottomOffset
    })
  }
})
const Ad = createUI(['ui', 'ad'])
const Card = createUI(['ui', 'card'])
const Cards = createUI(['ui', 'cards'])
const Comment = createUI(['ui', 'comment'])
const Comments = createUI(['ui', 'comments'])
const Avatar = merge(createUI(['avatar'], 'a'), {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
})
const Author = createUI(['author'], 'a')
const Metadata = createUI(['Metadata'])
const Actions = createUI(['actions'])
const Feed = createUI(['ui', 'feed'])
const Event = createUI(['event'])
const Summary = createUI(['summary'])
const Date = createUI(['date'])
const Items = createUI(['ui', 'items'])
const Item = merge(createUI(['item']), {
  mounted () {
    if (this.type) {
      const newNode = document.createElement(this.type)
      for (let i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
const Statistic = createUI(['ui', 'statistic'])
const Statistics = createUI(['ui', 'statistics'])
const Value = merge(createUI(['value']), {
  props: {
    format: {
      default: true
    }
  }
})
const Content = createUI(['content'])
const Description = createUI(['description'])
const Meta = createUI(['meta'])
const Text = createUI(['text'])
const Title = createUI(['title'])

const Calendar = merge(createUI(['ui', 'calendar']), {
  props: {
    options: {
      type: Object
    }
  },
  mounted () {
    const startCalendar = this.options.startCalendar
    const endCalendar = this.options.endCalendar
    if (endCalendar &&
      typeof endCalendar === 'string') {
      this.options.endCalendar = $(endCalendar)
    }
    if (startCalendar &&
      typeof startCalendar === 'string') {
      this.options.startCalendar = $(startCalendar)
    }
    $(this.$el).calendar(this.options)
  }
})

export default function install (Vue) {
  // util
  Vue.component('ui-content', Content)
  Vue.component('ui-description', Description)
  Vue.component('ui-meta', Meta)
  Vue.component('ui-text', Text)
  Vue.component('ui-title', Title)
  // elements
  Vue.component('ui-button', Button)
  Vue.component('ui-buttons', Buttons)
  Vue.component('ui-container', Container)
  Vue.component('ui-divider', Divider)
  Vue.component('ui-flag', Flag)
  Vue.component('ui-header', Header)
  Vue.component('ui-sub-header', SubHeader)
  Vue.component('ui-icon', Icon)
  Vue.component('ui-image', Image)
  Vue.component('ui-input', Input)
  Vue.component('ui-label', Label)
  Vue.component('ui-list', List)
  Vue.component('ui-loader', Loader)
  Vue.component('ui-rail', Rail)
  Vue.component('ui-reveal', Reveal)
  Vue.component('ui-segment', Segment)
  Vue.component('ui-segments', Segments)
  Vue.component('ui-step', Step)
  Vue.component('ui-steps', Steps)
  // collections
  Vue.component('ui-breadcrumb', Breadcrumb)
  Vue.component('ui-section', Section)
  Vue.component('ui-field', Field)
  Vue.component('ui-fields', Fields)
  Vue.component('ui-form', Form)
  Vue.component('ui-grid', Grid)
  Vue.component('ui-column', Column)
  Vue.component('ui-row', Row)
  Vue.component('ui-menu', Menu)
  Vue.component('ui-message', Message)
  Vue.component('ui-table', Table)
  // views
  Vue.component('ui-ad', Ad)
  Vue.component('ui-card', Card)
  Vue.component('ui-cards', Cards)
  Vue.component('ui-comment', Comment)
  Vue.component('ui-comments', Comments)
  Vue.component('ui-avatar', Avatar)
  Vue.component('ui-author', Author)
  Vue.component('ui-metadata', Metadata)
  Vue.component('ui-actions', Actions)
  Vue.component('ui-feed', Feed)
  Vue.component('ui-event', Event)
  Vue.component('ui-summary', Summary)
  Vue.component('ui-date', Date)
  Vue.component('ui-items', Items)
  Vue.component('ui-item', Item)
  Vue.component('ui-statistic', Statistic)
  Vue.component('ui-statistics', Statistics)
  Vue.component('ui-value', Value)
  // modules
  Vue.component('ui-accordion', Accordion)
  Vue.component('ui-checkbox', Checkbox)
  Vue.component('ui-dimmer', Dimmer)
  Vue.component('ui-dropdown', Dropdown)
  Vue.component('ui-modal', Modal)
  Vue.component('ui-nag', Nag)
  Vue.component('ui-popup', Popup)
  Vue.component('ui-progress', Progress)
  Vue.component('ui-bar', Bar)
  Vue.component('ui-rating', Rating)
  Vue.component('ui-search', Search)
  Vue.component('ui-results', Results)
  Vue.component('ui-shape', Shape)
  Vue.component('ui-sides', Sides)
  Vue.component('ui-side', Side)
  Vue.component('ui-sidebar', Sidebar)
  Vue.component('ui-pusher', Pusher)
  Vue.component('ui-sticky', Sticky)
  // third-party
  Vue.component('ui-calendar', Calendar)
}
