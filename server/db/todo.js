const mongoose=require( 'mongoose');
mongoose
  .connect("mongodb://localhost:27017/todos")
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(`${err}`);
  });