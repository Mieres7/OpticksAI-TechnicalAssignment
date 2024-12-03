
-- -- Primero, asegúrate de tener productos insertados
-- -- Si no los tienes, inserta algunos productos
-- INSERT INTO Productos (nombre, descripcion, categoria, precio_unitario) VALUES
-- ('Laptop', 'Computadora portátil', 'Electrónica', 1200.00),
-- ('Smartphone', 'Teléfono inteligente', 'Electrónica', 800.00),
-- ('Auriculares', 'Auriculares inalámbricos', 'Accesorios', 150.00),
-- ('Monitor', 'Monitor LED 24"', 'Electrónica', 250.00),
-- ('Teclado', 'Teclado mecánico', 'Accesorios', 100.00);

-- Insertar ventas simuladas para 6 meses
-- Enero 2024
-- INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
-- (1, 5, 1200.00, '2024-01-05', 6000.00, 'Tarjeta de Crédito'),
-- (2, 10, 800.00, '2024-01-10', 8000.00, 'Transferencia'),
-- (3, 15, 150.00, '2024-01-15', 2250.00, 'Efectivo'),
-- (4, 8, 250.00, '2024-01-20', 2000.00, 'Tarjeta de Débito'),
-- (5, 12, 100.00, '2024-01-25', 1200.00, 'PayPal');

-- -- Febrero 2024
-- INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
-- (1, 7, 1200.00, '2024-02-05', 8400.00, 'Tarjeta de Crédito'),
-- (2, 12, 800.00, '2024-02-10', 9600.00, 'Transferencia'),
-- (3, 18, 150.00, '2024-02-15', 2700.00, 'Efectivo'),
-- (4, 10, 250.00, '2024-02-20', 2500.00, 'Tarjeta de Débito'),
-- (5, 15, 100.00, '2024-02-25', 1500.00, 'PayPal');

-- -- Marzo 2024
-- INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
-- (1, 6, 1200.00, '2024-03-05', 7200.00, 'Tarjeta de Crédito'),
-- (2, 11, 800.00, '2024-03-10', 8800.00, 'Transferencia'),
-- (3, 16, 150.00, '2024-03-15', 2400.00, 'Efectivo'),
-- (4, 9, 250.00, '2024-03-20', 2250.00, 'Tarjeta de Débito'),
-- (5, 13, 100.00, '2024-03-25', 1300.00, 'PayPal');

-- -- Abril 2024
-- INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
-- (1, 8, 1200.00, '2024-04-05', 9600.00, 'Tarjeta de Crédito'),
-- (2, 13, 800.00, '2024-04-10', 10400.00, 'Transferencia'),
-- (3, 20, 150.00, '2024-04-15', 3000.00, 'Efectivo'),
-- (4, 11, 250.00, '2024-04-20', 2750.00, 'Tarjeta de Débito'),
-- (5, 16, 100.00, '2024-04-25', 1600.00, 'PayPal');

-- -- Mayo 2024
-- INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
-- (1, 9, 1200.00, '2024-05-05', 10800.00, 'Tarjeta de Crédito'),
-- (2, 14, 800.00, '2024-05-10', 11200.00, 'Transferencia'),
-- (3, 22, 150.00, '2024-05-15', 3300.00, 'Efectivo'),
-- (4, 12, 250.00, '2024-05-20', 3000.00, 'Tarjeta de Débito'),
-- (5, 17, 100.00, '2024-05-25', 1700.00, 'PayPal');

-- -- Junio 2024
-- INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
-- (1, 10, 1200.00, '2024-06-05', 12000.00, 'Tarjeta de Crédito'),
-- (2, 15, 800.00, '2024-06-10', 12000.00, 'Transferencia'),
-- (3, 25, 150.00, '2024-06-15', 3750.00, 'Efectivo'),
-- (4, 13, 250.00, '2024-06-20', 3250.00, 'Tarjeta de Débito'),
-- (5, 18, 100.00, '2024-06-25', 1800.00, 'PayPal');

