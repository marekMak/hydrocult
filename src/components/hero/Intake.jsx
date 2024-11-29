import Daily from "./intake/Daily"
import Average from "./intake/Average"
import Total from "./intake/Total"

const Intake = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
        <Daily mililiters={5000}/>
        <Average mililiters={2500}/>
        <Total mililiters={17000}/>
    </div>
  )
}

export default Intake