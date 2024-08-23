import { app } from "./App";
const Loaders = require('./Loaders/index');

Loaders.start();

app.listen(8000, () => console.log('Server is running!✨🐺'));
