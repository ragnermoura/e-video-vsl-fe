import { useCallback, useEffect, useState } from "react"
import MasterMenu from "../../../components/masterMenu"
import { Container } from "./styles"
import { videoApi } from "../../../services/video"

export default () => {

    const [color, setColor] = useState('#f03939')
    
    const [video, setVideo] = useState([])

    const handleGetVideos = async () => {
        const id_user =  sessionStorage.getItem('userId')
        const res =  await videoApi.getVideos(id_user)
        console.log(res?.data?.response)
        setVideo(res?.data?.response)
    }

    useEffect(useCallback(
    
        () => {
        handleGetVideos()
    }), [])

    return (
        <Container onContextMenu={e => e.preventDefault()}>
 <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">


<MasterMenu/>
<div className="sm-mt">
    
<div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  
     {
         video?.map(item => (<a key={item?.id_video} href={`/video/${item?.id_video}`} className="link col-md-3"><img className="col-12" alt src={ item?.thumb ? item?.thumb : item?.frame}/></a>))
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