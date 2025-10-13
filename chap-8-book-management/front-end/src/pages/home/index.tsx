import { Table, type TableProps } from "antd";
import { actFetchBooks, type IBook } from "../../redux/features/book/bookSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { books, loading } = useSelector((state: RootState) => state.book);

  const columns: TableProps<IBook>["columns"] = [
    {
      title: "Book ID",
      dataIndex: "bookId",
      key: "bookId",
    },
    {
      title: "Book Name",
      dataIndex: "bookName",
      key: "bookName",
    },
    {
      title: "Description",
      dataIndex: "bookDescription",
      key: "bookDescription",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
  ];

  useEffect(() => {
    dispatch(actFetchBooks());
  }, []);

  return (
    <div>
      <h1>Book Management App</h1>
      <div>
        <Table<IBook>
          dataSource={books}
          columns={columns}
          loading={loading}
          rowKey={"bookId"}
        />
      </div>
    </div>
  );
}

export default HomePage;
