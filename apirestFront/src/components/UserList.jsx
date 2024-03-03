import { useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import { getAllUsers } from "../services/userService";
import { NoContent } from "./NoContent";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ codeStatus, setCodeStatus ] = useState(200);

  useEffect(() => {
    try {
      const getUsers = async () => {
        setIsLoading(true);
        const responseUsers = await getAllUsers();
        if (responseUsers.status !== 204) {
          setUsers(responseUsers.data.users);
        } else {
            setCodeStatus(responseUsers.status);
        }
        setIsLoading(false);
      };

      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="list w-full h-[88vh] p-5 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {codeStatus === 204 ? (
        <div className="w-full h-full">
          <NoContent />
        </div>
      ) : (
        users.map((user) => {
          return (
            <div key={user.id} className="">
              <UserCard
                id={parseInt(user.id)}
                name={user.name}
                last_name={user.last_name}
                role={user.role}
                isloading={isLoading}
              />
            </div>
          );
        })
      )}
    </section>
  );
};
