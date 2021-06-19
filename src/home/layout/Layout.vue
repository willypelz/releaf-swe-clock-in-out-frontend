<template>
  <div class="main-content bg-default">
    <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top navbar-dark"
      expand="lg"
    >


      <template>
        <div class="navbar-collapse-header">
          <b-row>
            <b-col cols="6" class="collapse-brand">
              <router-link to="/">
                <img src="img/brand/green.png">
              </router-link>
            </b-col>
            <b-col cols="6" class="collapse-close">
              <button type="button" class="navbar-toggler" @click="showMenu = false">
                <span></span>
                <span></span>
              </button>
            </b-col>
          </b-row>
        </div>
        <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
          <b-nav-item to="/" >
            <i class="ni ni-planet"></i>
            <span class="nav-link-inner--text">Staffs</span>
          </b-nav-item>
          <b-nav-item to="/clock-in-out" >
            <i class="ni ni-planet"></i>
            <span class="nav-link-inner--text">Clock In/Out</span>
          </b-nav-item>
<!--          <b-nav-item to="/login">-->
<!--            <i class="ni ni-key-25"></i>-->
<!--            <span class="nav-link-inner&#45;&#45;text">Login</span>-->
<!--          </b-nav-item>-->
          <b-nav-item to="/register" >
            <i class="ni ni-planet"></i>
            <span class="nav-link-inner--text">Reg Staff</span>
          </b-nav-item>
<!--          <b-nav-item to="/" v-if="user">-->
<!--            <i class="ni ni-circle-08"></i>-->
<!--            <span class="nav-link-inner&#45;&#45;text">{{(userDetails) ? userDetails.username : user.username}}</span>-->
<!--          </b-nav-item>-->
<!--          <b-nav-item @click="logout" v-if="user">-->
<!--            <i class="ni ni-key-25"></i>-->
<!--            <span class="nav-link-inner&#45;&#45;text">Logout</span>-->
<!--          </b-nav-item>-->
        </b-navbar-nav>
      </template>
    </base-nav>

    <div class="main-content">
      <img src="../../assets/releaf-logo.png" class="m-3" alt="" width="65" height="65">

      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./layout.scss";
</style>

<script src="./layout.js"></script>
