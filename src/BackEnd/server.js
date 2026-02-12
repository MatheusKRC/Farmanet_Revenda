/* eslint-disable no-magic-numbers */
const port = process.env.PORT || 3004;
const app = require('./app');

app.listen(port);
console.log(`API rodando na porta ${port}`);
