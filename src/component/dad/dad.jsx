import Brother from "../brother/brother"
import Myself from "../myself/myself"

 

function Dad() {
    return (
        <div>
            <h3>
                 dad
            </h3>
            <section className="flex">
            <Myself></Myself>
            <Brother></Brother>
            </section>
        </div>
    )
}

export default Dad
