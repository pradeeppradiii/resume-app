import * as yup from "yup";

export const personalDetailValidate=yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().min(8).max(10).required(),
    website: yup.string().required(),
    github: yup.string().required(),
    linkedIn: yup.string().required(),
    twitter: yup.string().required(),
    facebook: yup.string().required(),
    instagram: yup.string().required(),
})

// website: yup.string().matches(
//                             /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//                             'Enter correct url!').required( website'),
