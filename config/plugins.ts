// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: env("EMAIL_PROVIDER", "strapi-provider-email-strapi-cloud"),
//       providerOptions: env.json("EMAIL_PROVIDER_OPTIONS", {}),
//       settings: {
//         defaultFrom: env("EMAIL_DEFAULT_FROM"),
//         defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
//       },
//     },
//   },
// });

export default ({ env }) => ({
  email: {
    config: {
      provider: env("NODE_ENV") === "production"
        ? "strapi-provider-email-strapi-cloud"
        : "nodemailer",

      providerOptions: env("NODE_ENV") === "production"
        ? {}
        : {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: env("SMTP_USERNAME"),
              pass: env("SMTP_PASSWORD"),
            },
          },

      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
      },
    },
  },
});

