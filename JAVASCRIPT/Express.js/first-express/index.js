const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!");
//     console.dir(res);
//     res.send("Hello, we got your request! This is a response.");
// })

app.get("/", (req, res) => {
  res.send("Welcome to the home halaman!");
});

app.get("/blog/:judul", (req, res) => {
  console.log(req.params);
  const { judul } = req.params;
  res.send(`Ini adalah blog dengan judul ${judul}`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send("Nothing found if nothing searched!")
    }
    res.send(`Search results for: ${q}`);
});
app.get("/blog/:judul/:tahun", (req, res) => {
  const { judul, tahun } = req.params;
  res.send(`Ini adalah blog dengan judul ${judul} pada tahun ${tahun}`);
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.post("/cats", (req, res) => {
  res.send("This is a POST request!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

// app.get("*", (req, res) => {
//   res.send("I don't know that path!");
// });

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
