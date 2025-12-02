// module.exports = {
//   async afterCreate(event) {
//     const { result } = event;

//     await strapi.plugins["email"].services.email.send({
//       to: process.env.ADMIN_EMAIL, // owner/admin email
//       subject: "New Contact Message Received",
//       text: `
// A new message has been received:

// Name: ${result.name}
// Email: ${result.email}
// Message: ${result.message}
//       `,
//     });
//   },
// };


module.exports = {
  async afterCreate(event) {
    const { result } = event;

    await strapi.plugins["email"].services.email.send({
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Message",
      html: `
        <h2>New message received</h2>
        <p><strong>Name:</strong> ${result.name}</p>
        <p><strong>Email:</strong> ${result.email}</p>
        <p><strong>Message:</strong><br>${result.message}</p>
      `,
    });

    console.log("Admin email sent successfully!");
  },
};
