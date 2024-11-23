import { BOOK_ROUTE_URL } from '@/constants';
import { BookDetailResponse, BookResponse } from '@/models/bookModel';
import { ChapterResponse } from '@/models/chapterModel';
import axios from 'axios';
import axiosClient from './axiosService';

export const bookService = {
  getTopViewBook: async (): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-top-views-book`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getDetailBook: async (id: string): Promise<BookDetailResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-detail-book/${id}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getDetailChapterById: async (id: string): Promise<ChapterResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-detail-chapter/${id}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getRelatedBooks: async (id: string): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-related-books/${id}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getBookByText: async (text: string): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/find-books-by-text-input`,
      method: 'GET',
      headers: {},
      params: { text },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getBookByCategory: async (id: string): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-book-by-category/${id}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getBookByAuthor: async (id: string): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-book-by-author/${id}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getBookByMajor: async (id: string): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-book-by-major/${id}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getNewBooks: async (): Promise<BookResponse> => {
    return axios({
      baseURL: `${BOOK_ROUTE_URL}/get-new-books`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  createBook: async (data: FormData): Promise<any> => {
    return axiosClient()({
      baseURL: `${BOOK_ROUTE_URL}/create`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  },
  getSuggestedBook: async (userId: string): Promise<BookResponse> => {
    return axiosClient()({
      baseURL: `${BOOK_ROUTE_URL}/get-recommend-books`,
      method: 'GET',
      headers: {},
      params: {
        userId: userId,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  },
  getAllBook: async (page: number, pageSize: number): Promise<any> => {
    return axios({
      // baseURL: `${BOOK_ROUTE_URL}/search`,
      baseURL: `${BOOK_ROUTE_URL}/search?pageIndex=${page}&pageSize=${pageSize}`,
      method: 'GET',
      headers: {},
    })
      .then((res) => res?.data?.data)
      .catch((err) => {
        throw err;
      });
  },
  addChapter: async (data: FormData): Promise<any> => {
    return axiosClient()({
      baseURL: `${BOOK_ROUTE_URL}/add-chapter`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  },
  addChapterbyOutline: async (data: FormData): Promise<any> => {
    return axiosClient()({
      baseURL: `${BOOK_ROUTE_URL}/add-chapter-by-outline`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  },
  addMultiChapters: async (data: FormData): Promise<any> => {
    return axiosClient()({
      baseURL: `${BOOK_ROUTE_URL}/add-multi-chapters`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  },
};
