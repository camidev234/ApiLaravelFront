import { AddButton } from "../components/AddButton"
import { UserList } from "../components/UserList"


export const Users = () => {
    return (
        <section className="users">
            <section className="list">
                <UserList/>
                <AddButton/>
            </section>
        </section>
    )
}