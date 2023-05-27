<script setup>
import MasterMenu from "../../components/menu/index.vue";
import NavBar from "../../components/nav/index.vue";
</script>

<template>
  <main id="page-top">
    <div id="wrapper">
      <MasterMenu />
      <div id="content-wrapper">
        <div id="content">
          <NavBar />

          <div class="container-fluid">
            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800"><i class="fas fa-fw fa-tachometer-alt"></i> Monitoramento<small><h6 class="ml-5">Dashboard</h6> </small></h1>
            <hr>
          </div>
        </div>

        <footer class="sticky-footer bg-white" style="bottom: 0 !important; position: fixed; width: 100%;">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright © G-DOK 2023</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </main>
</template>
