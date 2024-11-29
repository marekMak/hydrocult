import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Registrácia potrebných komponentov
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);



const options = {
  cutout: '80%',
  plugins: {
    tooltip: { enabled: false },
  },
};

const Graph = ({percentage, colour}) => {

    const rest = 100 - percentage;

    let colourPalette = {
        'green':['#55A55E', '#DFF5E5'],
        'purple':['#5E5498', '#d8d3f5'],
        'brown':['#9B715D', '#f3d5c8'],
    }

    const data = {
        datasets: [
            {
              data: [percentage, rest],
              backgroundColor: colourPalette[colour],
              borderWidth: 0,
            },
          ],
    }

  return (
    <div className="flex items-center justify-center p-4 rounded-lg">
      <div className='relative flex items-center justify-center'>
        <Doughnut className='w-16 h-16' data={data} options={options} />
        <div className="absolute origin-center top-[46%] left-[34%] font-bold text-xs font-light">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default Graph;
