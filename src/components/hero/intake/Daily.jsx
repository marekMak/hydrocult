import Graph from './intakeGraph/Graph';

const Daily = ({mililiters}) => {
  return (
    <div className='bg-lightGreen intake-container'>
        <div className="flex justify-center items-center w-fit h-full">
            <Graph percentage={80} colour="green"/>
        </div>
        <div>
            <h1 className="text-lightGreenText">Daily Intake</h1>
            <h1 className="text-lightGreenText font-bold">{mililiters} ml</h1>   
        </div>
    </div>
  )
}

export default Daily