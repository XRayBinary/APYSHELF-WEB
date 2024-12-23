import axios from 'axios'

const booksApi = axios.create({
    baseURL: 'http://localhost:8000/api/books/'
})

export const getAllBooks = () => {
    return booksApi.get('/')
}

export const getBook = (id) => {
    return booksApi.get(`/${id}`);
}

export const createBooks = (books) => {
    return booksApi.post('/', books)
}

export const deleteBook = (id) => {
    return booksApi.delete(`/${id}/`)
}