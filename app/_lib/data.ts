export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      tension: 0.4, // 선의 곡률
    },
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

// 옵션 정의
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const, // position 값을 'top'으로 설정
    },
    title: {
      display: true,
      text: 'Sample Line Chart',
    },
  },
};
