import {ClockInOutService} from '../../services';

/*state initialization */
import {
  CREATE_STAFF,
  DELETE_STAFF, GET_ACTIVATED_REVIEW,
  GET_STAFFS,
  GET_STAFF,
  LOGIN_USER,
  REGISTER_USER, GET_STAFF_CLOCK_IN_OUT_LOGS, CLOCK_IN_OUT
} from "../actions/actions.type";
import {SET_STAFFS, SET_STAFF, SET_STAFF_LOGS} from "../type/mutations.type";

const initialState = {
  staff_logs: [],
 };

export const state = {...initialState};

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  // create staff
  async [GET_STAFF_CLOCK_IN_OUT_LOGS](context, payload) {
    const {data} = await ClockInOutService.staffLogs(payload);
    context.dispatch(GET_STAFFS);
    return data;
  },

   async [CLOCK_IN_OUT](context, payload) {
    const {data} = await ClockInOutService.clockInOut(payload);
    context.commit(SET_STAFF, data.data);
     return data;
  },

};

/*exporting the mutation*/
export const mutations = {
  [SET_STAFF_LOGS](state, staff_logs) {
    state.staff_logs = staff_logs;
  },
  // [RESET_STATE](state) {
  //     state =  {...state, ...initialState};
  // }
};
/* setting the getters*/
const getters = {
  staff_logs(state) {
    return state.staff_logs;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
