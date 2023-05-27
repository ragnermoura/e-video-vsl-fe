<template id="Tipo">
  <div>
    <form
      @submit.prevent="handleSubmit"
      enctype="multipart/form-data"
      action=""
      class="user"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="form-group mt-3">
            <input
              type="text"
              class="form-control form-control-user"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Ditite os tipos de documentos"
            />
          </div>
        </div>

        <div class="col-md-12">
          <hr />
        </div>

        <button
          type="submit"
          style="border: none"
          class="btn btn-success btn-user btn-block mt-4"
        >
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../../services/api";
import $ from "jquery";

import axios from "axios";
export default {
  name: "Tipo",

  data() {
    return {
      niveis: [],
      status: [],
      perfil: [],
      selectNivel: "",
      selectStatus: "",
      selectPerfil: "",
      selectedFile: null,
    };
  },

  mounted() {
    $(this.$refs.formFile).mask("000.000.000-00");

    api.getNivel().then((res) => {
      this.niveis = res.data.response;
      console.log(res.data.response);
    });

    api.getStatus().then((res) => {
      this.status = res.data.response;
    });

    api.getPerfil().then((res) => {
      this.perfil = res.data.response;
    });
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    handleSubmit() {
      const formData = new FormData();
      formData.append("imagem", this.selectedFile);

      let nome = document.getElementById("nome").value;
      let sobrenome = document.getElementById("sobrenome").value;
      let youemail = document.getElementById("email").value;
      let senha = document.getElementById("senha").value;
      let cpf = document.getElementById("cpf").value;
      let nivel = this.selectNivel;
      let status = this.selectStatus;
      let perfil = this.selectPerfil;

      //console.log(nome, sobrenome, youemail, senha, cpf, nivel, status, perfil)

      api.postTipo(
        nome,
        sobrenome,
        youemail,
        senha,
        cpf,
        nivel,
        status,
        perfil
      );

      api
        .postAvatar(formData)
        .then(() => {
          // Sucesso
          console.log("Sucesso");
        })
        .catch((error) => {
          // Trate o erro

          console.log("Falho");
        });
    },
  },
};
</script>
<style>
#foto {
  width: 500px !important;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: rgb(173, 173, 173);
}
</style>
