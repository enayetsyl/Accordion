import { useState } from "react";
import accordionData from "../../../public/accordianData.json";
import { handleAccordionSelect } from "../../lib/functions";

const MultipleAccordionOpen = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      
      {/* Heading */}
      
      <h1 className="font-black text-4xl mb-10 bg-gradient-to-r from-green-500 via-yellow-500 to-rose-600 text-transparent bg-clip-text ">
        Multiple Accordion Open
      </h1>

    {/* Accordion */}

      <div>
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div
              key={data.id}
              className={`border-[3px] border-amber-600 p-3 mb-2 rounded-lg ${
                selected.indexOf(data.id) !== -1 ? "bg-amber-300" : ""
              } `}
            >
              <div
                className="flex justify-between items-start cursor-pointer gap-5 transition ease-in 3s"
                onClick={() => handleAccordionSelect({id: data.id, selected, setSelected})}
              >
                <h3
                  className={` ${
                    selected.indexOf(data.id) !== -1 ? "font-bold text-xl" : ""
                  } pb-3`}
                >
                  {data.question}
                </h3>
                <span className="text-3xl">+</span>
              </div>
              {selected.indexOf(data.id) !== -1 && (
                <p className="transition ease-in 3s">{data.answer}</p>
              )}
            </div>
          ))
        ) : (
          <p> No data available for accordion</p>
        )}
      </div>
    </div>
  );
};

export default MultipleAccordionOpen;
