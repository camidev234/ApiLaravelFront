import { useEffect, useState } from "react";
import { getAllOccupations } from "../services/occupationService";
import { NoContent } from "./NoContent";
import { OccupationCard } from "./OccupationCard";
import { LoadingAnimation } from "./LoadingAnimation";
import { useNavigate } from "react-router-dom";

export const OccupationList = () => {
  const [occupations, setOccupations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(200);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getOccupations = async () => {
        setIsLoading(true);
        const response = await getAllOccupations();
        if(response === undefined) {
          navigate('/error500');
        }
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
  }, [navigate]);

  return (
    <section className="list w-full h-[88vh] p-5 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {code === 204 ? (
        <div className="w-full h-full">
          <NoContent />
        </div>
      ) : (
        <div>
          {isLoading ? (
            <section className=" w-[60%] m-auto flex gap-6 flex-col">
              <LoadingAnimation />
            </section>
          ) : (
            occupations.map((occupation) => {
              return (
                <div key={occupation.id} className="">
                  <OccupationCard
                    id={parseInt(occupation.id)}
                    code={occupation.occupation_code}
                    name={occupation.occupation_name}
                  />
                </div>
              );
            })
          )}
        </div>
      )}
    </section>
  );
};
