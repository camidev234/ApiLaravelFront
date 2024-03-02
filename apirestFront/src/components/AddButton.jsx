import { IoAdd } from "react-icons/io5";

export const AddButton = () => {
  const currentPath = window.location.pathname;

  return (
    <section className="fixed bottom-5 right-10 m-4">
      <button className="bg-blue-600 p-5 text-white rounded-full hover:bg-blue-700">
        <IoAdd className="text-2xl"/>
      </button>
    </section>
  );
};
