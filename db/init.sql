-- Crear tablas

CREATE TABLE PRODUCTOS (
    id_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(50),
    precio_unitario DECIMAL(10,2) NOT NULL
);

CREATE TABLE INVENTARIO (
    id_inventario SERIAL PRIMARY KEY,
    id_producto INTEGER REFERENCES Productos(id_producto),
    cantidad INTEGER NOT NULL,
    fecha_registro DATE NOT NULL,
    ubicacion VARCHAR(100)
);

CREATE TABLE VENTAS (
    id_venta SERIAL PRIMARY KEY,
    id_producto INTEGER REFERENCES Productos(id_producto),
    cantidad_vendida INTEGER NOT NULL,
    precio_venta DECIMAL(10,2) NOT NULL,
    fecha_venta DATE NOT NULL,
    total_venta DECIMAL(10,2) NOT NULL,
    metodo_pago VARCHAR(50)
);

-- Insertar productos

INSERT INTO Productos (nombre, descripcion, categoria, precio_unitario) VALUES
('Laptop', 'Computadora portátil', 'Electrónica', 1200.00),
('Smartphone', 'Teléfono inteligente', 'Electrónica', 800.00),
('Auriculares', 'Auriculares inalámbricos', 'Accesorios', 150.00),
('Monitor', 'Monitor LED 24"', 'Electrónica', 250.00),
('Teclado', 'Teclado mecánico', 'Accesorios', 100.00);

-- Inventario inicial (Junio)

-- Inventario inicial de 100 unidades para cada producto
INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 100, '2024-06-01', 'Almacén 1'),  -- Laptop
(2, 100, '2024-06-01', 'Almacén 2'),  -- Smartphone
(3, 100, '2024-06-01', 'Almacén 1'),  -- Auriculares
(4, 100, '2024-06-01', 'Almacén 3'),  -- Monitor
(5, 100, '2024-06-01', 'Almacén 2');  -- Teclado

-- Ventas de Junio

INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
(1, 20, 1200.00, '2024-06-10', 24000.00, 'Tarjeta de Crédito'),  -- Laptop
(2, 15, 800.00, '2024-06-12', 12000.00, 'Efectivo'),            -- Smartphone
(3, 25, 150.00, '2024-06-15', 3750.00, 'Transferencia Bancaria'),-- Auriculares
(4, 10, 250.00, '2024-06-18', 2500.00, 'Efectivo'),              -- Monitor
(5, 30, 100.00, '2024-06-20', 3000.00, 'Tarjeta de Crédito');    -- Teclado

-- Inventario actualizado para junio después de las ventas

INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 80, '2024-06-30', 'Almacén 1'),  -- Laptop
(2, 85, '2024-06-30', 'Almacén 2'),  -- Smartphone
(3, 75, '2024-06-30', 'Almacén 1'),  -- Auriculares
(4, 90, '2024-06-30', 'Almacén 3'),  -- Monitor
(5, 70, '2024-06-30', 'Almacén 2');  -- Teclado

-- Ventas de Julio

INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
(1, 25, 1200.00, '2024-07-05', 30000.00, 'Transferencia Bancaria'), -- Laptop
(2, 20, 800.00, '2024-07-08', 16000.00, 'Efectivo'),               -- Smartphone
(3, 30, 150.00, '2024-07-12', 4500.00, 'Tarjeta de Crédito'),      -- Auriculares
(4, 15, 250.00, '2024-07-15', 3750.00, 'Efectivo'),                -- Monitor
(5, 20, 100.00, '2024-07-18', 2000.00, 'Transferencia Bancaria');  -- Teclado

-- Inventario actualizado para julio después de las ventas

INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 55, '2024-07-31', 'Almacén 1'),  -- Laptop
(2, 65, '2024-07-31', 'Almacén 2'),  -- Smartphone
(3, 45, '2024-07-31', 'Almacén 1'),  -- Auriculares
(4, 75, '2024-07-31', 'Almacén 3'),  -- Monitor
(5, 50, '2024-07-31', 'Almacén 2');  -- Teclado

-- Ventas de Agosto

INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
(1, 30, 1200.00, '2024-08-02', 36000.00, 'Efectivo'),  -- Laptop
(2, 25, 800.00, '2024-08-05', 20000.00, 'Tarjeta de Crédito'), -- Smartphone
(3, 35, 150.00, '2024-08-08', 5250.00, 'Transferencia Bancaria'), -- Auriculares
(4, 20, 250.00, '2024-08-12', 5000.00, 'Efectivo'), -- Monitor
(5, 25, 100.00, '2024-08-15', 2500.00, 'Tarjeta de Crédito'); -- Teclado

-- Inventario actualizado para agosto después de las ventas

INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 25, '2024-08-31', 'Almacén 1'),  -- Laptop
(2, 40, '2024-08-31', 'Almacén 2'),  -- Smartphone
(3, 10, '2024-08-31', 'Almacén 1'),  -- Auriculares
(4, 55, '2024-08-31', 'Almacén 3'),  -- Monitor
(5, 25, '2024-08-31', 'Almacén 2');  -- Teclado

-- Ventas de Septiembre

INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
(1, 20, 1200.00, '2024-09-03', 24000.00, 'Transferencia Bancaria'), -- Laptop
(2, 15, 800.00, '2024-09-06', 12000.00, 'Efectivo'),              -- Smartphone
(3, 20, 150.00, '2024-09-10', 3000.00, 'Tarjeta de Crédito'),     -- Auriculares
(4, 10, 250.00, '2024-09-12', 2500.00, 'Efectivo'),               -- Monitor
(5, 15, 100.00, '2024-09-14', 1500.00, 'Transferencia Bancaria'); -- Teclado

-- Inventario actualizado para septiembre después de las ventas

INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 5, '2024-09-30', 'Almacén 1'),  -- Laptop
(2, 25, '2024-09-30', 'Almacén 2'),  -- Smartphone
(3, 5, '2024-09-30', 'Almacén 1'),  -- Auriculares
(4, 45, '2024-09-30', 'Almacén 3'),  -- Monitor
(5, 10, '2024-09-30', 'Almacén 2');  -- Teclado

-- Ventas de Octubre

INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
(1, 10, 1200.00, '2024-10-05', 12000.00, 'Efectivo'),  -- Laptop
(2, 10, 800.00, '2024-10-08', 8000.00, 'Efectivo'),    -- Smartphone
(3, 20, 150.00, '2024-10-10', 3000.00, 'Transferencia Bancaria'), -- Auriculares
(4, 5, 250.00, '2024-10-12', 1250.00, 'Efectivo'),      -- Monitor
(5, 10, 100.00, '2024-10-15', 1000.00, 'Tarjeta de Crédito'); -- Teclado

-- Inventario actualizado para octubre después de las ventas

INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 0, '2024-10-31', 'Almacén 1'),  -- Laptop
(2, 15, '2024-10-31', 'Almacén 2'),  -- Smartphone
(3, 0, '2024-10-31', 'Almacén 1'),  -- Auriculares
(4, 40, '2024-10-31', 'Almacén 3'),  -- Monitor
(5, 0, '2024-10-31', 'Almacén 2');  -- Teclado

-- Ventas de Noviembre

INSERT INTO Ventas (id_producto, cantidad_vendida, precio_venta, fecha_venta, total_venta, metodo_pago) VALUES
(1, 10, 1200.00, '2024-11-02', 12000.00, 'Efectivo'),  -- Laptop
(2, 10, 800.00, '2024-11-05', 8000.00, 'Efectivo'),    -- Smartphone
(3, 15, 150.00, '2024-11-08', 2250.00, 'Transferencia Bancaria'), -- Auriculares
(4, 5, 250.00, '2024-11-10', 1250.00, 'Efectivo'),     -- Monitor
(5, 10, 100.00, '2024-11-12', 1000.00, 'Tarjeta de Crédito'); -- Teclado

-- Inventario actualizado para noviembre después de las ventas

INSERT INTO Inventario (id_producto, cantidad, fecha_registro, ubicacion) VALUES
(1, 0, '2024-11-30', 'Almacén 1'),  -- Laptop
(2, 5, '2024-11-30', 'Almacén 2'),  -- Smartphone
(3, 0, '2024-11-30', 'Almacén 1'),  -- Auriculares
(4, 35, '2024-11-30', 'Almacén 3'),  -- Monitor
(5, 0, '2024-11-30', 'Almacén 2');  -- Teclado
