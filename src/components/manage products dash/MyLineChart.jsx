import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MyLineChart(props) {
    const data = [
        { month: 'Jan', value: 400 },
        { month: 'Feb', value: 200 },
        { month: 'Mar', value: 300 },
        { month: 'Apr', value: 400 },
        { month: 'May', value: 500 },
        { month: 'Jun', value:500 },
        { month: 'Jul', value: 700 },
        { month: 'Aug', value: 300 },
        { month: 'Sep', value: 600 },
        { month: 'Oct', value: 400 },
        { month: 'Nov', value: 800 },
        { month: 'Dec', value: 700 }
    ];

    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}

export default MyLineChart;
