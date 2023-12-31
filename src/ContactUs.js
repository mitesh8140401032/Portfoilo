import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from './firebase'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function ContactUs() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    // Initial form values
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };








    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
    const onSubmit = (values, { resetForm }) => {
        values.tnd = Date.now();
        values.id = generateRandomString(8);
        console.log(values)
        let db = firebase.firestore();
        db.collection("inquiry")
            .add(values)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                toast.success("Form submitted successfully. Thank you!");
                resetForm();
            })
            .catch((error) => {
                console.log("Error adding document: ", error);
            });
    };


    return (
        <div className="con3 overflow-hidden" id='contact'>
            <div className="main">
                <h4 className='text-center'>Contact</h4>
                <div className="container">
                    <div className="row d-flex align-items-end justify-content-center">
                        <div className="col-lg-5 mt-3" data-aos="fade-right">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <div>
                                        <label htmlFor="name">Name:</label>
                                        <Field type="text" id="name" name="name" className="form-control" />
                                        <ErrorMessage name="name" component="div" className="text-danger" />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email:</label>
                                        <Field type="email" id="email" name="email" className="form-control" />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </div>

                                    <div>
                                        <label htmlFor="message">Message:</label>
                                        <Field as="textarea" id="message" name="message" className="form-control" />
                                        <ErrorMessage name="message" component="div" className="text-danger" />
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <button type="submit" className="submit-button">
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="col-lg-6 mt-5" data-aos="fade-left">
                            <div className='text-end'>

                                <div >

                                    <Link style={{ color: "#DAFFFB" }} to={"https://www.instagram.com/accounts/login/"} target='_blank'>
                                        <FontAwesomeIcon className='fs-3 ms-3' icon={faInstagram} />

                                    </Link>
                                    <Link style={{ color: "#DAFFFB" }} to={"https://twitter.com/i/flow/login"} target='_blank'>

                                        <FontAwesomeIcon className='fs-3 ms-3' icon={faTwitter} />
                                    </Link>
                                    <Link style={{ color: "#DAFFFB" }} target='_blank'>

                                        <FontAwesomeIcon className='fs-3 ms-3' icon={faLinkedinIn} />
                                    </Link>
                                    <Link style={{ color: "#DAFFFB" }} to={"https://github.com/mitesh8140401032/Donation-Sardhardham"} target='_blank'>

                                        <FontAwesomeIcon className='fs-3 ms-3' icon={faGithub} />
                                    </Link>
                                </div>
                                <h2>
                                    +91 8140401032
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer style={{ zIndex: "99999999999999999999999" }} />
        </div>
    )
}
