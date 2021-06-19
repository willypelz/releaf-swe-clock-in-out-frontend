import {createLocalVue,shallowMount} from '@vue/test-utils';
import Staffs from '../../../dashboard/staffs/Staffs.vue';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Staffs", () => {

  let wrapper;
  let store;
  let actions;

  actions = {
    Staffs: jest.fn(),

  };
  store = new Vuex.Store({
    actions,
  });

  beforeEach(() => {
    wrapper = shallowMount(Staffs, {
      store,
      localVue
    });
  });

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // lifecycle test
  it('has a data hook in the component', () => {
    expect(typeof Staffs.data).toBe('function')
  });

});
