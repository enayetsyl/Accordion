import { useState } from "react";
import accordionData from "../../../public/accordianData.json";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';


const MUIAccordion = () => {
  const [expanded, setExpanded] = useState([]);

  const handleExpansion = (id) => {
    setExpanded(prevExpanded => {
      if (prevExpanded.includes(id)) {
        return prevExpanded.filter(itemId => itemId !== id);
      } else {
        return [...prevExpanded, id];
      }
    });
  };

 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-emerald-200">
      <h1 className="font-black text-4xl mb-10 bg-gradient-to-r from-purple-500  to-blue-500 text-transparent bg-clip-text ">Material UI Accordion Open</h1>
      
      <div>
      
{
  accordionData && accordionData.length > 0 ? (
    accordionData.map((data) => (
     
      <Accordion
        key={data.id}
        expanded={expanded.includes(data.id)}
        onChange={() => handleExpansion(data.id)}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded.includes(data.id) ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded.includes(data.id) ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${data.id}-content`}
          id={`panel-${data.id}-header`}
        >
          <Typography variant="h5">{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            {data.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    ))
  ) : (
    <p> No data available for accordion</p>
  )
}

    </div>
    </div>
  );
}

export default MUIAccordion;
