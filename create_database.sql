-- Database name
phi

-- Document your create tables SQL here
CREATE TABLE treats (
id SERIAL PRIMARY KEY,
name VARCHAR(80),
description TEXT,
pic VARCHAR(1000));

INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
