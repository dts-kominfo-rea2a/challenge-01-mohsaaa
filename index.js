// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/*
Attribute =
name
gender
age
email
favoriteColor
isHavePet
education
favoriteRestaurant
*/

// favoriteColor & favoriteRestaurant firstUser, menggunakan set agar tidak duplikat
const firstFavoriteColor = ["Yellow", "Pink", "White", "Purple"];
const firstFavoriteRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
const setFirstFavoriteColor = new Set(firstFavoriteColor);
const setFirstFavoriteRestaurant = new Set(firstFavoriteRestaurant);


// favoriteColor & favoriteRestaurant secondUser, menggunakan set agar tidak duplikat
const secondFavoriteColor = ["Blue", "Black", "Grey"];
const secondFavoriteRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];
const setSecondFavoriteColor = new Set(secondFavoriteColor);
const setSecondFavoriteRestaurant = new Set(secondFavoriteRestaurant);

// firstUser Education
const firstEducation = [];
firstEducation.push({
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016
},
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate: 2019
    }, {
    name: "SMA 03",
    city: "Tangerang"
});

const secondEducation = [];
secondEducation.push({
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010
},
    {
        name: "SMP 03",
        city: "Bogor",
        graduate: 2013
    }, {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016
}, {
    name: "Universitas Maju",
    city: "Tangerang"
});


const firstUser = new Object();
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = setFirstFavoriteColor;
firstUser.isHavePet = "Yes";
firstUser.education = firstEducation;
firstUser.favoriteRestaurant = setFirstFavoriteRestaurant;

const secondUser = new Object();
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = "23";
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = setSecondFavoriteColor;
secondUser.isHavePet = "No";
secondUser.education = secondEducation;
secondUser.favoriteRestaurant = setSecondFavoriteRestaurant;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};