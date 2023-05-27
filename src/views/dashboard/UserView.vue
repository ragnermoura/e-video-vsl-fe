<script setup>
import MasterMenu from "../../components/menu/index.vue";
import NavBar from "../../components/nav/index.vue";
import Formuser from "../../components/forms/usuarios.vue";
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
              <i class="fas fa-fw fa-user"></i> Usuários
              <small><h6 class="ml-5">Cadastro</h6> </small>
            </h1>
            <hr />

            <div class="row" style="margin-bottom: 10%">
              <div class="col-md-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      <i class="fa fa-plus"></i> Cadastre os usuários da sua
                      plataforma
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
                      <i class="fa fa-list"></i> Lista dos usuários da
                      plataforma
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
                                data-toggle="modal"
                                data-target="#ver"
                                class="btn btn-success mr-2 btn-sm"
                              >
                                <i class="fa fa-eye"></i>
                              </button>
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#edit"
                                class="btn btn-warning mr-2 btn-sm"
                              >
                                <i class="fa fa-edit"></i>
                              </button>

                              <button
                                type="button"  data-toggle="modal"
                                data-target="#delete"
                                class="btn btn-danger btn-sm"
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </td>

                            <!-- Modal Visualizar -->
                            <div
                              class="modal fade"
                              id="ver"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      <i class="fa fa-eye"></i> Visualizar
                                    </h5>
                                 
                                  </div>
                                  <div class="modal-body"> <form
                                      @submit.prevent="handleSubmit"
                                      enctype="multipart/form-data"
                                      action=""
                                      class="user"
                                    >
                                      <div class="row">
                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <input disabled
                                              type="text"
                                              class="form-control form-control-user"
                                              id="nome"
                                              v-model="nome"
                                              aria-describedby="emailHelp"
                                              placeholder="Digite o nome"
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <input disabled
                                              type="text"
                                              class="form-control form-control-user"
                                              id="sobrenome"
                                              v-model="sobrenome"
                                              aria-describedby="emailHelp"
                                              placeholder="Digite o sobrenome"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-md-12">
                                          <div class="form-group mt-3">
                                            <input
                                            disabled
                                              type="email"
                                              class="form-control form-control-user"
                                              id="email"
                                              v-model="email"
                                              aria-describedby="emailHelp"
                                              placeholder="Digite o e-mail"
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <select
                                            disabled
                                              v-model="selectNivel"
                                              style="
                                                border-radius: 60px;
                                                height: 50px;
                                              "
                                              type="text"
                                              class="form-select"
                                              aria-describedby="emailHelp"
                                            >
                                              <option selected disabled>
                                                Escolha o Nivel
                                              </option>
                                              <option
                                                v-for="Nivel in niveis"
                                                :value="Nivel.id_nivel"
                                                :key="Nivel.id_nivel"
                                              >
                                                {{ Nivel.nivel }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <select
                                            disabled
                                              v-model="selectStatus"
                                              style="
                                                border-radius: 60px;
                                                height: 50px;
                                              "
                                              type="text"
                                              class="form-select"
                                              aria-describedby="emailHelp"
                                            >
                                              <option selected disabled>
                                                Escolha o status
                                              </option>
                                              <option
                                                v-for="Status in status"
                                                :value="Status.id_status"
                                                :key="Status.id_status"
                                              >
                                                {{ Status.label }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                     

                                       
                                      </div>
                                    </form></div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Ok, tudo certo :)
                                    </button>
                                   
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Modal Editar -->
                            <div
                              class="modal fade"
                              id="edit"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      <i class="fa fa-edit"></i> Editar
                                    </h5>
                                  
                                  </div>
                                  <div class="modal-body">
                                    <form
                                      @submit.prevent="handleSubmit"
                                      enctype="multipart/form-data"
                                      action=""
                                      class="user"
                                    >
                                      <div class="row">
                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <input
                                              type="text"
                                              class="form-control form-control-user"
                                              id="nome"
                                              v-model="nome"
                                              aria-describedby="emailHelp"
                                              placeholder="Digite o nome"
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <input
                                              type="text"
                                              class="form-control form-control-user"
                                              id="sobrenome"
                                              v-model="sobrenome"
                                              aria-describedby="emailHelp"
                                              placeholder="Digite o sobrenome"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-md-12">
                                          <div class="form-group mt-3">
                                            <input
                                              type="email"
                                              class="form-control form-control-user"
                                              id="email"
                                              v-model="email"
                                              aria-describedby="emailHelp"
                                              placeholder="Digite o e-mail"
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <input
                                              type="password"
                                              class="form-control form-control-user"
                                              id="senha"
                                              v-model="senha"
                                              aria-describedby="emailHelp"
                                              placeholder="Escolha uma senha"
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <input
                                              type="password"
                                              class="form-control form-control-user"
                                              id="senhaConfirm"
                                              v-model="senhaConfirm"
                                              aria-describedby="emailHelp"
                                              placeholder="Confirme a senha"
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <select
                                              v-model="selectNivel"
                                              style="
                                                border-radius: 60px;
                                                height: 50px;
                                              "
                                              type="text"
                                              class="form-select"
                                              aria-describedby="emailHelp"
                                            >
                                              <option selected disabled>
                                                Escolha o Nivel
                                              </option>
                                              <option
                                                v-for="Nivel in niveis"
                                                :value="Nivel.id_nivel"
                                                :key="Nivel.id_nivel"
                                              >
                                                {{ Nivel.nivel }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-group mt-3">
                                            <select
                                              v-model="selectStatus"
                                              style="
                                                border-radius: 60px;
                                                height: 50px;
                                              "
                                              type="text"
                                              class="form-select"
                                              aria-describedby="emailHelp"
                                            >
                                              <option selected disabled>
                                                Escolha o status
                                              </option>
                                              <option
                                                v-for="Status in status"
                                                :value="Status.id_status"
                                                :key="Status.id_status"
                                              >
                                                {{ Status.label }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                     

                                       
                                      </div>
                                    </form>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Fechar
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-success"
                                    >
                                      Salvar edição
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                              <!-- Modal Apagar -->
                              <div
                              class="modal fade"
                              id="delete"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      <i class="fa fa-trash"></i> Apagar
                                    </h5>
                                  
                                  </div>
                                  <div class="modal-body"><h4 class="text-center">Tem certeza que deseja apagar este usuário?</h4></div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Fechar
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger"
                                    >
                                      Sim, apagar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

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
    $("#ver").on("show.bs.modal", function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var recipient = button.data("whatever"); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find(".modal-title").text("New message to " + recipient);
      modal.find(".modal-body input").val(recipient);
    });

    $("#edit").on("show.bs.modal", function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var recipient = button.data("whatever"); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find(".modal-title").text("New message to " + recipient);
      modal.find(".modal-body input").val(recipient);
    });
  },
};
</script>
