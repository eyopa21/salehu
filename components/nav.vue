<template>
       <!-- Start Navbar -->
        <nav id="topnav" class="defaultscroll is-sticky">
            <div class="container flex justify-between md:justify-around">
                <!-- Logo container-->
                <a class="logo" href="index.html">
                    <img src="../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                  
                </a>

                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

             
                <!--Login button End-->

                <div id="navigation">
                    <!-- Navigation Menu-->   
                    <ul class="navigation-menu">
                        <li><NuxtLink to="/" class="sub-menu-item">Home</NuxtLink></li>
                        <li><NuxtLink to="/products" class="sub-menu-item">Products</NuxtLink></li>
                        <li><NuxtLink to="/about" class="sub-menu-item">About</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="sub-menu-item">Contact</NuxtLink></li>
                        

                
                    </ul><!--end navigation menu-->
                </div><!--end navigation-->
            </div><!--end container-->
        </nav><!--end header-->
        <!-- End Navbar -->
</template>