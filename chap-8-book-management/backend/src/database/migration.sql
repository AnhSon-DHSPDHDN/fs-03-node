-- Drop if exist and create database --
Drop database if exists book_mng_app;
create database book_mng_app;

use book_mng_app;

-- Categories --
create table categories
(
	category_id varchar(255) primary key,
  category_name varchar(50)
);

create table books
(
	book_id varchar(255) primary key,
  book_name varchar(255),
  book_description varchar(255),
  thumbnail varchar(255),
  author varchar(100),
  category_id varchar(255),
  created_at TIMESTAMP,
  updated_at timestamp,
  constraint books_fk_categories
  foreign key (category_id) references categories (category_id)
)
