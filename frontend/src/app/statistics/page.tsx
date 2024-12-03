"use client";

import { useEffect, useState } from "react";

import productoServices from "../services/productos-service";
import ventaServices from "../services/ventas-service";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Statistics() {
  const [productos, setProductos] = useState<any>([]);
  const [ventas, setVentas] = useState<any>([]);

  const ejec = () => {
    console.log(ventas);
  };

  useEffect(() => {
    productoServices.getAll().then((response) => {
      setProductos(response.data);
    });

    ventaServices.getByProdMonth(1).then((response) => {
      setVentas(response.data);
    });
  }, []);

  return (
    <div className="flex flex-row w-auto h-screen">
      <div className="w-1/2">
        <button onClick={ejec}>asdfsdfsdfdsf</button>
      </div>
      <div className="w-1/2">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={ventas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total_venta" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
