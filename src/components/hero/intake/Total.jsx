import Graph from "./intakeGraph/Graph"

const Total = ({ mililiters}) => {
  return (
    <div className='bg-lightBrown intake-container'>
        <div className="flex justify-center items-center w-fit h-full">
            <Graph percentage={65} colour="brown"/>
        </div>
        <div>
            <h1 className="text-lightBrownText">Total Intake</h1>
            <h1 className="text-lightBrownText font-bold">{mililiters} ml</h1>   
        </div>
    </div>
  )
}

export default Total