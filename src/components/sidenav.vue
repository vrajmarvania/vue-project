<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select id="backdrop-variant" v-model="variant" :options="variants"></b-form-select>
        </b-form-group>
      </div>
      <div>
           <div class="vnav" id="vnav" style="background-color: rgb(0, 0, 0);">
                <ul>
                  <a>
                    <!-- <div> -->
                      <li id="shopin">
                         <a href="javascript:"> <b>Shop <i class="fas fa-angle-down px-4" style="font-size: 15px;"></i></b></a>
                           <div class="row imgshow" id="#imgshow">
                             <div class="">
                                <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_11.png" width="200px" height="100px">
                             </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_1.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_2.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_3.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_4.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_5.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_6.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_7.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_8.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_9.png" width="200px" height="100px">
                            </div>
                            <div class="">
                            <img src="https://utioutll.sirv.com/Smart%20Watches/nav/20_10.png" width="200px" height="100px">
                            </div>
                    </div>
                    
                    </li>
                    </a>
            <a href="/a">
            <li>Pro It Up</li>
            </a>
            <a href="/a">
            <li>Sound Of Champions</li>
            </a>
         <!-- </li> -->
         <li>
         <a href="javascript:" class="moredatab" id="moredatab"><b>More <i
            class="fas fa-angle-down px-4" style="font-size: 15px;"></i></b></a>
         <ul class="moredata" id="moredata" style="display: none;">
         <li><a class="dropdown-item" href="#">Plug-In Sale</a></li>
         <li><a class="dropdown-item" href="#">Float Your boAt</a></li>
         <li><a class="dropdown-item" href="#">Meet the boAtheads</a></li>
         <li><a class="dropdown-item" href="#">Earn Rs.100</a></li>
         </ul>
         </li>
         <!-- </li> -->
         <a href="">
         <li>Track Your Order</li>
         </a>
         <a href="">
         <li>Log in</li>
         </a>
      </ul>
         </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "side",
  data() {
    return {
      variant: "dark",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    };
  },
};
</script>