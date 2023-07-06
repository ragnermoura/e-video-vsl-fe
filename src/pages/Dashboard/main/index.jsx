import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { FaTrash } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

export default () => {
  return (
    <Container>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <MasterMenu />
          <div class="layout-page">
            <NavBar />

            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-lg-8 mb-4 order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                        <div class="col-sm-7">
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
                              Temos uma surpresa para você.
                            </a>
                          </div>
                        </div>
                        <div class="col-sm-5 text-center text-sm-left">
                          <div class="card-body pb-0 px-0 px-md-4">
                            <img
                              src="../../src/assets/img/illustrations/man-with-laptop-light.png"
                              height="140"
                              alt="View Badge User"
                              data-app-dark-img="illustrations/man-with-laptop-dark.png"
                              data-app-light-img="illustrations/man-with-laptop-light.png"
                            />
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
                            <div class="card-title d-flex align-items-start justify-content-between">
                              <div class="avatar flex-shrink-0">
                                <img
                                  src="../../src/assets/img/icons/unicons/chart-success.png"
                                  alt="chart success"
                                  class="rounded"
                                />
                              </div>
                              <div class="dropdown">
                                <button
                                  class="btn p-0"
                                  type="button"
                                  id="cardOpt3"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div
                                  class="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="cardOpt3"
                                >
                                  <a
                                    class="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Ver mais
                                  </a>
                                  <a
                                    class="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                            <span class="fw-semibold d-block mb-1">
                              Seus Videos
                            </span>
                            <h3 class="card-title mb-2">00</h3>
                            <small class="text-success fw-semibold">
                              <i class="bx bx-up-arrow-alt"></i> +0
                            </small>
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
                  <div class="col-6 mb-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="card-title">
                          <h5 class="text-nowrap mb-2">
                            Comparativo de Tempo visualizado
                          </h5>
                          <span class="badge bg-label-warning rounded-pill"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 mb-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="card-title">
                          <h5 class="text-nowrap mb-2">
                            Comparativo de Entregas
                          </h5>
                          <span class="badge bg-label-warning rounded-pill"></span>
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
                              <h5 class="text-nowrap mb-2">
                                Play em vídeos <small>( Total )</small>
                              </h5>
                              <span class="badge bg-label-success rounded-pill">
                                Ano 2023
                              </span>
                            </div>
                            <div class="mt-sm-auto">
                              <small class="text-success text-nowrap fw-semibold">
                                <i class="bx bx-chevron-up"></i> 0%
                              </small>
                              <h3 class="mb-0">0</h3>
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
                              <h5 class="text-nowrap mb-2">Conversões</h5>
                              <span class="badge bg-label-danger rounded-pill">
                                Ano 2021
                              </span>
                            </div>
                            <div class="mt-sm-auto">
                              <small class="text-success text-nowrap fw-semibold">
                                <i class="bx bx-chevron-up"></i> 0%
                              </small>
                              <h3 class="mb-0">0</h3>
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
                              <h5 class="text-nowrap mb-2">Perdas</h5>
                              <span class="badge bg-label-danger rounded-pill">
                                Ano 2021
                              </span>
                            </div>
                            <div class="mt-sm-auto">
                              <small class="text-success text-nowrap fw-semibold">
                                <i class="bx bx-chevron-up"></i> 0%
                              </small>
                              <h3 class="mb-0">0</h3>
                            </div>
                          </div>
                          <div id="profileReportChart"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div class="card h-100">
                      <div class="card-header d-flex align-items-center justify-content-between pb-0">
                        <div class="card-title mb-0">
                          <h5 class="m-0 me-2">Compartivo de Rede Sociais</h5>
                          <small class="text-muted">0 dados analizados</small>
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="orederStatistics"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="orederStatistics"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              Select All
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Refresh
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Share
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <div class="d-flex flex-column align-items-center gap-1">
                            <h2 class="mb-2">0</h2>
                            <span>Total Orders</span>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul class="p-0 m-0">
                          <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                              <span class="avatar-initial rounded bg-label-info">
                                <i class="bx bx-facebook"></i>
                              </span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Facebook</h6>
                                <small class="text-muted">Visualizações</small>
                              </div>
                              <div class="user-progress">
                                <small class="fw-semibold">0</small>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                              <span class="avatar-initial rounded bg-label-warning">
                                <i class="bx bx-instagram"></i>
                              </span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Instagram</h6>
                                <small class="text-muted">Visualizações</small>
                              </div>
                              <div class="user-progress">
                                <small class="fw-semibold">0</small>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                              <span class="avatar-initial rounded bg-label-danger">
                                <i class="bx bx-facebook-alt"></i>
                              </span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Tiktok</h6>
                                <small class="text-muted">Visualizações</small>
                              </div>
                              <div class="user-progress">
                                <small class="fw-semibold">0</small>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex">
                            <div class="avatar flex-shrink-0 me-3">
                              <span class="avatar-initial rounded bg-label-secondary">
                                <i class="bx bx-wordpress"></i>
                              </span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Wordpress</h6>
                                <small class="text-muted">Visualizações</small>
                              </div>
                              <div class="user-progress">
                                <small class="fw-semibold">0</small>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-8 order-2 mb-4">
                    <div class="card h-100">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="card-title m-0 me-2">Lista de Vídeos</h5>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="transactionID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="transactionID"
                          >
                            <a class="dropdown-item" href="javascript:void(0);">
                              Last 28 Days
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Last Month
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              Last Year
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Título</th>
                              <th scope="col">Tempo</th>
                              <th scope="col">Thumb</th>
                              <th scope="col">Ação</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"></th>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>
                               

                                <button class="btn btn-warning btn-sm" style={{marginRight: 4}}>  <FaLink /></button>
                              
                                <button class="btn btn-danger btn-sm">
                                  <FaTrash />
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

              <Footer />

              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
