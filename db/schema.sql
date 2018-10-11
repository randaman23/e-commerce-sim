drop table if exists products,cart;

create table products(
product_id serial primary key,
name text,
price int,
img_url text
)

create table cart(
cart_id serial primary key,
product_id int references products(product_id)
)