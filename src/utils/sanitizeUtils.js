import DOMPurify from 'dompurify';

export const sanitize = (data) => ({
    __html: DOMPurify.sanitize(data)
    })