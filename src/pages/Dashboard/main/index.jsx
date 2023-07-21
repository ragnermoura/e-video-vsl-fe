import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { FaTrash } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Instagram from "../../../assets/img/icons/instagram.webp";
import Youtube from "../../../assets/img/icons/youtube.webp";

import Image1 from "../../../assets/img/img1_1.webp";
import Image2 from "../../../assets/img/img2.webp";
import Image3 from "../../../assets/img/img3.webp";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { redirect,  } from "react-router-dom";

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

  const [name, setName] = useState('')

  useEffect( () => {

    setName(localStorage.getItem('nome_usuario'))

  },[])

  return (
    <Container>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-lg-4 mb-4 order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                        <div className="col-sm-12">
                          <div className="card-body">
                            <h5 className="card-title text-primary">
                              Bem-vindo {name}! 🎉
                            </h5>
                            <p className="mb-4">
                              Você ainda tem <span className="fw-bold">5</span>{" "}
                              videos para criar na sua conta. Confira seu plano
                              e aumente a sua capacidade.
                            </p>

                            <a
                              href="https://ev.braip.com/ref?pv=pro97mo1&af=afiy167j7"
                              target="_blank"
                              className="btn btn-sm btn-outline-primary"
                            >
                              Upgrade do plano
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-5 text-center text-sm-left">
                          <div className="card-body pb-0 px-0 px-md-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 order-1">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between"></div>
                            <h5 className="card-title text-secondary text-center">
                              <strong>Indique e Ganhe R$</strong>
                            </h5>
                            <h3 className="card-title mb-2">
                              <a
                                href="https://pagamento.evideovsl.com.br/enrollments/e-video-vsl"
                                target="_blank"
                                >
                                <button
                                type="button"
                                style={{ width: "100%", marginTop: "10%", color: "#ffffff" }}
                                className="btn btn-primary"
                                >

                                Link de afiliados
                                </button>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 order-1">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between"></div>
                            <span className="fw-semibold d-block mb-1 text-center">
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

                  <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                    <div className="row"></div>
                    <div className="row"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <a href="#" target="_blank">
                      <div className="card">
                        <img src={Image1} alt="" srcset="" />
                      </div>
                    </a>
                  </div>

                  <div className="col-4 mb-4">
                    <a
                      href="https://mktdigitalpro.net/pagesbraip/?pv=prox1jwv&af=afiz23d86"
                      target="_blank"
                    >
                      <div className="card">
                        <img src={Image2} alt="" srcset="" />
                      </div>
                    </a>
                  </div>

                  <div className="col-4 mb-4">
                    <a
                      href="https://plrpremium.net/versao-2023/?pv=pro97mo1&af=afiy167j7"
                      target="_blank"
                    >
                      <div className="card">
                        <img src={Image3} alt="" srcset="" />
                      </div>
                    </a>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between pb-0">
                        <div className="card-title mb-0">
                          <h5 className="m-0 me-2">Suas indicações</h5>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row mt-3">
                          <div className="col-4 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <span
                                        className="badge bg-label-warning rounded-pill"
                                        style={{ marginLeft: "-10px" }}
                                      >
                                        Mês
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">0</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <span
                                        className="badge bg-label-warning rounded-pill"
                                        style={{ marginLeft: "-15px" }}
                                      >
                                        Atual
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">0</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-4 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <span
                                        className="badge bg-label-warning rounded-pill"
                                        style={{ marginLeft: "-15px" }}
                                      >
                                        Total
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">0</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <h4 className="card-title m-0 me-2 text-center">
                            <strong> Ranking de indicações</strong>
                          </h4>

                          <div className="container-fluid mt-3" style={{marginLeft: '-20px'}}>
                            <table className="table">
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

                  <div className="col-md-12 col-lg-8 order-2 mb-4">
                    <div className="card h-100">
                      <div className="card-header text-center d-flex align-items-center justify-content-between">
                        <h4 className="card-title m-0 me-2 text-center">
                          <strong> Minha Vendas</strong>
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-3 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <h5 className="text-nowrap mb-2">Vendas</h5>
                                      <span className="badge bg-label-success rounded-pill">
                                        Hoje
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <h5 className="text-nowrap mb-2">Vendas</h5>
                                      <span className="badge bg-label-warning rounded-pill">
                                        Ontem
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <h5 className="text-nowrap mb-2">Venda</h5>
                                      <span className="badge bg-label-warning rounded-pill">
                                        Mês atual
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">R$ 0,00</h6>
                                    </div>
                                  </div>
                                  <div id="profileReportChart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 mb-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                    <div className="card-title">
                                      <h5 className="text-nowrap mb-2">Venda</h5>
                                      <span className="badge bg-label-warning rounded-pill">
                                        Mês anterior
                                      </span>
                                    </div>
                                    <div className="mt-sm-auto">
                                      <h6 className="mb-0">R$ 0,00</h6>
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

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
