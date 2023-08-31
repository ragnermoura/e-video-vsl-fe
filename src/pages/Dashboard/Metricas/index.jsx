import { useEffect, useRef, useState } from "react"
import MasterMenu from "../../../components/masterMenu"
import { CardContainer, ChartArea, Container, ContainerMetricas, Header, VideoName } from "./styles"
import CardAnalytics from "../../../components/cardAnalytics"
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { metricaApi } from "../../../services/metrica";
import flatpickr from "flatpickr";
import { Portuguese } from 'flatpickr/dist/l10n/pt'
import moment from 'moment';
export default () => {
const [videoName, setVideoName] = useState('Suas métricas')
const  [info, setInfo] = useState({})
const [base, setBase] = useState([])
const today = new Date();
moment.locale('pt-br');

// Calcula a data há 30 dias atrás
const last30Days = new Date(today);
last30Days.setDate(last30Days.getDate() - 15);

const datepickerRef = useRef(null);
const [dates, setDates] = useState({
  
  
  start: moment().subtract(15, 'days').format('YYYY-MM-DD'),
  end: moment(today).format('YYYY-MM-DD')
})

function newdates(selectedDates){
  const formattedStartDate = moment(selectedDates[0]).format('YYYY-MM-DD');
  const formattedEndDate = moment(selectedDates[1]).format('YYYY-MM-DD');
  
  setDates({
    ...dates,
    start: formattedStartDate,
    end: formattedEndDate
  })

}


const dateRange = [];
for (let i = 0; i < 30; i++) {
  const currentDate = moment(dates?.start).add(i, 'days').format('DD/MM');
  dateRange.push(currentDate);
}

// Criar um objeto para armazenar as contagens de visualizações por dia
const viewsPerDay = {};

// Preencher o objeto com as contagens de visualizações por dia
dateRange.forEach(date => {
  viewsPerDay[date] = 0;
});

// Preencher o objeto com as contagens de visualizações reais
base.forEach(metric => {
  const date = moment(metric.createdAt).format('DD/MM');
  if (viewsPerDay[date] !== undefined && metric.view) {
    viewsPerDay[date]++;
  }
});

// Extrair as datas e contagens para uso no gráfico
const chartLabels = Object.keys(viewsPerDay);
const chartData = Object.values(viewsPerDay);
const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Reproduções",
        data: chartData,
        backgroundColor: "rgba(75, 192, 192, 0.2)", // cor de fundo
        borderColor: "rgba(75, 192, 192, 1)", // cor da borda
        borderWidth: 1, // largura da borda,
        tension: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      scales: {
        x: {
          type: 'time', // Define o eixo X como temporal
          time: {
            unit: 'day', // Define a unidade de tempo
          },
          
        },
        y: {
          beginAtZero: true,
          precision: 0,
        },
      },
    },
  };

  const { id_video } = useParams();
  
const handleGetAnalytics = async () => {

const { data } = await metricaApi.getAnalytics(id_video, dates)

console.log('data', data)

setInfo(data)
setBase(data?.full)

}
  

useEffect( () => {

   const picker = flatpickr(datepickerRef.current, {
    mode: 'range',
    defaultDate: [last30Days, today],
    maxDate: today,
    dateFormat: 'd/m/Y',
    onChange:  (selectedDates, dateStr) => {
     
     newdates(selectedDates)
  
    },
  })
  flatpickr.localize(Portuguese)
 
 
  handleGetAnalytics()

}, [])

useEffect( () => {

 
 
  handleGetAnalytics()

}, [dates])

return(

<Container>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />

<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className=" ">
           
<ContainerMetricas>
    
    

<Header>
    <VideoName>{videoName}</VideoName>
</Header>

<input id='pickerDate' ref={datepickerRef}/>
<CardContainer>

<CardAnalytics number={info?.views || 0} text={'Visualizações'} />
<CardAnalytics number={ info?.plays ||0} text={'Plays'} />
<CardAnalytics number={ info?.unique_views || 0} text={'Visualizações Únicas'} />
<CardAnalytics number={info?.unique_plays || 0} text={'Plays Únicos'} />
<CardAnalytics percentage={true} number={ (((info?.unique_plays / info?.unique_views) || 0)* 100).toFixed(0)} text={'Play Rate'} />

</CardContainer>
<ChartArea>

<Line options={options} data={data} />
</ChartArea>
</ContainerMetricas>
           
      </div>
      </div>
      </div>
</Container>

)

}