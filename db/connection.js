const mongoose = require('mongoose');
const mongoPath =
  'mongodb+srv://ecomm1:URxxUhjbJxSmy4lJ@cluster0.cuxvj.mongodb.net/products?retryWrites=true&w=majority';
mongoose
  .connect(mongoPath, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('success');
  })
  .catch((err) => {
    console.log(err);
  });
