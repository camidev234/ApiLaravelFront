import { ShowOccupation } from "../components/ShowOccupation"
import { useParams } from "react-router-dom"

export const ShowOccupationPage = () => {

    const { id } = useParams();

    return (
        <section className="h-[88vh] w-full flex justify-center items-center">
            <ShowOccupation id={parseInt(id)}/>
        </section>
    )
}