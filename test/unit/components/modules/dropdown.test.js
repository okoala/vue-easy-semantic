/* global describe, it, expect */
describe('ui-dropdown', () => {
  let vm

  let el
  beforeEach(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  beforeEach(() => {
    vm = new Vue({
      template: `
        <ui-dropdown css="selection">
          <input type="hidden" name="gender" v-model.lazy="gender">
          <i class="dropdown icon"></i>
          <div class="default text">Gender</div>
          <div class="menu">
            <div class="item" data-value="1">Male</div>
            <div class="item" data-value="0">Female</div>
          </div>
        </ui-dropdown>
      `,
      data () {
        return {
          gender: 1
        }
      }
    }).$mount(el)
  })

  it('v-model should work', (done) => {
    const input = vm.$el.querySelector('input')
    waitForUpdate(() => {
      input.value = 'foo'
      triggerEvent(input, 'change')
    }).then(() => {
      expect(vm.gender).toBe('foo')
    }).then(done)
  })

  it('must select right value', (done) => {
    triggerEvent(vm.$el, 'click')
    setTimeout(() => {
      triggerEvent(vm.$el.querySelectorAll('.menu > .item')[1], 'click')
      expect(vm.gender).toBe('0')
      done()
    }, 50)
  })

  it('multiple search selection ok', (done) => {
    const vm = new Vue({
      template: `
        <ui-dropdown css="fluid search" multiple="multiple" dom-type="select" :setting="{onChange}">
          <option value="">State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
        </ui-dropdown>
      `,
      data () {
        return {
          value: 1
        }
      },
      methods: {
        onChange (value, text, $item) {
        this.value = value
        }
      },
      watch: {
        value (val) {
          console.log('new value: ', val)
        }
      }
    }).$mount(el)
    setTimeout(() => {
      console.log(el)
      triggerEvent(el, 'click')
      setTimeout(() => {
        triggerEvent(el.querySelectorAll('.menu > .item')[0], 'click')
        setTimeout(() => {
          expect(vm.value.join(',')).toBe(',AL')
          done()
        }, 100)
      }, 100)
    }, 400)
  })
})
