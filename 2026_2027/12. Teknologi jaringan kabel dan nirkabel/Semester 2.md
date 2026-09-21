# 📘 MODUL LENGKAP: JARINGAN BERBASIS SERVER
## Kelas XII Teknik Komputer dan Jaringan (TKJ) — SEMESTER 2

> **Mata Pelajaran:** Jaringan Komputer & Teknologi Jaringan Berbasis Luas
> **Jenjang:** SMK Kelas XII — Teknik Komputer dan Jaringan (TKJ)
> **Semester:** 2 (Genap)
> **Total Estimasi Belajar:** ± 96 JP (Jam Pelajaran) / ± 32 Pertemuan
> **Format:** Markdown GitHub — Daftar Isi dapat diklik

---

## 📑 DAFTAR ISI

| No | Materi | Estimasi Belajar | Link |
|----|--------|------------------|------|
| 1 | Review & Pendalaman Materi Semester 1 | ± 6 JP (2 pertemuan) | [Klik](#tp-9--review--pendalaman-materi-semester-1) |
| 2 | Layanan Proxy Server & Manajemen Bandwidth | ± 12 JP (4 pertemuan) | [Klik](#tp-10--proxy-server-dan-manajemen-bandwidth) |
| 3 | Layanan Mail Server & FTP Server | ± 12 JP (4 pertemuan) | [Klik](#tp-11--mail-server-dan-ftp-server) |
| 4 | Layanan Database Server & Web Dinamis | ± 12 JP (4 pertemuan) | [Klik](#tp-12--database-server-dan-web-dinamis) |
| 5 | VPN Server & Remote Access | ± 12 JP (4 pertemuan) | [Klik](#tp-13--vpn-server-dan-remote-access) |
| 6 | Wireless Network & Hotspot Server | ± 12 JP (4 pertemuan) | [Klik](#tp-14--wireless-network-dan-hotspot-server) |
| 7 | Virtualisasi Server & Cloud Computing | ± 12 JP (4 pertemuan) | [Klik](#tp-15--virtualisasi-server-dan-cloud-computing) |
| 8 | Proyek Akhir Jaringan Terintegrasi | ± 18 JP (6 pertemuan) | [Klik](#tp-16--proyek-akhir-jaringan-terintegrasi) |
| 9 | Rangkuman Alur Kompetensi Semester 2 | — | [Klik](#-rangkuman-alur-kompetensi-semester-2) |
| 10 | Glosarium | — | [Klik](#-glosarium-semester-2) |
| 11 | Latihan Soal & Evaluasi Akhir | — | [Klik](#-latihan-soal--evaluasi-akhir) |

> **Keterangan:** 1 JP = 45 menit. Total estimasi ± 96 JP untuk satu semester penuh.

---

## 🎯 TUJUAN PEMBELAJARAN (TP) DAN ALUR TUJUAN PEMBELAJARAN (ATP) SEMESTER 2

### Ringkasan Tabel TP Semester 2

| TP | Tujuan Pembelajaran | Materi Pokok | Indikator Ketercapaian |
|----|---------------------|--------------|------------------------|
| **TP 9** | Memahami kembali dan memperdalam materi semester 1 sebagai fondasi. | Review client-server, OS server, DHCP, DNS, Web, File, Routing, NAT, Firewall | Menguasai dasar jaringan berbasis server |
| **TP 10** | Mengonfigurasi Proxy Server dan manajemen bandwidth. | Squid, caching, filtering, QoS, TC | Proxy Server berfungsi dan bandwidth terkelola |
| **TP 11** | Mengonfigurasi Mail Server dan FTP Server. | Postfix, Dovecot, Roundcube, vsftpd, SFTP | Mail & FTP Server berfungsi |
| **TP 12** | Mengonfigurasi Database Server dan Web Dinamis. | MySQL/MariaDB, PHP, phpMyAdmin, WordPress | Web dinamis berfungsi dengan database |
| **TP 13** | Mengonfigurasi VPN Server dan Remote Access. | OpenVPN, WireGuard, SSH Tunnel, RDP | VPN berfungsi untuk remote access |
| **TP 14** | Mengonfigurasi Wireless Network dan Hotspot Server. | AP, Hotspot, RADIUS, Captive Portal | Hotspot berfungsi dengan autentikasi |
| **TP 15** | Menerapkan Virtualisasi Server dan Cloud Computing. | Proxmox, Docker, VM, Cloud | Virtualisasi berfungsi |
| **TP 16** | Membangun proyek akhir jaringan terintegrasi. | Semua materi semester 1 & 2 | Proyek jaringan lengkap dan terdokumentasi |

---

## TP 9 — REVIEW & PENDALAMAN MATERI SEMESTER 1

**Estimasi Belajar: ± 6 JP (2 pertemuan × 3 JP)**

---

### 9.1 Tujuan Review

Sebelum masuk ke materi semester 2, penting untuk **mengingat kembali** materi semester 1 agar pemahaman lebih kuat dan tidak lupa.

**Materi semester 1 yang direview:**
- TP 1: Konsep jaringan berbasis server
- TP 2: Instalasi & administrasi OS server
- TP 3: DHCP dan DNS Server
- TP 4: Web Server dan File Server
- TP 5: Routing dan NAT
- TP 6: Keamanan Jaringan dan Firewall
- TP 7: Monitoring dan Troubleshooting
- TP 8: Proyek Jaringan Terintegrasi

---

### 9.2 Ringkasan Materi Semester 1

**A. Konsep Jaringan:**
```
Client-Server → Server menyediakan layanan, client meminta
Peer-to-Peer  → Semua komputer setara
```

**B. Perintah Dasar Linux:**
| Perintah | Fungsi |
|----------|--------|
| `ls` | Lihat isi direktori |
| `cd` | Pindah direktori |
| `pwd` | Lihat posisi |
| `cp` | Salin file |
| `mv` | Pindah/ganti nama |
| `rm` | Hapus |
| `mkdir` | Buat folder |
| `nano` | Edit file |
| `chmod` | Ubah permission |
| `chown` | Ubah owner |
| `systemctl` | Kelola service |

**C. Konfigurasi Jaringan:**
```bash
# Netplan (Ubuntu)
sudo nano /etc/netplan/00-installer-config.yaml
sudo netplan apply

# Cek IP
ip a
ip route
```

**D. Layanan Semester 1:**
| Layanan | Software | Port |
|---------|----------|------|
| DHCP | isc-dhcp-server | 67, 68 |
| DNS | bind9 | 53 |
| Web | apache2 | 80, 443 |
| File | samba | 445 |
| Firewall | ufw/iptables | - |
| SSH | openssh-server | 22 |

---

### 9.3 Praktik Ulang Singkat

**Praktik 1: Cek Koneksi Server**
```bash
ping 8.8.8.8
ip a
ip route
```

**Praktik 2: Cek Service**
```bash
sudo systemctl status apache2
sudo systemctl status bind9
sudo systemctl status isc-dhcp-server
sudo systemctl status smbd
```

**Praktik 3: Cek Port**
```bash
ss -tuln
sudo ufw status
```

---

### ✅ Indikator Ketercapaian TP 9

- [ ] Mengingat kembali konsep client-server
- [ ] Menguasai perintah dasar Linux
- [ ] Mengingat konfigurasi layanan semester 1
- [ ] Memastikan server semester 1 masih berfungsi
- [ ] Siap melanjutkan ke materi semester 2

---

## TP 10 — PROXY SERVER DAN MANAJEMEN BANDWIDTH

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 10.1 Konsep Proxy Server

**Proxy Server** adalah server perantara antara client dan internet. Client tidak langsung mengakses internet, tetapi melalui proxy terlebih dahulu.

**Ilustrasi:**
```
TANPA PROXY:
[Client] ──────────────────────────► [Internet]

DENGAN PROXY:
[Client] ──► [Proxy Server] ──► [Internet]
              │
              ├── Caching (simpan cache)
              ├── Filtering (blokir situs)
              ├── Logging (catat aktivitas)
              └── Anonymity (sembunyikan IP)
```

**Fungsi Proxy Server:**
| Fungsi | Penjelasan |
|--------|------------|
| **Caching** | Menyimpan cache website agar akses berikutnya lebih cepat |
| **Filtering** | Memblokir situs tertentu (negatif, judi, dll) |
| **Logging** | Mencatat aktivitas browsing user |
| **Anonymity** | Menyembunyikan IP client |
| **Bandwidth Control** | Mengatur penggunaan bandwidth |
| **Access Control** | Membatasi akses berdasarkan user/waktu |

**Jenis Proxy:**
| Jenis | Penjelasan |
|-------|------------|
| **Forward Proxy** | Client → Proxy → Internet (umum) |
| **Reverse Proxy** | Internet → Proxy → Server (load balancing) |
| **Transparent Proxy** | Client tidak sadar melalui proxy |
| **Anonymous Proxy** | Menyembunyikan IP client |

---

### 10.2 Instalasi Squid Proxy

**Squid** adalah software proxy server paling populer di Linux.

**A. Install Squid:**
```bash
sudo apt update
sudo apt install squid -y
```

**B. Cek Status:**
```bash
sudo systemctl status squid
```

**C. Backup Konfigurasi:**
```bash
sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.backup
```

**D. Konfigurasi Dasar:**
```bash
sudo nano /etc/squid/squid.conf
```

**Konfigurasi minimal:**
```conf
# Port proxy
http_port 3128

# ACL jaringan lokal
acl localnet src 192.168.1.0/24

# Izinkan akses dari localnet
http_access allow localnet
http_access deny all

# Cache
cache_dir ufs /var/spool/squid 100 16 256
cache_mem 64 MB
maximum_object_size 10 MB

# Log
access_log /var/log/squid/access.log
cache_log /var/log/squid/cache.log

# Hostname
visible_hostname proxy-tkj
```

**E. Inisialisasi Cache:**
```bash
sudo squid -z
```

**F. Restart Squid:**
```bash
sudo systemctl restart squid
sudo systemctl enable squid
```

---

### 10.3 Konfigurasi Filtering (Blokir Situs)

**A. Blokir Situs Tertentu:**
```bash
sudo nano /etc/squid/squid.conf
```

Tambahkan:
```conf
# ACL untuk situs terlarang
acl blocked_sites dstdomain .facebook.com .youtube.com .tiktok.com

# Blokir situs
http_access deny blocked_sites
```

**B. Blokir Berdasarkan Kata Kunci:**
Buat file kata kunci:
```bash
sudo nano /etc/squid/blocked_words.txt
```

Isi:
```
porn
judi
gambling
violence
```

Konfigurasi:
```conf
acl blocked_words url_regex -i "/etc/squid/blocked_words.txt"
http_access deny blocked_words
```

**C. Blokir Berdasarkan IP:**
```conf
acl blocked_ip src 192.168.1.100
http_access deny blocked_ip
```

**D. Blokir Berdasarkan Waktu:**
```conf
acl work_hours time M T W T F 08:00-17:00
acl social_media dstdomain .facebook.com .instagram.com
http_access deny social_media work_hours
```

**E. Whitelist (Hanya Izinkan Situs Tertentu):**
```conf
acl allowed_sites dstdomain .sekolah.local .wikipedia.org .google.com
http_access allow allowed_sites
http_access deny all
```

---

### 10.4 Konfigurasi Client

**A. Windows:**
1. Buka **Settings** → **Network & Internet** → **Proxy**
2. Manual proxy setup:
   - Address: `192.168.1.10`
   - Port: `3128`
3. Save

**B. Linux (Firefox):**
1. **Preferences** → **Network Settings**
2. Manual proxy:
   - HTTP Proxy: `192.168.1.10` Port `3128`
3. OK

**C. Linux (System-wide):**
```bash
export http_proxy="http://192.168.1.10:3128"
export https_proxy="http://192.168.1.10:3128"
```

**D. Test:**
```bash
curl -x http://192.168.1.10:3128 http://google.com
```

---

### 10.5 Manajemen Bandwidth dengan TC

**TC (Traffic Control)** adalah tool Linux untuk mengatur bandwidth.

**A. Konsep QoS:**
- **Bandwidth Limit** — batasi bandwidth
- **Priority** — prioritaskan traffic penting
- **Fairness** — bagi rata bandwidth

**B. Install TC:**
```bash
sudo apt install iproute2 -y
```

**C. Lihat Interface:**
```bash
ip a
```

**D. Batasi Bandwidth Interface:**
```bash
# Batasi download 1 Mbps
sudo tc qdisc add dev ens33 root handle 1: htb default 30
sudo tc class add dev ens33 parent 1: classid 1:1 htb rate 1mbit
sudo tc class add dev ens33 parent 1:1 classid 1:10 htb rate 512kbit ceil 1mbit
```

**E. Hapus Aturan:**
```bash
sudo tc qdisc del dev ens33 root
```

**F. Monitoring:**
```bash
sudo tc -s qdisc show dev ens33
```

---

### 10.6 Alternatif: Limit Bandwidth dengan Wondershaper

**A. Install:**
```bash
sudo apt install wondershaper -y
```

**B. Gunakan:**
```bash
# Limit download 1024 kbps, upload 512 kbps
sudo wondershaper ens33 1024 512

# Hapus limit
sudo wondershaper clear ens33
```

---

### 10.7 Analisis Log Squid

**A. Lihat Log:**
```bash
sudo tail -f /var/log/squid/access.log
```

**B. Format Log:**
```
timestamp  duration  client_ip  result/status  bytes  method  URL  user  hierarchy  content_type
```

**C. Analisis Sederhana:**
```bash
# Situs paling sering diakses
sudo awk '{print $7}' /var/log/squid/access.log | sort | uniq -c | sort -rn | head -20

# Client paling aktif
sudo awk '{print $3}' /var/log/squid/access.log | sort | uniq -c | sort -rn | head -10

# Total bandwidth
sudo awk '{sum += $5} END {print sum/1024/1024 " MB"}' /var/log/squid/access.log
```

---

### ✅ Indikator Ketercapaian TP 10

- [ ] Menjelaskan konsep dan fungsi Proxy Server
- [ ] Menginstal dan mengonfigurasi Squid
- [ ] Mengonfigurasi filtering (blokir situs)
- [ ] Mengonfigurasi client untuk menggunakan proxy
- [ ] Menerapkan manajemen bandwidth dengan TC
- [ ] Menganalisis log Squid
- [ ] Melakukan troubleshooting proxy

---

### 📝 Latihan Soal TP 10

1. Jelaskan fungsi Proxy Server dan manfaatnya!
2. Sebutkan 4 jenis proxy beserta penjelasannya!
3. Tuliskan konfigurasi Squid untuk memblokir Facebook dan YouTube!
4. Bagaimana cara membatasi bandwidth dengan TC?
5. Apa perbedaan forward proxy dan reverse proxy?
6. Bagaimana cara menganalisis log Squid?
7. Sebutkan 5 fungsi Proxy Server!

---

## TP 11 — MAIL SERVER DAN FTP SERVER

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 11.1 Konsep Mail Server

**Mail Server** adalah server yang menangani pengiriman dan penerimaan email.

**Komponen Mail Server:**
```
┌─────────────────────────────────────────────────────────┐
│                    MAIL SERVER                          │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   MUA       │  │   MTA       │  │   MDA       │    │
│  │ (Mail User  │  │ (Mail       │  │ (Mail       │    │
│  │  Agent)     │  │  Transfer   │  │  Delivery   │    │
│  │             │  │  Agent)     │  │  Agent)     │    │
│  │ Outlook,    │  │ Postfix,    │  │ Dovecot,    │    │
│  │ Thunderbird │  │ Sendmail    │  │ Courier     │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                         │
│  Protokol: SMTP (kirim), POP3/IMAP (terima)            │
└─────────────────────────────────────────────────────────┘
```

**Protokol Email:**
| Protokol | Fungsi | Port |
|----------|--------|------|
| **SMTP** | Kirim email | 25, 587, 465 |
| **POP3** | Terima email (download) | 110, 995 |
| **IMAP** | Terima email (sync) | 143, 993 |

**Perbedaan POP3 vs IMAP:**
| Aspek | POP3 | IMAP |
|-------|------|------|
| Penyimpanan | Di client | Di server |
| Sinkronisasi | Tidak | Ya |
| Multi-device | Sulit | Mudah |
| Kuota server | Kecil | Besar |

---

### 11.2 Instalasi Mail Server (Postfix + Dovecot)

**A. Install Postfix:**
```bash
sudo apt update
sudo apt install postfix -y
```

Saat instalasi, pilih:
```
General type of mail configuration: Internet Site
System mail name: sekolah.local
```

**B. Install Dovecot:**
```bash
sudo apt install dovecot-core dovecot-imapd dovecot-pop3d -y
```

**C. Konfigurasi Postfix:**
```bash
sudo nano /etc/postfix/main.cf
```

Edit:
```conf
myhostname = mail.sekolah.local
mydomain = sekolah.local
myorigin = $mydomain
inet_interfaces = all
inet_protocols = ipv4
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
mynetworks = 127.0.0.0/8, 192.168.1.0/24
home_mailbox = Maildir/
```

**D. Konfigurasi Dovecot:**
```bash
sudo nano /etc/dovecot/dovecot.conf
```

Edit:
```conf
protocols = imap pop3
listen = *
```

```bash
sudo nano /etc/dovecot/conf.d/10-mail.conf
```

Edit:
```conf
mail_location = maildir:~/Maildir
```

```bash
sudo nano /etc/dovecot/conf.d/10-auth.conf
```

Edit:
```conf
disable_plaintext_auth = no
auth_mechanisms = plain login
```

**E. Restart Service:**
```bash
sudo systemctl restart postfix
sudo systemctl restart dovecot
sudo systemctl enable postfix
sudo systemctl enable dovecot
```

---

### 11.3 Membuat User Email

**A. Buat User Linux:**
```bash
sudo adduser budi
sudo adduser siti
```

**B. Buat Maildir:**
```bash
sudo mkdir -p /home/budi/Maildir
sudo chown -R budi:budi /home/budi/Maildir
sudo chmod -R 700 /home/budi/Maildir
```

**C. Test Kirim Email:**
```bash
# Install mailutils
sudo apt install mailutils -y

# Kirim email
echo "Test email" | mail -s "Test" budi@sekolah.local

# Cek email
su - budi
mail
```

---

### 11.4 Webmail (Roundcube)

**Roundcube** adalah webmail berbasis web untuk mengakses email via browser.

**A. Install Dependencies:**
```bash
sudo apt install apache2 mariadb-server php php-mysql php-mbstring php-xml php-curl -y
```

**B. Install Roundcube:**
```bash
sudo apt install roundcube roundcube-mysql -y
```

**C. Konfigurasi Database:**
```bash
sudo mysql -u root -p
```

```sql
CREATE DATABASE roundcube;
CREATE USER 'roundcube'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON roundcube.* TO 'roundcube'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

**D. Import Schema:**
```bash
sudo mysql -u roundcube -p roundcube < /usr/share/roundcube/SQL/mysql.initial.sql
```

**E. Konfigurasi Roundcube:**
```bash
sudo nano /etc/roundcube/config.inc.php
```

Edit:
```php
$config['db_dsnw'] = 'mysql://roundcube:password123@localhost/roundcube';
$config['default_host'] = 'localhost';
$config['smtp_server'] = 'localhost';
$config['smtp_port'] = 25;
```

**F. Aktifkan di Apache:**
```bash
sudo ln -s /etc/roundcube/apache.conf /etc/apache2/conf-enabled/roundcube.conf
sudo systemctl restart apache2
```

**G. Akses:**
```
http://192.168.1.10/roundcube
```

---

### 11.5 Konsep FTP Server

**FTP (File Transfer Protocol)** adalah protokol untuk transfer file antara client dan server.

**Jenis FTP:**
| Jenis | Port | Keamanan |
|-------|------|----------|
| **FTP** | 21 | Tidak aman (plain text) |
| **FTPS** | 21/990 | Aman (SSL/TLS) |
| **SFTP** | 22 | Sangat aman (SSH) |

**Software FTP Server:**
- **vsftpd** — ringan, aman, populer
- **ProFTPD** — fleksibel
- **Pure-FTPd** — mudah

---

### 11.6 Instalasi FTP Server (vsftpd)

**A. Install vsftpd:**
```bash
sudo apt install vsftpd -y
```

**B. Backup Konfigurasi:**
```bash
sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.backup
```

**C. Konfigurasi:**
```bash
sudo nano /etc/vsftpd.conf
```

Edit:
```conf
# Izinkan user lokal login
local_enable=YES
write_enable=YES
local_umask=022

# Direktori
dirmessage_enable=YES
use_localtime=YES
xferlog_enable=YES
connect_from_port_20=YES

# Chroot (kurung user di home)
chroot_local_user=YES
allow_writeable_chroot=YES

# Passive mode
pasv_enable=YES
pasv_min_port=10000
pasv_max_port=10100

# Banner
ftpd_banner=Selamat datang di FTP Server TKJ
```

**D. Restart:**
```bash
sudo systemctl restart vsftpd
sudo systemctl enable vsftpd
```

**E. Firewall:**
```bash
sudo ufw allow 20/tcp
sudo ufw allow 21/tcp
sudo ufw allow 10000:10100/tcp
```

---

### 11.7 Test FTP

**A. Dari Linux:**
```bash
# Install client
sudo apt install ftp -y

# Connect
ftp 192.168.1.10
# Login: budi / password

# Perintah FTP
ls          # lihat file
put file    # upload
get file    # download
bye         # keluar
```

**B. Dari Windows:**
- Buka File Explorer
- Ketik: `ftp://192.168.1.10`
- Login

**C. Dari FileZilla:**
- Host: `192.168.1.10`
- Username: `budi`
- Password: `****`
- Port: `21`
- Quickconnect

**D. SFTP (lebih aman):**
```bash
sftp budi@192.168.1.10
```

---

### ✅ Indikator Ketercapaian TP 11

- [ ] Menjelaskan konsep Mail Server
- [ ] Menjelaskan protokol SMTP, POP3, IMAP
- [ ] Menginstal dan mengonfigurasi Postfix + Dovecot
- [ ] Membuat user email
- [ ] Menginstal dan mengonfigurasi Roundcube (webmail)
- [ ] Menjelaskan konsep FTP Server
- [ ] Menginstal dan mengonfigurasi vsftpd
- [ ] Menguji FTP dari client
- [ ] Menerapkan SFTP untuk transfer aman

---

### 📝 Latihan Soal TP 11

1. Jelaskan perbedaan POP3 dan IMAP!
2. Sebutkan komponen Mail Server beserta fungsinya!
3. Tuliskan konfigurasi Postfix untuk domain `sekolah.local`!
4. Bagaimana cara membuat user email di Linux?
5. Jelaskan perbedaan FTP, FTPS, dan SFTP!
6. Tuliskan konfigurasi vsftpd untuk chroot user!
7. Bagaimana cara menguji FTP dari FileZilla?

---

## TP 12 — DATABASE SERVER DAN WEB DINAMIS

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 12.1 Konsep Database Server

**Database Server** adalah server yang menyimpan dan mengelola database untuk aplikasi.

**Fungsi Database Server:**
- Menyimpan data aplikasi
- Mengelola query (SELECT, INSERT, UPDATE, DELETE)
- Menjaga integritas data
- Backup dan recovery
- User management

**Software Database:**
| Software | Kelebihan | Cocok Untuk |
|----------|-----------|-------------|
| **MySQL** | Populer, dokumentasi lengkap | Web umum |
| **MariaDB** | Open-source, kompatibel MySQL | Pengganti MySQL |
| **PostgreSQL** | Fitur lengkap, advanced | Enterprise |
| **MongoDB** | NoSQL, fleksibel | Big data |
| **SQLite** | Ringan, embedded | Aplikasi kecil |

**Istilah Database:**
| Istilah | Penjelasan |
|---------|------------|
| **Database** | Kumpulan tabel |
| **Tabel** | Kumpulan baris & kolom |
| **Record** | Satu baris data |
| **Field** | Satu kolom data |
| **Primary Key** | Kunci unik |
| **Foreign Key** | Relasi antar tabel |
| **Query** | Perintah SQL |
| **Index** | Mempercepat pencarian |

---

### 12.2 Instalasi MariaDB

**A. Install:**
```bash
sudo apt update
sudo apt install mariadb-server -y
```

**B. Amankan Instalasi:**
```bash
sudo mysql_secure_installation
```

Jawab:
```
Enter current password: (kosongkan, tekan Enter)
Switch to unix_socket authentication: N
Change root password: Y → masukkan password
Remove anonymous users: Y
Disallow root login remotely: Y
Remove test database: Y
Reload privilege tables: Y
```

**C. Cek Status:**
```bash
sudo systemctl status mariadb
sudo systemctl enable mariadb
```

**D. Login:**
```bash
sudo mysql -u root -p
```

---

### 12.3 Perintah Dasar SQL

**A. Database:**
```sql
-- Lihat database
SHOW DATABASES;

-- Buat database
CREATE DATABASE sekolah;

-- Gunakan database
USE sekolah;

-- Hapus database
DROP DATABASE sekolah;
```

**B. Tabel:**
```sql
-- Buat tabel
CREATE TABLE siswa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nis VARCHAR(10) UNIQUE,
  nama VARCHAR(50),
  kelas VARCHAR(10),
  alamat TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lihat tabel
SHOW TABLES;

-- Lihat struktur
DESCRIBE siswa;

-- Hapus tabel
DROP TABLE siswa;
```

**C. Data (CRUD):**
```sql
-- Insert
INSERT INTO siswa (nis, nama, kelas, alamat) 
VALUES ('12345', 'Budi Santoso', 'XII TKJ 1', 'Jl. Merdeka No. 1');

-- Select
SELECT * FROM siswa;
SELECT nama, kelas FROM siswa WHERE kelas = 'XII TKJ 1';

-- Update
UPDATE siswa SET alamat = 'Jl. Baru No. 2' WHERE nis = '12345';

-- Delete
DELETE FROM siswa WHERE nis = '12345';
```

**D. User Database:**
```sql
-- Buat user
CREATE USER 'webuser'@'localhost' IDENTIFIED BY 'password123';

-- Beri akses
GRANT ALL PRIVILEGES ON sekolah.* TO 'webuser'@'localhost';

-- Refresh
FLUSH PRIVILEGES;

-- Lihat user
SELECT user, host FROM mysql.user;

-- Hapus user
DROP USER 'webuser'@'localhost';
```

---

### 12.4 Instalasi PHP

**PHP** adalah bahasa pemrograman server-side untuk web dinamis.

**A. Install PHP:**
```bash
sudo apt install php php-mysql php-mbstring php-xml php-curl php-gd -y
```

**B. Cek Versi:**
```bash
php -v
```

**C. Test PHP:**
```bash
sudo nano /var/www/html/info.php
```

Isi:
```php
<?php
phpinfo();
?>
```

Akses: `http://192.168.1.10/info.php`

**D. Hapus Setelah Test:**
```bash
sudo rm /var/www/html/info.php
```

---

### 12.5 Koneksi PHP ke Database

**A. Buat File Koneksi:**
```bash
sudo nano /var/www/html/koneksi.php
```

Isi:
```php
<?php
$host = "localhost";
$user = "webuser";
$pass = "password123";
$db   = "sekolah";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil!";
?>
```

**B. Test:**
```
http://192.168.1.10/koneksi.php
```

---

### 12.6 Membuat Web Dinamis Sederhana

**A. Form Input Siswa:**
```bash
sudo nano /var/www/html/tambah.php
```

Isi:
```php
<!DOCTYPE html>
<html>
<head>
  <title>Tambah Siswa</title>
  <style>
    body { font-family: Arial; max-width: 500px; margin: 50px auto; }
    input, textarea { width: 100%; padding: 10px; margin: 5px 0; }
    button { background: #667eea; color: white; padding: 10px 20px; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Tambah Siswa</h2>
  <form method="POST" action="simpan.php">
    <input type="text" name="nis" placeholder="NIS" required>
    <input type="text" name="nama" placeholder="Nama" required>
    <input type="text" name="kelas" placeholder="Kelas" required>
    <textarea name="alamat" placeholder="Alamat"></textarea>
    <button type="submit">Simpan</button>
  </form>
</body>
</html>
```

**B. Proses Simpan:**
```bash
sudo nano /var/www/html/simpan.php
```

Isi:
```php
<?php
include 'koneksi.php';

$nis    = $_POST['nis'];
$nama   = $_POST['nama'];
$kelas  = $_POST['kelas'];
$alamat = $_POST['alamat'];

$sql = "INSERT INTO siswa (nis, nama, kelas, alamat) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nis, $nama, $kelas, $alamat);

if ($stmt->execute()) {
    header("Location: index.php");
} else {
    echo "Error: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>
```

**C. Tampil Data:**
```bash
sudo nano /var/www/html/index.php
```

Isi:
```php
<!DOCTYPE html>
<html>
<head>
  <title>Data Siswa</title>
  <style>
    body { font-family: Arial; max-width: 800px; margin: 50px auto; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    th { background: #667eea; color: white; }
    a { color: #667eea; text-decoration: none; }
  </style>
</head>
<body>
  <h2>Data Siswa</h2>
  <a href="tambah.php">+ Tambah Siswa</a>
  <br><br>
  <table>
    <tr>
      <th>NIS</th>
      <th>Nama</th>
      <th>Kelas</th>
      <th>Alamat</th>
    </tr>
    <?php
    include 'koneksi.php';
    $sql = "SELECT * FROM siswa ORDER BY nama";
    $result = $conn->query($sql);
    
    while ($row = $result->fetch_assoc()) {
      echo "<tr>";
      echo "<td>" . htmlspecialchars($row['nis']) . "</td>";
      echo "<td>" . htmlspecialchars($row['nama']) . "</td>";
      echo "<td>" . htmlspecialchars($row['kelas']) . "</td>";
      echo "<td>" . htmlspecialchars($row['alamat']) . "</td>";
      echo "</tr>";
    }
    $conn->close();
    ?>
  </table>
</body>
</html>
```

**D. Test:**
```
http://192.168.1.10/index.php
```

---

### 12.7 Instalasi phpMyAdmin

**phpMyAdmin** adalah tool web untuk mengelola database MySQL/MariaDB.

**A. Install:**
```bash
sudo apt install phpmyadmin -y
```

Saat instalasi:
- Web server: **apache2** (pilih dengan Spasi, lalu Tab, OK)
- Configure database: **Yes**
- Password: masukkan password

**B. Konfigurasi Apache:**
```bash
sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo systemctl restart apache2
```

**C. Akses:**
```
http://192.168.1.10/phpmyadmin
```

Login: `root` / password yang dibuat.

---

### 12.8 Instalasi WordPress

**WordPress** adalah CMS populer untuk membuat website.

**A. Buat Database:**
```sql
CREATE DATABASE wordpress;
CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON wordpress.* TO 'wpuser'@'localhost';
FLUSH PRIVILEGES;
```

**B. Download WordPress:**
```bash
cd /tmp
wget https://wordpress.org/latest.tar.gz
tar -xzvf latest.tar.gz
sudo mv wordpress /var/www/html/
```

**C. Set Permission:**
```bash
sudo chown -R www-data:www-data /var/www/html/wordpress
sudo chmod -R 755 /var/www/html/wordpress
```

**D. Konfigurasi:**
```bash
cd /var/www/html/wordpress
sudo cp wp-config-sample.php wp-config.php
sudo nano wp-config.php
```

Edit:
```php
define('DB_NAME', 'wordpress');
define('DB_USER', 'wpuser');
define('DB_PASSWORD', 'password123');
define('DB_HOST', 'localhost');
```

**E. Install via Browser:**
```
http://192.168.1.10/wordpress
```

Ikuti wizard instalasi.

---

### ✅ Indikator Ketercapaian TP 12

- [ ] Menjelaskan konsep Database Server
- [ ] Menginstal dan mengonfigurasi MariaDB
- [ ] Menguasai perintah dasar SQL
- [ ] Membuat user dan database
- [ ] Menginstal PHP dan menghubungkan ke database
- [ ] Membuat web dinamis sederhana (CRUD)
- [ ] Menginstal dan menggunakan phpMyAdmin
- [ ] Menginstal WordPress

---

### 📝 Latihan Soal TP 12

1. Jelaskan fungsi Database Server!
2. Sebutkan 5 software database beserta kelebihannya!
3. Tuliskan perintah SQL untuk membuat database dan tabel!
4. Jelaskan perbedaan primary key dan foreign key!
5. Bagaimana cara menghubungkan PHP ke database MySQL?
6. Apa fungsi phpMyAdmin?
7. Jelaskan langkah-langkah instalasi WordPress!

---

## TP 13 — VPN SERVER DAN REMOTE ACCESS

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 13.1 Konsep VPN

**VPN (Virtual Private Network)** adalah teknologi yang membuat koneksi aman melalui jaringan publik (internet).

**Ilustrasi:**
```
TANPA VPN:
[Client] ──── Data plain text ────► [Server]
              (bisa disadap)

DENGAN VPN:
[Client] ════ Data terenkripsi ════► [VPN Server] ────► [Server]
              (aman, tidak bisa disadap)
```

**Manfaat VPN:**
| Manfaat | Penjelasan |
|---------|------------|
| **Keamanan** | Data terenkripsi |
| **Privasi** | IP disembunyikan |
| **Remote Access** | Akses jaringan kantor dari luar |
| **Bypass Geo-block** | Akses konten terbatas |
| **Hemat Biaya** | Tidak perlu kabel khusus |

**Jenis VPN:**
| Jenis | Penjelasan |
|-------|------------|
| **Site-to-Site** | Menghubungkan 2 kantor |
| **Remote Access** | User ke kantor |
| **Client-to-Site** | Client ke jaringan |
| **SSL VPN** | Via browser |
| **IPSec VPN** | Via IPsec |

**Protokol VPN:**
| Protokol | Kelebihan |
|----------|-----------|
| **OpenVPN** | Open-source, aman, fleksibel |
| **WireGuard** | Cepat, modern, ringan |
| **IPSec** | Standar industri |
| **PPTP** | Lama, tidak aman |
| **L2TP/IPSec** | Kombinasi |

---

### 13.2 Instalasi OpenVPN

**A. Install OpenVPN:**
```bash
sudo apt update
sudo apt install openvpn easy-rsa -y
```

**B. Buat Direktori CA:**
```bash
make-cadir ~/openvpn-ca
cd ~/openvpn-ca
```

**C. Konfigurasi Vars:**
```bash
nano vars
```

Edit:
```conf
set_var EASYRSA_REQ_COUNTRY    "ID"
set_var EASYRSA_REQ_PROVINCE   "Jawa Barat"
set_var EASYRSA_REQ_CITY       "Bandung"
set_var EASYRSA_REQ_ORG        "TKJ"
set_var EASYRSA_REQ_EMAIL      "admin@sekolah.local"
set_var EASYRSA_REQ_OU         "IT"
set_var EASYRSA_ALGO           "ec"
set_var EASYRSA_DIGEST         "sha512"
```

**D. Build CA:**
```bash
./easyrsa init-pki
./easyrsa build-ca
# Masukkan password CA
```

**E. Generate Server Certificate:**
```bash
./easyrsa gen-req server nopass
./easyrsa sign-req server server
```

**F. Generate Diffie-Hellman:**
```bash
./easyrsa gen-dh
```

**G. Generate Client Certificate:**
```bash
./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1
```

**H. Copy File ke OpenVPN:**
```bash
sudo cp pki/ca.crt /etc/openvpn/
sudo cp pki/issued/server.crt /etc/openvpn/
sudo cp pki/private/server.key /etc/openvpn/
sudo cp pki/dh.pem /etc/openvpn/
```

---

### 13.3 Konfigurasi OpenVPN Server

**A. Buat File Konfigurasi:**
```bash
sudo nano /etc/openvpn/server.conf
```

Isi:
```conf
port 1194
proto udp
dev tun

ca ca.crt
cert server.crt
key server.key
dh dh.pem

server 10.8.0.0 255.255.255.0

ifconfig-pool-persist ipp.txt

push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
push "dhcp-option DNS 1.1.1.1"

keepalive 10 120
cipher AES-256-CBC
user nobody
group nogroup
persist-key
persist-tun

status openvpn-status.log
verb 3
```

**B. Enable IP Forwarding:**
```bash
sudo nano /etc/sysctl.conf
# net.ipv4.ip_forward=1
sudo sysctl -p
```

**C. Konfigurasi NAT:**
```bash
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
sudo netfilter-persistent save
```

**D. Start OpenVPN:**
```bash
sudo systemctl start openvpn@server
sudo systemctl enable openvpn@server
sudo systemctl status openvpn@server
```

---

### 13.4 Konfigurasi Client OpenVPN

**A. Buat File Client:**
```bash
nano ~/client1.ovpn
```

Isi:
```conf
client
dev tun
proto udp
remote 192.168.1.10 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client1.crt
key client1.key
cipher AES-256-CBC
verb 3
```

**B. Copy Sertifikat ke Client:**
File yang dibutuhkan:
- `ca.crt`
- `client1.crt`
- `client1.key`
- `client1.ovpn`

**C. Connect dari Client:**

**Windows:**
- Install OpenVPN GUI
- Copy file ke `C:\Program Files\OpenVPN\config\`
- Klik kanan icon OpenVPN → Connect

**Linux:**
```bash
sudo openvpn --config client1.ovpn
```

**D. Test:**
```bash
# Cek IP VPN
ip a

# Ping server VPN
ping 10.8.0.1

# Cek IP public (harus IP server)
curl ifconfig.me
```

---

### 13.5 Alternatif: WireGuard

**WireGuard** adalah VPN modern yang lebih cepat dan ringan.

**A. Install:**
```bash
sudo apt install wireguard -y
```

**B. Generate Keys:**
```bash
wg genkey | tee privatekey | wg pubkey > publickey
```

**C. Konfigurasi Server:**
```bash
sudo nano /etc/wireguard/wg0.conf
```

Isi:
```conf
[Interface]
Address = 10.0.0.1/24
ListenPort = 51820
PrivateKey = <server_private_key>

[Peer]
PublicKey = <client_public_key>
AllowedIPs = 10.0.0.2/32
```

**D. Start:**
```bash
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
```

---

### 13.6 Remote Access dengan SSH Tunnel

**SSH Tunnel** adalah cara sederhana untuk remote access.

**A. Local Port Forwarding:**
```bash
# Akses web server internal via SSH
ssh -L 8080:192.168.1.10:80 user@server-public
# Buka browser: http://localhost:8080
```

**B. Remote Port Forwarding:**
```bash
# Expose server lokal ke internet
ssh -R 8080:localhost:80 user@server-public
```

**C. Dynamic Port Forwarding (SOCKS Proxy):**
```bash
ssh -D 1080 user@server-public
# Set browser SOCKS proxy: localhost:1080
```

---

### 13.7 Remote Desktop (RDP/VNC)

**A. RDP (Windows):**
```bash
# Install xrdp di Linux
sudo apt install xrdp -y
sudo systemctl enable xrdp
sudo systemctl start xrdp

# Dari Windows
mstsc
# Masukkan IP server
```

**B. VNC:**
```bash
sudo apt install tightvncserver -y
vncserver
# Dari client, gunakan VNC Viewer
```

---

### ✅ Indikator Ketercapaian TP 13

- [ ] Menjelaskan konsep dan manfaat VPN
- [ ] Menjelaskan jenis-jenis VPN
- [ ] Menginstal dan mengonfigurasi OpenVPN
- [ ] Membuat sertifikat CA, server, dan client
- [ ] Mengonfigurasi client VPN
- [ ] Menguji koneksi VPN
- [ ] Mengenal WireGuard
- [ ] Menerapkan SSH Tunnel untuk remote access
- [ ] Mengonfigurasi RDP/VNC

---

### 📝 Latihan Soal TP 13

1. Jelaskan konsep VPN dan manfaatnya!
2. Sebutkan 4 jenis VPN beserta penjelasannya!
3. Jelaskan perbedaan OpenVPN dan WireGuard!
4. Tuliskan langkah-langkah instalasi OpenVPN!
5. Bagaimana cara menguji koneksi VPN?
6. Apa fungsi SSH Tunnel?
7. Jelaskan perbedaan RDP dan VNC!

---

## TP 14 — WIRELESS NETWORK DAN HOTSPOT SERVER

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 14.1 Konsep Wireless Network

**Wireless Network** adalah jaringan tanpa kabel yang menggunakan gelombang radio.

**Standar WiFi:**
| Standar | Frekuensi | Kecepatan | Tahun |
|---------|-----------|-----------|-------|
| 802.11a | 5 GHz | 54 Mbps | 1999 |
| 802.11b | 2.4 GHz | 11 Mbps | 1999 |
| 802.11g | 2.4 GHz | 54 Mbps | 2003 |
| 802.11n | 2.4/5 GHz | 600 Mbps | 2009 |
| 802.11ac | 5 GHz | 1.3 Gbps | 2013 |
| 802.11ax (WiFi 6) | 2.4/5/6 GHz | 10 Gbps | 2019 |
| 802.11be (WiFi 7) | 2.4/5/6 GHz | 46 Gbps | 2024 |

**Frekuensi:**
| Frekuensi | Kelebihan | Kekurangan |
|-----------|-----------|------------|
| **2.4 GHz** | Jangkauan jauh, tembus dinding | Lambat, banyak interferensi |
| **5 GHz** | Cepat, sedikit interferensi | Jangkauan pendek |
| **6 GHz** | Sangat cepat, minim interferensi | Jangkauan pendek, device terbatas |

**Istilah Wireless:**
| Istilah | Penjelasan |
|---------|------------|
| **SSID** | Nama jaringan WiFi |
| **BSSID** | MAC address AP |
| **Channel** | Kanal frekuensi |
| **WPA2/WPA3** | Keamanan WiFi |
| **AP** | Access Point |
| **Hotspot** | Area WiFi publik |
| **Captive Portal** | Halaman login WiFi |
| **RADIUS** | Server autentikasi |

---

### 14.2 Konfigurasi Access Point

**A. Setting Dasar AP:**
1. Connect ke AP via kabel
2. Buka browser: `http://192.168.1.2` (default)
3. Login: `admin` / `admin`
4. Setting:
   - SSID: `TKJ-WiFi`
   - Security: `WPA2-PSK`
   - Password: `TKJ2024!`
   - Channel: `6` (2.4 GHz) / `36` (5 GHz)
   - IP AP: `192.168.1.2`
   - DHCP: `Off` (karena DHCP dari server)

**B. Mode AP:**
| Mode | Fungsi |
|------|--------|
| **Access Point** | AP biasa |
| **Repeater** | Memperluas jangkauan |
| **Bridge** | Menghubungkan 2 jaringan |
| **Client** | AP sebagai client |
| **WISP** | Client ISP |

---

### 14.3 Konsep Hotspot Server

**Hotspot** adalah layanan WiFi yang memerlukan autentikasi sebelum bisa akses internet.

**Komponen Hotspot:**
```
[Client WiFi] ──► [AP] ──► [Hotspot Server] ──► [Internet]
                              │
                              ├── Captive Portal (login page)
                              ├── RADIUS (autentikasi)
                              └── Accounting (log usage)
```

**Metode Autentikasi:**
| Metode | Penjelasan |
|--------|------------|
| **Voucher** | User beli voucher |
| **Username/Password** | Login manual |
| **MAC-based** | Berdasarkan MAC |
| **SMS** | Verifikasi SMS |
| **Social Media** | Login via FB/Google |

---

### 14.4 Instalasi Hotspot Server (CoovaChilli)

**CoovaChilli** adalah software captive portal untuk hotspot.

**A. Install:**
```bash
sudo apt install coova-chilli -y
```

**B. Konfigurasi:**
```bash
sudo nano /etc/chilli/defaults
```

Edit:
```conf
HS_WANIF=eth0
HS_LANIF=eth1
HS_NETWORK=192.168.10.0
HS_NETMASK=255.255.255.0
HS_UAMLISTEN=192.168.10.1
HS_UAMPORT=3990
HS_UAMFORMAT=http://192.168.1.10/login
HS_UAMSECRET=secret123
```

**C. Start:**
```bash
sudo systemctl start chilli
sudo systemctl enable chilli
```

---

### 14.5 Alternatif: RADIUS Server (FreeRADIUS)

**FreeRADIUS** adalah server autentikasi untuk hotspot.

**A. Install:**
```bash
sudo apt install freeradius freeradius-mysql -y
```

**B. Konfigurasi Database:**
```bash
sudo mysql -u root -p
```

```sql
CREATE DATABASE radius;
GRANT ALL PRIVILEGES ON radius.* TO 'radius'@'localhost' IDENTIFIED BY 'password123';
FLUSH PRIVILEGES;
```

**C. Import Schema:**
```bash
sudo mysql -u root -p radius < /etc/freeradius/3.0/mods-config/sql/main/mysql/schema.sql
```

**D. Konfigurasi SQL Module:**
```bash
sudo nano /etc/freeradius/3.0/mods-available/sql
```

Edit:
```conf
sql {
  driver = "rlm_sql_mysql"
  dialect = "mysql"
  server = "localhost"
  port = 3306
  login = "radius"
  password = "password123"
  radius_db = "radius"
}
```

**E. Enable SQL:**
```bash
sudo ln -s /etc/freeradius/3.0/mods-available/sql /etc/freeradius/3.0/mods-enabled/
```

**F. Restart:**
```bash
sudo systemctl restart freeradius
```

**G. Tambah User:**
```sql
INSERT INTO radcheck (username, attribute, op, value) 
VALUES ('budi', 'Cleartext-Password', ':=', 'password123');
```

**H. Test:**
```bash
radtest budi password123 localhost 0 testing123
```

---

### 14.6 Captive Portal Sederhana

**A. Buat Halaman Login:**
```bash
sudo nano /var/www/html/hotspot/login.html
```

Isi:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Login WiFi TKJ</title>
  <style>
    body { font-family: Arial; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-align: center; padding: 50px; }
    .card { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; display: inline-block; }
    input { display: block; width: 250px; padding: 10px; margin: 10px auto; border: none; border-radius: 5px; }
    button { background: #ff6b6b; color: white; padding: 10px 30px; border: none; border-radius: 5px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h1>📶 WiFi TKJ</h1>
    <p>Silakan login untuk mengakses internet</p>
    <form method="POST" action="auth.php">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>
```

**B. Proses Autentikasi:**
```bash
sudo nano /var/www/html/hotspot/auth.php
```

Isi:
```php
<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Koneksi ke database RADIUS
$host = "localhost";
$user = "radius";
$pass = "password123";
$db   = "radius";

$conn = new mysqli($host, $user, $pass, $db);

$sql = "SELECT * FROM radcheck WHERE username = ? AND value = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Login berhasil! Anda terhubung ke internet.";
} else {
    echo "Login gagal! Username atau password salah.";
}
$conn->close();
?>
```

---

### 14.7 Keamanan Wireless

**A. Jenis Keamanan:**
| Keamanan | Kelebihan | Kekurangan |
|----------|-----------|------------|
| **WEP** | - | Tidak aman (crackable) |
| **WPA** | Lebih aman | Masih bisa di-crack |
| **WPA2** | Aman | Rentan KRACK |
| **WPA3** | Paling aman | Device lama tidak support |
| **802.1X** | Enterprise | Butuh RADIUS |

**B. Tips Keamanan WiFi:**
- Gunakan **WPA2/WPA3**
- Ganti **password default** AP
- **Sembunyikan SSID** (opsional)
- Aktifkan **MAC filtering**
- **Matikan WPS**
- Update **firmware** AP
- Gunakan **VLAN** untuk guest
- **Monitoring** log AP

---

### ✅ Indikator Ketercapaian TP 14

- [ ] Menjelaskan konsep Wireless Network
- [ ] Menjelaskan standar WiFi dan frekuensi
- [ ] Mengonfigurasi Access Point
- [ ] Menjelaskan konsep Hotspot Server
- [ ] Menginstal dan mengonfigurasi RADIUS Server
- [ ] Membuat Captive Portal sederhana
- [ ] Menerapkan keamanan Wireless
- [ ] Melakukan troubleshooting WiFi

---

### 📝 Latihan Soal TP 14

1. Jelaskan perbedaan frekuensi 2.4 GHz dan 5 GHz!
2. Sebutkan 5 standar WiFi beserta kecepatannya!
3. Bagaimana cara mengonfigurasi Access Point?
4. Jelaskan konsep Hotspot Server!
5. Apa fungsi RADIUS Server?
6. Bagaimana cara membuat Captive Portal?
7. Sebutkan 5 tips keamanan WiFi!

---

## TP 15 — VIRTUALISASI SERVER DAN CLOUD COMPUTING

**Estimasi Belajar: ± 12 JP (4 pertemuan × 3 JP)**

---

### 15.1 Konsep Virtualisasi

**Virtualisasi** adalah teknologi yang memungkinkan satu perangkat keras menjalankan beberapa sistem operasi secara bersamaan.

**Ilustrasi:**
```
TANPA VIRTUALISASI:
┌─────────────────────────────────────┐
│  Hardware                           │
│  ┌─────────────────────────────┐   │
│  │  Satu OS                    │   │
│  │  ┌─────────┐ ┌─────────┐   │   │
│  │  │ App 1   │ │ App 2   │   │   │
│  │  └─────────┘ └─────────┘   │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

DENGAN VIRTUALISASI:
┌─────────────────────────────────────┐
│  Hardware                           │
│  ┌─────────────────────────────┐   │
│  │  Hypervisor                 │   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐│   │
│  │  │ VM 1 │ │ VM 2 │ │ VM 3 ││   │
│  │  │ OS 1 │ │ OS 2 │ │ OS 3 ││   │
│  │  └──────┘ └──────┘ └──────┘│   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Manfaat Virtualisasi:**
| Manfaat | Penjelasan |
|---------|------------|
| **Hemat Biaya** | 1 hardware untuk banyak server |
| **Hemat Listrik** | Konsumsi daya lebih rendah |
| **Fleksibel** | Mudah buat/hapus VM |
| **Isolasi** | VM terpisah satu sama lain |
| **Backup Mudah** | Snapshot dan clone |
| **Testing** | Coba OS baru tanpa risiko |

**Jenis Virtualisasi:**
| Jenis | Penjelasan | Contoh |
|-------|------------|--------|
| **Full** | VM lengkap | VMware, VirtualBox |
| **Para** | Modifikasi OS | Xen |
| **Container** | Isolasi proses | Docker, LXC |
| **Hypervisor Type 1** | Bare-metal | Proxmox, ESXi |
| **Hypervisor Type 2** | Hosted | VirtualBox, VMware Workstation |

---

### 15.2 Instalasi Proxmox VE

**Proxmox VE** adalah hypervisor Type 1 open-source untuk virtualisasi server.

**A. Download ISO:**
- https://www.proxmox.com/downloads

**B. Boot dari USB:**
- Buat bootable USB dengan Rufus
- Boot dari USB

**C. Instalasi:**
1. Pilih **Install Proxmox VE**
2. Accept EULA
3. Pilih disk target
4. Set locale: `Asia/Jakarta`
5. Set password root
6. Set email
7. Network: `192.168.1.20/24`, gateway `192.168.1.1`
8. Install

**D. Akses Web UI:**
```
https://192.168.1.20:8006
```
Login: `root` / password

---

### 15.3 Membuat VM di Proxmox

**A. Upload ISO:**
1. Login Proxmox
2. Pilih storage `local`
3. **ISO Images** → **Upload**
4. Pilih ISO Ubuntu Server

**B. Buat VM:**
1. Klik **Create VM**
2. **General:** Name `server-tkj`, VM ID `100`
3. **OS:** Pilih ISO Ubuntu Server
4. **System:** Default
5. **Hard Disk:** 32 GB
6. **CPU:** 2 cores
7. **Memory:** 2048 MB
8. **Network:** Bridge `vmbr0`
9. **Confirm** → **Finish**

**C. Start VM:**
- Pilih VM → **Start**
- **Console** → install OS

---

### 15.4 Konsep Container (Docker)

**Docker** adalah platform container yang memungkinkan aplikasi berjalan terisolasi.

**Perbedaan VM vs Container:**
| Aspek | VM | Container |
|-------|-----|-----------|
| OS | Lengkap | Share kernel |
| Ukuran | GB | MB |
| Boot | Menit | Detik |
| Resource | Berat | Ringan |
| Isolasi | Kuat | Sedang |

**A. Install Docker:**
```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
```

**B. Test Docker:**
```bash
sudo docker run hello-world
```

**C. Perintah Docker Dasar:**
```bash
# Lihat images
sudo docker images

# Lihat container
sudo docker ps -a

# Jalankan container
sudo docker run -d -p 8080:80 nginx

# Stop container
sudo docker stop <container_id>

# Hapus container
sudo docker rm <container_id>

# Hapus image
sudo docker rmi <image_id>
```

**D. Docker Compose:**
```bash
sudo apt install docker-compose -y
```

Buat `docker-compose.yml`:
```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
  
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: password123
      MYSQL_DATABASE: sekolah
    ports:
      - "3306:3306"
```

Jalankan:
```bash
sudo docker-compose up -d
```

---

### 15.5 Konsep Cloud Computing

**Cloud Computing** adalah layanan komputasi yang disediakan melalui internet.

**Karakteristik Cloud:**
- **On-demand** — sesuai kebutuhan
- **Broad access** — akses dari mana saja
- **Resource pooling** — sumber daya bersama
- **Elasticity** — fleksibel
- **Measured service** — bayar sesuai pakai

**Model Layanan Cloud:**
| Model | Penjelasan | Contoh |
|-------|------------|--------|
| **IaaS** | Infrastructure as a Service | AWS EC2, Google Compute |
| **PaaS** | Platform as a Service | Heroku, Google App Engine |
| **SaaS** | Software as a Service | Gmail, Office 365 |
| **FaaS** | Function as a Service | AWS Lambda |

**Model Deployment:**
| Model | Penjelasan |
|-------|------------|
| **Public Cloud** | Untuk umum |
| **Private Cloud** | Untuk organisasi |
| **Hybrid Cloud** | Kombinasi |
| **Community Cloud** | Untuk komunitas |

**Penyedia Cloud Populer:**
- **AWS** (Amazon Web Services)
- **Google Cloud Platform**
- **Microsoft Azure**
- **Alibaba Cloud**
- **DigitalOcean**
- **Vultr**

---

### 15.6 Nextcloud (Private Cloud)

**Nextcloud** adalah software private cloud untuk menyimpan file sendiri.

**A. Install dengan Docker:**
```bash
sudo docker run -d \
  --name nextcloud \
  -p 8080:80 \
  -v nextcloud_data:/var/www/html \
  nextcloud
```

**B. Akses:**
```
http://192.168.1.10:8080
```

**C. Fitur Nextcloud:**
- File sharing
- Calendar
- Contacts
- Office (Collabora)
- Chat
- Video call

---

### 15.7 Backup dan Snapshot VM

**A. Snapshot di Proxmox:**
1. Pilih VM
2. **Snapshots** → **Take Snapshot**
3. Beri nama: `sebelum-update`
4. **Take Snapshot**

**B. Restore Snapshot:**
1. Pilih snapshot
2. **Rollback**

**C. Backup VM:**
1. Pilih VM
2. **Backup** → **Backup now**
3. Pilih storage
4. **Backup**

**D. Backup dengan rsync:**
```bash
rsync -avz /var/lib/vz/ /backup/vz/
```

---

### ✅ Indikator Ketercapaian TP 15

- [ ] Menjelaskan konsep virtualisasi
- [ ] Menjelaskan manfaat dan jenis virtualisasi
- [ ] Menginstal Proxmox VE
- [ ] Membuat dan mengelola VM di Proxmox
- [ ] Menjelaskan konsep container dan Docker
- [ ] Menjalankan container dengan Docker
- [ ] Menjelaskan konsep Cloud Computing
- [ ] Menjelaskan model layanan cloud (IaaS, PaaS, SaaS)
- [ ] Menginstal Nextcloud (private cloud)
- [ ] Melakukan backup dan snapshot VM

---

### 📝 Latihan Soal TP 15

1. Jelaskan konsep virtualisasi dan manfaatnya!
2. Sebutkan perbedaan VM dan Container!
3. Jelaskan perbedaan Hypervisor Type 1 dan Type 2!
4. Bagaimana cara membuat VM di Proxmox?
5. Jelaskan perbedaan IaaS, PaaS, dan SaaS!
6. Apa fungsi Docker Compose?
7. Sebutkan 5 penyedia cloud populer!

---

## TP 16 — PROYEK AKHIR JARINGAN TERINTEGRASI

**Estimasi Belajar: ± 18 JP (6 pertemuan × 3 JP)**

---

### 16.1 Deskripsi Proyek Akhir

Proyek akhir adalah **puncak pembelajaran** yang mengintegrasikan **seluruh materi semester 1 dan 2**.

**Tujuan:**
- Mengintegrasikan semua kompetensi
- Menerapkan prosedur kerja industri
- Menghasilkan jaringan lengkap
- Melatih dokumentasi dan presentasi
- Persiapan dunia kerja

**Output:**
- Jaringan yang berfungsi
- Dokumentasi lengkap
- Presentasi hasil
- Video demo (opsional)

---

### 16.2 Tahapan Proyek Akhir

**TAHAP 1: Analisis Kebutuhan**

| Aspek | Detail |
|-------|--------|
| **User** | 30 user (guru, siswa, tamu) |
| **Layanan** | DHCP, DNS, Web, File, Mail, FTP, Proxy, VPN, Hotspot, Database |
| **Keamanan** | Firewall, ACL, WPA2 |
| **Budget** | Rp 20.000.000 |
| **Lokasi** | Lab TKJ |
| **Skalabilitas** | Bisa dikembangkan |

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
                    ┌──────────────┘   │   └──────────────┐
                    │                  │                  │
              ┌─────┴─────┐      ┌─────┴─────┐      ┌─────┴─────┐
              │  SERVER   │      │  CLIENT   │      │ WIRELESS  │
              │192.168.1.10│     │192.168.1.101│    │    AP     │
              │           │      │           │      │192.168.1.2│
              │ • DHCP    │      │ • Browser │      │           │
              │ • DNS     │      │ • Email   │      │ • Hotspot │
              │ • Web     │      │ • FTP     │      │ • Captive │
              │ • File    │      │ • VPN     │      │   Portal  │
              │ • Mail    │      └───────────┘      └───────────┘
              │ • FTP     │
              │ • Proxy   │
              │ • VPN     │
              │ • Database│
              │ • RADIUS  │
              └───────────┘
```

---

**TAHAP 3: Perencanaan IP Address**

| Perangkat | IP | Keterangan |
|-----------|-----|------------|
| Router | 192.168.1.1 | Gateway |
| Server | 192.168.1.10 | Static |
| AP | 192.168.1.2 | Static |
| DHCP Range | 192.168.1.100–200 | Dinamis |
| Client | 192.168.1.101+ | Dari DHCP |
| VPN Pool | 10.8.0.0/24 | OpenVPN |
| Hotspot | 192.168.10.0/24 | Captive |

---

**TAHAP 4: Instalasi Perangkat**

| Perangkat | Jumlah | Fungsi |
|-----------|--------|--------|
| Router | 1 | Gateway, NAT |
| Switch | 2 | Distribusi |
| Access Point | 2 | WiFi |
| Server | 1 | Semua layanan |
| Kabel UTP | secukupnya | Koneksi |
| Konektor RJ45 | secukupnya | Koneksi |

---

**TAHAP 5: Instalasi Server**

```bash
# Install Ubuntu Server 22.04
# Konfigurasi:
# - Hostname: server-tkj
# - IP: 192.168.1.10/24
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
# Range: 192.168.1.100-200
# Gateway: 192.168.1.1
# DNS: 192.168.1.10
```

**B. DNS Server:**
```bash
sudo apt install bind9 -y
# Zona: sekolah.local
# www, mail, ftp, proxy
```

**C. Web Server:**
```bash
sudo apt install apache2 -y
# Website sekolah
# Virtual host
```

**D. File Server:**
```bash
sudo apt install samba -y
# Share: data-tkj, public
```

**E. Mail Server:**
```bash
sudo apt install postfix dovecot -y
# Email: budi@sekolah.local
```

**F. FTP Server:**
```bash
sudo apt install vsftpd -y
# User: budi, siti
```

**G. Proxy Server:**
```bash
sudo apt install squid -y
# Filter: blokir judi, porn
# Cache: 100 MB
```

**H. VPN Server:**
```bash
sudo apt install openvpn easy-rsa -y
# Pool: 10.8.0.0/24
```

**I. Database Server:**
```bash
sudo apt install mariadb-server -y
# Database: sekolah
# User: webuser
```

**J. Hotspot Server:**
```bash
sudo apt install freeradius -y
# Autentikasi: budi/password123
```

---

**TAHAP 7: Routing & NAT**

```bash
sudo sysctl -w net.ipv4.ip_forward=1
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT
sudo netfilter-persistent save
```

---

**TAHAP 8: Wireless & Hotspot**

| Setting | Nilai |
|---------|-------|
| SSID | TKJ-WiFi |
| Password | TKJ2024! |
| Security | WPA2-PSK |
| Channel | 6 |
| IP AP | 192.168.1.2 |
| Hotspot | 192.168.10.0/24 |
| Captive Portal | http://192.168.1.10/hotspot |

---

**TAHAP 9: Firewall & Keamanan**

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 53
sudo ufw allow 67:68/udp
sudo ufw allow 445/tcp
sudo ufw allow 25/tcp
sudo ufw allow 110/tcp
sudo ufw allow 143/tcp
sudo ufw allow 21/tcp
sudo ufw allow 3128/tcp
sudo ufw allow 1194/udp
sudo ufw allow 3306/tcp
sudo ufw enable
```

---

**TAHAP 10: Monitoring**

```bash
sudo apt install htop iftop nload -y
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
| Email gagal | Cek Postfix, Dovecot |
| FTP gagal | Cek vsftpd, permission |
| Proxy gagal | Cek Squid, konfigurasi |
| VPN gagal | Cek OpenVPN, sertifikat |
| Hotspot gagal | Cek RADIUS, AP |

---

**TAHAP 12: Pengujian**

| No | Uji | Target | Hasil |
|----|-----|--------|-------|
| 1 | DHCP | Client dapat IP otomatis | ✅ |
| 2 | DNS | `nslookup sekolah.local` | ✅ |
| 3 | Web | Browser akses website | ✅ |
| 4 | File | Akses folder sharing | ✅ |
| 5 | Mail | Kirim/terima email | ✅ |
| 6 | FTP | Upload/download file | ✅ |
| 7 | Proxy | Blokir situs, cache | ✅ |
| 8 | VPN | Remote access aman | ✅ |
| 9 | Database | Web dinamis berfungsi | ✅ |
| 10 | Hotspot | Login captive portal | ✅ |
| 11 | Routing | Ping antarjaringan | ✅ |
| 12 | Internet | Ping 8.8.8.8 | ✅ |
| 13 | Wireless | Connect ke WiFi | ✅ |
| 14 | Firewall | Port terbatas | ✅ |
| 15 | SSH | Remote server | ✅ |
| 16 | Monitoring | Tools berjalan | ✅ |

---

**TAHAP 13: Dokumentasi**

**Struktur dokumentasi lengkap:**
```
DOKUMENTASI PROYEK AKHIR JARINGAN
├── 1. Pendahuluan
│   ├── Latar belakang
│   ├── Tujuan
│   └── Manfaat
├── 2. Analisis Kebutuhan
│   ├── User
│   ├── Layanan
│   ├── Budget
│   └── Skalabilitas
├── 3. Perancangan
│   ├── Topologi
│   ├── IP Addressing
│   ├── Skema keamanan
│   └── Diagram alur
├── 4. Implementasi
│   ├── Instalasi perangkat
│   ├── Instalasi server
│   ├── Konfigurasi DHCP
│   ├── Konfigurasi DNS
│   ├── Konfigurasi Web
│   ├── Konfigurasi File
│   ├── Konfigurasi Mail
│   ├── Konfigurasi FTP
│   ├── Konfigurasi Proxy
│   ├── Konfigurasi VPN
│   ├── Konfigurasi Database
│   ├── Konfigurasi Hotspot
│   ├── Konfigurasi Firewall
│   └── Konfigurasi Monitoring
├── 5. Pengujian
│   ├── Tabel uji
│   ├── Screenshot
│   └── Hasil
├── 6. Troubleshooting
│   ├── Masalah
│   ├── Analisis
│   ├── Solusi
│   └── Dokumentasi
├── 7. Kesimpulan
├── 8. Saran
└── 9. Lampiran
    ├── Foto
    ├── Konfigurasi
    ├── Log
    └── Referensi
```

---

**TAHAP 14: Presentasi**

**Struktur presentasi (20 menit):**
1. Pembukaan (2 menit)
2. Latar belakang & tujuan (2 menit)
3. Topologi & perancangan (3 menit)
4. Demo jaringan (8 menit)
5. Hasil pengujian (3 menit)
6. Kesimpulan (1 menit)
7. Q&A (1 menit)

**Tips presentasi:**
- Siapkan slide rapi
- Demo langsung
- Backup video/screenshot
- Kuasai materi
- Berlatih sebelumnya
- Siapkan jawaban Q&A

---

### ✅ Indikator Ketercapaian TP 16

- [ ] Menganalisis kebutuhan jaringan
- [ ] Merancang topologi & IP addressing
- [ ] Menginstal perangkat jaringan
- [ ] Menginstal & mengonfigurasi semua layanan
- [ ] Menerapkan routing, NAT, wireless
- [ ] Menerapkan firewall & keamanan
- [ ] Mengonfigurasi VPN & remote access
- [ ] Mengonfigurasi database & web dinamis
- [ ] Mengonfigurasi hotspot & RADIUS
- [ ] Melakukan monitoring & troubleshooting
- [ ] Menyusun dokumentasi teknis
- [ ] Mempresentasikan hasil proyek

---

### 📝 Latihan Soal TP 16

1. Jelaskan tahapan dalam proyek akhir jaringan!
2. Apa saja yang perlu dianalisis dalam analisis kebutuhan?
3. Gambarkan topologi jaringan untuk 30 user!
4. Buat tabel perencanaan IP address lengkap!
5. Apa saja layanan yang harus dikonfigurasi?
6. Bagaimana cara menguji semua layanan?
7. Apa saja yang perlu didokumentasikan?
8. Bagaimana cara mempresentasikan proyek dengan baik?

---

## 🔄 RANGKUMAN ALUR KOMPETENSI SEMESTER 2

```
┌─────────────────────────────────────────────────────────────┐
│  ALUR KOMPETENSI KELAS XII TKJ — SEMESTER 2                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 9  Review & Pendalaman Materi Semester 1        │   │
│  │  • Client-Server • OS Server • DHCP • DNS • Web     │   │
│  │  Estimasi: 6 JP (2 pertemuan)                       │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 10  Proxy Server & Manajemen Bandwidth          │   │
│  │  • Squid • Filtering • Caching • TC • QoS           │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 11  Mail Server & FTP Server                    │   │
│  │  • Postfix • Dovecot • Roundcube • vsftpd • SFTP    │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 12  Database Server & Web Dinamis               │   │
│  │  • MariaDB • PHP • CRUD • phpMyAdmin • WordPress    │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 13  VPN Server & Remote Access                  │   │
│  │  • OpenVPN • WireGuard • SSH Tunnel • RDP • VNC     │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 14  Wireless Network & Hotspot Server           │   │
│  │  • AP • Hotspot • RADIUS • Captive Portal • WPA2    │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 15  Virtualisasi Server & Cloud Computing       │   │
│  │  • Proxmox • Docker • VM • Cloud • Nextcloud        │   │
│  │  Estimasi: 12 JP (4 pertemuan)                      │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TP 16  Proyek Akhir Jaringan Terintegrasi          │   │
│  │  • Analisis • Desain • Implementasi • Dokumentasi   │   │
│  │  Estimasi: 18 JP (6 pertemuan)                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Urutan Kompetensi Semester 2:**
```
Review Semester 1 
    → Proxy & Bandwidth 
    → Mail & FTP 
    → Database & Web Dinamis 
    → VPN & Remote Access 
    → Wireless & Hotspot 
    → Virtualisasi & Cloud 
    → Proyek Akhir
```

---

## 📊 ESTIMASI TOTAL BELAJAR SEMESTER 2

| No | Materi | JP | Pertemuan | Minggu |
|----|--------|-----|-----------|--------|
| 1 | Review & Pendalaman Semester 1 | 6 | 2 | 1 |
| 2 | Proxy Server & Manajemen Bandwidth | 12 | 4 | 2–3 |
| 3 | Mail Server & FTP Server | 12 | 4 | 4–5 |
| 4 | Database Server & Web Dinamis | 12 | 4 | 6–7 |
| 5 | VPN Server & Remote Access | 12 | 4 | 8–9 |
| 6 | Wireless Network & Hotspot Server | 12 | 4 | 10–11 |
| 7 | Virtualisasi Server & Cloud Computing | 12 | 4 | 12–13 |
| 8 | Proyek Akhir Jaringan Terintegrasi | 18 | 6 | 14–16 |
| **Total** | | **± 96 JP** | **± 32** | **16 minggu** |

> **Catatan:** Estimasi dapat disesuaikan dengan kondisi sekolah, jam pelajaran, dan kemampuan peserta didik. 1 JP = 45 menit.

---

## 📚 GLOSARIUM SEMESTER 2

| Istilah | Penjelasan |
|---------|------------|
| **AP** | Access Point — perangkat WiFi |
| **ACL** | Access Control List |
| **Bandwidth** | Lebar pita jaringan |
| **Captive Portal** | Halaman login WiFi |
| **Caching** | Penyimpanan sementara |
| **Cloud** | Komputasi awan |
| **Container** | Isolasi aplikasi |
| **CRUD** | Create, Read, Update, Delete |
| **Database** | Kumpulan data terstruktur |
| **DHCP** | Dynamic Host Configuration Protocol |
| **Docker** | Platform container |
| **Dovecot** | Software IMAP/POP3 |
| **FTP** | File Transfer Protocol |
| **Hotspot** | Area WiFi publik |
| **Hypervisor** | Software virtualisasi |
| **IaaS** | Infrastructure as a Service |
| **IMAP** | Internet Message Access Protocol |
| **Mail Server** | Server email |
| **MariaDB** | Database open-source |
| **MySQL** | Database populer |
| **NAT** | Network Address Translation |
| **Nextcloud** | Private cloud |
| **OpenVPN** | VPN open-source |
| **PaaS** | Platform as a Service |
| **phpMyAdmin** | Tool web database |
| **POP3** | Post Office Protocol 3 |
| **Postfix** | Mail Transfer Agent |
| **Proxmox** | Hypervisor Type 1 |
| **Proxy** | Server perantara |
| **QoS** | Quality of Service |
| **RADIUS** | Server autentikasi |
| **RDP** | Remote Desktop Protocol |
| **Roundcube** | Webmail |
| **SaaS** | Software as a Service |
| **SFTP** | SSH File Transfer Protocol |
| **SMTP** | Simple Mail Transfer Protocol |
| **Squid** | Software proxy |
| **SSID** | Nama jaringan WiFi |
| **TC** | Traffic Control |
| **VNC** | Virtual Network Computing |
| **VPN** | Virtual Private Network |
| **vsftpd** | FTP server |
| **WireGuard** | VPN modern |
| **WPA2** | Wi-Fi Protected Access 2 |
| **WordPress** | CMS populer |

---

## 📝 LATIHAN SOAL & EVALUASI AKHIR

### A. Soal Pilihan Ganda

**1. Software proxy server di Linux adalah...**
- a. Apache
- b. Squid
- c. Postfix
- d. Dovecot
- e. vsftpd

**2. Port default SMTP adalah...**
- a. 21
- b. 22
- c. 25
- d. 80
- e. 110

**3. Protokol email yang menyimpan email di server adalah...**
- a. POP3
- b. IMAP
- c. SMTP
- d. FTP
- e. SSH

**4. Software database open-source adalah...**
- a. MariaDB
- b. Apache
- c. Nginx
- d. Squid
- e. Postfix

**5. VPN yang lebih cepat dan modern adalah...**
- a. PPTP
- b. L2TP
- c. WireGuard
- d. IPSec
- e. OpenVPN

**6. Frekuensi WiFi yang jangkauannya lebih jauh adalah...**
- a. 2.4 GHz
- b. 5 GHz
- c. 6 GHz
- d. 60 GHz
- e. 900 MHz

**7. Software hypervisor Type 1 adalah...**
- a. VirtualBox
- b. VMware Workstation
- c. Proxmox
- d. Docker
- e. LXC

**8. Model cloud yang menyediakan infrastruktur adalah...**
- a. SaaS
- b. PaaS
- c. IaaS
- d. FaaS
- e. DaaS

**9. Perintah Docker untuk melihat container adalah...**
- a. docker images
- b. docker ps
- c. docker run
- d. docker stop
- e. docker rm

**10. Server autentikasi hotspot adalah...**
- a. DHCP
- b. DNS
- c. RADIUS
- d. FTP
- e. SMTP

**Kunci Jawaban:**
1. b
2. c
3. b
4. a
5. c
6. a
7. c
8. c
9. b
10. c

---

### B. Soal Essay

1. Jelaskan fungsi Proxy Server dan manfaatnya!
2. Jelaskan perbedaan POP3 dan IMAP!
3. Jelaskan perbedaan FTP, FTPS, dan SFTP!
4. Bagaimana cara menghubungkan PHP ke database MySQL?
5. Jelaskan konsep VPN dan manfaatnya!
6. Sebutkan 5 tips keamanan WiFi!
7. Jelaskan perbedaan VM dan Container!
8. Jelaskan perbedaan IaaS, PaaS, dan SaaS!
9. Sebutkan tahapan dalam proyek akhir jaringan!
10. Apa saja yang perlu didokumentasikan dalam proyek akhir?

---

### C. Soal Praktik Akhir

**Praktik 1: Proxy Server**
- Install Squid
- Konfigurasi filtering
- Test dari client

**Praktik 2: Mail Server**
- Install Postfix + Dovecot
- Buat user email
- Test kirim/terima

**Praktik 3: Database & Web Dinamis**
- Install MariaDB + PHP
- Buat database dan tabel
- Buat web CRUD

**Praktik 4: VPN Server**
- Install OpenVPN
- Buat sertifikat
- Test koneksi VPN

**Praktik 5: Hotspot**
- Install RADIUS
- Buat captive portal
- Test login

**Praktik 6: Virtualisasi**
- Install Proxmox
- Buat VM
- Install Docker

**Praktik 7: Proyek Akhir**
- Bangun jaringan lengkap
- Dokumentasi
- Presentasi

---

## 📚 SUMBER BELAJAR TAMBAHAN SEMESTER 2

### Buku:
- Buku Administrasi Sistem Jaringan Kelas XII
- Buku Teknologi Jaringan Berbasis Luas Kelas XII
- Buku Keamanan Jaringan Kelas XII

### Website:
- [Squid Docs](http://www.squid-cache.org/Doc/)
- [Postfix Docs](http://www.postfix.org/documentation.html)
- [Dovecot Docs](https://doc.dovecot.org/)
- [MariaDB Docs](https://mariadb.org/documentation/)
- [OpenVPN Docs](https://openvpn.net/community-resources/)
- [WireGuard Docs](https://www.wireguard.com/)
- [Proxmox Docs](https://pve.proxmox.com/pve-docs/)
- [Docker Docs](https://docs.docker.com/)
- [Nextcloud Docs](https://docs.nextcloud.com/)
- [FreeRADIUS Docs](https://freeradius.org/documentation/)

### Video:
- Channel YouTube: NetworkChuck
- Channel YouTube: TechWorld with Nana
- Channel YouTube: The Linux Foundation
- Channel YouTube: Indonesia Belajar

### Tools:
- VirtualBox / VMware
- Proxmox VE
- Docker
- Wireshark
- Putty / MobaXterm

---

## 🎯 TIPS BELAJAR SEMESTER 2

1. **Review semester 1** — pastikan dasar sudah kuat
2. **Praktik langsung** — jangan hanya teori
3. **Catat error** — setiap error adalah pelajaran
4. **Baca dokumentasi** — biasakan baca man page
5. **Diskusi** — tanya guru/teman jika stuck
6. **Ulangi** — praktik berulang agar hafal
7. **Buat catatan** — ringkasan perintah penting
8. **Ikuti komunitas** — forum, grup Telegram/Discord
9. **Konsisten** — belajar rutin lebih baik dari SKS
10. **Ajarkan** — mengajar orang lain memperkuat pemahaman
11. **Jangan takut error** — error adalah guru terbaik
12. **Siapkan portofolio** — dokumentasi proyek untuk melamar kerja

---

## 🎓 PERSIAPAN DUNIA KERJA

Setelah menyelesaikan semester 1 dan 2, peserta didik diharapkan:

**Kompetensi:**
- ✅ Menguasai instalasi & konfigurasi server
- ✅ Menguasai layanan jaringan lengkap
- ✅ Mampu membangun jaringan terintegrasi
- ✅ Mampu troubleshooting jaringan
- ✅ Mampu dokumentasi teknis

**Sertifikasi yang bisa diambil:**
- **MTCNA** — MikroTik Certified Network Associate
- **CCNA** — Cisco Certified Network Associate
- **Linux Essentials** — LPI
- **CompTIA Network+**
- **AWS Cloud Practitioner**

**Karier:**
- Network Administrator
- System Administrator
- IT Support
- Network Engineer
- Cloud Engineer
- DevOps Engineer

---

> **Selamat! Anda telah menyelesaikan seluruh materi Kelas XII TKJ.**
>
> **"Jaringan komputer adalah fondasi dunia digital. Kuasai ilmunya, dan Anda siap membangun masa depan."** 🚀

---

**© 2024 — Modul Pembelajaran Jaringan Berbasis Server Kelas XII TKJ — Semester 2**
