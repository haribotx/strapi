// export default () => ({});


export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 587),
        secure: false, // true for port 465
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('ADMIN_EMAIL'),
        defaultReplyTo: env('ADMIN_EMAIL'),
      },
    },
  },
});