-- -- Insertar datos de inventario inicial y movimientos
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- -- Inventario inicial para cada producto
-- (1, 50, '2024-01-01', 'Almacén Principal', 'Disponible'), -- Laptop
-- (2, 75, '2024-01-01', 'Almacén Principal', 'Disponible'), -- Smartphone
-- (3, 100, '2024-01-01', 'Almacén Principal', 'Disponible'), -- Auriculares
-- (4, 60, '2024-01-01', 'Almacén Principal', 'Disponible'), -- Monitor
-- (5, 80, '2024-01-01', 'Almacén Principal', 'Disponible'); -- Teclado

-- -- Movimientos de inventario para enero
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- (1, 45, '2024-01-31', 'Almacén Principal', 'Disponible'), -- Laptop
-- (2, 65, '2024-01-31', 'Almacén Principal', 'Disponible'), -- Smartphone
-- (3, 85, '2024-01-31', 'Almacén Principal', 'Disponible'), -- Auriculares
-- (4, 52, '2024-01-31', 'Almacén Principal', 'Disponible'), -- Monitor
-- (5, 68, '2024-01-31', 'Almacén Principal', 'Disponible'); -- Teclado

-- -- Movimientos de inventario para febrero
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- (1, 38, '2024-02-29', 'Almacén Principal', 'Disponible'), -- Laptop
-- (2, 53, '2024-02-29', 'Almacén Principal', 'Disponible'), -- Smartphone
-- (3, 67, '2024-02-29', 'Almacén Principal', 'Disponible'), -- Auriculares
-- (4, 42, '2024-02-29', 'Almacén Principal', 'Disponible'), -- Monitor
-- (5, 53, '2024-02-29', 'Almacén Principal', 'Disponible'); -- Teclado

-- -- Movimientos de inventario para marzo
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- (1, 32, '2024-03-31', 'Almacén Principal', 'Disponible'), -- Laptop
-- (2, 42, '2024-03-31', 'Almacén Principal', 'Disponible'), -- Smartphone
-- (3, 51, '2024-03-31', 'Almacén Principal', 'Disponible'), -- Auriculares
-- (4, 33, '2024-03-31', 'Almacén Principal', 'Disponible'), -- Monitor
-- (5, 40, '2024-03-31', 'Almacén Principal', 'Disponible'); -- Teclado

-- -- Movimientos de inventario para abril
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- (1, 24, '2024-04-30', 'Almacén Principal', 'Disponible'), -- Laptop
-- (2, 29, '2024-04-30', 'Almacén Principal', 'Disponible'), -- Smartphone
-- (3, 31, '2024-04-30', 'Almacén Principal', 'Disponible'), -- Auriculares
-- (4, 22, '2024-04-30', 'Almacén Principal', 'Disponible'), -- Monitor
-- (5, 24, '2024-04-30', 'Almacén Principal', 'Disponible'); -- Teclado

-- -- Movimientos de inventario para mayo
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- (1, 15, '2024-05-31', 'Almacén Principal', 'Disponible'), -- Laptop
-- (2, 15, '2024-05-31', 'Almacén Principal', 'Disponible'), -- Smartphone
-- (3, 9, '2024-05-31', 'Almacén Principal', 'Disponible'), -- Auriculares
-- (4, 9, '2024-05-31', 'Almacén Principal', 'Disponible'), -- Monitor
-- (5, 7, '2024-05-31', 'Almacén Principal', 'Disponible'); -- Teclado

-- -- Movimientos de inventario para junio
-- INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion, estado, costo_almacenamiento) VALUES
-- (1, 5, '2024-06-30', 'Almacén Principal', 'Bajo Stock'), -- Laptop
-- (2, 0, '2024-06-30', 'Almacén Principal', 'Sin Stock'), -- Smartphone
-- (3, 0, '2024-06-30', 'Almacén Principal', 'Sin Stock'), -- Auriculares
-- (4, 0, '2024-06-30', 'Almacén Principal', 'Sin Stock'), -- Monitor
-- (5, 0, '2024-06-30', 'Almacén Principal', 'Sin Stock'); -- Teclado