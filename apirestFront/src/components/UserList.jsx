import { useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import { getAllUsers } from "../services/userService";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const getUsers = async () => {
        setIsLoading(true);
        const responseUsers = await getAllUsers();
        setUsers(responseUsers.data.users);
        setIsLoading(false);
      };

      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="list w-full h-[88vh] p-5 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {users.map((user) => {
        return (
          <div key={user.id} className="">
            <UserCard
              name={user.name}
              last_name={user.last_name}
              role={user.role}
              isloading={isLoading}
            />
          </div>
        );
      })}
    </section>
  );
};
