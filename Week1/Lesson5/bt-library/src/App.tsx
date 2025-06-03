import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

interface Book {
    title: string;
    number: string;
}

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [form, setForm] = useState<Book>({ title: '', number: '' });
    const [indexSelected, setIndexSelected] = useState<number>(-1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleValidate = (values: Book) => {
        const errors: Partial<Book> = {};
        if (!values.title) {
            errors.title = 'Required';
        }
        if (!values.number) {
            errors.number = 'Required';
        }
        return errors;
    };

    const handleSelect = (book: Book, index: number) => {
        setForm(book);
        setIndexSelected(index);
    };

    const handleDelete = (index: number) => {
        const newBooks = [...books];
        newBooks.splice(index, 1);
        setBooks(newBooks);
    };

    const handleSubmit = (values: Book) => {
        const newBooks = [...books];
        if (indexSelected > -1) {
            newBooks.splice(indexSelected, 1, values);
        } else {
            newBooks.push(values);
        }
        setBooks(newBooks);
        setForm({ title: '', number: '' });
        setIndexSelected(-1);
    };

    return (
        <div>
            <h1>Library</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Tiêu đề</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                            />
                            {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
                        </div>
                        <div>
                            <label>Số lượng</label>
                            <input
                                type="number"
                                name="number"
                                value={form.number}
                                onChange={handleChange}
                            />
                            {errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.number}</td>
                        <td>
                            <button onClick={() => handleSelect(book, index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;