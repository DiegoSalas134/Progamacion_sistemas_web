CREATE DATABASE if not exists products_db;

USE products_db; 

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id int auto_increment PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description VARCHAR(500) NOT NULL,
    brand VARCHAR(100),
    img TEXT,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO products (name, price, stock, description, brand, img) VALUES
    ('Laptop Pro 14', 21999.00, 12, 'Laptop de 14 pulgadas para trabajo y estudio.', 'Nova', 'laptop-pro-14.jpg'),
    ('Mouse Inalambrico', 399.00, 45, 'Mouse inalambrico con conexion Bluetooth.', 'Nova', 'mouse-inalambrico.jpg'),
    ('Teclado Mecanico', 1299.00, 20, 'Teclado mecanico con retroiluminacion.', 'Keycraft', 'teclado-mecanico.jpg'),
    ('Monitor 24 Pulgadas', 3299.00, 18, 'Monitor Full HD de 24 pulgadas.', 'Vision', 'monitor-24.jpg'),
    ('Audifonos Bluetooth', 899.00, 35, 'Audifonos Bluetooth con microfono.', 'Soundix', 'audifonos-bluetooth.jpg'),
    ('Webcam Full HD', 749.00, 22, 'Camara web Full HD para videollamadas.', 'Vision', 'webcam-full-hd.jpg'),
    ('Disco SSD 1TB', 1599.00, 16, 'Unidad de estado solido de un terabyte.', 'Datafast', 'ssd-1tb.jpg'),
    ('Memoria USB 64GB', 199.00, 60, 'Memoria USB de 64 GB.', 'Datafast', 'usb-64gb.jpg'),
    ('Base para Laptop', 549.00, 30, 'Base ajustable de aluminio para laptop.', 'Deskpro', 'base-laptop.jpg'),
    ('Cargador USB C', 459.00, 40, 'Cargador USB C de carga rapida.', 'Powerup', 'cargador-usb-c.jpg'),
    ('Cable HDMI', 249.00, 55, 'Cable HDMI de dos metros.', 'Connect', 'cable-hdmi.jpg'),
    ('Router WiFi 6', 1899.00, 14, 'Router WiFi 6 de doble banda.', 'Netlink', 'router-wifi-6.jpg'),
    ('Impresora Multifuncional', 2799.00, 10, 'Impresora con escaner y copiado.', 'Printmax', 'impresora.jpg'),
    ('Silla de Oficina', 3499.00, 8, 'Silla ergonomica para oficina.', 'Comfort', 'silla-oficina.jpg'),
    ('Escritorio Compacto', 2499.00, 11, 'Escritorio compacto de madera.', 'Deskpro', 'escritorio.jpg'),
    ('Lampara LED', 379.00, 32, 'Lampara LED de escritorio.', 'Lumen', 'lampara-led.jpg'),
    ('Bocina Portatil', 699.00, 26, 'Bocina portatil con Bluetooth.', 'Soundix', 'bocina-portatil.jpg'),
    ('Smartwatch Fit', 1499.00, 19, 'Reloj inteligente con monitor de actividad.', 'Pulse', 'smartwatch-fit.jpg'),
    ('Tablet 10 Pulgadas', 4999.00, 13, 'Tablet de 10 pulgadas con pantalla HD.', 'Nova', 'tablet-10.jpg'),
    ('Mochila para Laptop', 799.00, 24, 'Mochila acolchada para laptop de 15 pulgadas.', 'Carry', 'mochila-laptop.jpg'),
    ('Regleta Electrica', 299.00, 38, 'Regleta con seis contactos.', 'Powerup', 'regleta.jpg'),
    ('Adaptador USB C', 329.00, 42, 'Adaptador USB C a HDMI.', 'Connect', 'adaptador-usb-c.jpg'),
    ('Microfono USB', 1099.00, 17, 'Microfono USB para llamadas y grabacion.', 'Soundix', 'microfono-usb.jpg'),
    ('Soporte para Monitor', 649.00, 21, 'Soporte ajustable para monitor.', 'Deskpro', 'soporte-monitor.jpg'),
    ('Limpiador de Pantalla', 159.00, 50, 'Kit para limpiar pantallas.', 'Cleanit', 'limpiador-pantalla.jpg');