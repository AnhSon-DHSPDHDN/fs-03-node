use book_mng_app;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE books;
TRUNCATE TABLE categories;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO categories (category_id, category_name) VALUES
('C001', 'Lập trình'),
('C002', 'Phân tích & Thiết kế'),
('C003', 'Thương mại điện tử'),
('C004', 'Thuật toán'),
('C005', 'Hệ điều hành');

INSERT INTO books (book_id, book_name, book_description, thumbnail, author, category_id, created_at, updated_at) VALUES
('B001', 'Học Java trong 21 ngày', 'Sách hướng dẫn học Java cơ bản đến nâng cao.', 'java_21days.jpg', 'Nguyễn Văn A', 'C001', '2025-10-01 10:00:00', '2025-10-01 10:00:00'),
('B002', 'Thiết kế hệ thống phần mềm', 'Giới thiệu các nguyên tắc thiết kế hệ thống hiệu quả.', 'system_design.jpg', 'Trần Thị B', 'C002', '2025-10-02 14:30:00', '2025-10-02 14:30:00'),
('B003', 'Kinh doanh trực tuyến', 'Các chiến lược phát triển thương mại điện tử hiện đại.', 'ecommerce_book.jpg', 'Lê Hoàng C', 'C003', '2025-10-03 09:00:00', '2025-10-03 09:00:00'),
('B004', 'Giải thuật & Cấu trúc dữ liệu', 'Tổng hợp các thuật toán phổ biến và bài tập áp dụng.', 'algorithms_ds.jpg', 'Phạm Duy D', 'C004', '2025-10-04 11:15:00', '2025-10-04 11:15:00'),
('B005', 'Hệ điều hành Linux', 'Tìm hiểu về nhân Linux và cách quản lý hệ thống.', 'linux_os.jpg', 'Vũ Minh E', 'C005', '2025-10-05 16:45:00', '2025-10-05 16:45:00');
