import { ShowUser } from "../components/ShowUser"
import { useParams } from "react-router-dom";

export const ShowUserPage = () => {

    const { id } = useParams();

    return (
        <section className="h-[88vh] w-full flex justify-center items-center">
            <ShowUser id={parseInt(id)}/>
        </section>
    )
}   