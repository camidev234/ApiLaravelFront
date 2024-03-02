import { FaReact, FaLaravel } from "react-icons/fa";

export const IndexApp = () => {
  return (
    <section className="h-[88vh] flex justify-center">
      <section className="content w-[80%] h-full flex justify-center items-center">
        <article className="w-[33.3%] h-full flex justify-center items-center">
          <FaReact className="text-[300px] text-blue-500"/>
        </article >
        {/* <article className="w-[33.3%] h-full flex justify-center items-center flex-col">
          <FaLongArrowAltRight className="text-[200px] text-white"/>
          <FaLongArrowAltLeft className="text-[200px] text-white"/>
        </article> */}
        <article className="w-[33.3%] h-full flex justify-center items-center">
          <FaLaravel className="text-[300px] text-red-600"/>
        </article>
      </section>
    </section>
  );
};
