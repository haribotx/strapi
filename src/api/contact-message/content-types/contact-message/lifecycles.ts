// export default {
//   async afterCreate(event) {
//     const { result } = event;

//     if (result.publishedAt) {
//       setTimeout(async () => {
//         try {
//           const sendTo =
//             process.env.NODE_ENV === "production"
//               ? process.env.STRAPI_EMAIL_DEFAULT_FROM
//               : process.env.SMTP_USERNAME;

//           console.log("Sending to:", sendTo);
//           console.log("Environment:", process.env.NODE_ENV);

//           await strapi.plugin("email").service("email").send({
//             to: sendTo,
//             subject: `New Contact Message from ${result.name}`,
//             html: `
//               <h2>New Contact Message Received</h2>
//               <p><strong>Name:</strong> ${result.name}</p>
//               <p><strong>Email:</strong> ${result.email}</p>
//               <p><strong>Message:</strong></p>
//               <p>${result.message}</p>
//             `,
//           });

//           strapi.log.info("Email Sent");
//         } catch (err) {
//           strapi.log.error("Email Error:", err);
//         }
//       }, 10);
//     }
//   },
// };



// module.exports = {
//   async afterCreate(event) {
//     const { result } = event;

//     // user input
//     const name = result.name;
//     const email = result.email;
//     const message = result.message;

//     // admin email (your email)
//     const adminEmail = "libin.botxbotxswe2403@gmail.com";

//     // send email to admin
//     await strapi.plugins["email"].services.email.send({
//       to: adminEmail,
//       from: "ihmsservice@gmail.com",  // your sender
//       subject: "New Contact Form Message",
//       html: `
//         <h2>New message received</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `,
//     });

//     console.log("Admin email sent successfully!");
//   },
// };


module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: "libin.botxbotxswe2403@gmail.com",   // ADMIN EMAIL
        subject: `New Contact Message from ${result.name}`,
        text: `
Name: ${result.name}
Email: ${result.email}
Message: ${result.message}
        `,
      });

      console.log("Admin email sent successfully!");
    } catch (err) {
      console.error("Failed to send admin email:", err);
    }
  },
};

