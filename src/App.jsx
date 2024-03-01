
import './App.css'
import MUIAccordion from './component/MUIAccordion/MUIAccordion'
import MultipleAccordionOpen from './component/multipleAccordionOpen/multipleAccordionOpen'
import SingleAccordionOpen from './component/singleAccordionOpen/accordian'

function App() {
 

  return (
    <div className='space-y-10'>
      <MUIAccordion/>
      <MultipleAccordionOpen/>
      <SingleAccordionOpen/>
    </div>
  )
}

export default App
