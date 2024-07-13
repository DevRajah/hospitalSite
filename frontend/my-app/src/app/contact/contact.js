import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
fullName: Yup.string().required('Full Name is required'),
email: Yup.string().email('Invalid email').required('Email is required'),
message: Yup.string().required('Message is required'),
});

export default ContactSchema;