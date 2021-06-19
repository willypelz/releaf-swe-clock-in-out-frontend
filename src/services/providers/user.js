import BaseHandler from '../../handler/base.handler';

class  UserProvider  extends BaseHandler {
	register(payload) {
		return this.post('/staffs',  payload)
	}
  login(payload) {
    return this.post('/auth/login',  payload)
  }
}

export default UserProvider;
