module.exports = {
    env: {
        DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
        DB_URI: '',

        STRIPE_API_KEY: 'pk_test_Akukulkb9foc9pVTbSI3PXni00V63abynW',
        STRIPE_SECRET_KEY: 'sk_test_rRSZWrH1EMBuWt3m82BqZOXr00InHIXugM',

        STRIPE_WEBHOOK_SECRET: '',

        CLOUDINARY_CLOUD_NAME: 'dcghcxchy',
        CLOUDINARY_API_KEY: '859485684318231',
        CLOUDINARY_API_SECRET: 'x16mobL5qQtphtaQR5wY3I7-1g8',

        SMTP_HOST: "smtp.mailtrap.io",
        SMTP_PORT: "2525",
        SMTP_USER: "ec9c9ce8d5bd14",
        SMTP_PASSWORD: "d8add8d706ed30",
        SMTP_FROM_EMAIL: "cirrusminor2@gmail.com",
        SMTP_FROM_NAME: "Hotel Booking Nepal",

        // NEXTAUTH_URL: '',
    },
    images: {
        domains: ['res.cloudinary.com']
    }
}