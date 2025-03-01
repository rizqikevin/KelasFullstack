// Function Bernilai Balik Function

function hasilNyaAdalahFunction() {
  const random = Math.floor(Math.random() * 6) + 1;

  if (random < 3) {
    return function () {
      console.log("Hello World");
      console.log(random);
    };
  } else {
    return function () {
      console.log("Goodbye World");
      console.log(random);
    };
  }
}

// Definni Sebuah Method
const MyMath = {
  // object
  add: function (a, b) {
    // method
    return a + b;
  },
  subtract: function (a, b) {
    // method
    return a - b;
  },
};

const myWife = {
  rauda: (msg) => {
    try {
      console.log(msg.toUpperCase().repeat(3));
    } catch(e){
      console.log("Error");
      console.log("silahkan masukkan string");
    }
  },
  kevin: (msg) => {
    try {
      console.log(msg.toUpperCase().repeat(3));
    } catch(e){
      console.log("Error");
      console.log("silahkan masukkan string");
    }
  }
}

// this adalah keyword yang merujuk pada object yang bersangkutan
const saya = {
  nama: "Ahmad",
  hoby: "Membaca",

  sayHello: function () {
    return `Hello, Nama Saya ${this.nama}. Hobi Saya ${this.hoby}`;
  },
};

// try and catch
function pesanSaya(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("Error");
    console.log("silahkan masukkan string");
  }
}

// foreach method
const Animes = [
  {
    Nama: "Naruto",
    Rating: "82",
    Year: "1998",
  },
  {
    Nama: "Simbad",
    Rating: "99",
    Year: "2002",
  },
  {
    Nama: "Bulu - Bulu",
    Rating: "67",
    Year: "2010",
  },
  {
    Nama: "Nobita",
    Rating: "67",
    Year: "2000",
  },
  {
    Nama: "Doraemon",
    Rating: "65",
    Year: "2022",
  },
  {
    Nama: "Hunter x Hunter",
    Rating: "100",
    Year: "2014",
  },
];

//foreach digunakan untuk mengelola dan mengubah data secara dinamis menggunakan metode array 

const listAnimasi = [];
Animes.forEach(function (Anime) {
  listAnimasi.push(`${Anime.Nama} - ${Anime.Rating}/100`);
});

const numbers = [1,2,3,4,5,6,7,8];
const deretan = [];
numbers.forEach((num) => {
  deretan.push(`${num}`)
})

// map method
const expression = ["rofl", "lol", "omg", "ttyl"];

const capsExpression = expression.map(function (express) {
  return express.toUpperCase();
});

function mapMethod(teks1,teks2,teks3,...teks4){
  const inputan = [teks1,teks2,teks3,...teks4]
  return inputan.map((input) => {
    const res = input.toUpperCase();
    return res;
  });
}

mapMethod('df','df','afd');



console.log(mapMethod);

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaDouble = angka.map(function (num) {
  const double = num * 2;
  return double;
});

const animeList = Animes.map(function (anime) {
  return anime.Nama.toUpperCase();
});

const muka = ['jelek', 'ganteng','jendol','goreng'];

const capsMuka = muka.map((muk) => {
  return muk.toUpperCase();
})

// Arrow Function
const perkalian = (num) => {
  return num * 2;
};

// EXpression Function
const x = function (a, b) {
  return a * b;
};

const random = () => {
  return Math.floor(Math.random() * 10) + 1;
};

//  return secara implisit arrow function
const Random = () => Math.floor(Math.random() * 10) + 1;

const pertambahan = (a, b) => (a = b);

// Set Timeout dan Set Interval
//  setTimeout(() => {
//     console.log('proses delay selama 5 detik')
//  },5000);

//  setInterval(() => {
//     console.log('proses akan terjadi setiap 2 detik')
//  },2000);

// filter method
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ganjil = angka.filter((n) => {
  return n % 2 === 1;
});

const animeBagus = Animes.filter((anime) => anime.Rating >= 65).map(
  (anime) => {
   return anime.Nama;
  }
);

const animeJelek = Animes.filter((anime) => anime.Rating <= 64);

