import Vue from 'vue';
import App from '../../src/App.vue';

describe('App test', () => {
  let cmp;
  let vm;
  beforeEach(() => {
    cmp = Vue.extend(App);
    vm = new cmp({
      data: {
        messages: ['cat'],
      }
      ,
    }).$mount();
  });

  it('Renders component MessageList when create instance of App', () => {
    const expectMessage = ['cat'];
    expect(vm.messages).toEqual(expectMessage);
  });
});
