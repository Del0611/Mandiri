# 📘 MODUL LENGKAP: JARINGAN BERBASIS SERVER
## Kelas XII Teknik Komputer dan Jaringan (TKJ)

> **Mata Pelajaran:** Jaringan Komputer & Teknologi Jaringan Berbasis Luas
> **Jenjang:** SMK Kelas XII — Teknik Komputer dan Jaringan (TKJ)
> **Semester:** 1 (Ganjil)
> **Total Estimasi Belajar:** ± 92 JP (Jam Pelajaran) / ± 30 Pertemuan
> **Format:** Markdown GitHub — Daftar Isi dapat diklik

---

## 📑 DAFTAR ISI

| No | Materi | Estimasi Belajar | Link |
|----|--------|------------------|------|
| 1 | Konsep Jaringan Berbasis Server | ± 6 JP (2 pertemuan) | [Klik](#tp-1--konsep-jaringan-berbasis-server) |
| 2 | Instalasi & Administrasi Sistem Operasi Server | ± 12 JP (4 pertemuan) | [Klik](#tp-2--instalasi-dan-administrasi-sistem-operasi-server) |
| 3 | DHCP dan DNS Server | ± 12 JP (4 pertemuan) | [Klik](#tp-3--dhcp-dan-dns-server) |
| 4 | Web Server dan File Server | ± 12 JP (4 pertemuan) | [Klik](#tp-4--web-server-dan-file-server) |
| 5 | Routing dan NAT | ± 12 JP (4 pertemuan) | [Klik](#tp-5--routing-dan-nat) |
| 6 | Keamanan Jaringan dan Firewall | ± 10 JP (3–4 pertemuan) | [Klik](#tp-6--keamanan-jaringan-dan-firewall) |
| 7 | Monitoring dan Troubleshooting Jaringan | ± 10 JP (3–4 pertemuan) | [Klik](#tp-7--monitoring-dan-troubleshooting-jaringan) |
| 8 | Proyek Jaringan Terintegrasi | ± 18 JP (6 pertemuan) | [Klik](#tp-8--proyek-jaringan-terintegrasi) |
| 9 | Rangkuman Alur Kompetensi | — | [Klik](#-rangkuman-alur-kompetensi) |
| 10 | Glosarium | — | [Klik](#-glosarium) |
| 11 | Latihan Soal & Evaluasi | — | [Klik](#-latihan-soal--evaluasi) |

> **Keterangan:** 1 JP = 45 menit. Total estimasi ± 92 JP untuk satu semester penuh.

---

## 🎯 TUJUAN PEMBELAJARAN (TP) DAN ALUR TUJUAN PEMBELAJARAN (ATP)

### Ringkasan Tabel TP

| TP | Tujuan Pembelajaran | Materi Pokok | Indikator Ketercapaian |
|----|---------------------|--------------|------------------------|
| **TP 1** | Menjelaskan konsep, fungsi, karakteristik, dan penerapan jaringan berbasis server serta layanan jaringan. | Client-server, peer-to-peer, server, client, DHCP, DNS, Web Server, File Server, Proxy Server | Menjelaskan konsep jaringan berbasis server serta fungsi layanan jaringan. |
| **TP 2** | Melakukan instalasi dan konfigurasi sistem operasi jaringan. | Linux Server, instalasi, konfigurasi IP, user, permission, command line | Menginstal dan mengonfigurasi sistem operasi server. |
| **TP 3** | Mengonfigurasi layanan DHCP dan DNS. | DHCP Server, DNS Server, domain lokal, pengujian client | Menghasilkan layanan DHCP & DNS yang berfungsi. |
| **TP 4** | Mengonfigurasi Web Server dan File Server. | Apache/Nginx, sharing folder, user access, permission | Web & File Server dapat diakses client sesuai hak akses. |
| **TP 5** | Melakukan konfigurasi routing dan NAT. | Routing, gateway, routing table, NAT, router | Beberapa jaringan dapat saling terhubung dan akses internet. |
| **TP 6** | Menerapkan keamanan jaringan. | Firewall, port, service, ACL, access control | Aturan keamanan membatasi akses tidak sah. |
| **TP 7** | Monitoring, analisis performa, dan troubleshooting. | Ping, traceroute, netstat, bandwidth, log, packet loss | Mengidentifikasi gangguan dan menentukan perbaikan. |
| **TP 8** | Merancang, membangun, menguji, dan mendokumentasikan proyek jaringan. | Topologi, IP addressing, server, routing, wireless, keamanan, dokumentasi | Proyek jaringan berfungsi, aman, dan terdokumentasi. |

---

## TP 1 — KONSEP JARINGAN BERBASIS SERVER

**Estimasi Belajar: ± 6 JP (2 pertemuan × 3 JP)**

---

### 1.1 Pengertian Jaringan Komputer

**Jaringan komputer** adalah kumpulan dua atau lebih perangkat komputer yang saling terhubung untuk berkomunikasi dan berbagi sumber daya (data, printer, internet, dll).

**Manfaat jaringan komputer:**
- Berbagi file dan data
- Berbagi perangkat keras (printer, scanner)
- Komunikasi (email, chat, video call)
- Akses internet bersama
- Sentralisasi data dan backup

**Jenis jaringan berdasarkan jangkauan:**

| Jenis | Kepanjangan | Jangkauan | Contoh |
|-------|-------------|-----------|--------|
| PAN | Personal Area Network | ± 10 meter | Bluetooth, hotspot pribadi |
| LAN | Local Area Network | 1 gedung | Jaringan sekolah, kantor |
| MAN | Metropolitan Area Network | 1 kota | Jaringan antar kantor cabang |
| WAN | Wide Area Network | Antar negara | Internet |

---

### 1.2 Konsep Client-Server

**Client-Server** adalah model jaringan di mana satu komputer (**server**) menyediakan layanan, dan komputer lain (**client**) meminta/menggunakan layanan tersebut.

```
┌─────────────┐
│  CLIENT 1   │──┐
├─────────────┤  │
│  CLIENT 2   │──┼──► ┌─────────────┐      ┌──────────────────┐
├─────────────┤  │    │   SERVER    │─────►│  LAYANAN:        │
│  CLIENT 3   │──┘    │             │      │  - DHCP          │
└─────────────┘       │             │      │  - DNS           │
                      │             │      │  - Web Server    │
                      └─────────────┘      │  - File Server   │
                                           │  - Proxy Server  │
                                           └──────────────────┘
```

**Ciri-ciri client-server:**
- Ada komputer yang berperan sebagai **server** (penyedia layanan)
- Ada komputer yang berperan sebagai **client** (pengguna layanan)
- Komunikasi terjadi melalui **request** (permintaan) dan **response** (tanggapan)
- Layanan terpusat pada server
- Keamanan lebih terkontrol

**Contoh penerapan:**
- Jaringan sekolah: server menyimpan data siswa, client mengakses
- Jaringan kantor: server email, client mengirim/terima email
- Website: web server menyajikan halaman, browser client mengakses

**Kelebihan client-server:**
- ✅ Keamanan terpusat dan lebih aman
- ✅ Manajemen data terpusat
- ✅ Backup mudah dilakukan
- ✅ Skalabilitas tinggi (mudah dikembangkan)
- ✅ Kontrol akses lebih baik

**Kekurangan client-server:**
- ❌ Biaya lebih mahal (butuh server khusus)
- ❌ Jika server down, semua layanan terganggu
- ❌ Butuh administrator khusus
- ❌ Ketergantungan pada server tinggi

---

### 1.3 Konsep Peer-to-Peer (P2P)

**Peer-to-peer** adalah model jaringan di mana setiap komputer dapat menjadi **client sekaligus server**. Tidak ada komputer yang khusus menjadi server.

```
┌─────────────┐         ┌─────────────┐
│ KOMPUTER A  │◄───────►│ KOMPUTER B  │
│ (Client +   │         │ (Client +   │
│  Server)    │         │  Server)    │
└──────┬──────┘         └──────┬──────┘
       │                       │
       │    ┌─────────────┐    │
       └───►│ KOMPUTER C  │◄───┘
            │ (Client +   │
            │  Server)    │
            └─────────────┘
```

**Ciri-ciri peer-to-peer:**
- Setiap komputer setara (tidak ada yang superior)
- Setiap komputer bisa menjadi client dan server
- Tidak ada administrator terpusat
- Cocok untuk jaringan kecil

**Kelebihan peer-to-peer:**
- ✅ Biaya murah (tidak butuh server khusus)
- ✅ Mudah diatur
- ✅ Tidak ada ketergantungan pada satu komputer
- ✅ Cocok untuk jaringan kecil (2–10 komputer)

**Kekurangan peer-to-peer:**
- ❌ Keamanan lemah (tidak terpusat)
- ❌ Manajemen data tersebar
- ❌ Backup sulit dilakukan
- ❌ Performa menurun jika user banyak
- ❌ Sulit dikembangkan

---

### 1.4 Perbandingan Client-Server vs Peer-to-Peer

| Aspek | Client-Server | Peer-to-Peer |
|-------|---------------|--------------|
| Pusat layanan | Ada (server) | Tidak ada |
| Biaya | Lebih mahal | Lebih murah |
| Keamanan | Terpusat, lebih aman | Tersebar, lebih rentan |
| Skalabilitas | Mudah dikembangkan | Sulit dikembangkan |
| Manajemen | Terpusat | Tersebar |
| Backup | Mudah | Sulit |
| Jumlah komputer ideal | 10+ | 2–10 |
| Contoh | Jaringan kantor, sekolah | Rumah, LAN kecil |
| Kebutuhan admin | Perlu | Tidak perlu |

---

### 1.5 Fungsi Server dan Client

**Fungsi Server:**
- Menyediakan layanan kepada client
- Menyimpan data dan file
- Mengatur akses pengguna
- Mengelola sumber daya jaringan
- Menjaga keamanan jaringan
- Melakukan backup data

**Fungsi Client:**
- Meminta layanan dari server
- Mengakses data dan file
- Menjalankan aplikasi
- Menampilkan hasil ke pengguna
- Mengirim permintaan ke server

---

### 1.6 Sistem Operasi Server

**Sistem operasi server** adalah sistem operasi yang dirancang khusus untuk melayani kebutuhan jaringan.

**A. Linux Server:**
| Distro | Kelebihan | Cocok Untuk |
|--------|-----------|-------------|
| Ubuntu Server | Mudah, dokumentasi lengkap | Pemula |
| Debian | Stabil, ringan | Server produksi |
| CentOS | Stabil, enterprise | Perusahaan |
| Rocky Linux | Pengganti CentOS | Enterprise |
| Fedora Server | Fitur terbaru | Development |

**B. Windows Server:**
| Versi | Kelebihan |
|-------|-----------|
| Windows Server 2019 | GUI mudah, integrasi Microsoft |
| Windows Server 2022 | Keamanan lebih baik, fitur cloud |

**Perbandingan Linux vs Windows Server:**

| Aspek | Linux Server | Windows Server |
|-------|--------------|----------------|
| Biaya | Gratis | Berbayar |
| Keamanan | Lebih aman | Rentan malware |
| Resource | Ringan | Berat |
| GUI | Opsional | Wajib |
| Command line | Utama | Alternatif |
| Dukungan | Komunitas | Microsoft |

---

### 1.7 Layanan Jaringan

**A. DHCP Server (Dynamic Host Configuration Protocol)**
- Memberikan IP address otomatis ke client
- Menghemat waktu konfigurasi
- Menghindari konflik IP

**B. DNS Server (Domain Name System)**
- Menerjemahkan nama domain → IP address
- Contoh: `google.com` → `142.250.4.100`
- Memudahkan akses tanpa hafal IP

**C. Web Server**
- Menyajikan halaman web (HTTP/HTTPS)
- Contoh: Apache, Nginx, IIS
- Menampilkan website ke pengguna

**D. File Server**
- Berbagi file/folder antar pengguna
- Protokol: SMB/CIFS, NFS, FTP
- Contoh: Samba, NFS Server

**E. Proxy Server**
- Perantara akses internet
- Caching (menyimpan cache)
- Filtering (memblokir situs)
- Anonymity (menyembunyikan IP client)

**F. Mail Server**
- Mengirim dan menerima email
- Protokol: SMTP, POP3, IMAP
- Contoh: Postfix, Dovecot

**G. FTP Server**
- Transfer file via FTP
- Contoh: vsftpd, FileZilla Server

**H. Database Server**
- Menyimpan dan mengelola database
- Contoh: MySQL, PostgreSQL, MariaDB

---

### 1.8 Hubungan Server, Client, dan Layanan

```
┌──────────────────────────────────────────────────────────────┐
│                    JARINGAN KOMPUTER                         │
│                                                              │
│  ┌─────────────┐                                            │
│  │   CLIENT    │                                            │
│  │  (User PC)  │                                            │
│  └──────┬──────┘                                            │
│         │                                                   │
│         │ Request (permintaan)                              │
│         ▼                                                   │
│  ┌─────────────┐     ┌─────────────────────────────────┐   │
│  │   SWITCH    │────►│           SERVER                │   │
│  │             │     │                                 │   │
│  └─────────────┘     │  ┌─────────────────────────┐   │   │
│         ▲            │  │ Layanan:                │   │   │
│         │            │  │ • DHCP Server           │   │   │
│         │ Response   │  │ • DNS Server            │   │   │
│         │            │  │ • Web Server            │   │   │
│  ┌──────┴──────┐     │  │ • File Server           │   │   │
│  │   CLIENT    │     │  │ • Proxy Server          │   │   │
│  │  (User PC)  │     │  └─────────────────────────┘   │   │
│  └─────────────┘     └─────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Alur komunikasi:**
1. Client mengirim **request** ke server
2. Server memproses permintaan
3. Server mengirim **response** ke client
4. Client menampilkan hasil ke pengguna

---

### ✅ Indikator Ketercapaian TP 1

- [ ] Menjelaskan pengertian jaringan komputer
- [ ] Menjelaskan perbedaan client-server dan peer-to-peer
- [ ] Menyebutkan kelebihan dan kekurangan masing-masing model
- [ ] Menjelaskan fungsi server dan client
- [ ] Menyebutkan jenis-jenis sistem operasi server
- [ ] Menjelaskan fungsi DHCP, DNS, Web, File, dan Proxy Server
- [ ] Menggambarkan hubungan server, client, dan layanan jaringan

---

### 📝 Latihan Soal TP 1

1. Jelaskan perbedaan mendasar antara model client-server dan peer-to-peer!
2. Sebutkan 3 kelebihan dan 3 kekurangan client-server!
3. Apa fungsi DHCP Server dalam jaringan?
4. Mengapa DNS Server penting dalam jaringan?
5. Gambarkan skema sederhana jaringan client-server dengan 3 client dan 1 server!

---

## TP 2 — INSTALASI DAN ADMINISTRASI SISTEM OPERASI SERVER

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 2.1 Pengenalan Linux Server

**Linux** adalah sistem operasi open-source yang dikembangkan oleh Linus Torvalds pada tahun 1991. Linux Server adalah distribusi Linux yang dioptimalkan untuk kebutuhan server.

**Mengapa Linux Server?**
- ✅ **Gratis** — tidak perlu beli lisensi
- ✅ **Stabil** — jarang crash, bisa berjalan bertahun-tahun
- ✅ **Aman** — lebih sedikit malware dibanding Windows
- ✅ **Ringan** — bisa berjalan di hardware minimal
- ✅ **Fleksibel** — bisa dikustomisasi sesuai kebutuhan
- ✅ **Komunitas besar** — dokumentasi dan bantuan melimpah

**Distribusi Linux Server populer:**

| Distro | Basis | Kelebihan | Cocok Untuk |
|--------|-------|-----------|-------------|
| **Ubuntu Server** | Debian | Mudah, dokumentasi lengkap | Pemula |
| **Debian** | Mandiri | Stabil, ringan | Server produksi |
| **CentOS** | Red Hat | Stabil, enterprise | Perusahaan |
| **Rocky Linux** | Red Hat | Pengganti CentOS | Enterprise |
| **AlmaLinux** | Red Hat | Pengganti CentOS | Enterprise |
| **Fedora Server** | Red Hat | Fitur terbaru | Development |

---

### 2.2 Persiapan Instalasi

**A. Kebutuhan Hardware Minimal:**
| Komponen | Minimal | Rekomendasi |
|----------|---------|-------------|
| CPU | 1 GHz | 2 GHz dual-core |
| RAM | 1 GB | 4 GB |
| HDD | 10 GB | 50 GB |
| NIC | 1 | 2 |

**B. Kebutuhan Software:**
- ISO installer (misal Ubuntu Server 22.04)
- Rufus / Ventoy / Balena Etcher
- VirtualBox / VMware (untuk praktik virtual)

**C. Membuat Bootable USB:**
1. Download ISO Ubuntu Server
2. Colokkan USB (minimal 8 GB)
3. Buka Rufus
4. Pilih ISO → Start
5. Tunggu selesai

---

### 2.3 Langkah Instalasi Ubuntu Server

**Langkah 1: Boot dari USB**
- Masuk BIOS (F2/Del/F12)
- Ubah boot order → USB
- Save & Exit

**Langkah 2: Pilih Bahasa**
```
English / Bahasa Indonesia
```

**Langkah 3: Pilih Keyboard**
```
English (US)
```

**Langkah 4: Pilih Tipe Instalasi**
```
Ubuntu Server
```

**Langkah 5: Konfigurasi Jaringan**
```
Interface: ens33
IP: 192.168.1.10/24
Gateway: 192.168.1.1
DNS: 8.8.8.8
```

**Langkah 6: Partisi Disk**
```
Use an entire disk (otomatis)
atau Manual (untuk advanced)
```

**Langkah 7: Konfigurasi User**
```
Name: Administrator
Server name: server-tkj
Username: admin
Password: ********
```

**Langkah 8: Install OpenSSH**
```
[X] Install OpenSSH server
```

**Langkah 9: Pilih Software**
```
[X] Standard system utilities
```

**Langkah 10: Tunggu Instalasi**
- Proses ± 15–30 menit
- Reboot setelah selesai

---

### 2.4 Konfigurasi Dasar Server

**A. Login Pertama**
```
login: admin
password: ********
```

**B. Update Sistem**
```bash
sudo apt update
sudo apt upgrade -y
```

**C. Konfigurasi Hostname**
```bash
# Lihat hostname
hostname

# Ganti hostname
sudo hostnamectl set-hostname server-tkj

# Edit /etc/hosts
sudo nano /etc/hosts
# Tambahkan: 127.0.1.1  server-tkj
```

**D. Konfigurasi IP Address (Netplan)**

Ubuntu Server 18.04+ menggunakan **Netplan** untuk konfigurasi jaringan.

```bash
# Lihat file netplan
ls /etc/netplan/

# Edit file (nama bisa berbeda)
sudo nano /etc/netplan/00-installer-config.yaml
```

**Konfigurasi IP Statis:**
```yaml
network:
  version: 2
  ethernets:
    ens33:
      dhcp4: no
      addresses:
        - 192.168.1.10/24
      gateway4: 192.168.1.1
      nameservers:
        addresses:
          - 8.8.8.8
          - 1.1.1.1
```

**Konfigurasi IP Dinamis (DHCP):**
```yaml
network:
  version: 2
  ethernets:
    ens33:
      dhcp4: yes
```

**Terapkan konfigurasi:**
```bash
sudo netplan apply
```

**Verifikasi:**
```bash
ip a
ip route
ping 8.8.8.8
```

---

### 2.5 Manajemen User dan Group

**A. Menambah User**
```bash
sudo adduser budi
# Ikuti prompt: password, nama, dll.

# Atau cara manual
sudo useradd -m -s /bin/bash budi
sudo passwd budi
```

**B. Menghapus User**
```bash
sudo deluser budi
sudo deluser --remove-home budi  # hapus beserta home
```

**C. Mengubah Password**
```bash
sudo passwd budi
```

**D. Menambah Group**
```bash
sudo groupadd tkj
```

**E. Menambah User ke Group**
```bash
sudo usermod -aG tkj budi
```

**F. Melihat Info User**
```bash
id budi
groups budi
cat /etc/passwd | grep budi
```

**G. File Penting User & Group**
| File | Fungsi |
|------|--------|
| `/etc/passwd` | Data user |
| `/etc/shadow` | Password user (terenkripsi) |
| `/etc/group` | Data group |
| `/etc/sudoers` | User yang bisa sudo |

---

### 2.6 Hak Akses File dan Permission

**A. Melihat Permission**
```bash
ls -l
```

Output:
```
-rwxr-xr-x 1 budi tkj 1024 Jan 15 10:00 file.txt
│└┬┘└┬┘└┬┘   │    │
│ │  │  │    │    └── Group
│ │  │  │    └─────── Owner
│ │  │  └──────────── Other
│ │  └─────────────── Group permission
│ └────────────────── Owner permission
└──────────────────── Tipe file (- = file, d = direktori)
```

**B. Arti Permission**
| Simbol | Nilai | Arti |
|--------|-------|------|
| r | 4 | Read (baca) |
| w | 2 | Write (tulis) |
| x | 1 | Execute (jalankan) |
| - | 0 | Tidak ada izin |

**C. Kombinasi Permission**
| Nilai | Simbol | Arti |
|-------|--------|------|
| 7 | rwx | Baca, tulis, jalankan |
| 6 | rw- | Baca, tulis |
| 5 | r-x | Baca, jalankan |
| 4 | r-- | Baca saja |
| 3 | -wx | Tulis, jalankan |
| 2 | -w- | Tulis saja |
| 1 | --x | Jalankan saja |
| 0 | --- | Tidak ada izin |

**D. Mengubah Permission (chmod)**
```bash
chmod 755 file.txt    # rwxr-xr-x
chmod 644 file.txt    # rw-r--r--
chmod 700 file.txt    # rwx------
chmod +x script.sh    # tambah execute
chmod -w file.txt     # hapus write
```

**E. Mengubah Owner (chown)**
```bash
sudo chown budi file.txt          # ganti owner
sudo chown budi:tkj file.txt      # ganti owner & group
sudo chown -R budi:tkj folder/    # rekursif
```

**F. Mengubah Group (chgrp)**
```bash
sudo chgrp tkj file.txt
```

---

### 2.7 Perintah Dasar Linux

**A. Navigasi Direktori**
| Perintah | Fungsi | Contoh |
|----------|--------|--------|
| `pwd` | Lihat posisi direktori | `pwd` |
| `ls` | Lihat isi direktori | `ls -la` |
| `cd` | Pindah direktori | `cd /etc` |
| `cd ..` | Naik satu level | `cd ..` |
| `cd ~` | Ke home directory | `cd ~` |

**B. Manajemen File & Folder**
| Perintah | Fungsi | Contoh |
|----------|--------|--------|
| `mkdir` | Buat folder | `mkdir data` |
| `rmdir` | Hapus folder kosong | `rmdir data` |
| `rm` | Hapus file/folder | `rm file.txt` |
| `rm -r` | Hapus folder rekursif | `rm -r folder/` |
| `cp` | Salin file | `cp a.txt b.txt` |
| `cp -r` | Salin folder | `cp -r dir1/ dir2/` |
| `mv` | Pindah/ganti nama | `mv a.txt b.txt` |
| `touch` | Buat file kosong | `touch file.txt` |
| `cat` | Lihat isi file | `cat file.txt` |
| `nano` | Edit file | `nano file.txt` |
| `vim` | Edit file (advanced) | `vim file.txt` |

**C. Pencarian**
| Perintah | Fungsi | Contoh |
|----------|--------|--------|
| `find` | Cari file | `find / -name "*.conf"` |
| `grep` | Cari teks | `grep "root" /etc/passwd` |
| `which` | Lokasi perintah | `which python3` |

**D. Informasi Sistem**
| Perintah | Fungsi |
|----------|--------|
| `uname -a` | Info kernel |
| `hostname` | Nama host |
| `whoami` | User aktif |
| `df -h` | Disk space |
| `free -h` | RAM usage |
| `top` / `htop` | Proses berjalan |
| `ps aux` | Daftar proses |

**E. Manajemen Paket (APT)**
```bash
sudo apt update              # update daftar paket
sudo apt upgrade             # upgrade paket
sudo apt install nginx       # install paket
sudo apt remove nginx        # hapus paket
sudo apt search nginx        # cari paket
sudo apt autoremove          # hapus paket tidak terpakai
```

**F. Manajemen Service (Systemd)**
```bash
sudo systemctl start nginx      # jalankan
sudo systemctl stop nginx       # hentikan
sudo systemctl restart nginx    # restart
sudo systemctl status nginx     # cek status
sudo systemctl enable nginx     # auto-start
sudo systemctl disable nginx    # matikan auto-start
```

---

### 2.8 Remote Server dengan SSH

**SSH (Secure Shell)** adalah protokol untuk mengakses server dari jarak jauh dengan aman.

**A. Install SSH Server**
```bash
sudo apt install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
sudo systemctl status ssh
```

**B. Konfigurasi SSH**
```bash
sudo nano /etc/ssh/sshd_config
```

Opsi penting:
```
Port 22                    # port default
PermitRootLogin no         # larang login root
PasswordAuthentication yes # login pakai password
```

**C. Remote dari Client**
```bash
# Dari Linux/Mac
ssh admin@192.168.1.10

# Dari Windows (PowerShell/CMD)
ssh admin@192.168.1.10

# Dengan port custom
ssh -p 2222 admin@192.168.1.10
```

**D. Copy File via SCP**
```bash
# Dari lokal ke server
scp file.txt admin@192.168.1.10:/home/admin/

# Dari server ke lokal
scp admin@192.168.1.10:/home/admin/file.txt .
```

**E. SSH Key (Login Tanpa Password)**
```bash
# Generate key di client
ssh-keygen -t rsa -b 4096

# Copy public key ke server
ssh-copy-id admin@192.168.1.10

# Login tanpa password
ssh admin@192.168.1.10
```

---

### ✅ Indikator Ketercapaian TP 2

- [ ] Menjelaskan pengertian dan kelebihan Linux Server
- [ ] Melakukan instalasi sistem operasi server
- [ ] Mengonfigurasi hostname, IP, gateway, DNS
- [ ] Mengelola user, group, dan permission
- [ ] Menggunakan perintah dasar Linux
- [ ] Melakukan remote server via SSH
- [ ] Mengelola service dengan systemctl

---

### 📝 Latihan Soal TP 2

1. Sebutkan 5 kelebihan Linux Server dibanding Windows Server!
2. Jelaskan langkah-langkah instalasi Ubuntu Server!
3. Apa fungsi Netplan dalam Ubuntu Server?
4. Jelaskan perbedaan `chmod 755` dan `chmod 644`!
5. Bagaimana cara menambah user baru di Linux?
6. Apa fungsi SSH dan bagaimana cara menggunakannya?
7. Sebutkan 10 perintah dasar Linux beserta fungsinya!

---

## TP 3 — DHCP DAN DNS SERVER

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 3.1 Konsep DHCP

**DHCP (Dynamic Host Configuration Protocol)** adalah protokol yang memberikan konfigurasi IP address secara **otomatis** kepada client yang terhubung ke jaringan.

**Mengapa DHCP penting?**
- ✅ Menghemat waktu konfigurasi IP
- ✅ Menghindari konflik IP address
- ✅ Memudahkan manajemen jaringan
- ✅ Cocok untuk jaringan besar
- ✅ Client bisa langsung terhubung tanpa setting manual

**Istilah penting dalam DHCP:**

| Istilah | Penjelasan |
|---------|------------|
| **DHCP Server** | Perangkat yang memberikan IP |
| **DHCP Client** | Perangkat yang menerima IP |
| **DHCP Range** | Rentang IP yang dibagikan |
| **Lease Time** | Masa berlaku IP |
| **Scope** | Lingkup jaringan |
| **Reservation** | IP khusus untuk MAC tertentu |
| **Exclusion** | IP yang tidak dibagikan |

**Cara Kerja DHCP (DORA):**

```
CLIENT                                    SERVER
  │                                          │
  │──── 1. DISCOVER (broadcast) ────────────►│
  │     "Ada DHCP server?"                   │
  │                                          │
  │◄─── 2. OFFER ────────────────────────────│
  │     "Saya ada, ini IP untukmu"           │
  │                                          │
  │──── 3. REQUEST ─────────────────────────►│
  │     "Saya mau IP ini"                    │
  │                                          │
  │◄─── 4. ACKNOWLEDGE ──────────────────────│
  │     "OK, IP ini resmi milikmu"           │
  │                                          │
```

**Penjelasan DORA:**
1. **Discover** — Client mencari DHCP server dengan broadcast
2. **Offer** — Server menawarkan IP address
3. **Request** — Client meminta IP yang ditawarkan
4. **Acknowledge** — Server menyetujui dan mencatat lease

---

### 3.2 Konfigurasi DHCP Server (ISC-DHCP)

**A. Install ISC-DHCP-Server**
```bash
sudo apt update
sudo apt install isc-dhcp-server -y
```

**B. Konfigurasi Interface**
```bash
sudo nano /etc/default/isc-dhcp-server
```

Edit:
```
INTERFACESv4="ens33"
INTERFACESv6=""
```

**C. Konfigurasi DHCP**
```bash
sudo nano /etc/dhcp/dhcpd.conf
```

Tambahkan konfigurasi:
```conf
# Konfigurasi global
option domain-name "sekolah.local";
option domain-name-servers 192.168.1.10, 8.8.8.8;
default-lease-time 600;
max-lease-time 7200;
authoritative;

# Konfigurasi subnet
subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.100 192.168.1.200;
  option routers 192.168.1.1;
  option subnet-mask 255.255.255.0;
  option broadcast-address 192.168.1.255;
  option domain-name-servers 192.168.1.10;
}

# Reservasi IP untuk MAC tertentu
host printer {
  hardware ethernet 00:11:22:33:44:55;
  fixed-address 192.168.1.50;
}
```

**D. Restart Service**
```bash
sudo systemctl restart isc-dhcp-server
sudo systemctl status isc-dhcp-server
```

**E. Cek Log**
```bash
sudo tail -f /var/log/syslog | grep dhcp
```

**F. Verifikasi di Client**
```bash
# Linux
sudo dhclient -r  # release
sudo dhclient     # renew
ip a

# Windows
ipconfig /release
ipconfig /renew
ipconfig /all
```

---

### 3.3 Konsep DNS

**DNS (Domain Name System)** adalah sistem yang menerjemahkan **nama domain** menjadi **IP address** dan sebaliknya.

**Mengapa DNS penting?**
- Manusia mudah mengingat nama (google.com) daripada IP (142.250.4.100)
- Memudahkan perubahan IP tanpa mengubah nama
- Mendukung skalabilitas internet

**Hierarki DNS:**

```
                    ┌─────────────┐
                    │  ROOT (.)   │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
           ┌──┴──┐      ┌──┴──┐      ┌──┴──┐
           │ com │      │ org │      │ net │
           └──┬──┘      └──┬──┘      └──┬──┘
              │            │            │
         ┌────┴────┐       │            │
         │ google  │       │            │
         └────┬────┘       │            │
              │            │            │
         ┌────┴────┐       │            │
         │  www    │       │            │
         └─────────┘       │            │
```

**Jenis-jenis DNS Record:**

| Record | Fungsi | Contoh |
|--------|--------|--------|
| **A** | Nama → IPv4 | `www IN A 192.168.1.10` |
| **AAAA** | Nama → IPv6 | `www IN AAAA ::1` |
| **CNAME** | Alias nama | `mail IN CNAME www` |
| **MX** | Mail server | `@ IN MX 10 mail` |
| **NS** | Name server | `@ IN NS ns1` |
| **PTR** | IP → Nama (reverse) | `10 IN PTR www` |
| **SOA** | Start of Authority | Info zona |
| **TXT** | Teks bebas | Verifikasi, SPF |

**Jenis Lookup:**
- **Forward Lookup** → nama domain → IP (paling umum)
- **Reverse Lookup** → IP → nama domain

---

### 3.4 Konfigurasi DNS Server (Bind9)

**A. Install Bind9**
```bash
sudo apt install bind9 bind9utils bind9-doc -y
```

**B. Konfigurasi Named.conf.options**
```bash
sudo nano /etc/bind/named.conf.options
```

Edit:
```conf
options {
  directory "/var/cache/bind";
  
  recursion yes;
  allow-recursion { localhost; 192.168.1.0/24; };
  
  forwarders {
    8.8.8.8;
    1.1.1.1;
  };
  
  dnssec-validation auto;
  listen-on-v6 { any; };
};
```

**C. Konfigurasi Named.conf.local**
```bash
sudo nano /etc/bind/named.conf.local
```

Tambahkan:
```conf
// Zona forward
zone "sekolah.local" {
  type master;
  file "/etc/bind/db.sekolah.local";
};

// Zona reverse
zone "1.168.192.in-addr.arpa" {
  type master;
  file "/etc/bind/db.192.168.1";
};
```

**D. Buat File Zona Forward**
```bash
sudo nano /etc/bind/db.sekolah.local
```

Isi:
```conf
;
; BIND data file for sekolah.local
;
$TTL    604800
@       IN      SOA     ns.sekolah.local. admin.sekolah.local. (
                        2024010101      ; Serial
                        3600            ; Refresh
                        1800            ; Retry
                        604800          ; Expire
                        86400 )         ; Negative Cache TTL
;
@       IN      NS      ns.sekolah.local.
@       IN      A       192.168.1.10
ns      IN      A       192.168.1.10
www     IN      A       192.168.1.10
mail    IN      A       192.168.1.10
ftp     IN      A       192.168.1.10
@       IN      MX      10 mail.sekolah.local.
```

**E. Buat File Zona Reverse**
```bash
sudo nano /etc/bind/db.192.168.1
```

Isi:
```conf
;
; Reverse zone for 192.168.1.x
;
$TTL    604800
@       IN      SOA     ns.sekolah.local. admin.sekolah.local. (
                        2024010101      ; Serial
                        3600            ; Refresh
                        1800            ; Retry
                        604800          ; Expire
                        86400 )         ; Negative Cache TTL
;
@       IN      NS      ns.sekolah.local.
10      IN      PTR     ns.sekolah.local.
10      IN      PTR     www.sekolah.local.
10      IN      PTR     mail.sekolah.local.
```

**F. Cek Konfigurasi**
```bash
sudo named-checkconf
sudo named-checkzone sekolah.local /etc/bind/db.sekolah.local
sudo named-checkzone 1.168.192.in-addr.arpa /etc/bind/db.192.168.1
```

**G. Restart Bind9**
```bash
sudo systemctl restart bind9
sudo systemctl status bind9
```

---

### 3.5 Pengujian DHCP dan DNS

**A. Uji DHCP dari Client:**
```bash
# Linux
sudo dhclient -v
ip a

# Windows
ipconfig /all
```

Pastikan client mendapat IP dari range DHCP.

**B. Uji DNS dari Client:**
```bash
# Linux
nslookup sekolah.local
nslookup www.sekolah.local
dig sekolah.local

# Windows
nslookup sekolah.local
ping www.sekolah.local
```

**C. Uji Reverse Lookup:**
```bash
nslookup 192.168.1.10
dig -x 192.168.1.10
```

**D. Konfigurasi DNS di Client:**

**Linux:**
```bash
sudo nano /etc/resolv.conf
# nameserver 192.168.1.10
```

**Windows:**
- Network Settings → DNS Server → 192.168.1.10

---

### ✅ Indikator Ketercapaian TP 3

- [ ] Menjelaskan konsep dan cara kerja DHCP (DORA)
- [ ] Mengonfigurasi DHCP Server
- [ ] Mengonfigurasi DHCP Client
- [ ] Menjelaskan konsep DNS dan hierarkinya
- [ ] Mengonfigurasi DNS Server (Bind9)
- [ ] Membuat zona forward dan reverse
- [ ] Menguji layanan DHCP dan DNS dari client
- [ ] Melakukan troubleshooting dasar

---

### 📝 Latihan Soal TP 3

1. Jelaskan cara kerja DHCP dengan metode DORA!
2. Apa yang dimaksud dengan DHCP lease time?
3. Sebutkan 5 jenis DNS record beserta fungsinya!
4. Jelaskan perbedaan forward lookup dan reverse lookup!
5. Tuliskan konfigurasi DHCP untuk subnet 192.168.10.0/24 dengan range 100–150!
6. Apa fungsi `forwarders` dalam konfigurasi Bind9?
7. Bagaimana cara menguji DNS dari komputer client?

---

## TP 4 — WEB SERVER DAN FILE SERVER

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 4.1 Konsep Web Server

**Web Server** adalah server yang melayani permintaan halaman web dari client melalui protokol **HTTP** (HyperText Transfer Protocol) atau **HTTPS** (HTTP Secure).

**Cara kerja web server:**
```
CLIENT (Browser)                    WEB SERVER
      │                                  │
      │──── 1. Request (GET /index.html) ►│
      │                                  │
      │                                  │──► Cari file
      │                                  │──► Proses PHP
      │                                  │──► Akses database
      │                                  │
      │◄─── 2. Response (HTML) ──────────│
      │                                  │
      │──► Tampilkan di browser          │
```

**Software Web Server populer:**

| Software | Kelebihan | Kekurangan |
|----------|-----------|------------|
| **Apache** | Stabil, modul lengkap, dokumentasi | Lebih berat |
| **Nginx** | Ringan, cepat, cocok untuk high traffic | Konfigurasi unik |
| **IIS** | Integrasi Windows | Berbayar, hanya Windows |
| **LiteSpeed** | Cepat, hemat resource | Berbayar |

**Istilah penting:**
- **HTTP** — protokol transfer web (port 80)
- **HTTPS** — HTTP + SSL/TLS (port 443)
- **Document Root** — folder utama website
- **Virtual Host** — hosting banyak domain di satu server
- **SSL/TLS** — sertifikat keamanan
- **Redirect** — pengalihan URL

---

### 4.2 Instalasi Apache

**A. Install Apache2**
```bash
sudo apt update
sudo apt install apache2 -y
```

**B. Cek Status**
```bash
sudo systemctl status apache2
```

**C. Aktifkan Auto-Start**
```bash
sudo systemctl enable apache2
```

**D. Test dari Client**
Buka browser: `http://192.168.1.10`
Akan muncul halaman default Apache.

**E. Konfigurasi Firewall (jika pakai UFW)**
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

---

### 4.3 Struktur Direktori Web

| Path | Fungsi |
|------|--------|
| `/var/www/html/` | Document root default |
| `/etc/apache2/` | Konfigurasi Apache |
| `/etc/apache2/apache2.conf` | Konfigurasi utama |
| `/etc/apache2/sites-available/` | Virtual host tersedia |
| `/etc/apache2/sites-enabled/` | Virtual host aktif |
| `/etc/apache2/mods-available/` | Modul tersedia |
| `/etc/apache2/mods-enabled/` | Modul aktif |
| `/var/log/apache2/access.log` | Log akses |
| `/var/log/apache2/error.log` | Log error |

---

### 4.4 Membuat Halaman Web Sederhana

**A. Buat File HTML**
```bash
sudo nano /var/www/html/index.html
```

Isi:
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selamat Datang di Server TKJ</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 50px;
    }
    h1 { font-size: 3em; }
    p { font-size: 1.2em; }
    .card {
      background: rgba(255,255,255,0.1);
      padding: 30px;
      border-radius: 15px;
      display: inline-block;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>🚀 Web Server TKJ Berhasil!</h1>
  <div class="card">
    <p>Ini adalah halaman web pertama saya.</p>
    <p>Server: 192.168.1.10</p>
    <p>Domain: www.sekolah.local</p>
  </div>
</body>
</html>
```

**B. Set Permission**
```bash
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

**C. Test dari Client**
Buka browser: `http://192.168.1.10`

---

### 4.5 Virtual Host

**Virtual Host** memungkinkan satu server melayani banyak domain/website.

**A. Buat Direktori Website**
```bash
sudo mkdir -p /var/www/sekolah
sudo mkdir -p /var/www/tkj
```

**B. Buat File HTML**
```bash
sudo nano /var/www/sekolah/index.html
sudo nano /var/www/tkj/index.html
```

**C. Buat Konfigurasi Virtual Host**
```bash
sudo nano /etc/apache2/sites-available/sekolah.conf
```

Isi:
```apache
<VirtualHost *:80>
  ServerName www.sekolah.local
  ServerAlias sekolah.local
  ServerAdmin admin@sekolah.local
  DocumentRoot /var/www/sekolah
  
  <Directory /var/www/sekolah>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>
  
  ErrorLog ${APACHE_LOG_DIR}/sekolah_error.log
  CustomLog ${APACHE_LOG_DIR}/sekolah_access.log combined
</VirtualHost>
```

**D. Aktifkan Virtual Host**
```bash
sudo a2ensite sekolah.conf
sudo a2ensite tkj.conf
sudo a2dissite 000-default.conf  # nonaktifkan default
```

**E. Aktifkan Modul Rewrite**
```bash
sudo a2enmod rewrite
```

**F. Test Konfigurasi**
```bash
sudo apache2ctl configtest
```

**G. Restart Apache**
```bash
sudo systemctl restart apache2
```

**H. Tambahkan DNS**
Pastikan DNS Server sudah dikonfigurasi:
```conf
www     IN      A       192.168.1.10
sekolah IN      A       192.168.1.10
tkj     IN      A       192.168.1.10
```

**I. Test dari Client**
Buka: `http://www.sekolah.local`

---

### 4.6 Konsep File Server

**File Server** adalah server yang menyediakan layanan berbagi file/folder antar pengguna di jaringan.

**Protokol File Sharing:**

| Protokol | Platform | Port | Kelebihan |
|----------|----------|------|-----------|
| **SMB/CIFS** | Windows, Linux | 445 | Integrasi Windows |
| **NFS** | Linux/Unix | 2049 | Cepat di Linux |
| **FTP** | Semua | 21 | Universal |
| **SFTP** | Semua | 22 | Aman (via SSH) |
| **WebDAV** | Semua | 80/443 | Via web |

**Istilah penting:**
- **Share** — folder yang dibagikan
- **Permission** — hak akses
- **User** — pengguna yang punya akses
- **Guest** — akses tanpa login
- **Read-only** — hanya baca
- **Read-write** — baca dan tulis

---

### 4.7 Sharing File dengan Samba

**Samba** adalah implementasi SMB/CIFS untuk Linux, memungkinkan sharing file dengan Windows.

**A. Install Samba**
```bash
sudo apt install samba -y
```

**B. Backup Konfigurasi**
```bash
sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.backup
```

**C. Edit Konfigurasi**
```bash
sudo nano /etc/samba/smb.conf
```

Tambahkan di akhir file:
```conf
[data-tkj]
  comment = Data TKJ
  path = /home/share/tkj
  browseable = yes
  read only = no
  writable = yes
  valid users = budi, siti
  create mask = 0775
  directory mask = 0775

[public]
  comment = Public Share
  path = /home/share/public
  browseable = yes
  read only = no
  guest ok = yes
  create mask = 0777
  directory mask = 0777
```

**D. Buat Folder Share**
```bash
sudo mkdir -p /home/share/tkj
sudo mkdir -p /home/share/public
sudo chmod 777 /home/share/public
sudo chown -R nobody:nogroup /home/share/public
```

**E. Buat User Samba**
```bash
sudo smbpasswd -a budi
# Masukkan password
```

**F. Restart Samba**
```bash
sudo systemctl restart smbd
sudo systemctl enable smbd
sudo systemctl status smbd
```

**G. Test dari Client:**

**Windows:**
```
\\192.168.1.10\data-tkj
\\192.168.1.10\public
```

**Linux:**
```bash
smbclient //192.168.1.10/data-tkj -U budi
# atau mount
sudo mount -t cifs //192.168.1.10/data-tkj /mnt/share -o username=budi
```

---

### 4.8 Pengujian Web & File Server

**A. Uji Web Server:**
```bash
# Dari server
curl http://localhost

# Dari client
curl http://192.168.1.10
curl http://www.sekolah.local
```

**B. Uji File Server:**
```bash
# List share
smbclient -L //192.168.1.10 -U budi

# Akses share
smbclient //192.168.1.10/data-tkj -U budi
```

**C. Cek Log:**
```bash
# Apache
sudo tail -f /var/log/apache2/access.log
sudo tail -f /var/log/apache2/error.log

# Samba
sudo tail -f /var/log/samba/log.smbd
```

---

### ✅ Indikator Ketercapaian TP 4

- [ ] Menjelaskan konsep dan cara kerja Web Server
- [ ] Menginstal dan mengonfigurasi Apache
- [ ] Membuat halaman web sederhana
- [ ] Mengonfigurasi virtual host
- [ ] Menjelaskan konsep File Server
- [ ] Menginstal dan mengonfigurasi Samba
- [ ] Mengatur user access dan permission
- [ ] Menguji akses dari client

---

### 📝 Latihan Soal TP 4

1. Jelaskan cara kerja web server dari request hingga response!
2. Sebutkan 3 software web server beserta kelebihannya!
3. Apa fungsi virtual host dalam Apache?
4. Jelaskan perbedaan SMB, NFS, dan FTP!
5. Tuliskan konfigurasi virtual host untuk domain `tkj.local`!
6. Bagaimana cara menambahkan user Samba?
7. Apa perbedaan share public dan share terbatas?

---

## TP 5 — ROUTING DAN NAT

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 5.1 Konsep Routing

**Routing** adalah proses menentukan jalur terbaik untuk mengirim paket data dari satu jaringan ke jaringan lain.

**Mengapa routing penting?**
- Menghubungkan jaringan berbeda
- Menentukan jalur terbaik
- Mengatur lalu lintas data
- Mendukung akses internet

**Istilah penting:**

| Istilah | Penjelasan |
|---------|------------|
| **Router** | Perangkat yang melakukan routing |
| **Gateway** | Pintu keluar menuju jaringan lain |
| **Routing Table** | Tabel berisi daftar rute |
| **Static Routing** | Rute dibuat manual |
| **Dynamic Routing** | Rute dibuat otomatis |
| **Hop** | Lompatan antar router |
| **Metric** | Nilai prioritas rute |
| **Default Route** | Rute default (0.0.0.0/0) |

**Jenis Routing:**

| Jenis | Kelebihan | Kekurangan |
|-------|-----------|------------|
| **Static** | Simpel, aman, ringan | Tidak adaptif, manual |
| **Dynamic** | Adaptif, otomatis | Kompleks, butuh resource |
| **Default** | Simpel untuk internet | Tidak spesifik |

**Protokol Dynamic Routing:**
- **RIP** — sederhana, hop count max 15
- **OSPF** — link-state, cocok untuk enterprise
- **BGP** — antar-AS, digunakan internet
- **EIGRP** — Cisco proprietary

---

### 5.2 Melihat Routing Table

**A. Linux:**
```bash
ip route
# atau
route -n
```

Contoh output:
```
default via 192.168.1.1 dev ens33 proto static
192.168.1.0/24 dev ens33 proto kernel scope link src 192.168.1.10
192.168.2.0/24 via 192.168.1.1 dev ens33 proto static
```

**B. Windows:**
```cmd
route print
netstat -rn
```

**Arti output:**
| Kolom | Arti |
|-------|------|
| Destination | Tujuan |
| Gateway | Pintu keluar |
| Genmask | Netmask |
| Interface | Interface yang digunakan |
| Metric | Prioritas |

---

### 5.3 Konfigurasi Static Routing

**A. Tambah Rute Sementara:**
```bash
sudo ip route add 192.168.2.0/24 via 192.168.1.1
```

**B. Hapus Rute:**
```bash
sudo ip route del 192.168.2.0/24
```

**C. Rute Permanen (Netplan):**
```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

```yaml
network:
  version: 2
  ethernets:
    ens33:
      addresses: [192.168.1.10/24]
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8]
      routes:
        - to: 192.168.2.0/24
          via: 192.168.1.1
        - to: 192.168.3.0/24
          via: 192.168.1.1
```

```bash
sudo netplan apply
```

**D. Enable IP Forwarding:**
```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

Permanen:
```bash
sudo nano /etc/sysctl.conf
# net.ipv4.ip_forward=1
sudo sysctl -p
```

---

### 5.4 Konsep NAT

**NAT (Network Address Translation)** adalah proses menerjemahkan alamat IP private menjadi IP public agar bisa mengakses internet.

**Mengapa NAT penting?**
- Menghemat IP public (IPv4 terbatas)
- Menyembunyikan IP internal
- Keamanan tambahan
- Memungkinkan banyak device akses internet dengan 1 IP public

**Jenis-jenis NAT:**

| Jenis | Fungsi |
|-------|--------|
| **SNAT** | Mengubah IP asal (Source NAT) |
| **DNAT** | Mengubah IP tujuan (Destination NAT) |
| **Masquerade** | SNAT dinamis (umum di Linux) |
| **Port Forwarding** | DNAT untuk akses layanan internal |
| **Static NAT** | 1-to-1 mapping |
| **Dynamic NAT** | Pool IP public |

**Ilustrasi NAT:**
```
PRIVATE NETWORK                    INTERNET
┌─────────────┐                   ┌─────────────┐
│ 192.168.1.10│──┐                │             │
├─────────────┤  │                │             │
│ 192.168.1.11│──┼──► [ROUTER] ──►│  Internet   │
├─────────────┤  │    NAT          │             │
│ 192.168.1.12│──┘   203.0.113.1   │             │
└─────────────┘                   └─────────────┘
```

---

### 5.5 Konfigurasi NAT dengan iptables

**A. Install iptables-persistent:**
```bash
sudo apt install iptables-persistent -y
```

**B. Lihat Aturan:**
```bash
sudo iptables -L -n -v
sudo iptables -t nat -L -n -v
```

**C. Aktifkan IP Forwarding:**
```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

**D. Konfigurasi NAT (Masquerade):**
```bash
# Asumsi:
# eth0 = interface ke internet (WAN)
# eth1 = interface ke LAN

sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT
sudo iptables -A FORWARD -i eth0 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT
```

**E. Port Forwarding:**
```bash
# Forward port 80 dari public ke server internal
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80

# Forward port 22 (SSH)
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 2222 -j DNAT --to-destination 192.168.1.10:22
```

**F. Simpan Aturan:**
```bash
sudo netfilter-persistent save
sudo netfilter-persistent reload
```

**G. Lihat Aturan NAT:**
```bash
sudo iptables -t nat -L -n -v
```

---

### 5.6 Pengujian Routing & NAT

**A. Uji Routing:**
```bash
# Ping antarjaringan
ping 192.168.2.10

# Traceroute
traceroute 192.168.2.10
```

**B. Uji NAT:**
```bash
# Dari client, ping internet
ping 8.8.8.8

# Cek IP public
curl ifconfig.me
```

**C. Uji Port Forwarding:**
```bash
# Dari luar, akses port yang di-forward
curl http://203.0.113.1:80
```

**D. Troubleshooting:**
```bash
# Cek routing table
ip route

# Cek NAT rules
sudo iptables -t nat -L -n -v

# Cek IP forwarding
cat /proc/sys/net/ipv4/ip_forward
```

---

### ✅ Indikator Ketercapaian TP 5

- [ ] Menjelaskan konsep routing, gateway, dan routing table
- [ ] Melakukan konfigurasi static routing
- [ ] Menjelaskan konsep NAT dan jenis-jenisnya
- [ ] Mengonfigurasi NAT untuk akses internet
- [ ] Mengonfigurasi port forwarding
- [ ] Menguji konektivitas antarjaringan
- [ ] Melakukan troubleshooting routing

---

### 📝 Latihan Soal TP 5

1. Jelaskan perbedaan static routing dan dynamic routing!
2. Apa fungsi default route (0.0.0.0/0)?
3. Jelaskan cara kerja NAT!
4. Sebutkan 4 jenis NAT beserta fungsinya!
5. Tuliskan perintah iptables untuk NAT masquerade!
6. Apa fungsi IP forwarding dalam routing?
7. Bagaimana cara menguji apakah NAT berfungsi?

---

## TP 6 — KEAMANAN JARINGAN DAN FIREWALL

**Estimasi Belajar: ± 10 JP (3–4 pertemuan × 3 JP)**

---

### 6.1 Konsep Keamanan Jaringan

**Keamanan jaringan** adalah upaya melindungi data, layanan, dan infrastruktur jaringan dari akses tidak sah, kerusakan, atau pencurian.

**Aspek keamanan (CIA Triad):**

| Aspek | Penjelasan | Contoh |
|-------|------------|--------|
| **Confidentiality** | Kerahasiaan data | Enkripsi, password |
| **Integrity** | Keutuhan data | Hash, checksum |
| **Availability** | Ketersediaan layanan | Backup, redundant |

**Ancaman umum:**

| Ancaman | Penjelasan | Dampak |
|---------|------------|--------|
| **Unauthorized access** | Akses tanpa izin | Data bocor |
| **Malware** | Virus, worm, trojan | Sistem rusak |
| **Scanning** | Pemindaian port/sistem | Info untuk serangan |
| **DoS/DDoS** | Membanjiri server | Layanan down |
| **Sniffing** | Menyadap lalu lintas | Data dicuri |
| **Phishing** | Penipuan | Kredensial dicuri |
| **Man-in-the-Middle** | Menyusup komunikasi | Data dimanipulasi |
| **SQL Injection** | Serangan database | Data bocor |
| **Brute Force** | Coba password berulang | Akun dibajak |

---

### 6.2 Port dan Service

**Port** adalah pintu masuk komunikasi jaringan. Setiap layanan menggunakan port tertentu.

**Port umum:**

| Port | Protocol | Service | Keterangan |
|------|----------|---------|------------|
| 20, 21 | TCP | FTP | Transfer file |
| 22 | TCP | SSH | Remote aman |
| 23 | TCP | Telnet | Remote (tidak aman) |
| 25 | TCP | SMTP | Kirim email |
| 53 | TCP/UDP | DNS | Nama domain |
| 67, 68 | UDP | DHCP | IP otomatis |
| 80 | TCP | HTTP | Web |
| 110 | TCP | POP3 | Terima email |
| 143 | TCP | IMAP | Email |
| 443 | TCP | HTTPS | Web aman |
| 3306 | TCP | MySQL | Database |
| 3389 | TCP | RDP | Remote Windows |

**Kategori port:**
- **Well-known** (0–1023) — port sistem
- **Registered** (1024–49151) — aplikasi
- **Dynamic** (49152–65535) — sementara

---

### 6.3 Firewall

**Firewall** adalah sistem yang mengatur lalu lintas jaringan berdasarkan aturan tertentu.

**Fungsi firewall:**
- Membatasi akses tidak sah
- Memfilter paket data
- Melindungi layanan
- Mencatat aktivitas mencurigakan

**Jenis firewall:**

| Jenis | Cara Kerja | Kelebihan |
|-------|------------|-----------|
| **Packet Filtering** | Filter berdasarkan IP/port | Cepat, ringan |
| **Stateful Inspection** | Melacak state koneksi | Lebih aman |
| **Application Layer** | Filter berdasarkan aplikasi | Sangat aman |
| **Next-Gen (NGFW)** | Kombinasi + AI | Terlengkap |

---

### 6.4 Konfigurasi Firewall dengan UFW

**UFW (Uncomplicated Firewall)** adalah frontend iptables yang mudah digunakan.

**A. Install UFW:**
```bash
sudo apt install ufw -y
```

**B. Cek Status:**
```bash
sudo ufw status
sudo ufw status verbose
```

**C. Aturan Dasar:**
```bash
# Default policy
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Izinkan SSH (PENTING sebelum enable!)
sudo ufw allow ssh
# atau
sudo ufw allow 22/tcp

# Izinkan web
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable
```

**D. Aturan Lanjutan:**
```bash
# Izinkan dari IP tertentu
sudo ufw allow from 192.168.1.0/24 to any port 22

# Blokir IP
sudo ufw deny from 10.0.0.5

# Izinkan range port
sudo ufw allow 1000:2000/tcp

# Hapus aturan
sudo ufw delete allow 80/tcp

# Reset
sudo ufw reset
```

**E. Lihat Aturan:**
```bash
sudo ufw status numbered
```

---

### 6.5 Access Control List (ACL)

**ACL** adalah daftar aturan yang menentukan siapa yang boleh mengakses apa.

**A. ACL di Apache:**
```apache
<Directory /var/www/sekolah>
  Require ip 192.168.1.0/24
  Require not ip 192.168.1.100
</Directory>
```

**B. ACL di Samba:**
```conf
[data-tkj]
  path = /home/share/tkj
  valid users = budi, siti
  invalid users = guest
  read list = siti
  write list = budi
```

**C. ACL di iptables:**
```bash
# Izinkan SSH hanya dari LAN
sudo iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j DROP

# Blokir IP tertentu
sudo iptables -A INPUT -s 10.0.0.5 -j DROP

# Rate limiting
sudo iptables -A INPUT -p tcp --dport 22 -m limit --limit 3/min -j ACCEPT
```

---

### 6.6 Pengamanan Layanan Server

**A. SSH Hardening:**
```bash
sudo nano /etc/ssh/sshd_config
```

```conf
Port 2222                    # ganti port default
PermitRootLogin no           # larang login root
PasswordAuthentication no    # gunakan SSH key
MaxAuthTries 3               # batasi percobaan
AllowUsers admin budi        # batasi user
```

```bash
sudo systemctl restart ssh
```

**B. Web Server Hardening:**
```apache
# Sembunyikan versi
ServerTokens Prod
ServerSignature Off

# Nonaktifkan directory listing
Options -Indexes

# Batasi method
<LimitExcept GET POST>
  Require all denied
</LimitExcept>
```

**C. Password Policy:**
```bash
sudo apt install libpam-pwquality
sudo nano /etc/pam.d/common-password
```

```conf
password requisite pam_pwquality.so retry=3 minlen=12 dcredit=-1 ucredit=-1
```

**D. Update Rutin:**
```bash
sudo apt update
sudo apt upgrade -y
sudo apt autoremove
```

**E. Backup Konfigurasi:**
```bash
# Backup folder konfigurasi
sudo tar -czvf backup-config.tar.gz /etc/apache2 /etc/bind /etc/dhcp /etc/samba

# Backup database (jika ada)
mysqldump -u root -p database > backup.sql
```

**F. Monitoring Log:**
```bash
# Cek login gagal
sudo grep "Failed password" /var/log/auth.log

# Cek akses web
sudo tail -f /var/log/apache2/access.log
```

---

### ✅ Indikator Ketercapaian TP 6

- [ ] Menjelaskan ancaman keamanan jaringan
- [ ] Menjelaskan fungsi port dan service
- [ ] Mengonfigurasi firewall (UFW/iptables)
- [ ] Menerapkan ACL berdasarkan IP/user
- [ ] Mengamankan layanan server (SSH, web)
- [ ] Menerapkan password policy
- [ ] Melakukan backup konfigurasi
- [ ] Memonitor log keamanan

---

### 📝 Latihan Soal TP 6

1. Jelaskan CIA Triad dalam keamanan jaringan!
2. Sebutkan 5 ancaman keamanan jaringan beserta dampaknya!
3. Apa perbedaan packet filtering dan stateful inspection?
4. Tuliskan perintah UFW untuk mengizinkan SSH dari LAN saja!
5. Bagaimana cara mengamankan SSH dari brute force?
6. Apa fungsi ACL dalam keamanan jaringan?
7. Mengapa backup konfigurasi penting?

---

## TP 7 — MONITORING DAN TROUBLESHOOTING JARINGAN

**Estimasi Belajar: ± 10 JP (3–4 pertemuan × 3 JP)**

---

### 7.1 Konsep Monitoring Jaringan

**Monitoring jaringan** adalah proses memantau kondisi jaringan secara berkala untuk mendeteksi gangguan sedini mungkin.

**Tujuan monitoring:**
- Deteksi dini gangguan
- Analisis performa
- Perencanaan kapasitas
- Audit keamanan
- Dokumentasi kondisi jaringan

**Yang dipantau:**

| Aspek | Tool | Target |
|-------|------|--------|
| Konektivitas | ping, traceroute | Semua device |
| Bandwidth | iftop, nload | Interface |
| Resource | htop, top | CPU, RAM, Disk |
| Log | journalctl, tail | Sistem |
| Port | netstat, ss | Service |
| Packet loss | ping, mtr | Koneksi |

---

### 7.2 Tools Monitoring Dasar

**A. Ping:**
```bash
ping 8.8.8.8
ping -c 10 8.8.8.8        # 10 kali
ping -i 0.5 8.8.8.8       # interval 0.5s
ping -s 1000 8.8.8.8      # packet size 1000
```

**B. Traceroute:**
```bash
traceroute google.com
traceroute -n google.com  # tanpa DNS lookup
mtr google.com            # continuous traceroute
```

**C. Ipconfig/Ifconfig:**
```bash
# Linux
ip a
ifconfig

# Windows
ipconfig /all
```

**D. Netstat/SS:**
```bash
netstat -tuln        # port listening
netstat -an          # semua koneksi
ss -tuln             # alternatif modern
ss -s                # summary
```

**E. Monitoring Bandwidth:**
```bash
sudo apt install iftop nload -y

sudo iftop -i ens33  # monitoring per koneksi
nload ens33          # monitoring total
```

**F. Monitoring Resource:**
```bash
htop                 # interaktif
top                  # default
free -h              # RAM
df -h                # Disk
iostat               # I/O
```

---

### 7.3 Log Sistem

**A. Lokasi Log:**

| Log | Isi |
|-----|-----|
| `/var/log/syslog` | Log sistem umum |
| `/var/log/auth.log` | Login, sudo |
| `/var/log/apache2/access.log` | Akses web |
| `/var/log/apache2/error.log` | Error web |
| `/var/log/samba/` | Log Samba |
| `/var/log/dhcpd.log` | Log DHCP |

**B. Baca Log:**
```bash
# Tail (lihat akhir)
sudo tail -f /var/log/syslog

# Grep (cari)
sudo grep "error" /var/log/syslog

# Journalctl (systemd)
sudo journalctl -xe
sudo journalctl -u apache2
sudo journalctl --since "1 hour ago"
```

**C. Rotasi Log:**
```bash
# Konfigurasi rotasi
cat /etc/logrotate.conf
ls /etc/logrotate.d/
```

---

### 7.4 Analisis Gangguan

**Tabel Gejala & Solusi:**

| Gejala | Kemungkinan Penyebab | Solusi |
|--------|----------------------|--------|
| Tidak bisa ping | Kabel/interface mati | Cek kabel, `ip a` |
| Ping lambat | Bandwidth penuh | Cek `iftop` |
| Packet loss | Kabel rusak/interferensi | Ganti kabel |
| Web tidak akses | Service mati | `systemctl status apache2` |
| DNS gagal | Server DNS down | Cek `bind9` |
| DHCP gagal | Service mati | `systemctl status isc-dhcp-server` |
| SSH ditolak | Firewall/port | Cek `ufw status` |
| Disk penuh | Log besar | `df -h`, hapus log |
| RAM penuh | Proses bocor | `htop`, restart service |

---

### 7.5 Troubleshooting Sistematis

**Metode OSI Layer (bawah ke atas):**

```
┌─────────────────────────────────────┐
│ 7. Application  │ Service, config   │
├─────────────────────────────────────┤
│ 6. Presentation │ Enkripsi, format  │
├─────────────────────────────────────┤
│ 5. Session      │ Sesi komunikasi   │
├─────────────────────────────────────┤
│ 4. Transport    │ Port, firewall    │
├─────────────────────────────────────┤
│ 3. Network      │ IP, routing, ping │
├─────────────────────────────────────┤
│ 2. Data Link    │ MAC, switch       │
├─────────────────────────────────────┤
│ 1. Physical     │ Kabel, lampu      │
└─────────────────────────────────────┘
```

**Langkah troubleshooting:**
1. **Identifikasi masalah** — apa gejalanya?
2. **Kumpulkan informasi** — log, test
3. **Analisis** — tentukan penyebab
4. **Perbaikan** — lakukan tindakan
5. **Verifikasi** — pastikan berhasil
6. **Dokumentasi** — catat hasil

**Contoh troubleshooting:**

**Kasus:** Client tidak dapat IP dari DHCP

```
1. Cek fisik: kabel terpasang? lampu nyala?
2. Cek interface: ip a (interface up?)
3. Cek service: systemctl status isc-dhcp-server
4. Cek config: cat /etc/dhcp/dhcpd.conf
5. Cek log: tail -f /var/log/syslog | grep dhcp
6. Cek firewall: ufw status
7. Test ulang: dhclient -r && dhclient
```

---

### 7.6 Dokumentasi Troubleshooting

**Format laporan:**
```
========================================
LAPORAN TROUBLESHOOTING JARINGAN
========================================
Tanggal    : 2024-01-15
Waktu      : 10:30 WIB
Pelapor    : Budi
Lokasi     : Lab TKJ 1

MASALAH:
Client tidak dapat IP address dari DHCP Server

GEJALA:
- Client menampilkan "Media disconnected"
- IP address 169.254.x.x (APIPA)

ANALISIS:
- Service isc-dhcp-server dalam keadaan mati
- Interface ens33 tidak dikonfigurasi di /etc/default/isc-dhcp-server

TINDAKAN:
1. Edit /etc/default/isc-dhcp-server → INTERFACESv4="ens33"
2. systemctl restart isc-dhcp-server
3. systemctl enable isc-dhcp-server

HASIL:
- Client berhasil mendapat IP 192.168.1.101
- Koneksi internet normal
- Status: SELESAI ✅

TINDAK LANJUT:
- Monitoring service DHCP setiap minggu
- Backup konfigurasi
========================================
```

---

### ✅ Indikator Ketercapaian TP 7

- [ ] Menjelaskan konsep monitoring jaringan
- [ ] Menggunakan tools monitoring (ping, traceroute, netstat)
- [ ] Menganalisis bandwidth, packet loss, latency
- [ ] Membaca dan menganalisis log sistem
- [ ] Menemukan penyebab gangguan
- [ ] Melakukan troubleshooting sistematis
- [ ] Membuat dokumentasi troubleshooting

---

### 📝 Latihan Soal TP 7

1. Jelaskan tujuan monitoring jaringan!
2. Sebutkan 5 tools monitoring beserta fungsinya!
3. Apa perbedaan netstat dan ss?
4. Bagaimana cara menganalisis packet loss?
5. Jelaskan metode troubleshooting OSI Layer!
6. Apa yang dimaksud dengan dokumentasi troubleshooting?
7. Sebutkan 5 gejala umum gangguan jaringan beserta solusinya!

---

## TP 8 — PROYEK JARINGAN TERINTEGRASI

**Estimasi Belajar: ± 18 JP (6 pertemuan × 3 JP)**

---

### 8.1 Deskripsi Proyek

Peserta didik membangun **jaringan komputer lengkap** yang mengintegrasikan seluruh kompetensi TP 1–TP 7.

**Tujuan proyek:**
- Mengintegrasikan semua kompetensi
- Menerapkan prosedur kerja industri
- Menghasilkan jaringan yang berfungsi
- Melatih dokumentasi dan presentasi

**Output proyek:**
- Jaringan yang berfungsi
- Dokumentasi teknis
- Presentasi hasil

---

### 8.2 Tahapan Proyek

**TAHAP 1: Analisis Kebutuhan**

| Aspek | Pertanyaan |
|-------|------------|
| User | Berapa user? Siapa saja? |
| Layanan | Layanan apa saja yang dibutuhkan? |
| Budget | Berapa anggaran tersedia? |
| Lokasi | Di mana jaringan akan dibangun? |
| Skalabilitas | Apakah akan dikembangkan? |
| Keamanan | Level keamanan yang dibutuhkan? |

**Contoh kebutuhan:**
- 20 user (guru + siswa)
- Layanan: DHCP, DNS, Web, File, Internet
- Budget: Rp 10.000.000
- Lokasi: Lab TKJ

---

**TAHAP 2: Perancangan Topologi**

```
                    ┌─────────────┐
                    │  INTERNET   │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   MODEM     │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   ROUTER    │
                    │ 192.168.1.1 │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   SWITCH    │
                    └──┬───┬───┬──┘
                       │   │   │
          ┌────────────┘   │   └────────────┐
          │                │                │
    ┌─────┴─────┐    ┌─────┴─────┐    ┌─────┴─────┐
    │  SERVER   │    │  CLIENT   │    │ WIRELESS  │
    │192.168.1.10│   │192.168.1.101│  │    AP     │
    └───────────┘    └───────────┘    └───────────┘
```

**Topologi Star** — semua device terhubung ke switch pusat.

---

**TAHAP 3: Perencanaan IP Address**

| Perangkat | IP Address | Keterangan |
|-----------|------------|------------|
| Router | 192.168.1.1 | Gateway |
| Server | 192.168.1.10 | Static |
| DHCP Range | 192.168.1.100–200 | Dinamis |
| Client | 192.168.1.101+ | Dari DHCP |
| Printer | 192.168.1.50 | Reserved |
| AP | 192.168.1.2 | Static |

**Subnetting:**
- Network: 192.168.1.0/24
- Netmask: 255.255.255.0
- Broadcast: 192.168.1.255
- Total host: 254

---

**TAHAP 4: Instalasi Perangkat**

| Perangkat | Jumlah | Fungsi |
|-----------|--------|--------|
| Router | 1 | Gateway, NAT |
| Switch | 1 | Menghubungkan device |
| Access Point | 1 | WiFi |
| Server | 1 | Layanan |
| Kabel UTP | secukupnya | Koneksi |
| Konektor RJ45 | secukupnya | Koneksi |

**Langkah:**
1. Pasang router dan switch
2. Koneksi kabel UTP (straight)
3. Pasang AP
4. Nyalakan semua perangkat

---

**TAHAP 5: Instalasi Server**

```bash
# Install Ubuntu Server
# Konfigurasi:
# - Hostname: server-tkj
# - IP: 192.168.1.10
# - Gateway: 192.168.1.1
# - DNS: 8.8.8.8
# - User: admin
# - Install OpenSSH
```

---

**TAHAP 6: Konfigurasi Layanan**

**A. DHCP Server:**
```bash
sudo apt install isc-dhcp-server -y
# Konfigurasi /etc/dhcp/dhcpd.conf
# Range: 192.168.1.100-200
```

**B. DNS Server:**
```bash
sudo apt install bind9 -y
# Konfigurasi zona sekolah.local
```

**C. Web Server:**
```bash
sudo apt install apache2 -y
# Buat website sekolah
```

**D. File Server:**
```bash
sudo apt install samba -y
# Buat share data-tkj
```

---

**TAHAP 7: Routing & NAT**

```bash
# Aktifkan IP forwarding
sudo sysctl -w net.ipv4.ip_forward=1

# Konfigurasi NAT
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT

# Simpan
sudo netfilter-persistent save
```

---

**TAHAP 8: Wireless**

| Setting | Nilai |
|---------|-------|
| SSID | TKJ-WiFi |
| Password | TKJ2024! |
| Security | WPA2-PSK |
| Channel | 6 |
| IP AP | 192.168.1.2 |

---

**TAHAP 9: Firewall**

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 53
sudo ufw allow 67:68/udp
sudo ufw allow 445/tcp
sudo ufw enable
```

---

**TAHAP 10: Monitoring**

```bash
# Install tools
sudo apt install htop iftop nload -y

# Monitoring rutin
htop
sudo iftop -i ens33
nload ens33
```

---

**TAHAP 11: Troubleshooting**

| Masalah | Solusi |
|---------|--------|
| Client tidak dapat IP | Cek DHCP service |
| Web tidak akses | Cek Apache, firewall |
| Internet lambat | Cek bandwidth |
| DNS gagal | Cek Bind9 |
| File share gagal | Cek Samba, permission |

---

**TAHAP 12: Pengujian**

| No | Uji | Target | Hasil |
|----|-----|--------|-------|
| 1 | DHCP | Client dapat IP otomatis | ✅ |
| 2 | DNS | `nslookup sekolah.local` | ✅ |
| 3 | Web | Browser akses website | ✅ |
| 4 | File | Akses folder sharing | ✅ |
| 5 | Routing | Ping antarjaringan | ✅ |
| 6 | Internet | Ping 8.8.8.8 | ✅ |
| 7 | Wireless | Connect ke WiFi | ✅ |
| 8 | Firewall | Port terbatas | ✅ |
| 9 | SSH | Remote server | ✅ |
| 10 | Monitoring | Tools berjalan | ✅ |

---

**TAHAP 13: Dokumentasi**

**Struktur dokumentasi:**
```
DOKUMENTASI PROYEK JARINGAN
├── 1. Pendahuluan
│   ├── Latar belakang
│   ├── Tujuan
│   └── Manfaat
├── 2. Analisis Kebutuhan
│   ├── User
│   ├── Layanan
│   └── Budget
├── 3. Perancangan
│   ├── Topologi
│   ├── IP Addressing
│   └── Skema
├── 4. Implementasi
│   ├── Instalasi perangkat
│   ├── Instalasi server
│   ├── Konfigurasi layanan
│   └── Konfigurasi keamanan
├── 5. Pengujian
│   ├── Tabel uji
│   └── Hasil
├── 6. Troubleshooting
│   ├── Masalah
│   ├── Solusi
│   └── Dokumentasi
├── 7. Kesimpulan
└── 8. Lampiran
    ├── Foto
    ├── Konfigurasi
    └── Log
```

---

**TAHAP 14: Presentasi**

**Struktur presentasi (15 menit):**
1. Pembukaan (1 menit)
2. Latar belakang & tujuan (2 menit)
3. Topologi & perancangan (3 menit)
4. Demo jaringan (5 menit)
5. Hasil pengujian (2 menit)
6. Kesimpulan (1 menit)
7. Q&A (1 menit)

**Tips presentasi:**
- Siapkan slide yang rapi
- Demo langsung jika memungkinkan
- Siapkan backup (video/screenshot)
- Kuasai materi
- Berlatih sebelumnya

---

### ✅ Indikator Ketercapaian TP 8

- [ ] Menganalisis kebutuhan jaringan
- [ ] Merancang topologi & IP addressing
- [ ] Menginstal perangkat jaringan
- [ ] Menginstal & mengonfigurasi server
- [ ] Mengonfigurasi DHCP, DNS, Web, File Server
- [ ] Menerapkan routing, NAT, wireless
- [ ] Menerapkan firewall & keamanan
- [ ] Melakukan monitoring & troubleshooting
- [ ] Menyusun dokumentasi teknis
- [ ] Mempresentasikan hasil proyek

---

### 📝 Latihan Soal TP 8

1. Jelaskan tahapan dalam membangun proyek jaringan!
2. Apa saja yang perlu dianalisis dalam analisis kebutuhan?
3. Gambarkan topologi jaringan untuk 20 user!
4. Buat tabel perencanaan IP address untuk jaringan sekolah!
5. Apa saja yang perlu didokumentasikan dalam proyek jaringan?
6. Bagaimana cara mempresentasikan proyek jaringan dengan baik?
7. Sebutkan 10 pengujian yang perlu dilakukan pada proyek jaringan!

---

## 🔄 RANGKUMAN ALUR KOMPETENSI

```
┌─────────────────────────────────────────────────────────────┐
│  ALUR KOMPETENSI KELAS XII TKJ — SEMESTER 1                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 1  Konsep Jaringan Berbasis Server              │   │
│  │  • Client-Server • Peer-to-Peer • Layanan Jaringan  │   │
│  │  Estimasi: 6 JP (2 pertemuan)                       │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 2  Instalasi & Administrasi OS Server           │   │
│  │  • Linux Server • Netplan • User • Permission • SSH │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 3  DHCP dan DNS Server                          │   │
│  │  • DHCP DORA • Bind9 • Forward/Reverse Lookup       │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 4  Web Server dan File Server                   │   │
│  │  • Apache • Virtual Host • Samba • Sharing          │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 5  Routing dan NAT                              │   │
│  │  • Static Routing • iptables • Masquerade • NAT     │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 6  Keamanan Jaringan dan Firewall               │   │
│  │  • UFW • ACL • SSH Hardening • Backup               │   │
│  │  Estimasi: 10 JP (3–4 pertemuan)                    │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 7  Monitoring dan Troubleshooting               │   │
│  │  • Ping • Traceroute • Log • OSI Layer              │   │
│  │  Estimasi: 10 JP (3–4 pertemuan)                    │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 8  Proyek Jaringan Terintegrasi                 │   │
│  │  • Analisis • Desain • Implementasi • Dokumentasi   │   │
│  │  Estimasi: 18 JP (6 pertemuan)                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Urutan Kompetensi:**
```
Konsep Server 
    → Sistem Operasi Server 
    → DHCP & DNS 
    → Web/File Server 
    → Routing & NAT 
    → Keamanan Jaringan 
    → Monitoring & Troubleshooting 
    → Proyek Jaringan Terintegrasi
```

---

## 📊 ESTIMASI TOTAL BELAJAR SEMESTER 1

| No | Materi | JP | Pertemuan | Minggu |
|----|--------|-----|-----------|--------|
| 1 | Konsep Jaringan Berbasis Server | 6 | 2 | 1 |
| 2 | Instalasi & Administrasi OS Server | 12 | 4 | 2–3 |
| 3 | DHCP dan DNS Server | 12 | 4 | 4–5 |
| 4 | Web Server dan File Server | 12 | 4 | 6–7 |
| 5 | Routing dan NAT | 12 | 4 | 8–9 |
| 6 | Keamanan Jaringan dan Firewall | 10 | 3–4 | 10–11 |
| 7 | Monitoring dan Troubleshooting | 10 | 3–4 | 12–13 |
| 8 | Proyek Jaringan Terintegrasi | 18 | 6 | 14–16 |
| **Total** | | **± 92 JP** | **± 30** | **16 minggu** |

> **Catatan:** Estimasi dapat disesuaikan dengan kondisi sekolah, jam pelajaran, dan kemampuan peserta didik. 1 JP = 45 menit.

---

## 📚 GLOSARIUM

| Istilah | Penjelasan |
|---------|------------|
| **ACL** | Access Control List — daftar aturan akses |
| **Apache** | Software web server open-source |
| **APT** | Advanced Package Tool — manajer paket Debian/Ubuntu |
| **Bind9** | Software DNS server |
| **Client** | Komputer yang meminta layanan |
| **DHCP** | Dynamic Host Configuration Protocol |
| **DNS** | Domain Name System |
| **DORA** | Discover, Offer, Request, Acknowledge |
| **Firewall** | Sistem keamanan jaringan |
| **Gateway** | Pintu keluar jaringan |
| **Hostname** | Nama komputer dalam jaringan |
| **HTTP** | HyperText Transfer Protocol |
| **HTTPS** | HTTP Secure |
| **IP Address** | Alamat unik perangkat jaringan |
| **iptables** | Firewall Linux |
| **ISP** | Internet Service Provider |
| **JP** | Jam Pelajaran (45 menit) |
| **LAN** | Local Area Network |
| **Linux** | Sistem operasi open-source |
| **Masquerade** | NAT dinamis di Linux |
| **NAT** | Network Address Translation |
| **Netplan** | Tool konfigurasi jaringan Ubuntu |
| **Nginx** | Software web server ringan |
| **NIC** | Network Interface Card |
| **OSI** | Open Systems Interconnection |
| **Peer-to-Peer** | Model jaringan setara |
| **Permission** | Hak akses file/folder |
| **Port** | Pintu komunikasi jaringan |
| **Proxy** | Perantara akses internet |
| **Router** | Perangkat routing |
| **Samba** | Implementasi SMB di Linux |
| **Server** | Komputer penyedia layanan |
| **SFTP** | SSH File Transfer Protocol |
| **SMB** | Server Message Block |
| **SSH** | Secure Shell |
| **Static Routing** | Rute manual |
| **Subnet** | Pembagian jaringan |
| **Switch** | Perangkat penghubung LAN |
| **TCP/IP** | Protokol internet |
| **Troubleshooting** | Proses perbaikan masalah |
| **UFW** | Uncomplicated Firewall |
| **Virtual Host** | Hosting banyak domain |
| **VLAN** | Virtual LAN |
| **WAN** | Wide Area Network |
| **Web Server** | Server penyedia web |
| **WiFi** | Wireless Fidelity |
| **WPA2** | Wi-Fi Protected Access 2 |

---

## 📝 LATIHAN SOAL & EVALUASI

### A. Soal Pilihan Ganda

**1. Model jaringan di mana setiap komputer dapat menjadi client sekaligus server disebut...**
- a. Client-Server
- b. Peer-to-Peer
- c. Hybrid
- d. Cloud
- e. Distributed

**2. Port default untuk HTTP adalah...**
- a. 21
- b. 22
- c. 80
- d. 443
- e. 3306

**3. Perintah Linux untuk mengubah permission file adalah...**
- a. chown
- b. chmod
- c. chgrp
- d. chperm
- e. chacc

**4. Protokol DHCP menggunakan metode...**
- a. OSI
- b. TCP/IP
- c. DORA
- d. CIA
- e. NAT

**5. Software DNS server di Linux adalah...**
- a. Apache
- b. Bind9
- c. Samba
- d. Nginx
- e. ISC-DHCP

**6. Port default SSH adalah...**
- a. 21
- b. 22
- c. 23
- d. 25
- e. 80

**7. Perintah untuk melihat routing table di Linux adalah...**
- a. ip a
- b. ip route
- c. ifconfig
- d. netstat
- e. route print

**8. NAT yang mengubah IP asal disebut...**
- a. DNAT
- b. SNAT
- c. PAT
- d. NAT
- e. Masquerade

**9. Firewall default di Ubuntu adalah...**
- a. iptables
- b. UFW
- c. firewalld
- d. nftables
- e. CSF

**10. Metode troubleshooting dari bawah ke atas menggunakan...**
- a. CIA Triad
- b. OSI Layer
- c. DORA
- d. TCP/IP
- e. NAT

**Kunci Jawaban:**
1. b
2. c
3. b
4. c
5. b
6. b
7. b
8. b
9. b
10. b

---

### B. Soal Essay

1. Jelaskan perbedaan client-server dan peer-to-peer beserta kelebihan dan kekurangannya!
2. Jelaskan cara kerja DHCP dengan metode DORA!
3. Tuliskan langkah-langkah instalasi Ubuntu Server!
4. Jelaskan perbedaan forward lookup dan reverse lookup pada DNS!
5. Tuliskan konfigurasi virtual host untuk domain `tkj.local`!
6. Jelaskan cara kerja NAT dan sebutkan jenis-jenisnya!
7. Sebutkan 5 ancaman keamanan jaringan beserta cara mengatasinya!
8. Jelaskan metode troubleshooting OSI Layer!
9. Sebutkan tahapan dalam membangun proyek jaringan!
10. Apa saja yang perlu didokumentasikan dalam proyek jaringan?

---

### C. Soal Praktik

**Praktik 1: Instalasi Server**
- Install Ubuntu Server di VirtualBox
- Konfigurasi IP statis 192.168.1.10
- Buat user `admin` dan `budi`
- Konfigurasi SSH

**Praktik 2: DHCP & DNS**
- Install dan konfigurasi DHCP Server
- Install dan konfigurasi DNS Server (Bind9)
- Buat zona `sekolah.local`
- Uji dari client

**Praktik 3: Web & File Server**
- Install Apache
- Buat website sederhana
- Konfigurasi virtual host
- Install Samba
- Buat share folder

**Praktik 4: Routing & NAT**
- Konfigurasi IP forwarding
- Konfigurasi NAT dengan iptables
- Uji akses internet dari client

**Praktik 5: Keamanan**
- Konfigurasi UFW
- SSH hardening
- Backup konfigurasi

**Praktik 6: Monitoring**
- Install htop, iftop
- Monitoring resource
- Analisis log

**Praktik 7: Proyek Akhir**
- Bangun jaringan lengkap
- Dokumentasi
- Presentasi

---

## 📚 SUMBER BELAJAR TAMBAHAN

### Buku:
- Buku Jaringan Komputer Kelas XII TKJ (Kemendikbud)
- Buku Administrasi Sistem Jaringan Kelas XII
- Buku Teknologi Jaringan Berbasis Luas Kelas XII

### Website:
- [Ubuntu Server Docs](https://ubuntu.com/server/docs)
- [Apache Docs](https://httpd.apache.org/docs/)
- [Samba Docs](https://www.samba.org/samba/docs/)
- [Bind9 Docs](https://bind9.readthedocs.io/)
- [ISC DHCP Docs](https://isc.org/kea/)
- [Netplan Docs](https://netplan.io/)

### Video:
- Channel YouTube: NetworkChuck, TechWorld with Nana
- Channel YouTube: The Linux Foundation
- Channel YouTube: Indonesia Belajar

### Tools:
- VirtualBox / VMware (virtualisasi)
- GNS3 / Cisco Packet Tracer (simulasi jaringan)
- Wireshark (analisis paket)
- Putty / MobaXterm (SSH client)

---

## 🎯 TIPS BELAJAR

1. **Praktik langsung** — jangan hanya teori, install di VirtualBox
2. **Catat error** — setiap error adalah pelajaran
3. **Baca dokumentasi** — biasakan baca man page
4. **Diskusi** — tanya guru/teman jika stuck
5. **Ulangi** — praktik berulang agar hafal
6. **Buat catatan** — ringkasan perintah penting
7. **Ikuti komunitas** — forum, grup Telegram/Discord
8. **Konsisten** — belajar rutin lebih baik dari SKS
9. **Ajarkan** — mengajar orang lain memperkuat pemahaman
10. **Jangan takut error** — error adalah guru terbaik

---

> **Selamat belajar! Kuasai satu TP demi satu TP, dan jangan ragu untuk praktik langsung agar pemahaman semakin kuat.** 🚀

> **"Belajar jaringan itu seperti membangun rumah — butuh fondasi yang kuat, dinding yang kokoh, dan atap yang melindungi."**

---

**© 2024 — Modul Pembelajaran Jaringan Berbasis Server Kelas XII TKJ**
