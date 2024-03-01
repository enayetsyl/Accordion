import { useState } from "react";
import accordionData from "../../public/accordianData.json";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  console.log(selected);
  const handleAccordionSelect = (id) => {
    // console.log(id)
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="container">
      <div className="wrapper">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div key={data.id}>
              <h3 onClick={() => handleAccordionSelect(data.id)}>
                {data.question}
              </h3>
              <span>+</span>
              {selected === data.id ? <p>{data.answer}</p> : null}
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
