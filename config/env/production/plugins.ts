module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-strapi-cloud",
      providerOptions: {},
      settings: {
        defaultFrom: env("STRAPI_EMAIL_DEFAULT_FROM", "ihmsservice@gmail.com"),
        defaultReplyTo: env("STRAPI_EMAIL_DEFAULT_REPLY_TO", "ihmsservice@gmail.com"),
      },
    },
  },
});
