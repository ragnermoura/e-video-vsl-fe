import { useState } from "react"
import Video from "../../../components/Video"
import MasterMenu from "../../../components/masterMenu"
import { Container } from "./styles"

export default () => {

    const [color, setColor] = useState('#f03939')
    
    return (
        <Container onContextMenu={e => e.preventDefault()}>


<MasterMenu/>
<div>
<input type="color" value={color} name="cor-video" id="cor-video" onChange={e => setColor(e?.target?.value)}/>

</div>

            <Video color={color}/>

        </Container>
    )
}