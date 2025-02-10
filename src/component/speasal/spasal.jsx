import { useContext } from "react"
import { AssetContext } from "../grand/grand"

 

function Spasal() {

    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>spasal</h2>
            <h2>has :{gift}</h2>
        </div>
    )
}

export default Spasal
