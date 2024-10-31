const app = require('./app');

const port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(`Server running 🤖🚀 at http://localhost:${port}/`);
});

module.exports = app;
