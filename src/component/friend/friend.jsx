import { useContext } from "react"
import { AssetContext } from "../grand/grand"

 

function Friend() {
const gift = useContext(AssetContext)

    return (
        <div>
            <h3>friend</h3>
            <h2>gift : {gift}</h2>
        </div>
    )
}

export default Friend
