import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css';

interface FormValues {
    name: string;
    email: string;
    phone: string;
}

export default function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState<FormValues>({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleValidate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!REGEX.email.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.phone) {
            errors.phone = 'Required';
        }

        return errors;
    };

    const handleSubmit = (values: FormValues) => {
        alert('Contact added successfully!');
        console.log(values);
    };

    return (
        <div className="App">
            <h1>Contact Form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" onChange={handleChange} />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" onChange={handleChange} />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <Field name="phone" type="text" onChange={handleChange} />
                            <ErrorMessage name="phone" component="div" />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};