import BaseHandler from '../../handler/base.handler';

class ClockInOutProvider extends BaseHandler {
  staffLogs(payload) {
    return this.get('/staffs', payload)
  }
  clockInOut(payload) {
    return this.post('/clock-in-out', payload);
  }

}

export default ClockInOutProvider;