// Menentukan benar atau salah pada array dengan Every dan Some Method
const animeListNew = Animes.some((anime) => anime.Year >= 2010);
const animeListOld = Animes.every((anime) => anime.Year >= 1995);

// Mendapatkan Satu Nilai sesuai kondisi dari sebuah array dengan Reduce
const subtotal = [1500, 20000, 4000, 1900, 32000];
const total1 = subtotal.reduce((currentTotal, singleTotal) => {
  return currentTotal + singleTotal;
});

const totalBarang = [2000,4000,5000,5000,5000,4000];
const totalBeli = totalBarang.reduce((numbefore,numafter) => {
  return numbefore + numafter;
});
const examScore = [80, 90, 70, 88, 90, 75];
let sum = 0;
for (let score of examScore) {
  sum += score;
}

const sumReduce = examScore.reduce((total, nilai) => {
  return total + nilai;
});

const bestAnime = Animes.reduce((animeTerbaik, currAnime) => {
  // console.log(animeTerbaik,currAnime);
  if (animeTerbaik < currAnime) {
    return bestAnime;
  }
  return currAnime;
});

// Object this di dalam arrow function tidak bosa harus menggunakan regular function
// this mengambil value properti lain dalam satu objek yang sama
const person = {
  firstName: "John",
  lastName: "Dou",
  fullName: function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

// default value sebuah function
function greetings(nama, msg = "selamat bekerja") {
  console.log(`halo ${nama} ${msg}`);
}

function lemparDice(sisi = 6) {
  return Math.floor(Math.random() * sisi) + 1;
}

//spread operator
// mengubah deret value atau deret parameter untuk function
const angko = [1, 2, 3, 4, 5];
Math.max(angko); // NaN
Math.max(...angko); // (1,2,3,4,5)

//menggabungkan array dengan array lagi
const name = ["Alex", "Kevin", "Cici", "Gilang", "Koko"];
const campuran = [...angko, ...name];

//menggabungkan object dengan object lagi
const user = {
  name: "John",
  email: "john@gmail.com",
};

const creditial = {
  token: "2523534fgfdgdfg",
};

const userBaru = {
  ...user,
  id: "01230",
  pass: "adm1234",
  ...creditial,
};

// membuat parameter dengan rest param
const sumAll = (...nums) => {
  return nums.reduce((total, el) => total + el);
};

const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali emas di raih : ${gold}`);
  console.log(`Medali silver di raih : ${silver}`);
  console.log(`Medali bronze di raih : ${bronze}`);
  console.log(`Peserta lain nya ${sisa}`);
};

//bongkar array ke masing masing variabel dengan mudah
const [emas, perak, perunggu, ...Peserta] = name;

// bongkar properti object dalam function
const { name: people, email, no = "014234234" } = user;

//bongkar properti object di function
const pengguna = {
  sebutan: "Kevin",
  email: "rizqikevino@gmail.com",
  role: "admin",
};

const userAndRole = ({ sebutan, role }) => {
  return `${sebutan} ${role}`;
};

const anim = Animes.map(({ Nama, Rating, Year }) => {
  return `${Nama} ${Year} rating ${Rating}`;
});

// membuat  object dengan factory function

function convertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  };

  color.hex = function () {
    return "#" + ((1 << 24) + (r << 6) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}

// membuat object dengan construktor function
function Warna(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Warna.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

Warna.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 6) + (g << 8) + b).toString(16).slice(1);
};

Warna.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};

// Membuat object dengan class
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  colorName() {
    console.log("The color name is" + this.name);
  }

  innerColor() {
    const { r, g, b } = this;

    return `${r},${g},${b}`;
  }

  rgb() {
    return `rgb(${this.innerColor()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerColor()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 6) + (g << 8) + b).toString(16).slice(1);
  }
}

const skyColor = new Color(12,342,12,'Sky');

function selamatPagi(name){
    console.log(`Selamat Pagi ${name}`);
}

function selamatSore(name){
    console.log(`Selamat Sore ${name}`);
}

selamatPagi('Ahmad');
selamatSore('Budi');

function tambah(a, b){
    const total = a + b;
    return total;S
}

