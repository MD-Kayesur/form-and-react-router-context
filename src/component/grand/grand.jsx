import { createContext } from "react"
import Dad from "../dad/dad"
import Uncle from "../uncle/uncle"
import Unty from "../unty/unty"
import './grand.css'
export const AssetContext = createContext('diamond')

function Grand() {
    return (
        <div className="grand ">
           <h2>grand</h2>
            <AssetContext.Provider value="gold">
            <section className="  justify-center mt-10 flex">
            <Dad></Dad>
            <Uncle></Uncle>
            <Unty></Unty>
            </section>
            </AssetContext.Provider>
        </div>
    )
}

export default Grand



// if you want to create context {so a create context and expost it }
// add provider for the context with a value could be anything
// usecontext to acces value in the context api