import { useState } from "react";
import accordionData from "../../public/accordianData.json";
import './accordion.css'
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  console.log(selected);
  const handleAccordionSelect = (id) => {
    // console.log(id)
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div >
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div key={data.id}
            className={`border-2 border-sky-500 p-3 mb-2 rounded-lg ${selected === data.id ? 'bg-blue-100' : ''} `}
            >
              <div className="flex justify-between items-start cursor-pointer gap-5 transition ease-in 3s"
               onClick={() => handleAccordionSelect(data.id)}>
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

export default Accordion;
