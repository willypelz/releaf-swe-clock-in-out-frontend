import BaseHandler from '../../handler/base.handler';

class StaffProvider extends BaseHandler {
  createStaff(payload) {
    return this.post('/staffs', payload)
  }
  getStaffs() {
    return this.get('/staffs')
  }
  getStaff(slug) {
    return this.get('/staffs/' + slug)
  }
  updateStaff(slug, payload){
    return this.put('/staffs/' + slug, payload)
  }
  deleteStaff(slug) {
    return this.delete('/staffs/' + slug)
  }

}

export default StaffProvider;
