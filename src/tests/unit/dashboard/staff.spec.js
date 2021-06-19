import {createLocalVue,shallowMount} from '@vue/test-utils';
import Staff from '../../../dashboard/staff/Staff.vue';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Staff", () => {

  let wrapper;
  let store;
  let actions;

  actions = {
    Staff: jest.fn(),

  };
  store = new Vuex.Store({
    actions,
  });

  beforeEach(() => {
    wrapper = shallowMount(Staff, {
      store,
      localVue
    });
  });

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // lifecycle test
  it('has a data hook in the component', () => {
    expect(typeof Staff.data).toBe('function')
  });

});
