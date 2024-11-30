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


INSERT INTO Productos (nombre, descripcion, categoria, precio_unitario) VALUES
('Laptop', 'Computadora portátil', 'Electrónica', 1200.00),
('Smartphone', 'Teléfono inteligente', 'Electrónica', 800.00),
('Auriculares', 'Auriculares inalámbricos', 'Accesorios', 150.00),
('Monitor', 'Monitor LED 24"', 'Electrónica', 250.00),
('Teclado', 'Teclado mecánico', 'Accesorios', 100.00);