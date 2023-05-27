<template id="Profile">
  <div class="container-fluid row">
    <div class="col-md-2">
      <div class="circle-image"></div>
    </div>
    <div class="col-md-7">
      <h3 class="text-name">Nome o usuário </h3>
      <span class="badge text-bg-success mr-3"><i class="fa fa-circle"></i> Ativo</span>
      <span class="badge text-bg-dark">Administrador</span>
      <i class="fa fa-envelope ml-2"></i> <span>teste@teste.com |</span>
      <i class="fa fa-phone ml-2"></i> <span>(21) 0000-0000</span>
      
    </div>
  </div>
</template>
<script>
import api from "../../services/api";
export default {
  name: "Profile",
};
</script>

<style>
.circle-image{
    width: 90px;
    height: 90px;
    border-radius: 100px;
    background-color: azure;
    border: 5px solid #2e2e2e !important;
    margin-left: 20px !important;

}

.text-name{
  font-size: 30px !important;
}
</style>
