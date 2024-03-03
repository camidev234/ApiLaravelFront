import { AddButton } from "../components/AddButton"
import { UserList } from "../components/UserList"


export const Users = () => {
    return (
        <section className="users flex flex-col">
            <section className="list">
                <UserList/>
                <AddButton/>
            </section>
        </section>
    )
}