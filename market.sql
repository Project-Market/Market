create table market (
id serial primary key,
name varchar (30) not null,
lat numeric(8,6) not null,
   lang numeric(8,6) not null,
   address text
);

insert into market values (default,'Leather Lane Street Market', 51.520338, -0.109407, '46-42 Leather Ln, London, EC1N 7TJ');
insert into market values (default,'Exmouth Market', 51.525988, -0.109319, 'Clerkenwell, London, EC1R 4QL');
insert into market values (default,'Brick Lane Market', 51.521421, -0.071794, '91 Brick Ln, London, E1 6QR');
insert into market values (default,'Borough Market', 51.505634, -0.091061, '8 Southwark St, London, SE1 1TL');
