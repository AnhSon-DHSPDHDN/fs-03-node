use book_management;

-- 1 List all information of books which are in the office Category (CategoryID of office books is “VPP”)
select * from books where category_id='VPP';

-- 2 List all receipts which are borrowed in August 2021. (CardID, BookID and borrowdate).
select * from receipts
where month(date_borrow) = 8 and year(date_borrow) = 2021;

-- 3 List all students who have names starting with “N” and borrowed books.
select s.student_name, s.address, s.tel, receipts.receipt_id from students s
inner join receipts on s.card_id=receipts.card_id
where s.student_name like 'N%' and receipts.date_return is null;

-- 4 List all the students who borrowed books in July 2021 but have not returned yet.
select s.student_name, s.address, s.tel, receipts.date_borrow from students s
inner join receipts on s.card_id=receipts.card_id
where month(receipts.date_borrow)=7
and year(receipts.date_borrow)=2021
and receipts.give_back=0;

-- 5 List all information about book name, category name, publisher, author and number of copies of books in the library.
select b.book_name, ct.category_name, b.publisher, b.author, b.num_of_copy
from books b
left join categories ct
on b.category_id=ct.category_id;

-- 6 List all receipts which have not been returned yet and sort the data ascending by borrow date. (Name of student, name of book, borrow date)
select * from receipts
where date_return is null
order by date_borrow asc;
