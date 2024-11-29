import Graph from "./intakeGraph/Graph"

const Average = ({mililiters}) => {
  return (
    <div className='bg-lightPurple intake-container'>
        <div className="flex">
            <Graph percentage={85} colour="purple"/>
        </div>
        <div>
            <h1 className="text-lightPurpleText">Average Intake</h1>
            <h1 className="text-lightPurpleText font-bold">{mililiters} ml</h1>   
        </div>
    </div>
  )
}

export default Average