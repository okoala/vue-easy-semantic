/* global describe, it, expect */

import Vue from 'vue'
import SemanticUI from 'semantic'
Vue.use(SemanticUI)

describe('Modules', () => {
  it('v-model should work in ui-dropdown', (done) => {
    const vm = new Vue({
      template: `
        <div>
          <ui-dropdown css="selection">
            <input type="hidden" name="gender" v-model.lazy="gender">
            <i class="dropdown icon"></i>
            <div class="default text">Gender</div>
            <div class="menu">
              <div class="item" data-value="1">Male</div>
              <div class="item" data-value="0">Female</div>
            </div>
          </ui-dropdown>
        </div>
      `,
      data () {
        return {
          gender: 1
        }
      }
    }).$mount()
    document.body.appendChild(vm.$el)
    const input = vm.$el.querySelector('input')
    waitForUpdate(() => {
      input.value = 'foo'
      triggerEvent(input, 'change')
    }).then(() => {
      expect(vm.gender).toBe('foo')
    }).then(done)
  })
})
