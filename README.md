# 📘 Assignment: Express.js & Modul Node.js

# 👤 Identitas
- Nama      : Nurul Qalbi Zahrani
- NIM       : F1D022150

## 📌 1. Deskripsi Tugas

<p> Implementasi Express.js dan modul lokal pada Node.js dengan membuat server sederhana dan memanfaatkan route modular untuk menampilkan perhitungan matematika sederhana, daftar data pengguna, serta profil pengguna. </p>

## 📂 2. Hasil

### 2.1 Hasil: Struktur Proyek
📂 documentation    : Screenshot output program
<br>
📂 expressModule_F1D022150<br>
====📂node_modules          : Folder hasil command "npm install"yang berisi dependency dari project.<br>
====📂public                : Fitur tambahan berupa interface yang lebih interaktif dan menarik<br>
====📂routes                : Menyimpan route modular, yaitu profile.js untuk menampilkan profil pengguna.<br>
====📂utils                 : Menyimpan modul lokal untuk fungsi perhitungan, yaitu math.js<br>
====📄 index.js             : App utama untuk inisialisasi Express, middleware, dan koneksi route.<br>
====📦 package-lock.json    : File yang mencatat versi detail dependency yang diinstall.<br>
====📦 package.json         : File konfigurasi project (nama, versi, script, dependency)<br>
🛈 README.md                 : Dokumentasi

### 2.2 Hasil Fitur-fitur
🔢 Perhitungan Matematika    : Tambah, kurang, kali, bagi, modulus, akar kuadrat, pangkat.

👥 Daftar User               : Menampilkan data user.

🪪 Profil User               : Menampilkan data diri dari route modular.
 
📥 Form Input                : Input angka yang ingin dihitung melalui form lalu hasil ditampilkan di browser.

✨ Interface                 : Pada folder public, terdapat css sebagai fitur tambahan untuk membuat tampilan sederhana berupa warna font serta layout website agar lebih menarik, tidak hanya teks seperti CMD.

### 2.3 Hasil Persiapan Environment
1. Membuat folder expressModule_F1D022150
![alt text](documentation/buat_folder.png)

2. Inisialisasi project Node.js dengan npm init -y.
![alt text](documentation/npm_init.png)

3.	Install Express.js dengan npm install express.
![alt text](documentation/install_express.png)

4.	Buat folder utils/
![alt text](documentation/buat_folder_utils.png)

5.	Buat folder routes/
![alt text](documentation/buat_folder_routes.png)


### 2.3 Hasil Output Program

•	GET http://localhost:3000/          : menampilkan NIM dan Nama
#### <p style= "justify-content: center">Hasil Website  </p>
#### <p> Pada menu utama, disediakan link untuk rute ke halaman-halaman lain sehingga pengguna tidak perlu mengganti manual halaman </p>

![alt text](documentation/mainPage.png)
#### Hasil Postman 
![alt text](documentation/postman_mainPage.png)

•	GET http://localhost:3000/hitung    : menampilkan hasil perhitungan
#### <p style= "justify-content: center">Hasil Website  </p>
#### <p> Pada menu hitung, disediakan form sehingga angka bisa dinamis dari user dan dapat dicoba berkali-kali </p>
![alt text](documentation/hitung.png)
![alt text](documentation/hitung_2.png)
#### Hasil Postman
![alt text](documentation/postman_hitung.png)

•	GET http://localhost:3000/profile   : menampilkan JSON array profile
#### Hasil Website
![alt text](documentation/profile.png)
#### Hasil Postman
![alt text](documentation/postman_profile.png)

•	GET http://localhost:3000/profile/1 : menampilkan detail profile (data anda sendiri) dengan nim=F1D022150
#### Hasil Website
![alt text](documentation/profileF1D022150.png)
#### Hasil Postman
![alt text](documentation/postman_profileF1D022150.png)

