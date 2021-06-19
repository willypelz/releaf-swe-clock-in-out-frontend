import validationMixin from "../../shared/mixins/validationMixin";
import Staff from "./../../shared/components/staffs/Staff";
export default {
  name: 'Home',
  components: {
    Staff,
  },
  data() {
    return {
      currentPage: 1
    };
  }
}
