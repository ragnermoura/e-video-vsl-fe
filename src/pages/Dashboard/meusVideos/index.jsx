import { useCallback, useEffect, useState } from "react"
import MasterMenu from "../../../components/masterMenu"
import { Container } from "./styles"
import { videoApi } from "../../../services/video"

export default () => {

    const [color, setColor] = useState('#f03939')
    
    const [video, setVideo] = useState([])

    const handleGetVideos = async () => {

        const res =  await videoApi.getVideos(1)
        console.log(res?.data?.response)
        setVideo(res?.data?.response)
    }

    useEffect(useCallback(
    
        () => {
        handleGetVideos()
    }), [])

    return (
        <Container onContextMenu={e => e.preventDefault()}>
 <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">


<MasterMenu/>
<div class="layout-page">
    
<div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  
     {
         video?.map(item => (<a href={`/video/${item?.id_video}`} className="link col-md-3"><img className="col-12" src={item?.thumb}/></a>))
        }

        </div>
        </div>
        </div>
        </div>
        </div>
    
</div>


        </Container>
    )
}