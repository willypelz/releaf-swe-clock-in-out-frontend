<template>
  <b-card no-body>
    <b-card-header class="border-0">
      <h3 class="mb-0">Staffs</h3>
      <b-button  class="float-right" variant="success" to="/register">Create</b-button>

    </b-card-header>
    <el-input
      placeholder="Table Search with Staff ID"
      v-model="search"
      class="search-form">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table class="table-responsive table"
              header-row-class-name="thead-light"
              :data="staffs.filter(data => !search || data.staff_id.toLowerCase().includes(search.toLowerCase()))">
      <el-table-column label="Staff ID"
                       min-width="210px"
                       prop="name">
        <template v-slot="{row}">
              <span class="font-weight-600 name mb-0 text-sm">{{row.staff_id}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Staff Name"
                       min-width="370px"
                       prop="status">
        <template v-slot="{row}">
          <span class="font-weight-600 name mb-0 text-sm">{{row.name}}</span>

        </template>
      </el-table-column>
      <el-table-column label="Staff Email"
                       min-width="370px"
                       prop="status">
        <template v-slot="{row}">
          <span class="font-weight-600 name mb-0 text-sm">{{row.email}}</span>

        </template>
      </el-table-column>


      <el-table-column label="Staff Department"
                       prop="completion"
                       min-width="240px">
        <template v-slot="{row}">
          <span class="font-weight-600 name mb-0 text-sm" >{{row.department}}</span>

        </template>
      </el-table-column>

      <el-table-column label=""
                       prop="completion"
                       min-width="240px">
        <template v-slot="{row}">
          <div class="d-flex align-items-center">
            <router-link class="btn btn-primary btn-sm" :to="{name: 'staff', params: {slug: row.staff_id}}">
               <i class="fa fa-eye"></i>
            </router-link>
<!--            <button  v-if="user.role ==='admin'" class="btn btn-danger btn-sm" @click="deleteStaff(row.slug)" ><i class="fa fa-trash"></i></button>-->
          </div>
        </template>
      </el-table-column>
    </el-table>

    <b-card-footer class="py-4 d-flex justify-content-end">
      <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
    </b-card-footer>
  </b-card>
</template>
<script>
    import {mapGetters} from "vuex";
    import {Table, TableColumn} from 'element-ui'
    import {CREATE_STAFF, DELETE_STAFF, GET_STAFFS} from "../../../store/actions/actions.type";
    import {getUserData} from "../../../util/cache";

    export default {
        name: 'staff-list',
        components: {
            [Table.name]: Table,
            [TableColumn.name]: TableColumn
        },
        data() {
            return {
                search: null,
                currentPage: 1,
                name: '',
                title: '',
                description: '',
                titleState: null,
                descriptionState: null,
            };
        },
        methods: {
            getStaffs() {
                this.$store.dispatch(GET_STAFFS)
                    .then((res) => {
                            console.log('response', res)
                        },
                        (err) => {
                            this.errors = err.response.data.errors;
                        }
                    );
            },


            deleteStaff(slug){
                this.$store.dispatch(DELETE_STAFF, slug)
                    .then((res) => {this.getStaffs()},
                        (err) => this.errors = err.response.data.errors
                    );
            }
        },
        mounted() {
            this.getStaffs();
        },
        computed: {
            ...mapGetters(['staffs', 'user'])
        }
    }


</script>
