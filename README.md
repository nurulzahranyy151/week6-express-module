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
====📄 index.js             : App utama. File utama aplikasi, digunakan untuk inisialisasi Express, middleware, dan koneksi route.<br>
====📦 package-lock.json    : File yang mencatat versi detail dependency yang diinstall.<br>
====📦 package.json         : File konfigurasi project (nama, versi, script, dependency)<br>
🛈 README.md                 : Dokumentasi

### 2.2 Hasil Fitur-fitur
🔢 Perhitungan Matematika    : Tambah, kurang, kali, bagi, modulus, akar kuadrat, pangkat.

👥 Daftar User               : Menampilkan data user.

🪪 Profil User               : Menampilkan data diri dari route modular.
 
📥 Form Input                : Input angka yang ingin dihitung melalui form di public/index.html lalu hasil ditampilkan di browser.

✨ Interface                 : Tampilan sederhana agar lebih menarik, tidak hanya teks seperti CMD.

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

•	GET http://localhost:3000/hitung    : menampilkan hasil penjumlahan
•	GET http://localhost:3000/profile   : menampilkan JSON array profile
•	GET http://localhost:3000/profile/1 : menampilkan detail profile (data anda sendiri) dengan nim=F1D022150



