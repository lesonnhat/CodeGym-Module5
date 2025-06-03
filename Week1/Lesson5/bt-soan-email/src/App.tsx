import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

interface FormValues {
    email: string;
    title: string;
    message: string;
}

const App: React.FC = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const [form, setForm] = useState<FormValues>({
        email: '',
        title: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleValidate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!REGEX.email.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.title) {
            errors.title = 'Required';
        }

        if (!values.message) {
            errors.message = 'Required';
        }

        return errors;
    };

    const handleSubmit = (values: FormValues) => {
        alert('Sent successfully!!!');
        setForm({ email: '', title: '', message: '' });
    };

    return (
        <div>
            <h1>Mail form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>To</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                            />
                            {errors.title && <div className="error">{errors.title}</div>}
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                            />
                            {errors.message && <div className="error">{errors.message}</div>}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default App;