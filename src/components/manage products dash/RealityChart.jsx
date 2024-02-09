import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';

function RealityChart(props) {
    const data = [
        {
          name: 'January',
          Target: 590,
          Reality: 800,
          amt: 1400,
        },
        {
          name: 'February',
          Target: 868,
          Reality: 967,
          amt: 1506,
        },
        {
          name: 'March',
          Target: 1397,
          Reality: 1098,
          amt: 989,
        },
        {
          name: 'April',
          Target: 1480,
          Reality: 1200,
          amt: 1228,
        },
        {
          name: 'May',
          Target: 1520,
          Reality: 1108,
          amt: 1100,
        },
        {
          name: 'June',
          Target: 1400,
          Reality: 680,
          amt: 1700,
        },
      ];

      return (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="Reality" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Target" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      );
}

export default RealityChart;