<template id="Main">
  <div class="container-scroller">
    <Navbar/>
    <div class="container-fluid page-body-wrapper">
     <MasterMenu/>
      <div class="main-panel">
        <div class="content-wrapper">
          <FormVideo/>
          </div>
          <Footer/>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/dashboard/navbar/index.vue'
import MasterMenu from '../../components/dashboard/master-menu/index.vue'
import Footer from '../../components/dashboard/footer/index.vue'
import FormVideo from '../../components/dashboard/video/index.vue'
export default {
  name: "Main",
  components:{
    Navbar,
    MasterMenu,
    FormVideo,
    Footer
  }
};
</script>
