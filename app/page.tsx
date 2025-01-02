import { data, options } from './_lib/data';
import Chart from './_components/chart';

export default function Home() {

  return (
    <main className="grid grid-rows-2 grid-cols-3 gap-4 sm:items-start w-full p-4">
      <Chart title="CPU Usage" type="bar" data={data} options={options} />
      <Chart title="Memory Usage" type="bar" data={data} options={options} />
      <Chart title="Thread" type="bar" data={data} options={options} />
      <Chart
        title="Web-Server Thread Pool"
        type="bar"
        data={data}
        options={options}
      />
      <Chart
        title="Web-Server Request"
        type="bar"
        data={data}
        options={options}
      />
      <Chart title="DBCP" type="bar" data={data} options={options} />
    </main>
  );
}
