// export default ({ env }) => ({
//   email: {
//     config: {
//       provider:
//         env("NODE_ENV") === "production"
//           ? "strapi-provider-email-strapi-cloud"
//           : "nodemailer",
//       providerOptions:
//         env("NODE_ENV") === "production"
//           ? {}
//           : {
//               host: "smtp.gmail.com",
//               port: 465,
//               secure: true,
//               auth: {
//                 user: env("SMTP_USERNAME"),
//                 pass: env("SMTP_PASSWORD"),
//               },
//             },
//       settings: {
//         defaultFrom:
//           env("NODE_ENV") === "production"
//             ? env("STRAPI_EMAIL_DEFAULT_FROM", "ihmsservice@gmail.com")
//             : env("SMTP_USERNAME"),
//         defaultReplyTo:
//           env("NODE_ENV") === "production"
//             ? env("STRAPI_EMAIL_DEFAULT_REPLY_TO", "ihmsservice@gmail.com")
//             : env("SMTP_USERNAME"),
//       },
//     },
//   },
// });


// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "strapi-provider-email-strapi-cloud",
//       providerOptions: {
//         apiToken: env("STRAPI_CLOUD_EMAIL_API_TOKEN"),
//       },
//       settings: {
//         defaultFrom: "libin.botxbotxswe2403@gmail.com",
//         defaultReplyTo: "libin.botxbotxswe2403@gmail.com",
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  email: {
    config: {
      provider: env("EMAIL_PROVIDER", "strapi-provider-email-strapi-cloud"),
      providerOptions: env.json("EMAIL_PROVIDER_OPTIONS", {}),
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
      },
    },
  },
});
