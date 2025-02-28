// relasi one to few

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relation_db")
  .then(() => {
    console.log("Sukses Koneksi Ke MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = mongoose.Schema({
  name: String,
  addresses: [
    {
      _id: false,
      street: String,
      city: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const user = new User({
    name: "Rizqi Kevin",
  });

  user.addresses.push({
    street: "Jl. Raya",
    city: "Jakarta",
    country: "Indonesia",
  })
  const res = await user.save();
  console.log(user);
};

// makeUser();

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "Jl. Raya-Jakarta",
    city: "Jakarta",
    country: "Amerika",
  });
  const res = await user.save();
  console.log(res);
};

addAddress("67c185381ea3ab5850722acb");
