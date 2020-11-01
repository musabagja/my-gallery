# Caffeine Challenge - 01

## My Gallery
Buatlah sebuah website untuk menampilkan foto-foto, yang diambil dari API yang akan kalian buat.
Berikut contoh tampilan dari website yg akan kalian buat. Kalian bisa menggunakan template html yang sudah di sediakan. tapi tetap kerjakan client pada file index.html

[application demo](https://streamable.com/mz0voi)


### Dilarang !!!

- jika Tidak SPA, membutuh refresh untuk menjalankan salah satu/semua fitur
- tidak menggunakan sequelize n postgres atau tidak menggunakan html css jQuery
- tidak memberikan environtment variables beserta valuenya jika ybs menggunakan env
- using alert()
- jika yang dikirim bukan access_token melainkan key lain misal: token_key


## Release 0 - Authentication

### Server - Register
- Lakukan register sesuai api-doc.md

### Server - Login
- Lakukan login sesuai api-doc.md

### Client - Login & Logout
- jika sudah login, kalau direfresh tidak harus login lagi
- buatlah halaman untuk form login
- jika login berhasil maka akan menampilkan foto dari api unsplash di halaman home

NOTES: REGISTER CLIENT TIDAK PERLU ADA CUKUP REGISTRASI DI SERVER

## Release 1 - Fetch My Gallery Photo

### Server
- Lakukan Fetch Photo milik user (user gallery photo)
- data foto bisa di seeding aja

### Client
- Tampilkan list photo milik user (user gallery)
