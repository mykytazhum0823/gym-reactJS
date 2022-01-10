import React from 'react';
import ContactPage from './ContactPage.js';
import HomepageLayout from "../layouts/homepage.layout";
import '../assets/css/style.scoped.css';
const Contact = ()=>{
    return(
        <HomepageLayout>
            <ContactPage/>
            <a href="#" className="back-to-top bounce">
                <i className="las la-arrow-up"></i>
            </a>
        </HomepageLayout>
    );
}

export default Contact;