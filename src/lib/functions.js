// Function for MUIAccordion

export const handleExpansion = ({id, setExpanded}) => {
  setExpanded(prevExpanded => {
    if (prevExpanded.includes(id)) {
      return prevExpanded.filter(itemId => itemId !== id);
    } else {
      return [...prevExpanded, id];
    }
  });
};


// Function for Multiple Accordion open

export const handleAccordionSelect = ({id, selected, setSelected}) => {
  let multipleItem = [...selected];

  const findIndexofCurrentid = multipleItem.indexOf(id);

  if (findIndexofCurrentid === -1) multipleItem.push(id);
  else multipleItem.splice(findIndexofCurrentid, 1);

  setSelected(multipleItem);
};


// Function for opening single accordion

export const handleSingleAccordionSelect = ({id, selected, setSelected}) => {
  setSelected(id === selected ? null : id);
};