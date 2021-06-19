<template>
  <b-card no-body>
    <b-jumbotron>
      <template #header>{{staff.name}}</template>

      <hr class="my-4">
      <template #lead>
        {{staff.email}}
      </template>


      <p v-if="staff.createdAt">
        {{staff.createdAt}}
      </p>

      <b-button variant="success" :to="{name: 'staffs'}" href="#">Back</b-button>
    </b-jumbotron>
    <div class="accordion" role="tablist">
      <h2 class="ml-4">Update Staff Record</h2>

      <b-card no-body class="m-1">
<!--        <b-card-text>-->
<!--          {{staff.department}}-->
<!--        </b-card-text>-->
<!--        <b-card-text>-->
<!--          {{staff.address}}-->
<!--        </b-card-text>-->

        <div class="w-50 align-self-center m-4">
          <validation-observer v-slot="{handleSubmit}" ref="formValidator">
            <b-alert show dismissible :variant="color" v-if="notification">
              <span class="alert-text"> {{notification}}!</span>
            </b-alert>
          <b-form role="form"  @submit.prevent="handleSubmit(onSubmit)">
            <base-input alternative
                        class="mb-3"
                        prepend-icon="ni ni-email-83"
                        placeholder="name"
                        name="name"
                        :rules="{required: true}"
                        v-model="staff.name" >
            </base-input>
            <div class="text-center">
              <base-button type="primary" native-type="submit" class="mt-2">Update Record</base-button>
            </div>
          </b-form>
          </validation-observer>
        </div>
      </b-card>

    </div>
  </b-card>
</template>
<script>
    import {mapGetters} from "vuex";
    import {GET_STAFF, UPDATE_STAFF} from "../../../store/actions/actions.type";
    import validationMixin from "../../../shared/mixins/validationMixin";


    export default {
        name: 'staffComponent',
        mixins: [validationMixin],

        data() {
            return {
                notification: '',
                color: 'primary'
            };
        },
        methods: {
            getStaff() {
                    this.$store.dispatch(GET_STAFF, this.slug);
            },

            clearResponse(){
                this.notification = null;
            },
            onSubmit() {
                this.clearResponse()
                const payload = {
                    slug: this.staff._id,
                    name: this.staff.name
                }

                this.$store.dispatch(UPDATE_STAFF, payload)
                    .then((res) => {
                            console.log('res');
                            this.notification = res.message;
                        },
                        (err) => {
                            this.color = 'danger'
                            this.notification = err.response.data.message;
                            // this.errors = err.response.data.errors;
                        }
                    );

                // this.$nextTick(() => {
                //     this.$bvModal.hide('modal-prevent-closing')
                // })
            },
            // updateReview(id){
            //     const payload = {slug: this.slug, id, status: 'active'};
            //     this.$store.dispatch(UPDATE_REVIEW, payload)
            //         .then((res) => {
            //                 this.getStaff();
            //             },
            //             (err) => {
            //                 this.errors = err.response.data.errors;
            //             }
            //         );
            // }
        },
        mounted() {
            this.getStaff();
        },
        computed: {
            ...mapGetters(['staff']),
            slug() {
                return this.$route.params.slug;
            }
        }
    }


</script>
