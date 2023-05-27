<script setup>
import MasterMenu from "../../components/menu/index.vue";
import NavBar from "../../components/nav/index.vue";
import Formuser from "../../components/forms/tipo.vue";
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
            <h1 class="h3 mb-4 text-gray-800">
              <i class="fas fa-fw fa-user"></i> Gestão
              <small><h6 class="ml-5">Tipo de documento</h6> </small>
            </h1>
            <hr />

          
            <div class="row" style="margin-bottom: 10%">
              <div class="col-md-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      <i class="fa fa-plus"></i> Cadastre os tipos de documentos
                    </h6>
                  </div>
                  <div class="card-body">
                    <Formuser />
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-warning">
                      <i class="fa fa-list"></i> Lista dos tipos de documentos da plataforma
                    </h6>
                  </div>
                  <div class="card-body">
                    <div>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Nivel</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>nome@teste.com.br</td>
                            <td>
                              <span class="badge text-bg-warning"
                                >Administrador</span
                              >
                            </td>
                            <td>
                              <span class="badge text-bg-success">Ativo</span>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-success mr-2 btn-sm"
                              >
                                <i class="fa fa-eye"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-warning mr-2 btn-sm"
                              >
                                <i class="fa fa-edit"></i>
                              </button>
                          
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          class="sticky-footer bg-white"
          style="bottom: 0 !important; position: fixed; width: 100%"
        >
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
<script>
export default {
  name: "User",
  mounted() {
   
  },
};
</script>