function kali(a, b){
    if ( typeof a !== 'number' || typeof b !== 'number'){
        return 'Error';
    }
    const total = a * b;
    return total;
}

// let lemparDadu = Math.floor(Math.random()* 6)  + 1;

// console.log(lemparDadu);

// let input1 = parseInt(prompt('Masukkan Angka Tebakan: '));

// while (input1 !== lemparDadu) {
//     input1 = parseInt(prompt('Tebakan Salah. Masukkan Angka Tebakan: '));
// }
// alert('Tebakan Benar!');

 const studentScore = {
    'Ahmad': 80,
    'Budi': 90,
    'Cindy': 75
  };

  for (let student in studentScore) {
    console.log(`${student} mendapatkan nilai ${studentScore[student]}`);
  }

  let total = 0;
    let count = 0;
    scores = Object.values(studentScore);
    for (let score of scores) {
        total += score;
        count++;
    }
    console.log(`Rata-rata nilai siswa adalah ${total / count}`);

// tebak angka
let maximum = parseInt(prompt("Masukkan Angka Maksimal: "));
while (!maximum) {
    maximum = parseInt(prompt("Masukkan Angka Maksimal: "));
    }

const targerNum = Math.floor(Math.random() * maximum) + 1;
console.log(targerNum);

let guess = parseInt(prompt("Masukkan Tebakan: "));

while (guess !== targerNum) {
    if (guess > targerNum) {
        guess = parseInt(prompt("Terlalu Tinggi, Masukkan Tebakan: "));
    } else {
        guess = parseInt(prompt("Terlalu Rendah, Masukkan Tebakan: "));
    }
}

alert(`Tebakan
Benar! Angka yang dicari adalah ${targerNum}`);

const students = [
    ['Ahmad', 19, 'Jakarta', 'Indonesia'],
    ['Budi', 20, 'Bandung', 'Indonesia'],
    ['Cindy', 25, 'Surabaya', 'Indonesia']
  ];

  for (student of students) {
    for (detail of student) {
        console.log(detail);
        }
  }

    for (let i = 0; i < students.length; i++) {
        const row = students[i];
        console.log(`ROW KE -: ${i + 1}`);
        for (let j = 0; j < row.length; j++) {
            console.log(` ${row[j]}`);
        }
    }

    let num = 1;
    while (num <= 10) {
        console.log(num);
        num++;
    }

    const password = 'admin123';

    let input2 = prompt('Masukkan Password: ');
    while(input2 !== password) {
        input2 = prompt('Password Salah. Masukkan Password: ');
    }
    alert('Password Benar!');
    alert('Selamat Datang!');

    const animals1 = ['dog', 'cat', 'mouse', 'rabbit', 'bird'];

    let input = prompt('Masukkan Nama Hewan: ');
    while (!animals1.includes(input)) {
        input = prompt('Nama Hewan Tidak Ditemukan. Masukkan Nama Hewan: ');
    }
    alert('Hewan Ditemukan!');

const animals = ['dog', 'cat', 'mouse', 'rabbit', 'bird'];

const uang = [1000, 2000, 3000, 4000, 5000];

const pilihan = ['A.Sendirian', 'B.Berduaan', 'C.Bertiga', 'D.Berempat'];
const soal = ['Kamu siapa?', 'Dengan siapa?', 'Semalem Dimana?', 'Berbuat Apa?'];

let var1 = "DSA";
let var2 = "Web Development";

console.log(`Use GeeksforGeeks to learn ${var1} and ${var2}`);

for (let i = 0; i <= 3; i++) {
  console.log(`${i+1}. ${soal[i]}`);
  for (let j = 0; j < pilihan.length; j++) {
    console.log(pilihan[j]);
  }
}

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let i = 10; i <= 100000; i *= 10){
    console.log(i);
}

for (let i =1; i <= 10; i++){
    console.log(i);
}

const perpangkatan = function (angka, pangkat) {
    let hasil = 1;
    for (let i = 0; i < pangkat; i++) {
        hasil *= angka;
    }
    return hasil;
}

function duaKali(func){
    func();
    func();
}

function lemparDadu() {
    hasil = Math.floor(Math.random() * 6) + 1;
    console.log(hasil);
}
