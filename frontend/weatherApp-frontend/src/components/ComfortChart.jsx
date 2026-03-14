import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ComfortChart({ data, dataKey, title }) {
  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">
        {title}
      </h2>

      <div className="w-full overflow-x-auto">
        <div style={{ minWidth: `${data.length * 100}px` }}>
          {" "}
          {/* 100px per city */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cityName" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={dataKey === "comfortScore" ? "#8884d8" : "#ff7300"}
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
