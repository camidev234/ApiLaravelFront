import { AddButton } from "../components/AddButton"
import { OccupationList } from "../components/OccupationList"


export const Occupations = () => {
    return (
        <section className="occu w-full h-[88vh]">
            <OccupationList/>
            <AddButton/>
        </section>
    )
} 