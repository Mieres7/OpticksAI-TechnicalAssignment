"use client";

import { useEffect, useState } from "react";
import productoServices from "../services/productos-service";
import ventaServices from "../services/ventas-service";
import inventarioServices from "../services/inventario-service";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import { Laptop, Headphones, Keyboard } from "lucide-react";

export default function Statistics() {
  const [productos, setProductos] = useState<any>([]);
  const [ventas, setVentas] = useState<any>([]);
  const [inventario, setInventario] = useState<any>([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState<number>(1);
  const [payments, setPayments] = useState<any>([]);
  const [topProductos, setTopProductos] = useState<any>([]);

  const getIcon = (productoNombre: any) => {
    switch (productoNombre) {
      case "Laptop":
        return <Laptop size={24} />;
      case "Auriculares":
        return <Headphones size={24} />;
      case "Teclado":
        return <Keyboard size={24} />;
      default:
        return null; // Puedes agregar un icono por defecto si lo deseas
    }
  };

  const handleProductoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedId = Number(event.target.value);
    setProductoSeleccionado(selectedId);
  };

  useEffect(() => {
    productoServices.getAll().then((response) => {
      setProductos(response.data);
    });

    ventaServices.getPaymentsPriorities().then((response) => {
      const formattedPayments = response.data.map((payment: any) => ({
        ...payment,
        cantidad_ventas: Number(payment.cantidad_ventas),
      }));
      setPayments(formattedPayments);
    });

    ventaServices.getByProdMonth(productoSeleccionado).then((response) => {
      const formattedVentas = response.data.map((venta: any) => ({
        ...venta,
        cantidad_vendida: Number(venta.cantidad_vendida),
      }));
      setVentas(formattedVentas);
    });

    ventaServices.getTopProductSold().then((response) => {
      const formattedProdSold = response.data.map((prod: any) => ({
        ...prod,
        cantidad_vendida: Number(prod.cantidad_vendida),
      }));
      setTopProductos(formattedProdSold);
    });

    inventarioServices.getByProdMonth(productoSeleccionado).then((response) => {
      const formattedInventario = response.data.map((inventario: any) => ({
        ...inventario,
        cantidad_restante: Number(inventario.cantidad_restante),
      }));
      setInventario(formattedInventario);
    });
  }, [productoSeleccionado]); // Se ejecuta cada vez que el producto seleccionado cambia

  return (
    <div className="flex flex-row w-auto h-screen fade-in">
      {/* Primera fila: Gráficos de ventas e inventario en horizontal */}

      <div className="flex flex-col gap-3 w-auto">
        <label htmlFor="productoSelect" className="mr-1">
          Filtrar por producto:
        </label>
        <select
          id="productoSelect"
          value={productoSeleccionado}
          onChange={handleProductoChange}
          className="p-2 border rounded"
        >
          {productos.map((producto: any) => (
            <option key={producto.id_producto} value={producto.id_producto}>
              {producto.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-center ">
          {/* Selector de producto */}

          {/* Gráfico de Ventas */}
          <div className="flex flex-col items-center w-1/2">
            <span className="text-xl mb-4">Flujo de Ventas</span>
            <ResponsiveContainer width="90%" height={250}>
              <LineChart data={ventas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="cantidad_vendida"
                  stroke="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Inventario */}
          <div className="flex flex-col items-center w-1/2">
            <span className="text-xl mb-4">Flujo de Inventario</span>
            <ResponsiveContainer width="90%" height={250}>
              <LineChart data={inventario}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="cantidad_restante"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Segunda fila: Gráfico de preferencias de pago y productos más vendidos */}
        <div className="flex flex-row w-full justify-center">
          {/* Gráfico de Preferencias de Pago */}
          <div className="flex flex-col items-center w-1/2">
            <span className="text-xl mb-4">
              Preferencias de Pagos (Junio - Noviembre)
            </span>
            <ResponsiveContainer width="90%" height={270}>
              <BarChart data={payments}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metodo_pago" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cantidad_ventas" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Top Productos */}
          <div className="topProd  flex flex-col items-center w-1/2">
            <span className="text-xl mb-4">Top Productos Más Vendidos</span>
            <ul className="space-y-4 w-full px-20 ">
              {topProductos.map((producto: any) => (
                <li
                  key={producto.id_producto}
                  className="flex items-center justify-between border-b py-5"
                >
                  <div className="flex items-center space-x-3">
                    {/* Mostrar el icono específico para cada producto */}
                    {getIcon(producto.nombre)}
                    <span className="font-medium text-lg">
                      {producto.nombre}
                    </span>
                  </div>
                  <span className="text-xl font-semibold ">
                    {producto.cantidad_vendida} ventas
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
