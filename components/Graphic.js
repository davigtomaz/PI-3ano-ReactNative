import React, {Component} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  {name: 'Título', pv: 5, amt: 5},
  {name: 'Título', pv: 10, amt: 10},
  {name: 'Título', pv: 15, amt: 15},
  {name: 'Título', pv: 20, amt: 20},
  {name: 'Título', pv: 25, amt: 25},
  {name: 'Título', pv: 30, amt: 30},
  {name: 'Título', pv: 35, amt: 35},
];

class SimpleLineChart extends Component {
  
  render () {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{top: 10, right: 10, left: 10, bottom: 5}}
        
        >
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='name'/>
        <Legend />
      </LineChart>
    );
  }
}

export default SimpleLineChart;