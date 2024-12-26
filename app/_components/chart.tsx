'use client';

import React from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartSelectorProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut'; // 차트 타입
  data: ChartData; // 차트 데이터
  options?: ChartOptions; // 차트 옵션 (선택 사항)
}

interface ChartProps extends ChartSelectorProps {
  title: string;
}

const Chart = ({ title, type, data, options }: ChartProps) => {
  return (
    <div className="w-full h-full border">
      <h3>{title}</h3>
      <ChartSelector type={type} data={data} options={options} />
    </div>
  );
};

const ChartSelector = ({ type, data, options }: ChartSelectorProps) => {
  switch (type) {
    case 'bar':
      return (
        <Bar
          data={data as ChartData<'bar'>}
          options={options as ChartOptions<'bar'>}
        />
      );
    case 'line':
      return (
        <Line
          data={data as ChartData<'line'>}
          options={options as ChartOptions<'line'>}
        />
      );
    case 'pie':
      return (
        <Pie
          data={data as ChartData<'pie'>}
          options={options as ChartOptions<'pie'>}
        />
      );
    case 'doughnut':
      return (
        <Doughnut
          data={data as ChartData<'doughnut'>}
          options={options as ChartOptions<'doughnut'>}
        />
      );
    default:
      return null;
  }
};

export default Chart;
