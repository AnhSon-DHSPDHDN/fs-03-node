-- Drop if exist and create database --
Drop database if exists book_management;
create database book_management;

use book_management;

-- Categories --
create table categories
(
	category_id char(3) primary key,
    category_name varchar(50),
    more_info varchar(255)
);

-- Student --
create table students
(
	card_id char(8) primary key,
    student_name varchar(50),
    address varchar(255),
    tel char(11)
);

-- book --
create table books
(
	book_id char(6) primary key,
    book_name varchar(50),
    publisher varchar(50),
    author varchar(50),
    category_id char(3),
    num_of_page int,
    max_day int,
    num_of_copy int,
    summary varchar(250),
    constraint books_fk_categories
    foreign key (category_id) references categories (category_id)
);

-- receipts --
create table receipts
(
	receipt_id int primary key auto_increment,
    card_id char(8),
    book_id char(6),
    date_borrow date,
    date_return date,
    give_back bit(1),
    constraint receipts_fk_books
    foreign key (book_id) references books (book_id),
    constraint receipts_fk_students
    foreign key (card_id) references students (card_id)
);

insert into categories (category_id, category_name, more_info)
values
 ('CSD', 'Cơ sở dữ liệu', 'Access, Oracle'),
('ECO', 'Ecommerce', 'Sách về thương mại điện tử'),
('GTT', 'Giải thuật', 'Các bài toán mẫu, các giải thuật, cấu trúc dữ liệu'),
('HTT', 'Hệ thống', 'Windows, Linux, Unix'),
('LTT', 'Ngôn ngữ lập trình', 'Visual Basic, C, C++, Java'),
('PTK', 'Phân tích và thiết kế', 'Phân tích và thiết kế giải thuật, hệ thống thông tin v.v..'),
('VPP', 'Văn phòng', 'Word, Excel'),
('WEB', 'Web', 'Javascript, Vbscript, HTML, Flash');

INSERT INTO students (card_id, student_name, address, tel) VALUES
('STIT0001', 'Vy Văn Việt', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0002', 'Nguyễn Khánh', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0003', 'Nguyễn Minh Quốc', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0004', 'Hồ Phước Thời', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0005', 'Nguyễn Văn Định', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0006', 'Nguyễn Văn Hải', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0007', 'Nguyễn Thị Thuý Hà', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0008', 'Đỗ Thị Thiên Ngân', '92-Quang Trung- Đà Nẵng', '02363888279'),
('STIT0009', 'Nguyễn Văn A', '30- Phan Chu Trinh- Đà Nẵng', '0913576890');

INSERT INTO books
(book_id, book_name, publisher, author, category_id, num_of_page, max_day, num_of_copy, summary) VALUES
('CSD001', 'Cơ sở dữ liệu', 'NXB Giáo dục', 'Ðỗ Trung Tấn', 'CSD', 200, 3, 3, 'Thiết kế CSDL'),
('CSD002', 'SQL Server 7.0', 'NXB Ðồng Nai', 'Elicom', 'CSD', 200, 3, 2, 'Thiết CSDL và sử dụng SQL Server'),
('CSD003', 'Oracle 8i', 'NXB Giáo dục', 'Trần Tiến Dũng', 'CSD', 500, 5, 3, 'Từng bước sử dụng Oracle'),
('HTT001', 'Windows 2000 Professional', 'NXB Giáo dục', 'Anh Thư', 'HTT', 500, 3, 2, 'Sử dụng Windows 2000'),
('HTT002', 'Windows 2000 Advanced Server', 'NXB Giáo dục', 'Anh Thư', 'HTT', 500, 5, 2, 'Sử dụng Windows 2000 Server'),
('LTT001', 'Lập trình visual Basic 6', 'NXB Giáo dục', 'Nguyễn Tiến', 'LTT', 600, 3, 3, 'Kỹ thuật lập trình Visual Basic'),
('LTT002', 'Ngôn ngữ lập trình c++', 'NXB Thống kê', 'Tăng Ðình Quý', 'LTT', 500, 5, 3, 'Hướng dẫn lập trình hướng đối tượng và C++'),
('LTT003', 'Lập trình Windows bằng Visual c++', 'NXB Giáo dục', 'Ðặng Văn Ðức', 'LTT', 300, 4, 3, 'Hướng dẫn từng bước lập trình trên Windows'),
('VPP001', 'Excel Toàn tập', 'NXB Trẻ', 'Ðoàn Công Hùng', 'VPP', 1000, 5, 4, 'Trình bày mọi vấn đề về Excel'),
('VPP002', 'Word 2000 Toàn tập', 'NXB Trẻ', 'Ðoàn Công Hùng', 'VPP', 1000, 4, 3, 'Trình bày mọi vấn đề về Word'),
('VPP003', 'Làm kế toán bằng Excel', 'NXB Thống kê', 'Vu Duy Sanh', 'VPP', 200, 5, 2, 'Trình bày phương pháp làm kế toán'),
('WEB001', 'Javascript', 'NXB Trẻ', 'Lê Minh Trí', 'WEB', 200, 5, 2, 'Từng bước thiết kế Web động'),
('WEB002', 'HTML', 'NXB Giáo Dục', 'Nguyễn Thị Minh Khoa', 'WEB', 100, 3, 2, 'Từng bước làm quen với WEB');

INSERT INTO receipts (receipt_id, card_id, book_id, date_borrow, date_return, give_back) VALUES
(1, 'STIT0001', 'CSD001', '2021-07-30', NULL, b'0'),
(2, 'STIT0001', 'LTT001', '2021-06-30', '2021-07-25', b'1'),
(3, 'STIT0002', 'CSD002', '2021-08-15', NULL, b'0'),
(4, 'STIT0002', 'LTT003', '2021-08-10', '2021-08-30', b'1'),
(5, 'STIT0003', 'WEB001', '2021-07-10', '2021-07-20', b'1'),
(6, 'STIT0004', 'HTT001', '2021-08-10', NULL, b'0'),
(7, 'STIT0004', 'HTT002', '2021-08-20', '2021-08-25', b'1'),
(8, 'STIT0006', 'WEB001', '2021-08-30', NULL, b'0'),
(9, 'STIT0006', 'CSD002', '2021-08-10', '2021-08-15', b'1'),
(10, 'STIT0006', 'WEB002', '2021-07-15', '2021-07-30', b'1'),
(11, 'STIT0007', 'VPP001', '2021-08-30', NULL, b'0'),
(12, 'STIT0007', 'VPP003', '2021-08-20', '2021-08-25', b'1'),
(13, 'STIT0008', 'VPP001', '2021-08-30', NULL, b'0'),
(14, 'STIT0009', 'CSD001', '2021-08-20', '2021-08-23', b'1');
