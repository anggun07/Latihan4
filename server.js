// server.js
const express = require("express");
const app = express();
const port = 8001;

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

const articles = [
  {
    id: 1,
    title: "Belajar Express.js untuk Pemula",
    urlimage: "https://images.unsplash.com/photo-1592609931095-54a2168ae893",
    description: "Express.js adalah salah satu framework Node.js yang ringan dan fleksibel untuk membangun aplikasi web maupun API. Dengan sintaks yang sederhana, Express memudahkan pengembang untuk membuat aplikasi dengan cepat.",
    author: "Raden Walangsungsang"
  },
  {
    id: 2,
    title: "Membuat API dengan Node.js",
    urlimage: "https://miro.medium.com/v2/1*00n4mInvTtiF7GslLb40kA.jpeg",
    description: "Untuk membuat API sederhana dengan Node.js dan Express, langkah pertama adalah memastikan Node.js sudah terpasang di komputer. Selanjutnya, kita bisa mulai dengan membuat project baru.",
    author: "Empu Gandring"
  }
];
// Endpoint GET /api/test/getarticle
app.get("/api/test/getarticle", (req, res) => {
  res.json({
    status: "success",
    data: articles
  });
});
