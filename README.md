Coba kita jalankan project next.js kita, dan laporkan apa yang terjadi?
Jawaban: menampilkan kotak biru panjang "coba model bootstrap" dan saat di klik muncul tulisan "Halo semua, kita sedang menggunakan bootstrap di Next.js".

*Soal*
1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ?
Jawaban:Jika kita mengakses http://localhost:3000/login dan mengklik tombol login, kemudian melakukan refresh halaman beberapa kali, kita akan melihat bahwa status login akan kembali ke status awal (terlogin atau tidak terlogin), tergantung pada kondisi terakhir sebelum refresh.

Hal ini terjadi karena Redux store tidak disimpan secara permanen di sisi klien. Ketika halaman direfresh, Redux store akan diinisialisasi kembali ke nilai default yang didefinisikan dalam reducer. 

2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut?
Jawaban:jika kita tidak menggunakan method tersebut, maka kita harus menyediakan HTML langsung sebagai string di dalam JSX. Dalam kasus ini, kita menggunakan method parse() dari pustaka html-react-parser untuk mengubah string HTML menjadi elemen HTML yang dapat digunakan di dalam JSX. Jika kita tidak menggunakan parse(), kita harus menyertakan HTML langsung sebagai string di dalam JSX. 
contoh:{ isLogin ? 
    (
        <div className="alert alert-success">Yay, berhasil login!!!</div>
    )
    :
    (
        <div className="alert alert-dark">Anda telah logout!</div>
    )
}

Kemudian kita jalankan di browser dengan url localhost:3000/counter, dan amati apa yang terjadi?
Jawaban: Ketika Anda membuka aplikasi di browser dengan URL localhost:3000/counter, Anda akan melihat halaman counter. Pada halaman tersebut, Anda dapat menambah atau mengurangi nilai counter dengan mengklik tombol "+" atau "-". Nilai counter akan terus diperbarui secara langsung di tampilan dan disimpan secara permanen di Redux store, bahkan setelah refresh halaman.

7. Tugas (Pertanyaan Praktikum)
Berdasarkan pada praktikum sebelumnya yang telah dilakukan, beberapa pertanyaan terkait praktikum perlu diselesaikan yaitu sebagai berikut.

1. Apa kegunaan dari kode ini import { useEffect } from "react"; Pada file pages/_app.tsx? jelaskan
Jawaban:useEffect adalah salah satu dari beberapa hooks yang disediakan oleh React. Hook useEffect digunakan untuk menangani efek samping di dalam komponen React. Efek samping dapat berupa melakukan pembaruan DOM, berlangganan (subscribe) ke data, atau melakukan operasi lain yang memengaruhi dunia luar dari komponen React.

2. Jika pada file pages/_app.tsx kita tidak menggunakan useEffect (menghapus baris 3, dan baris 9-11, apa yang akan terjadi?
Jawaban:Jika Anda menghapus baris yang mengimpor dan menggunakan useEffect dari file pages/_app.tsx, maka tidak akan ada perubahan yang signifikan pada aplikasi. Ini karena _app.tsx adalah file khusus dalam Next.js yang bertanggung jawab untuk mengatur komponen tingkat tinggi yang dibungkus di sekitar setiap halaman dalam aplikasi Anda.

3. Mengapa di react/nextjs penulisan tag html untuk class, harus diganti menjadi className ?
Jawaban:Di React/Next.js, atribut class pada elemen HTML harus diganti menjadi className. Hal ini karena class adalah kata kunci yang digunakan dalam JavaScript untuk mendefinisikan kelas. Karena JSX adalah ekstensi dari JavaScript, kita tidak bisa menggunakan class sebagai atribut di JSX karena akan menyebabkan konflik dengan penggunaan kata kunci class dalam JavaScript.

4. Apakah store pada nextjs bisa menyimpan banyak redux reducer?
Jawaban:Ya, di Next.js atau pun di aplikasi React pada umumnya, store Redux dapat menyimpan banyak Redux reducer. Redux reducer adalah fungsi-fungsi yang mengelola bagian-bagian tertentu dari state aplikasi. Dalam banyak kasus, aplikasi akan memiliki lebih dari satu reducer untuk mengelola berbagai bagian state yang berbeda.

5. Jelaskan kegunaan dari file store.js!
Jawaban:File store.js dalam aplikasi Redux adalah tempat di mana Redux store dibuat dan dikonfigurasi.file store.js berperan sebagai pusat pengelolaan state dalam aplikasi Redux, memungkinkan pengaturan store, penggabungan reducer, penerapan middleware, dan menyediakan store kepada komponen-komponen aplikasi untuk digunakan.

6. Pada file pages/login.tsx, apa maksud dari kode ini ?
const { isLogin } = useSelector((state) => state.auth);
Jawaban:Kode const { isLogin } = useSelector((state) => state.auth); digunakan untuk mengambil nilai isLogin dari state Redux yang terkait dengan autentikasi menggunakan hook useSelector. Dengan demikian, nilai isLogin dapat digunakan di dalam komponen Login.

7. Pada file pages/counter.tsx, apa maksud dari kode ini?
const {totalCounter} = useSelector((state) => state.counter);
Jawaban:Kode const { totalCounter } = useSelector((state) => state.counter); digunakan untuk mengambil nilai totalCounter dari state Redux yang terkait dengan counter menggunakan hook useSelector.
