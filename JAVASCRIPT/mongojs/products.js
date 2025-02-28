const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Conection Open");
  })
  .catch((err) => {
    console.log(err);
  });

const ProductSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price tidak boleh kurang dari 0"],
  },
  color: {
    type: String,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    maxLength: 150,
    required: true,
  },
  condition: {
    type: String,
    enum: ["baru", "bekas"],
    default: "baru",
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Stock tidak boleh kurang dari 0"],
  },
  availability: {
    online: {
      type: Number,
      required: true,
    },
    offline: {
      type: Number,
      required: true,
    },
  },
});

ProductSchema.methods.outStock = function () {
  this.stock = 0;
  this.availability.online = 0;
  this.availability.offline = 0;
  return this.save();
};

ProductSchema.statics.fireSale = function () {
  return this.updateMany({}, { price: 0,
    "availability.online": false,
    "availability.offline": false 
   });
}

const Product = mongoose.model("Product", ProductSchema);

const changeStock = async (nama) => {
  const foundProduct = await Product.findOne({ nama: `${nama}` });
  foundProduct.outStock();
  console.log("Stock Updated");
};

Product.fireSale().then((res) => {
    console.log(res);
    }).catch((err) => {
        console.log(err);
    });

// changeStock('Baju Bola');

// const product = new Product({
//   nama: "Baju Bola",
//   brand: "Unixqlo",
//   price: 50000,
//   color: "red",
//   size: "L",
//   description: "Baju yang cocok untuk main bola bersama kawan kawan",
//   condition: "bekas",
//   stock: 20,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

// Update product with nama: "Baju Bola" dengan validasi
// Product.findOneAndUpdate(
//   { nama: "Baju Bola" },
//   {
//     price: 60000,
//     color: "blue",
//     size: "XL",
//     description: "Baju yang cocok untuk main bola bersama kawan kawan",
//     condition: "bekas",
//     stock: 100,
//     availability: {
//       online: 1,
//       offline: 0,
//     },
//   },
//   { new: true, runValidators: true }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.errors.stock.properties.message);
//   });

// product
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Delete products with availability: { online: 1, offline: 1 }
// Product.deleteMany({ "availability.online": 1, "availability.offline": 1 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Product.deleteMany({nama : '123123'}).then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     })
