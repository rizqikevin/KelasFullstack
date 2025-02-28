const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relation_db")
  .then(() => {
    console.log("Sukses Koneksi Ke MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["summer", "winter", "spring", "fall"],
  },
});

const farmerSchema = new mongoose.Schema({
  name: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }
  ]
});

const Product = mongoose.model("Product", ProductSchema);
const Farm = mongoose.model("Farm", farmerSchema);

//   Product.insertMany([
//     { name: "Apple", price: 10000, season: "summer" },
//     { name: "Orange", price: 15000, season: "winter" },
//     { name: "Banana", price: 5000, season: "spring" },
//     { name: "Grape", price: 20000, season: "fall" },
//   ]);

const makeFarm = async () => {
    const farm = new Farm({ name: "Kebun Rizqi", city: "Jakarta" });
    const apple = await Product.findOne({ name: "Apple" });
    farm.products.push(apple);
    const res = await farm.save();
    console.log(res);
};

// makeFarm();

const addProduct = async (id) => {
    const farm = await Farm.findById(id);
    const grape = await Product.findOne({ name: "Grape" });
    farm.products.push(grape);
    const res = await farm.save();
    console.log(res);
};

addProduct("67c18cb2d148662ac72e0acd");