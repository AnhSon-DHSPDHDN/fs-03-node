import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookApis } from "../../../apis/bookApis";

export interface IBook {
  bookId: string;
  bookName: string;
  bookDescription: string;
  thumbnail: string;
  author: string;
}

interface BookState {
  books: IBook[];
  loading: boolean;
}

const initialState: BookState = {
  books: [],
  loading: false,
};

export const actFetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const books = await BookApis.getAllBooks();
  return books;
});

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actFetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actFetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(actFetchBooks.rejected, (state) => {
      state.loading = false;
      console.log("Failed to fetch books");
    });
  },
});

export const bookReducer = bookSlice.reducer;
