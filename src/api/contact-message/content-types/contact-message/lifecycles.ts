export default {
  async afterCreate(event) {
    const { result } = event;

    if (result.publishedAt) {
      setTimeout(async () => {
        try {
          await strapi
            .plugin("email")
            .service("email")
            .send({
              to: process.env.SMTP_USERNAME,
              subject: `New Contact Message from ${result.name}`,
              html: `
                <h2>New Contact Message Received</h2>
                <p><strong>Name:</strong> ${result.name}</p>
                <p><strong>Email:</strong> ${result.email}</p>
                <p><strong>Message:</strong></p>
                <p>${result.message}</p>
              `,
            });

          strapi.log.info("Email Sent");
        } catch (err) {
          strapi.log.error("Email Error:", err);
        }
      }, 10);
    }
  },
};
