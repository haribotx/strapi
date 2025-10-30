export default ({ env }) => ({
  email: {
    config: {
      provider:
        env("NODE_ENV") === "production"
          ? "strapi-provider-email-strapi-cloud"
          : "nodemailer",
      providerOptions:
        env("NODE_ENV") === "production"
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
        defaultFrom:
          env("NODE_ENV") === "production"
            ? env("STRAPI_EMAIL_DEFAULT_FROM", "ihmsservice@gmail.com")
            : env("SMTP_USERNAME"),
        defaultReplyTo:
          env("NODE_ENV") === "production"
            ? env("STRAPI_EMAIL_DEFAULT_REPLY_TO", "ihmsservice@gmail.com")
            : env("SMTP_USERNAME"),
      },
    },
  },
});
