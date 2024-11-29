import React from 'react'
import { Bubble } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);

const GlassGraph = () => {

    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [{ x: 6, y: 1, r: 15 }], // Bod na osi X=6, Y=1
                backgroundColor: 'rgba(0, 0, 255, 0.8)', // Modrá farba
            },
            {
                label: 'Dataset 2',
                data: [{ x: 6, y: 2, r: 15 }], // Bod na osi X=6, Y=2
                backgroundColor: 'rgba(255, 102, 204, 0.8)', // Ružová farba
            },
            {
                label: 'Dataset 3',
                data: [{ x: 6, y: 3, r: 15 }], // Bod na osi X=6, Y=3
                backgroundColor: 'rgba(255, 0, 0, 0.8)', // Červená farba
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Time (hours)',
                },
                min:6,
                max:22,
                ticks: {
                    stepSize:2,
                    callback: (value) => {
                        const hours = value <= 12 ? value : value - 12;
                        const period = value < 12 || value === 24 ? "AM" : "PM";
                        return `${hours} ${period}`;
                    },
                },
            },
            y: {
                title: {
                    display: false,
                    text: 'Value',
                },
                ticks:{
                    stepSize:1
                }
            },
        },
    };

  return (
    <div>
        <Bubble data={data} options={options} className='max-h-44'/>
    </div>
  )
}

export default GlassGraph