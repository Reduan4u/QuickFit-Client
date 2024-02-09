import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function RevenueChart(props) {
  const data = [
    {
      name: "January",
      online: 4000,
      offline: 2400,
      amt: 2400,
    },
    {
      name: "February",
      online: 3000,
      offline: 1398,
      amt: 2210,
    },
    {
      name: "March",
      online: 2000,
      offline: 9800,
      amt: 2290,
    },
    {
      name: "April",
      online: 2780,
      offline: 3908,
      amt: 2000,
    },
    {
      name: "May",
      online: 1890,
      offline: 4800,
      amt: 2181,
    },
    {
      name: "June",
      online: 2390,
      offline: 3800,
      amt: 2500,
    },
    {
      name: "July",
      online: 3490,
      offline: 4300,
      amt: 2100,
    },
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="offline"
        fill="#8884d8"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
      <Bar
        dataKey="online"
        fill="#82ca9d"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
    </BarChart>
    // </ResponsiveContainer>
  );
}

export default RevenueChart;
