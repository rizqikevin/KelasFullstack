const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopApp").then(() => {
    console.log('Koneksi Ke MongoDB Berhasil!!')
}).catch((err) => {
    console.log('Koneksi Gagal Periksa Konfigurasi Anda')
});

const PersonSchema = mongoose.Schema({
    firstName : String,
    lastName : String
});

PersonSchema.virtual('fullName').get(function() {
     return `${this.firstName} ${this.lastName}`
})

const Persons = mongoose.model('Persons', PersonSchema);

const person = new Persons({
    firstName: 'Kevin',
    lastName: 'Rizqi'
});

console.log(person.fullName)