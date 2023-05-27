import { http } from "./config";
import VueJwtDecode from 'vue-jwt-decode'

export default {
  login: async (youEmail, youPass) => {
    await http
      .post(
        "/login",
        {
          email: youEmail,
          senha: youPass,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        let decode = VueJwtDecode.decode(token);
        console.log(response);
        if (decode.id_status == 2 && decode.id_nivel == 2) {
          localStorage.setItem("auth", false);
          window.location.href = "/";
        } else if (
          (decode.id_status == 1 && decode.id_nivel == 1) ||
          decode.id_nivel == 2
        ) {
          localStorage.removeItem("error");
          localStorage.removeItem("auth");
          window.location.href = "/#/dashboard-main";
         
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
          location.reload();
        }
      });
  },
  Areaf: async (youAreaf) => {
    await http
      .post(
        "/area-formacao/cadastro",
        {
          formacao: youAreaf,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
        }
      });
  },
  Banca: async (youBanca) => {
    await http
      .post(
        "/banca/cadastro",
        {
          banca: youBanca,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
        }
      });
  },
  
 
  Nivel: async (youNivel) => {
    await http
      .post(
        "/nivel/cadastro",
        {
          nivel: youNivel,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
        }
      });
  },
  Status: async (youStatus) => {
    await http
      .post(
        "/status/cadastro",
        {
          status: youStatus,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
        }
      });
  },

  StatusPergunta: async (youStatus) => {
    await http
      .post(
        "/status-resposta/cadastro",
        {
          statusr: youStatus,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
        }
      });
  },

  postUsuario: async (
    nome,
    sobrenome,
    youemail,
    senha,
    cpf,
    nivel,
    status,
    perfil
  ) => {
    await http
      .post(
        "/usuarios/cadastro",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: youemail,
          senha: senha,
          cpf: cpf,
          id_nivel: nivel,
          id_status: status,
          id_perfil: perfil,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        localStorage.setItem(
          "id_user",
          response.data.dados.usuarioCriado.id_user
        );
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
        }
      });
  },

  postAvatar: async (formData) => {
    let id = localStorage.getItem("id_user");

    console.log(id);
    formData.append("id_user", id);

    try {
      const response = await http.post("/avatar/cadastro", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      console.log("response", response);
      localStorage.removeItem("id_user");
      location.reload();
    } catch (error) {
      console.log("Erro ======>", error);
    }
  },

  postAno: async (youAno) => {
    await http
      .post(
        "/ano/cadastro",
        {
          ano: youAno,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },

  postAtuacao: async (youAtuacao) => {
    await http
      .post(
        "/atuacao/cadastro",
        {
          atuacao: youAtuacao,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },

  postInst: async (youInst) => {
    await http
      .post(
        "/inst/cadastro",
        {
          instituicao: youInst,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },

  postInst: async (youInst) => {
    await http
      .post(
        "/inst/cadastro",
        {
          instituicao: youInst,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },

  postMateria: async (youInst) => {
    await http
      .post(
        "/materia/cadastro",
        {
          label: youInst,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },

  //GETS

  getano: async () => {
    return await http.get(
      "/ano",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      }
    );
  },

  getMateria: async () => {
    return await http.get("/materia/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getPerfil: async () => {
    return await http.get("/perfil", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getBanca: async () => {
    return await http.get("/banca", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getInst: async () => {
    return await http.get("/inst", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getLevel: async () => {
    return await http.get("/level", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getFormacao: async () => {
    return await http.get("/area-formacao", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getAtuacao: async () => {
    return await http.get("/atuacao", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getMod: async () => {
    return await http.get("/modalidade", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getDif: async () => {
    return await http.get("/dificuldade", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getCargo: async () => {
    return await http.get("/cargo", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getNivel: async () => {
    return await http.get("/nivel", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getStatusR: async () => {
    return await http.get("/status-resposta", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  getStatus: async () => {
    return await http.get("/status", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },
  getPerguntas: async () => {
    return await http.get("/pergunta", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },

  postProfile: async (concurso, id_materia) => {
    await http
      .post(
        "/perfil/cadastro",
        {
          concurso: concurso,
          id_materia: id_materia,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },

  postQuestion: async (data) => {
    await http
      .post(
        "/pergunta/cadastro",
        {
          ...data,
          id_user: 1,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.setItem("error", error.response.status);
          window.location.href = "/#/";
        }
      });
  },
};
