const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

async function init() {
  const res = await notificationQueue.add("email to ayush", {
    email: "ayushaggarwal600@gmail.com",
    subject: "Welcome email",
    body: "Hey Ayush, Welcome",
  });
  console.log("Job added to queue, Job id -> ", res.id);
}

init();
