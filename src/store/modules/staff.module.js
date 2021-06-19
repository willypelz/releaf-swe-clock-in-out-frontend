import {StaffService} from '../../services';

/*state initialization */
import {
  CREATE_STAFF,
  DELETE_STAFF, GET_ACTIVATED_REVIEW,
  GET_STAFFS,
  GET_STAFF,
  LOGIN_USER,
  REGISTER_USER, UPDATE_STAFF
} from "../actions/actions.type";
import {SET_STAFFS, SET_STAFF} from "../type/mutations.type";

const initialState = {
  staffs: [],
  staff: {},
};

export const state = {...initialState};

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  // create staff
  async [CREATE_STAFF](context, payload) {
    const {data} = await StaffService.createStaff(payload);
    context.dispatch(GET_STAFFS);
    return data;
  },

   async [GET_STAFFS](context) {
    const {data} = await StaffService.getStaffs();
    context.commit(SET_STAFFS, data.data);
    return data;
  },

  async [GET_STAFF](context, payload) {
    const {data} = await StaffService.getStaff(payload);
    context.commit(SET_STAFF, data.data);
    return data;
  },
  async [UPDATE_STAFF](context, payload) {
    const id = payload.slug; delete  payload.slug;
    const {data} = await StaffService.updateStaff(id, payload);
    context.commit(SET_STAFF, data.data);
    return data;
  },
   async [DELETE_STAFF](context, payload) {
    const {data} = await StaffService.deleteStaff(payload);
    return data;
  },
};

/*exporting the mutation*/
export const mutations = {
  [SET_STAFFS](state, staffs) {
    state.staffs = staffs;
  },
  [SET_STAFF](state, staff) {
    state.staff = staff;
  },
  // [RESET_STATE](state) {
  //     state =  {...state, ...initialState};
  // }
};
/* setting the getters*/
const getters = {
  staffs(state) {
    return state.staffs;
  },
  staff(state) {
    return state.staff;
  },

};

export default {
  state,
  actions,
  mutations,
  getters
};
