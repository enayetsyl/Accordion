import { useState } from "react";
import accordionData from "../../../public/accordianData.json";
import { handleSingleAccordionSelect } from "../../lib/functions";

const SingleAccordionOpen = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">

    {/* Section heading */}

      <h1 className="font-black text-4xl mb-10 bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text ">Single Accordion Open</h1>

    {/* Accordion start */}

      <div >
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div key={data.id}
            className={`border-2 border-sky-500 p-3 mb-2 rounded-lg ${selected === data.id ? 'bg-blue-100' : ''} `}
            >
              <div className="flex justify-between items-start cursor-pointer gap-5 transition ease-in 3s"
               onClick={() => handleSingleAccordionSelect({id: data.id, selected, setSelected})}>
              <h3 
              className={` ${selected === data.id ? 'font-bold' : ''} pb-3`}
             >
                {data.question}
              </h3>
              <span className="text-3xl">+</span>
              </div>
              {selected === data.id ? <p
              className="transition ease-in 3s"
              >{data.answer}</p> : null}
            </div>
          ))
        ) : (
          <p> No data available for accordion</p>
        )}
      </div>
    </div>
  );
};

export default SingleAccordionOpen;


