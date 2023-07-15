import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { FaTrash } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Instagram from "../../../assets/img/icons/instagram.webp";
import Youtube from "../../../assets/img/icons/youtube.webp";

import Image1 from "../../../assets/img/img1.webp";
import Image2 from "../../../assets/img/img2.webp";
import Image3 from "../../../assets/img/img3.webp";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default () => {
  const data = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
    ],
    datasets: [
      {
        label: "Vendas",
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: "rgba(75, 192, 192, 0.2)", // cor de fundo
        borderColor: "rgba(75, 192, 192, 1)", // cor da borda
        borderWidth: 1, // largura da borda
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Container>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <MasterMenu />
          <div class="layout-page">
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-lg-4 mb-4 order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                        <div class="col-sm-12">
                          <div class="card-body">
                            <h5 class="card-title text-primary">
                              Bem-vindo Eric! 🎉
                            </h5>
                            <p class="mb-4">
                              Você ainda tem <span class="fw-bold">5</span>{" "}
                              videos para criar na sua conta. Confira seu plano
                              e aumente a sua capacidade.
                            </p>

                            <a
                              href="https://ev.braip.com/ref?pv=pro97mo1&af=afiy167j7"
                              target="_blank"
                              class="btn btn-sm btn-outline-primary"
                            >
                              Upgrade do plano
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-5 text-center text-sm-left">
                          <div class="card-body pb-0 px-0 px-md-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 order-1">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-6 mb-4">
                        <div class="card">
                          <div class="card-body">
                            <div class="card-title d-flex align-items-start justify-content-between"></div>
                            <h5 class="card-title text-secondary text-center">
                              <strong>Indique e Ganhe R$</strong>
                            </h5>
                            <h3 class="card-title mb-2">
                              <button
                                type="button"
                                style={{ width: "100%", marginTop: "10%" }}
                                class="btn btn-primary"
                              >
                                Link de afiliados
                              </button>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 order-1">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-6 mb-4">
                        <div class="card">
                          <div class="card-body">
                            <div class="card-title d-flex align-items-start justify-content-between"></div>
                            <span class="fw-semibold d-block mb-1 text-center">
                              Acompanhe nossas redes sociais
                            </span>

                            <div
                              style={{
                                justifyContent: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <a
                                href="https://www.instagram.com/ericsilva_pro/"
                                target="_blank"
                              >
                                <img
                                  style={{ width: 55 }}
                                  src={Instagram}
                                  alt=""
                                />
                              </a>
                              <a
                                href="https://www.youtube.com/channel/UCE1ICr3RLd439v2bMblaYng"
                                target="_blank"
                              >
                                <img
                                  style={{ width: 93 }}
                                  src={Youtube}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                    <div class="row"></div>
                    <div class="row"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 mb-4">
                    <a href="#" target="_blank">
                      <div class="card">
                        <img src={Image1} alt="" srcset="" />
                      </div>
                    </a>
                  </div>

                  <div class="col-4 mb-4">
                    <a
                      href="https://mktdigitalpro.net/pagesbraip/?pv=prox1jwv&af=afiz23d86"
                      target="_blank"
                    >
                      <div class="card">
                        <img src={Image2} alt="" srcset="" />
                      </div>
                    </a>
                  </div>

                  <div class="col-4 mb-4">
                    <a
                      href="https://plrpremium.net/versao-2023/?pv=pro97mo1&af=afiy167j7"
                      target="_blank"
                    >
                      <div class="card">
                        <img src={Image3} alt="" srcset="" />
                      </div>
                    </a>
                  </div>

                  <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div class="card h-100">
                      <div class="card-header d-flex align-items-center justify-content-between pb-0">
                        <div class="card-title mb-0">
                          <h5 class="m-0 me-2">Suas indicações</h5>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="row mt-3">
                          <div class="col-4 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <span
                                        class="badge bg-label-warning rounded-pill"
                                        style={{ marginLeft: "-10px" }}
                                      >
                                        Mês
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">0</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-4 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <span
                                        class="badge bg-label-warning rounded-pill"
                                        style={{ marginLeft: "-15px" }}
                                      >
                                        Atual
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">0</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-4 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <span
                                        class="badge bg-label-warning rounded-pill"
                                        style={{ marginLeft: "-15px" }}
                                      >
                                        Total
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">0</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <h4 class="card-title m-0 me-2 text-center">
                            <strong> Ranking de indicações</strong>
                          </h4>

                          <div class="container-fluid mt-3" style={{marginLeft: '-20px'}}>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Ranking</th>
                                  <th scope="col">User</th>
                                  <th scope="col">Ind.</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Eric Silva</td>
                                  <td>7654</td>
                                </tr>
                                
                               
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-8 order-2 mb-4">
                    <div class="card h-100">
                      <div class="card-header text-center d-flex align-items-center justify-content-between">
                        <h4 class="card-title m-0 me-2 text-center">
                          <strong> Minha Vendas</strong>
                        </h4>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-3 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <h5 class="text-nowrap mb-2">Vendas</h5>
                                      <span class="badge bg-label-success rounded-pill">
                                        Hoje
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <h5 class="text-nowrap mb-2">Vendas</h5>
                                      <span class="badge bg-label-warning rounded-pill">
                                        Ontem
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <h5 class="text-nowrap mb-2">Venda</h5>
                                      <span class="badge bg-label-warning rounded-pill">
                                        Mês atual
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 mb-4">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div class="card-title">
                                      <h5 class="text-nowrap mb-2">Venda</h5>
                                      <span class="badge bg-label-warning rounded-pill">
                                        Mês anterior
                                      </span>
                                    </div>
                                    <div class="mt-sm-auto">
                                      <h6 class="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Bar data={data} options={options} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />

              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
