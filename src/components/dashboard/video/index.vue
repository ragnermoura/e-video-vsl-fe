<template id="Video">
  <div class="page-header">
    <h3 class="page-title">Criar VSL</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Edição 2</a></li>
        <li class="breadcrumb-item active" aria-current="page">Videos</li>
      </ol>
    </nav>
  </div>

  <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Área de edição</h4>
          <p class="card-description">Crie sua proteção</p>
          <form class="forms-sample">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername1"
                placeholder="Cole seu link aqui"
                v-model="videoUrl"
              />
            </div>
            <div class="row">
              <label for="exampleInputEmail1"
                ><i class="fa fa-paint"></i> Escolha a sua cor</label
              >
              <div class="col-md-3">
                <input
                  type="color"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Cole seu link aqui"
                />
              </div>
              <div class="col-md-9">
                <div v-if="videoId" class="video-area">
                  <div class="video-wrapper">
                    <div id="video-overlay">
                      <iframe
                        width="600"
                        height="300"
                        :src="videoEmbedUrl"
                        frameborder="0"
                        showinfo="0"
                        controls="1"
                        autoplay="1"
                      ></iframe>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VimeoPlayer from "@vimeo/player";
import YouTubePlayer from "vue-youtube";
export default {
  data() {
    return {
      videoUrl: "",
      videoId: "",
      videoPlaying: false,
    };
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
          autoplay: 0, // Adicionar a opção autoplay: 1 para iniciar automaticamente o vídeo
          controls: 1,
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
