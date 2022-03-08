
<template>
  <div id="wrapper" :class="toggledata">

  <aside id="sidebar-wrapper">
    <div class="sidebar-brand">
      <router-link class="navbar-brand" :to="{ name: 'index' }">

      <img
              src="https://utioutll.sirv.com/Smart%20Watches/nav/logo.png"
              style="width: 100px; height: 50px"
              id="logo"
            />
          </router-link>
    </div>
    <ul class="sidebar-nav mt-5">
      <li class="">
        <router-link to="/admin"><i class="fa fa-home"></i>Dashboard</router-link>
      </li>
      <li>
        <router-link to="/admin/manage-product"><i  class="fas fa-cube ic"></i>Manage Product</router-link>
      </li>
      <li>
        <router-link to="/admin/manage-Category"><i class="fas fa-boxes ic"></i>Manage Category</router-link>
      </li>
       <li>
        <router-link to="/admin/Manageoffer"><i class="fas fa-tag ic"></i>Manage Offer</router-link>
      </li>
        <li>
        <router-link to="/admin/manageOrder"><i class="fas fa-chart-bar ic"></i>Manage order</router-link>
      </li>
      <li class="">
          <a v-on:click="logout()">
            <i class="fas fa-sign-out-alt ic"></i>
            <span class="text nav-text">Logout</span>
          </a>
        </li>
    </ul>
  </aside>

  <div id="navbar-wrapper">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#" class="navbar-brand" @Click="ontoggle" id="sidebar-toggle"><i class="fa fa-bars" style="  color: black;"></i></a>
        </div>
      </div>
    </nav>
  </div>

  <section id="content-wrapper">
      <div class="row">
        <div class="col-lg-12">
              <router-view></router-view>

        </div>
      </div>
  </section>

</div>
</template>
<script>
    export default {
        name:'dindex',
      components: {  },
      data: () => ({
        toggle:true,
        toggledata:''
      }),
      methods:{
        ontoggle(){
          if(this.toggle){
            this.toggledata='toggled',
            this.toggle=false

          }else{
            this.toggledata = '',
             this.toggle=true
          }
        },
           logout: function () {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "Are You sure you want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm !",
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.loginuser = true;
            this.$swal.fire(
              "Logged out!",
              "You have successfully logged out!",
              "success"
            );
            this.$router.push({ name: "login" });
          }
        });
      }}
    }
  </script>


 


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
section#content-wrapper {
    background-color: white;
}
.ic{
  width: 60px;
  font-size: 24px;
}
i {
    color: white;
}
.sidebar-nav a {
      padding: 23px 0px;
    height: 75px;
}
body {
  padding-bottom: 30px;
  position: relative;
  min-height: 100%;
}

a {
  transition: background 0.2s, color 0.2s;
}
a:hover,
a:focus {
  text-decoration: none;
}

#wrapper {
  padding-left: 0;
  transition: all 0.5s ease;
  position: relative;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(0, 0, 0);
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

.sidebar-brand {
  position: absolute;
  top: 0;
  width: 250px;
  text-align: center;
  padding: 20px 0;
}
.sidebar-brand h2 {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  color: #fff;
}

.sidebar-nav {
  position: absolute;
  top: 75px;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar-nav > li {
  text-indent: 10px;
  line-height: 42px;
}
.sidebar-nav > li a {
  display: block;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
}
.sidebar-nav > li > a:hover,
.sidebar-nav > li.active > a {
  text-decoration: none;
  color: rgb(255, 251, 0);
  /* background: #F8BE12; */
}
.sidebar-nav > li > a i.fa {
  font-size: 24px;
  width: 60px;
}

#navbar-wrapper {
    width: 100%;
    position: absolute;
    z-index: 2;
}
#wrapper.toggled #navbar-wrapper {
    position: absolute;
    margin-right: -250px;
}
#navbar-wrapper .navbar {
  border-width: 0 0 0 0;
  background-color: #eee;
  font-size: 24px;
  margin-bottom: 0;
  border-radius: 0;
}
#navbar-wrapper .navbar a {
  color: #757575;
}
#navbar-wrapper .navbar a:hover {
  color: #F8BE12;
}

#content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
  top: 100px;
}
#wrapper.toggled #content-wrapper {
  position: absolute;
  margin-right: -250px;
}

@media (min-width: 992px) {
  #wrapper {
    padding-left: 250px;
  }
  
  #wrapper.toggled {
    padding-left: 60px;
  }

  #sidebar-wrapper {
    width: 250px;
  }
  
  #wrapper.toggled #sidebar-wrapper {
    width: 60px;
  }
  
  #wrapper.toggled #navbar-wrapper {
    position: absolute;
    margin-right: -190px;
}
  
  #wrapper.toggled #content-wrapper {
    position: absolute;
    margin-right: -190px;
  }

  #navbar-wrapper {
    position: relative;
  }

  #wrapper.toggled {
    padding-left: 60px;
  }

  #content-wrapper {
    position: relative;
    top: 0;
  }

  #wrapper.toggled #navbar-wrapper,
  #wrapper.toggled #content-wrapper {
    position: relative;
    margin-right: 60px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  #wrapper {
    padding-left: 60px;
  }

  #sidebar-wrapper {
    width: 60px;
  }
  
#wrapper.toggled #navbar-wrapper {
    position: absolute;
    margin-right: -250px;
}
  
  #wrapper.toggled #content-wrapper {
    position: absolute;
    margin-right: -250px;
  }

  #navbar-wrapper {
    position: relative;
  }

  #wrapper.toggled {
    padding-left: 250px;
  }

  #content-wrapper {
    position: relative;
    top: 0;
  }

  #wrapper.toggled #navbar-wrapper,
  #wrapper.toggled #content-wrapper {
    position: relative;
    margin-right: 250px;
  }
}

@media (max-width: 767px) {
  #wrapper {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 0;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }
  #wrapper.toggled #navbar-wrapper {
    position: absolute;
    margin-right: -250px;
  }

  #wrapper.toggled #content-wrapper {
    position: absolute;
    margin-right: -250px;
  }

  #navbar-wrapper {
    position: relative;
  }

  #wrapper.toggled {
    padding-left: 250px;
  }

  #content-wrapper {
    position: relative;
    top: 0;
  }

  #wrapper.toggled #navbar-wrapper,
  #wrapper.toggled #content-wrapper {
    position: relative;
    margin-right: 250px;
  }
}
</style>




  