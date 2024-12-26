import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

interface ChartSelectorProps {
  chartType: 'bar' | 'line' | 'pie' | 'doughnut'; // 차트 타입
  data: ChartData; // 차트 데이터
  options?: ChartOptions; // 차트 옵션 (선택 사항)
}

interface ChartProps extends ChartSelectorProps {
  title: string;
}

const Chart = ({ title, chartType, data, options }: ChartProps) => {
  return (
    <div className="bg-red-300 w-full h-full">
      <h3>{title}</h3>
      <ChartSelector chartType={chartType} data={data} options={options} />
    </div>
  );
};

const ChartSelector = ({ chartType, data, options }: ChartSelectorProps) => {
  switch (chartType) {
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
