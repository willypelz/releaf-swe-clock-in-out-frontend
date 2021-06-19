import StaffListTable from "./../../shared/components/staffs/StaffListTable";
import NotificationComponent from "./../../shared/components/NotificationPlugin/Notification";
import {CLOCK_IN_OUT, GET_STAFF} from "../../store/actions/actions.type";
import validationMixin from "../../shared/mixins/validationMixin";
import {mapGetters} from "vuex";


export default {
  mixins: [validationMixin],
  name: 'Home',
  components: {
    StaffListTable,
    NotificationComponent
  },
  data() {
    return {
      currentPage: 1,
      notification: null,
      color: 'primary',
      model: {
        staff_id: '',
      },
      staff_found: false,
      title: 'wowowowowow',
      message: 'wowowowowow'
    };
  },
  methods: {
    clockInOut() {
      const status =  this.staff.clock_in_out_status === 'out' ? 'in' : 'out'
      const payload  = { staff_id: this.staff.staff_id, status};
      console.log('ddthis.staffthis.staff', payload)

      this.$store.dispatch(CLOCK_IN_OUT, payload)
        .then((res) => {
            this.color = 'success'
            this.notification = res.message;
            this.clearRequest()
          },
          (err) => {
          console.log(err.response.data.message)
            this.notification = err.response.data.message;
          }
        );
    },
    getStaff() {
      this.clearResponse();
      this.$store.dispatch(GET_STAFF, this.staff_id)
        .then((res) => {
             this.staff_found = true
             },
          (err) => {
            this.color = 'danger'
            this.notification = err.response.data.message;
          }
        );
    },
    clearResponse(){
      this.notification = null;
    },
    clearRequest(){
      this.staff_found = false;
      this.staff_id = '';
    }
  },
  computed: {
    ...mapGetters(['staff'])
  }
}
