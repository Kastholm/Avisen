"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


async function getData() {
  const query = `
  *[
    _type == "sundhed" 
    || 
    _type == "indland"
    || 
    _type == "udland"
  ] 
  | order(_createdAt desc) {
    _id,
    _createdAt,
    _type,
    title,
    "articleSlug": slug.current,
      image,
      "tagNames": tags[]->name,
      "JournalistName": journalist->name,
      "JournalistPhoto": journalist->image,
      "JournalistSlug": journalist->slug.current
  }`;
  const data = await client.fetch(query);

  return data;
}

const salesData = [
  {
    name: "Tim Jensen",
    AntalArtikler: 4000,
    AntalVisninger: 2400,
  },
  {
    name: "Jon Christensen",
    AntalArtikler: 3000,
    AntalVisninger: 1398,
  },
  {
    name: "Jane Doe",
    AntalArtikler: 9800,
    AntalVisninger: 2000,
  },
  {
    name: "Hans Jensen",
    AntalArtikler: 3908,
    AntalVisninger: 2780,
  },
  {
    name: "Sara Hansen",
    AntalArtikler: 4800,
    AntalVisninger: 1890,
  }
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="AntalArtikler" fill="#2563eb" />
        <Bar dataKey="AntalVisninger" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Artikler skrevet:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Antal visninger:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};
