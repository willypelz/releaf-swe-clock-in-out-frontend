import validationMixin from "../../shared/mixins/validationMixin";
import StaffListTable from "./../../shared/components/staffs/StaffListTable";
export default {
  name: 'Home',
  components: {
    StaffListTable,
  },
  data() {
    return {
      currentPage: 1
    };
  }
}
