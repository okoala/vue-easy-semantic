/**
 * vue2-easy-semantic v1.0.0
 * (c) 2016 Koala Huang
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue2EasySemantic = factory());
}(this, (function () { 'use strict';

function createUI (className, domType) {
  if ( domType === void 0 ) domType = 'div';

  if (!className || className.length === 0) {
    console.warn('createComp\'s className arguments need a values.')
    return
  }
  var className1 = className[0]
  var className2 = className[1]

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
          ? (className1 + " " + (this.css) + " " + className2)
          : (className1 + " " + className2)
      }
    },
    render: function render (h) {
      var this$1 = this;

      var data = {
        class: this.className,
        on: {
          click: function (e) { return this$1.$emit('click', e); },
          dbclick: function (e) { return this$1.$emit('dbclick', e); }
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

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.deepmerge = factory();
    }
}(commonjsGlobal, function () {

return function deepmerge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};

    if (array) {
        target = target || [];
        dst = dst.concat(target);
        src.forEach(function(e, i) {
            if (typeof dst[i] === 'undefined') {
                dst[i] = e;
            } else if (typeof e === 'object') {
                dst[i] = deepmerge(target[i], e);
            } else {
                if (target.indexOf(e) === -1) {
                    dst.push(e);
                }
            }
        });
    } else {
        if (target && typeof target === 'object') {
            Object.keys(target).forEach(function (key) {
                dst[key] = target[key];
            })
        }
        Object.keys(src).forEach(function (key) {
            if (typeof src[key] !== 'object' || !src[key]) {
                dst[key] = src[key];
            }
            else {
                if (!target[key]) {
                    dst[key] = src[key];
                } else {
                    dst[key] = deepmerge(target[key], src[key]);
                }
            }
        });
    }

    return dst;
}

}));
});

var merge = interopDefault(index);

// elements
var Button = createUI(['ui', 'button'], 'button')
var Buttons = createUI(['ui', 'buttons'])
var Container = createUI(['ui', 'container'])
var Icon = createUI(['icon'], 'i')
var Divider = createUI(['ui', 'divider'])
var Flag = createUI(['flag'], 'i')
var Header = merge(createUI(['ui', 'header']), {
  mounted: function mounted () {
    var this$1 = this;

    if (this.type) {
      var newNode = document.createElement(this.type)
      for (var i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
var SubHeader = createUI(['sub', 'header'])
var Image = merge(createUI(['ui', 'image'], 'img'), {
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted$1 () {
    var this$1 = this;

    if (this.type && this.type !== 'img') {
      var newNode = document.createElement(this.type)
      for (var i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
      }
      newNode.innerHTML = "<img src=\"" + (this.src) + "\">"
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
var Input = createUI(['ui', 'input'])
var Label = merge(createUI(['ui', 'label']), {
  mounted: function mounted$2 () {
    var this$1 = this;

    if (this.type) {
      var newNode = document.createElement(this.type)
      for (var i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
      }
      if (this.type !== 'a') {
        newNode.className = this.class ? this.class : this.css ? ((this.css) + " label") : 'label'
      } else newNode.className = this.$el.className
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
var List = createUI(['ui', 'list'])
var Loader = createUI(['ui', 'loader'])
var Rail = createUI(['ui', 'rail'])
var Reveal = createUI(['ui', 'reveal'])
var Segment = createUI(['ui', 'segment'])
var Segments = createUI(['ui', 'segments'])
var Step = createUI(['ui', 'step'])
var Steps = createUI(['ui', 'steps'])

// collections
var Grid = createUI(['ui', 'grid'])
var Column = createUI(['ui', 'column'])
var Row = createUI(['ui', 'row'])
var Breadcrumb = createUI(['ui', 'breadcrumb'])
var Section = merge(createUI(['section']), {
  mounted: function mounted$3 () {
    var this$1 = this;

    if (this.type) {
      var newNode = document.createElement(this.type)
      for (var i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
var Form = createUI(['ui', 'form'], 'form')
var Field = createUI(['field'])
var Fields = createUI(['fields'])
var Menu = createUI(['ui', 'menu'])
var Message = createUI(['ui', 'message'])
var Table = merge(createUI(['ui', 'table']), {
  mounted: function mounted$4 () {
    var this$1 = this;

    var newNode = document.createElement('table')
    for (var i = 0; i < this.$el.attributes.length; i++) {
      newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
    }
    newNode.innerHTML = this.$el.innerHTML
    this.$el.parentNode.replaceChild(newNode, this.$el)
  }
})

// modules
var Accordion = merge(createUI(['ui', 'accordion']), {
  mounted: function mounted$5 () {
    $(this.$el).accordion()
  }
})
var Checkbox = createUI(['ui', 'checkbox'])
var Dimmer = merge(createUI(['ui', 'dimmer']), {
  methods: {
    show: function show () {
      $(this.$el).dimmer('show')
    },
    hide: function hide () {
      $(this.$el).dimmer('hide')
    }
  }
})
var Dropdown = merge(createUI(['ui', 'dropdown']), {
  mounted: function mounted$6 () {
    var this$1 = this;

    if (this.type) {
      var newNode = document.createElement(this.type)
      for (var i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
    $(this.$el).dropdown(this.setting)
  }
})
var Modal = merge(createUI(['ui', 'modal']), {
  methods: {
    show: function show$1 () {
      $(this.$el).modal('show')
    }
  }
})
var Nag = merge(createUI(['ui', 'nag']), {
  methods: {
    show: function show$2 () {
      $(this.$el).nag('show')
    }
  }
})
var Popup = createUI(['ui', 'popup'])
var Progress = merge(createUI(['ui', 'progress']), {
  props: {
    value: {
      type: Number
    }
  },
  mounted: function mounted$7 () {
    $(this.$el).progress()
  }
})
var Bar = merge(createUI(['ui', 'bar']), {
  props: {
    percent: ''
  },
  mounted: function mounted$8 () {
    if (this.percent) {
      this.$el.innerHTML = '<div class="progress"></div>'
    }
  }
})
var Rating = merge(createUI(['ui', 'rating']), {
  props: {
    value: {
      default: 0
    },
    max: {
      default: 5
    }
  },
  mounted: function mounted$9 () {
    $(this.$el).rating()
  }
})
var Search = createUI(['ui', 'search'])
var Results = createUI(['ui', 'results'])
var Shape = merge(createUI(['ui', 'shape']), {
  mounted: function mounted$10 () {
    $(this.$el).shape()
  }
})
var Sides = createUI(['sides'])
var Side = createUI(['side'])
var Sidebar = merge(createUI(['ui', 'sidebar']), {
  methods: {
    show: function show$3 () {
      $(this.$el).sidebar('show')
    },
    hide: function hide$1 () {
      $(this.$el).sidebar('hide')
    },
    toggle: function toggle () {
      $(this.$el).sidebar('toggle')
    }
  }
})
var Pusher = createUI(['pusher'])
var Sticky = merge(createUI(['ui', 'sticky']), {
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
    refresh: function refresh () {
      $(this.$el).sticky('refresh')
    }
  },
  mounted: function mounted$11 () {
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
var Ad = createUI(['ui', 'ad'])
var Card = createUI(['ui', 'card'])
var Cards = createUI(['ui', 'cards'])
var Comment = createUI(['ui', 'comment'])
var Comments = createUI(['ui', 'comments'])
var Avatar = merge(createUI(['avatar'], 'a'), {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
})
var Author = createUI(['author'], 'a')
var Metadata = createUI(['Metadata'])
var Actions = createUI(['actions'])
var Feed = createUI(['ui', 'feed'])
var Event = createUI(['event'])
var Summary = createUI(['summary'])
var Date = createUI(['date'])
var Items = createUI(['ui', 'items'])
var Item = merge(createUI(['item']), {
  mounted: function mounted$12 () {
    var this$1 = this;

    if (this.type) {
      var newNode = document.createElement(this.type)
      for (var i = 0; i < this.$el.attributes.length; i++) {
        newNode.setAttribute(this$1.$el.attributes[i].name, this$1.$el.attributes[i].value)
      }
      newNode.innerHTML = this.$el.innerHTML
      this.$el.parentNode.replaceChild(newNode, this.$el)
    }
  }
})
var Statistic = createUI(['ui', 'statistic'])
var Statistics = createUI(['ui', 'statistics'])
var Value = merge(createUI(['value']), {
  props: {
    format: {
      default: true
    }
  }
})
var Content = createUI(['content'])
var Description = createUI(['description'])
var Meta = createUI(['meta'])
var Text = createUI(['text'])
var Title = createUI(['title'])

var Calendar = merge(createUI(['ui', 'calendar']), {
  props: {
    options: {
      type: Object
    }
  },
  mounted: function mounted$13 () {
    var startCalendar = this.options.startCalendar
    var endCalendar = this.options.endCalendar
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

function install (Vue) {
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

return install;

})));