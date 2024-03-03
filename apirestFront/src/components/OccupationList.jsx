import { useEffect, useState } from "react";
import { getAllOccupations } from "../services/occupationService";
import { NoContent } from "./NoContent";
import { OccupationCard } from "./OccupationCard";

export const OccupationList = () => {
  const [occupations, setOccupations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(200);

  useEffect(() => {
    try {
      const getOccupations = async () => {
        setIsLoading(true);
        const response = await getAllOccupations();
        if (response.status !== 204) {
          setOccupations(response.data.occupations);
        } else {
          setCode(response.status);
        }

        console.log(response);
        setIsLoading(false);
      };
      getOccupations();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="list w-full h-[88vh] p-5 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {code === 204 ? (
        <div className="w-full h-full">
          <NoContent />
        </div>
      ) : (
        occupations.map((occupation) => {
          return (
            <div key={occupation.id} className="">
              <OccupationCard
                id={parseInt(occupation.id)}
                code={occupation.occupation_code}
                name={occupation.occupation_name}
                isLoading={isLoading}
              />
            </div>
          );
        })
      )}
    </section>
  );
};
