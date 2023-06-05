<template id="Home">
  <div>
    <Navbar />
    <Header />
    <div class="row col-md-12 mt-4" style="padding: 2%">
      <div class="col-md-6">
        <h1 class="text-title">
          O que é o <span class="textIgreja">e-Video VSL </span>?
        </h1>
        <h4 class="text-subtitle">Quem somos</h4>
        <p class="mt-4 text-simple">
          Somos uma plataforma inovadora desenvolvida exclusivamente para
          atender às suas necessidades de venda. Nosso objetivo é otimizar e
          simplificar todos seu engajamentos, permitindo que você se concentre
          no que realmente importa: o seus Leads e o seu público alvo.
        </p>

        <div class="row">
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Segurança</h6>
          </div>
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Qualidade</h6>
          </div>
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Design</h6>
          </div>
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Stream</h6>
          </div>
          <div class="col-md-4 mt-2">
            <h6 class="cheks"><i class="fa fa-check"></i> Integração</h6>
          </div>
          <div class="col-md-4 mt-2">
            <h6 class="cheks"><i class="fa fa-check"></i> Ganhos</h6>
          </div>
          <div class="col-md-4 mt-2">
            <h6 class="cheks"><i class="fa fa-check"></i> Multipla gestão</h6>
          </div>
        </div>

        <p class="mt-3 text-simple">
          Com o e-Video, você terá acesso a uma gama de recursos e ferramentas
          poderosas projetadas para agilizar e aprimorar a administração das
          suas vendas. Desde a publicação dos videos até o controle de leads e
          visualizações, passando pelo agendamento de contato e a comunicação
          eficiente, nossa plataforma abrangente foi cuidadosamente projetada
          para atender às suas necessidades específicas.
        </p>
      </div>
      <div class="col-md-6 mt-5">
        <img
          src="../../assets/images/dashboard.png"
          class="img-fluid img-dash"
          alt=""
          srcset=""
        />
      </div>
      <div class="row col-md-12 mt-4" style="padding: 2%">
        <div class="col-md-12">
          <Card />
        </div>
      </div>
    </div>
    <img src="../../assets/images/paralax.png" class="divisor" alt="" />

    <div class="row col-md-12 mt-4" style="padding: 2%">
      <div class="col-md-12 mt-5 text-center">
        <h1 class="text-title">
          <i class="fa fa-circle text-danger"></i> Captura de videos com dois
          cliques
        </h1>
        <h4 class="text-subtitle">Com maior alcance multiplo</h4>
      </div>
      <div class="col-md-8">
        <img
          src="../../assets/images/live.png"
          class="img-fluid img-live"
          alt=""
        />
      </div>

      <div class="col-md-4">
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i
          ><strong> Transmissões em todas as redes sociais</strong>
        </p>

        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Controle de cometários</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Edição de Layouts</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i
          ><strong> Gerador de Qr-Code para compartilhamento</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Relatórios de audiencia</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Comparativos de alcance</strong>
        </p>

        <img
          src="../../assets/images/qrcode.png"
          class="img-fluid ml-5"
          width="200"
          alt=""
        />

        <ButtonSecondary />
      </div>
    </div>

    <div class="faixa mt-4" style="height: 130px">
      <div class="container">
        <!-- <h5 class="title-faixa"> Nossos parceiros e integradores</h5> -->
        <div class="row text-center">
          <div class="col-md-3 mt-3">
            <h1 class="number">277+</h1>
            <h5 class="description">Contas conectadas</h5>
          </div>
          <div class="col-md-3 mt-3">
            <h1 class="number">2K</h1>
            <h5 class="description">Usuários ativos</h5>
          </div>
          <div class="col-md-3 mt-3">
            <h1 class="number">24h</h1>
            <h5 class="description">Suporte</h5>
          </div>
          <div class="col-md-3 mt-3">
            <h1 class="number">120+</h1>
            <h5 class="description">Conversões</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 mt-5 text-center">
      <h1 class="text-title">Teste agora</h1>
      <h4 class="text-subtitle">Saiba como podemos ajudar</h4>
    </div>
    <div class="row col-md-12 mb-5">
      <div class="container area-gerar">
        <input
          type="text"
          class="input-gerar"
          v-model="videoUrl"
          placeholder="Cole o link do vídeo do YouTube aqui"
        />
        <button class="button btn-primary btn-gerar">GERAR</button>
      </div>
      <div class="col-md-12 mt-4 mb-4">
        <div v-if="videoId" class="video-area">
          <div class="video-wrapper">
            <div id="video-overlay">
              <iframe
                width="600"
                height="300"
                :src="videoEmbedUrl"
                frameborder="0"
              ></iframe>
              <div
                class="play-button"
                v-show="!videoPlaying"
                @click="playVideo"
              >
               <i class="fa fa-play fa-5x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/website/navbar/index.vue";
import Header from "../../components/website/header/index.vue";
import Card from "../../components/website/card/index.vue";
import ButtonSecondary from "../../components/website/buttons/secondary.vue";
export default {
  name: "Home",
  data() {
    return {
      videoUrl: "",
      videoId: "",
      videoPlaying: false,
    };
  },
  components: {
    Navbar,
    Header,
    Card,
    ButtonSecondary,
  },
  watch: {
    videoUrl: function (newUrl) {
      if (this.isYouTubeUrl(newUrl)) {
        var videoId = this.getYouTubeVideoId(newUrl);
        this.videoId = videoId;
        this.loadYouTubeAPI();
      } else {
        this.videoId = "";
      }
    },
  },
  computed: {
    videoEmbedUrl: function () {
      return "https://www.youtube.com/embed/" + this.videoId;
    },
  },
  methods: {
    playVideo() {
      // Adicione a lógica de reprodução aqui
      // Por exemplo, você pode chamar a função de reprodução do player de vídeo do YouTube
      // ou atualizar a propriedade videoPlaying para true e deixar o player de vídeo gerenciar a reprodução
      this.videoPlaying = true;
    },

    isYouTubeUrl: function (url) {
      var pattern = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}$/;
      return pattern.test(url);
    },
    getYouTubeVideoId: function (url) {
      var videoId = "";
      var match = url.match(/[?&]v=([^&#]+)/);
      if (match) {
        videoId = match[1];
      }
      return videoId;
    },
    loadYouTubeAPI: function () {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = this.createVideoPlayer;
    },
    createVideoPlayer: function () {
      // Criar o player de vídeo do YouTube
      new YT.Player("video-overlay", {
        videoId: this.videoId,
        playerVars: {
          autoplay: 1, // Adicionar a opção autoplay: 1 para iniciar automaticamente o vídeo
          controls: 0,
          showinfo: 0,
          modestbranding: 0,
          loop: 0,
          playlist: this.videoId,
        },
        events: {
          onReady: function (event) {
            event.target.mute();
          },
        },
      });
    },
  },
};
</script>

<style>
@import url("../../assets/css/navbar.css");
</style>
