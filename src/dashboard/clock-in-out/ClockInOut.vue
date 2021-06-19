<template>
<div>
  <!-- Header -->
  <div class="header py-4 py-lg-5 pt-lg-8">

  </div>
  <b-container fluid class="mt--7">
    <b-row>
      <b-col>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">

        <b-form  @submit.prevent="handleSubmit(getStaff)">
        <b-card no-body class="w-50 center">
<!--          <NotificationComponent :title="title" :message="message" :type="'success'"-->
<!--                                 :top="0"-->
<!--                                 :bottom="0"-->
<!--                                 :closeOnClick="true" :icon="'fa fa-check'"></NotificationComponent>-->

          <b-card-header class="border-0">
            <h1 class="mb-0 text-center">Staffs Clock In Out Portal</h1>
          </b-card-header>

         <div class="w-46 pb-5 align-self-center form-group">
           <b-alert show dismissible :variant="color" v-if="notification">
             <span class="alert-text"> {{notification}}!</span>
           </b-alert>

           <el-input
             placeholder="Enter Staff ID"
             v-model="staff_id"
             :rules="{required: true}"
             class="search-form">
             <i slot="prefix" class="el-input__icon el-icon-search"></i>
           </el-input>

           <base-button  class=" float-right  mt-2" type="primary" block native-type="submit">Clock In/Out</base-button>

           <div class="mt-5 pt-5" v-if="staff_found">

             <b-card-group deck>
               <b-card :title="staff.staff_id" header-tag="header" footer-tag="footer">
                 <template #header>
                   <h6 class="mb-0">{{staff.type}}</h6>
                 </template>
                 <b-card-text>{{staff.name}}.</b-card-text>
                 <b-button href="#" :variant="staff.clock_in_out_status === 'out' ? 'primary' : 'danger'" @click="clockInOut">
                  {{staff.clock_in_out_status === 'out' ? 'Clock-In' : 'Clock-Out'}}
                 </b-button>
               </b-card>
             </b-card-group>
           </div>
         </div>
        </b-card>
        </b-form>
        </validation-observer>
      </b-col>
    </b-row>
    <div class="mt-5"></div>
  </b-container></div>
</template>

<script src="./clockInOut.js"></script>

<style lang="scss" scoped>
    @import "./clockInOut";
</style>
