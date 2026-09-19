# 📚 MODUL SUPER LENGKAP SEMESTER 2 — TJKT
## Instalasi Jaringan Lanjutan, Keamanan, Layanan, dan Proyek Terpadu

> **Mata Pelajaran:** Teknik Jaringan Komputer dan Telekomunikasi (TJKT)  
> **Kelas:** XI / XII TJKT  
> **Semester:** 2 (Genap)  
> **Alokasi:** 19 Minggu × 4 JP (Total ± 76 Jam Pelajaran)  
> **Format:** GitHub Markdown (GFM)  
> **Prasyarat:** Telah menempuh Semester 1 (TP 1–8)

> ⚠️ **Catatan Asumsi:**  
> Pada Semester 1, TP 1–8 telah diselesaikan (media transmisi, alat & K3, kabel UTP, fiber optic, WLAN, VoIP, troubleshooting). Semester 2 ini merupakan **pendalaman dan perluasan** dengan TP 9–16 yang mencakup subnetting lanjutan, VLAN, routing, layanan jaringan, keamanan, VPN, QoS, monitoring, dan proyek akhir terpadu.

---

## 📑 DAFTAR ISI

- [Pendahuluan](#-pendahuluan)
  - [Deskripsi Semester 2](#deskripsi-semester-2)
  - [Capaian Pembelajaran](#capaian-pembelajaran)
  - [Peta Kompetensi Semester 2](#peta-kompetensi-semester-2)
  - [Peta Materi per Minggu](#peta-materi-per-minggu)
  - [Strategi Pembelajaran](#strategi-pembelajaran)
  - [Penilaian](#penilaian)
- [Minggu 1: Review OSI/TCP-IP & Pengalamatan IP](#-minggu-1-review-ositcp-ip--pengalamatan-ip)
- [Minggu 2: Subnetting, CIDR, VLSM & IPv6 (TP 9)](#-minggu-2-subnetting-cidr-vlsm--ipv6-tp-9)
- [Minggu 3: Konsep VLAN & Konfigurasi Dasar (TP 10)](#-minggu-3-konsep-vlan--konfigurasi-dasar-tp-10)
- [Minggu 4: Trunking, VTP & Troubleshooting VLAN (TP 10)](#-minggu-4-trunking-vtp--troubleshooting-vlan-tp-10)
- [Minggu 5: Inter-VLAN Routing (TP 11)](#-minggu-5-inter-vlan-routing-tp-11)
- [Minggu 6: Routing Statis & Dinamis (RIP/OSPF) (TP 11)](#-minggu-6-routing-statis--dinamis-ripospf-tp-11)
- [Minggu 7: Layanan Jaringan (DHCP, DNS, Web, FTP) (TP 12)](#-minggu-7-layanan-jaringan-dhcp-dns-web-ftp-tp-12)
- [Minggu 8: Evaluasi Tengah Semester (UTS)](#-minggu-8-evaluasi-tengah-semester-uts)
- [Minggu 9: Keamanan Jaringan — ACL & Firewall (TP 13)](#-minggu-9-keamanan-jaringan--acl--firewall-tp-13)
- [Minggu 10: NAT & Hardening Perangkat (TP 13)](#-minggu-10-nat--hardening-perangkat-tp-13)
- [Minggu 11: Konsep VPN & WireGuard (TP 14)](#-minggu-11-konsep-vpn--wireguard-tp-14)
- [Minggu 12: OpenVPN & SSH Tunnel (TP 14)](#-minggu-12-openvpn--ssh-tunnel-tp-14)
- [Minggu 13: Konsep QoS & Klasifikasi Traffic (TP 15)](#-minggu-13-konsep-qos--klasifikasi-traffic-tp-15)
- [Minggu 14: Implementasi QoS & Manajemen Bandwidth (TP 15)](#-minggu-14-implementasi-qos--manajemen-bandwidth-tp-15)
- [Minggu 15: Monitoring & Manajemen Jaringan (TP 16)](#-minggu-15-monitoring--manajemen-jaringan-tp-16)
- [Minggu 16: Dokumentasi, SOP & Backup (TP 16)](#-minggu-16-dokumentasi-sop--backup-tp-16)
- [Minggu 17: Proyek Akhir — Desain & Implementasi Dasar (TP 16)](#-minggu-17-proyek-akhir--desain--implementasi-dasar-tp-16)
- [Minggu 18: Proyek Akhir — Implementasi Lanjutan & Presentasi (TP 16)](#-minggu-18-proyek-akhir--implementasi-lanjutan--presentasi-tp-16)
- [Minggu 19: Evaluasi Akhir Semester (UAS)](#-minggu-19-evaluasi-akhir-semester-uas)
- [Lampiran](#-lampiran)
  - [Glosarium](#glosarium)
  - [Daftar Singkatan](#daftar-singkatan)
  - [Rubrik Penilaian](#rubrik-penilaian)
  - [Referensi](#referensi)

---

## 🎓 PENDAHULUAN

### Deskripsi Semester 2

Semester 2 membekali peserta didik dengan **kompetensi jaringan tingkat lanjut** yang siap industri. Jika Semester 1 fokus pada **instalasi fisik** (kabel, fiber, wireless, VoIP), maka Semester 2 fokus pada **logika jaringan** (pengalamatan, routing, keamanan, layanan) dan **manajemen jaringan** (monitoring, dokumentasi, proyek).

**Analogi sederhana:**
- **Semester 1** = Belajar memasang **jalan raya** (kabel, fiber, wireless)
- **Semester 2** = Belajar mengatur **lalu lintas** di jalan raya tersebut (routing, VLAN, QoS, keamanan)

**Kompetensi yang dibangun:**
1. **Mengalamati** jaringan dengan subnetting & VLSM
2. **Mensegmentasi** jaringan dengan VLAN
3. **Menghubungkan** segmen dengan routing
4. **Menyediakan** layanan jaringan (DHCP, DNS, Web, FTP)
5. **Mengamankan** jaringan (ACL, Firewall, NAT, VPN)
6. **Mengelola** kualitas (QoS, bandwidth)
7. **Memantau** jaringan (SNMP, Syslog, Zabbix)
8. **Mendokumentasikan** dan **mengelola** proyek

### Capaian Pembelajaran

Pada akhir Semester 2, peserta didik mampu:

| TP | Capaian | Level Kognitif | Minggu |
|----|---------|----------------|--------|
| TP 9 | Menguasai subnetting, CIDR, VLSM, dan IPv6 dasar | C3–C4 | 1–2 |
| TP 10 | Mengonfigurasi VLAN, trunking, dan VTP | C3 | 3–4 |
| TP 11 | Mengonfigurasi routing statis & dinamis | C3–C4 | 5–6 |
| TP 12 | Menginstal & mengonfigurasi layanan jaringan | C3 | 7 |
| TP 13 | Menerapkan ACL, firewall, dan NAT | C3–C4 | 9–10 |
| TP 14 | Mengonfigurasi VPN & remote access | C3 | 11–12 |
| TP 15 | Menerapkan QoS & manajemen bandwidth | C3–C4 | 13–14 |
| TP 16 | Monitoring, dokumentasi, dan proyek akhir | C4–C6 | 15–18 |

### Peta Kompetensi Semester 2

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        SEMESTER 2 - TJKT                                │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 1: DASAR LANJUTAN (Minggu 1-2)                              ║  │
│  ║  ├── Review OSI/TCP-IP                                            ║  │
│  ║  ├── Pengalamatan IP (IPv4)                                       ║  │
│  ║  ├── Subnetting & CIDR                                            ║  │
│  ║  ├── VLSM                                                         ║  │
│  ║  └── IPv6 Dasar                                                   ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 2: VLAN & TRUNKING (Minggu 3-4)                             ║  │
│  ║  ├── Konsep VLAN & Manfaat                                        ║  │
│  ║  ├── Access Port & Trunk Port                                     ║  │
│  ║  ├── 802.1Q Tagging                                               ║  │
│  ║  ├── VTP (VLAN Trunking Protocol)                                 ║  │
│  ║  └── Troubleshooting VLAN                                         ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 3: ROUTING (Minggu 5-6)                                     ║  │
│  ║  ├── Inter-VLAN Routing (Router-on-a-Stick, SVI)                  ║  │
│  ║  ├── Routing Statis                                               ║  │
│  ║  ├── RIP v2                                                       ║  │
│  ║  └── OSPF Single Area                                             ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 4: LAYANAN JARINGAN (Minggu 7)                              ║  │
│  ║  ├── DHCP Server                                                  ║  │
│  ║  ├── DNS Server (BIND9)                                           ║  │
│  ║  ├── Web Server (Apache/Nginx)                                    ║  │
│  ║  ├── FTP Server (vsftpd)                                          ║  │
│  ║  ├── NTP                                                          ║  │
│  ║  └── Syslog                                                       ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ──────────────────────── UTS ────────────────────────                  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 5: KEAMANAN JARINGAN (Minggu 9-10)                          ║  │
│  ║  ├── Konsep CIA                                                  ║  │
│  ║  ├── ACL Standard & Extended                                      ║  │
│  ║  ├── Firewall (iptables/nftables)                                 ║  │
│  ║  ├── NAT (Static, Dynamic, PAT)                                   ║  │
│  ║  └── Hardening Perangkat                                          ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 6: VPN & REMOTE ACCESS (Minggu 11-12)                       ║  │
│  ║  ├── Konsep VPN & Tunneling                                       ║  │
│  ║  ├── WireGuard                                                    ║  │
│  ║  ├── OpenVPN                                                      ║  │
│  ║  └── SSH Tunnel                                                   ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 7: QoS & BANDWIDTH (Minggu 13-14)                           ║  │
│  ║  ├── Konsep QoS                                                  ║  │
│  ║  ├── Klasifikasi Traffic                                          ║  │
│  ║  ├── Queueing (CBWFQ, LLQ)                                        ║  │
│  ║  ├── Traffic Shaping (HTB)                                        ║  │
│  ║  └── Monitoring Bandwidth                                         ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 8: MONITORING & DOKUMENTASI (Minggu 15-16)                  ║  │
│  ║  ├── SNMP, Syslog, NetFlow                                        ║  │
│  ║  ├── Zabbix & Grafana                                             ║  │
│  ║  ├── IP Plan & VLAN Plan                                          ║  │
│  ║  ├── SOP Operasional                                              ║  │
│  ║  └── Backup & Change Management                                   ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  BLOK 9: PROYEK AKHIR TERPADU (Minggu 17-18)                      ║  │
│  ║  ├── Desain Jaringan Kantor Kecil                                 ║  │
│  ║  ├── Implementasi VLAN, Routing, Layanan                          ║  │
│  ║  ├── Keamanan, VPN, QoS                                           ║  │
│  ║  ├── Monitoring & Dokumentasi                                     ║  │
│  ║  └── Presentasi & Demo                                            ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                          │
│  ──────────────────────── UAS ────────────────────────                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Peta Materi per Minggu

| Minggu | Materi | TP | Jenis | JP |
|--------|--------|----|----|----|
| 1 | Review OSI/TCP-IP & Pengalamatan IP | TP 9 | Teori | 4 |
| 2 | Subnetting, CIDR, VLSM & IPv6 | TP 9 | Teori + Praktik | 4 |
| 3 | Konsep VLAN & Konfigurasi Dasar | TP 10 | Teori + Praktik | 4 |
| 4 | Trunking, VTP & Troubleshooting VLAN | TP 10 | Praktik | 4 |
| 5 | Inter-VLAN Routing | TP 11 | Praktik | 4 |
| 6 | Routing Statis & Dinamis (RIP/OSPF) | TP 11 | Praktik | 4 |
| 7 | Layanan Jaringan (DHCP, DNS, Web, FTP) | TP 12 | Praktik | 4 |
| 8 | **UTS** | – | Evaluasi | 4 |
| 9 | Keamanan Jaringan — ACL & Firewall | TP 13 | Teori + Praktik | 4 |
| 10 | NAT & Hardening Perangkat | TP 13 | Praktik | 4 |
| 11 | Konsep VPN & WireGuard | TP 14 | Teori + Praktik | 4 |
| 12 | OpenVPN & SSH Tunnel | TP 14 | Praktik | 4 |
| 13 | Konsep QoS & Klasifikasi Traffic | TP 15 | Teori | 4 |
| 14 | Implementasi QoS & Manajemen Bandwidth | TP 15 | Praktik | 4 |
| 15 | Monitoring & Manajemen Jaringan | TP 16 | Praktik | 4 |
| 16 | Dokumentasi, SOP & Backup | TP 16 | Teori + Praktik | 4 |
| 17 | Proyek Akhir — Desain & Implementasi Dasar | TP 16 | Proyek | 4 |
| 18 | Proyek Akhir — Implementasi Lanjutan & Presentasi | TP 16 | Proyek | 4 |
| 19 | **UAS** | – | Evaluasi | 4 |

### Strategi Pembelajaran

| Metode | Penerapan | Contoh |
|--------|-----------|--------|
| **Ceramah interaktif** | Konsep teori di awal blok | Subnetting, VLAN |
| **Demonstrasi** | Guru memperagakan konfigurasi | Cisco CLI, Linux |
| **Praktik terbimbing** | Siswa praktik dengan pendampingan | VLAN, routing |
| **Praktik mandiri** | Siswa bekerja independen | Layanan jaringan |
| **Project-based learning** | Proyek akhir terpadu | Proyek minggu 17-18 |
| **Problem-based learning** | Studi kasus troubleshooting | Kasus jaringan |
| **Peer teaching** | Siswa saling mengajar | Presentasi kelompok |
| **Simulasi** | Cisco Packet Tracer, GNS3, EVE-NG | Simulasi topologi |

### Penilaian

| Komponen | Bobot | Keterangan |
|----------|-------|-----------|
| Pengetahuan (tes tulis) | 20% | UTS, UAS, kuis |
| Keterampilan (praktik) | 40% | Praktik mingguan |
| Sikap | 10% | Disiplin, kerja sama, K3 |
| Proyek | 30% | Proyek akhir terpadu |

---

## 📘 MINGGU 1: Review OSI/TCP-IP & Pengalamatan IP

> **TP terkait:** TP 9  
> **Alokasi:** 4 JP (2 pertemuan × 2 JP)  
> **Level:** C2–C3  
> **Tujuan:** Memastikan peserta didik memiliki fondasi kuat sebelum masuk subnetting

### 🎯 Tujuan Pembelajaran

1. Menjelaskan kembali model OSI 7 layer dan TCP/IP 4 layer
2. Menjelaskan proses enkapsulasi & dekapsulasi data
3. Menjelaskan struktur alamat IPv4
4. Mengidentifikasi kelas IP dan alamat private/public

### 📖 Materi

#### 1.1 Review Model OSI 7 Layer

**Analogi:** Bayangkan Anda mengirim **paket** ke teman di kota lain.

```
┌─────────────────────────────────────────────────────────────────┐
│                    MODEL OSI 7 LAYER                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  7. APPLICATION     │  "Isi surat" (data)                       │
│     (Aplikasi)      │  HTTP, FTP, DNS, SIP, SMTP                │
│                     │  Contoh: Browser, Email client            │
│                     ↓                                           │
│  6. PRESENTATION    │  "Format surat" (enkripsi, kompresi)      │
│     (Presentasi)    │  SSL/TLS, JPEG, MPEG, ASCII               │
│                     ↓                                           │
│  5. SESSION         │  "Siapa yang kirim & terima"              │
│     (Sesi)          │  NetBIOS, RPC, PPTP                       │
│                     ↓                                           │
│  4. TRANSPORT       │  "Pecah surat jadi amplop"                │
│     (Transport)     │  TCP (reliable), UDP (cepat)              │
│                     │  Port: 80 (HTTP), 443 (HTTPS)             │
│                     ↓                                           │
│  3. NETWORK         │  "Alamat rumah tujuan"                    │
│     (Jaringan)      │  IP, ICMP, OSPF, ARP                      │
│                     │  Contoh: 192.168.1.1                      │
│                     ↓                                           │
│  2. DATA LINK       │  "Kurir & kendaraan"                      │
│     (Data Link)     │  Ethernet, PPP, 802.11, MAC               │
│                     │  Contoh: AA:BB:CC:DD:EE:FF                │
│                     ↓                                           │
│  1. PHYSICAL        │  "Jalan raya" (kabel, sinyal)             │
│     (Fisik)         │  UTP, Fiber, Radio                        │
│                     │  Contoh: Kabel Cat6, Wi-Fi                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Cara menghafal (mnemonic):**  
**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing  
(Application, Presentation, Session, Transport, Network, Data Link, Physical)

#### 1.2 Model TCP/IP 4 Layer

| TCP/IP Layer | OSI Layer | Protokol |
|--------------|-----------|----------|
| **Application** | 7, 6, 5 | HTTP, FTP, DNS, SMTP, SIP |
| **Transport** | 4 | TCP, UDP |
| **Internet** | 3 | IP, ICMP, ARP, OSPF |
| **Network Access** | 2, 1 | Ethernet, PPP, 802.11 |

#### 1.3 Enkapsulasi & Dekapsulasi

**Enkapsulasi** = proses menambahkan header saat data turun dari layer atas ke bawah.

```
Pengirim:                                    Penerima:
[Data]                                       [Data]
  ↓ Application                                ↑ Application
[Data]                                       [Data]
  ↓ Transport (+ TCP header)                   ↑ Transport
[TCP][Data]                                  [TCP][Data]
  ↓ Network (+ IP header)                      ↑ Network
[IP][TCP][Data]                              [IP][TCP][Data]
  ↓ Data Link (+ MAC header & trailer)         ↑ Data Link
[MAC][IP][TCP][Data][FCS]                    [MAC][IP][TCP][Data][FCS]
  ↓ Physical                                   ↑ Physical
[1010101010...]                              [1010101010...]
```

**PDU (Protocol Data Unit):**
| Layer | PDU |
|-------|-----|
| Application | Data |
| Transport | Segment (TCP) / Datagram (UDP) |
| Network | Packet |
| Data Link | Frame |
| Physical | Bit |

#### 1.4 Struktur Alamat IPv4

**IPv4 = 32 bit = 4 oktet = 4 byte**

```
Contoh: 192.168.1.1
        │   │   │ │
        │   │   │ └── Oktet 4 (8 bit)
        │   │   └──── Oktet 3 (8 bit)
        │   └──────── Oktet 2 (8 bit)
        └──────────── Oktet 1 (8 bit)

Biner: 11000000.10101000.00000001.00000001
       └──192──┘└──168──┘└───1───┘└───1───┘
```

**Konversi desimal ↔ biner:**

| Desimal | Biner | Desimal | Biner |
|---------|-------|---------|-------|
| 0 | 00000000 | 128 | 10000000 |
| 1 | 00000001 | 192 | 11000000 |
| 2 | 00000010 | 224 | 11100000 |
| 4 | 00000100 | 240 | 11110000 |
| 8 | 00001000 | 248 | 11111000 |
| 16 | 00010000 | 252 | 11111100 |
| 32 | 00100000 | 254 | 11111110 |
| 64 | 01000000 | 255 | 11111111 |

**Tips menghafal:**  
`128 64 32 16 8 4 2 1` (dari kiri ke kanan, bagi 2)

#### 1.5 Kelas Alamat IPv4

| Kelas | Oktet Pertama | Default Mask | Jumlah Network | Jumlah Host/Network | Penggunaan |
|-------|---------------|--------------|----------------|---------------------|------------|
| **A** | 1–126 | /8 (255.0.0.0) | 126 | 16.777.214 | Jaringan besar |
| **B** | 128–191 | /16 (255.255.0.0) | 16.384 | 65.534 | Jaringan sedang |
| **C** | 192–223 | /24 (255.255.255.0) | 2.097.152 | 254 | Jaringan kecil |
| **D** | 224–239 | – | – | – | Multicast |
| **E** | 240–255 | – | – | – | Eksperimen |

**Catatan:** 127.x.x.x = loopback (localhost)

#### 1.6 Alamat Private vs Public

**Private (RFC 1918):**
| Kelas | Range | Jumlah |
|-------|-------|--------|
| A | 10.0.0.0 – 10.255.255.255 | 16.777.216 |
| B | 172.16.0.0 – 172.31.255.255 | 1.048.576 |
| C | 192.168.0.0 – 192.168.255.255 | 65.536 |

**Public:** Alamat selain private, digunakan di internet.

**Alamat khusus:**
| Alamat | Fungsi |
|--------|--------|
| 0.0.0.0 | Default route / "any" |
| 127.0.0.1 | Loopback |
| 169.254.x.x | APIPA (DHCP gagal) |
| 255.255.255.255 | Broadcast |
| 224.0.0.1 | All hosts multicast |

#### 1.7 Komponen Alamat IP

Setiap alamat IP terdiri dari:
- **Network ID** = bagian alamat yang menunjukkan jaringan
- **Host ID** = bagian alamat yang menunjukkan host dalam jaringan
- **Subnet Mask** = pembatas network & host

**Contoh:**
```
IP      : 192.168.1.100
Mask    : 255.255.255.0 (/24)
Network : 192.168.1.0
Host    : 100
Broadcast: 192.168.1.255
```

**Rumus:**
```
Network   = IP AND Mask
Broadcast = Network OR (NOT Mask)
Host Range = Network+1 s/d Broadcast-1
```

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Diskusi: "Apa yang terjadi jika tidak ada layer?"
- Latihan mengisi tabel OSI
- Kuis mnemonic OSI

**Pertemuan 2:**
- Konversi desimal ↔ biner (20 soal)
- Identifikasi kelas IP (20 soal)
- Identifikasi private/public (20 soal)

### 📝 Latihan Soal

1. **Sebutkan** 7 layer OSI dari bawah ke atas!
2. **Jelaskan** perbedaan TCP dan UDP!
3. **Konversi** 192.168.1.1 ke biner!
4. **Konversi** 11000000.10101000.00000001.00000001 ke desimal!
5. **Tentukan** kelas IP dari: 10.0.0.1, 172.16.0.1, 192.168.1.1, 224.0.0.1!
6. **Sebutkan** 3 range IP private!
7. **Jelaskan** proses enkapsulasi!
8. **Apa** fungsi subnet mask?

### ✅ Penilaian

| Aspek | Indikator | Bobot |
|-------|-----------|-------|
| Pengetahuan | Kuis OSI & IP | 50% |
| Keterampilan | Konversi biner | 30% |
| Sikap | Keaktifan | 20% |

---

## 📘 MINGGU 2: Subnetting, CIDR, VLSM & IPv6 (TP 9)

> **TP terkait:** TP 9  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Melakukan subnetting IPv4 dengan tepat
2. Menerapkan CIDR notation
3. Menerapkan VLSM untuk efisiensi
4. Menjelaskan konsep dasar IPv6

### 📖 Materi

#### 2.1 Konsep Subnetting

**Subnetting** = membagi 1 jaringan besar menjadi beberapa **subnet** (sub-jaringan) yang lebih kecil.

**Analogi:**  
Bayangkan Anda punya **tanah 1000 m²**. Daripada dibiarkan kosong, Anda bagi menjadi **4 kavling** masing-masing 250 m². Itulah subnetting!

**Tujuan subnetting:**
- Efisiensi penggunaan IP
- Mengurangi broadcast domain
- Meningkatkan keamanan
- Memudahkan manajemen

**Rumus subnetting:**
```
Jumlah subnet     = 2^n
Jumlah host/subnet = 2^h - 2
n = jumlah bit yang dipinjam dari host
h = jumlah bit host tersisa (32 - prefix)
```

**Mengapa dikurangi 2?**  
Karena 1 alamat untuk **Network** dan 1 alamat untuk **Broadcast**.

#### 2.2 Tabel Prefix & Subnet Mask

| Prefix | Subnet Mask | Jumlah Host | Jumlah Subnet (/24) |
|--------|-------------|-------------|---------------------|
| /24 | 255.255.255.0 | 254 | 1 |
| /25 | 255.255.255.128 | 126 | 2 |
| /26 | 255.255.255.192 | 62 | 4 |
| /27 | 255.255.255.224 | 30 | 8 |
| /28 | 255.255.255.240 | 14 | 16 |
| /29 | 255.255.255.248 | 6 | 32 |
| /30 | 255.255.255.252 | 2 | 64 |
| /31 | 255.255.255.254 | 0 (point-to-point) | 128 |
| /32 | 255.255.255.255 | 1 (host) | 256 |

**Cara cepat menghafal:**

```
/24 → 256 host  (254 usable)
/25 → 128 host  (126 usable)
/26 → 64 host   (62 usable)
/27 → 32 host   (30 usable)
/28 → 16 host   (14 usable)
/29 → 8 host    (6 usable)
/30 → 4 host    (2 usable)
```

**Tips:** Setiap naik 1 prefix, jumlah host **dibagi 2**.

#### 2.3 Contoh Subnetting Lengkap

**Soal:** 192.168.1.0/24 dibagi menjadi 4 subnet.

**Langkah:**
1. **Tentukan n:** 4 subnet = 2^n → n = 2
2. **Prefix baru:** /24 + 2 = /26
3. **Subnet mask:** 255.255.255.192
4. **Jumlah host/subnet:** 2^6 - 2 = 62
5. **Buat tabel:**

| Subnet | Network | Host Range | Broadcast | Keterangan |
|--------|---------|------------|-----------|------------|
| 1 | 192.168.1.0/26 | .1 – .62 | .63 | Subnet 1 |
| 2 | 192.168.1.64/26 | .65 – .126 | .127 | Subnet 2 |
| 3 | 192.168.1.128/26 | .129 – .190 | .191 | Subnet 3 |
| 4 | 192.168.1.192/26 | .193 – .254 | .255 | Subnet 4 |

**Cara cepat menentukan range:**
- Block size = 256 - subnet mask octet terakhir
- Contoh /26: 256 - 192 = 64
- Range: 0, 64, 128, 192

**Soal 2:** 172.16.0.0/16 dibagi menjadi 8 subnet.

**Jawab:**
- n = 3 (karena 2^3 = 8)
- Prefix baru: /16 + 3 = /19
- Subnet mask: 255.255.224.0
- Host/subnet: 2^13 - 2 = 8190

| Subnet | Network | Host Range | Broadcast |
|--------|---------|------------|-----------|
| 1 | 172.16.0.0/19 | 172.16.0.1 – 172.16.31.254 | 172.16.31.255 |
| 2 | 172.16.32.0/19 | 172.16.32.1 – 172.16.63.254 | 172.16.63.255 |
| 3 | 172.16.64.0/19 | 172.16.64.1 – 172.16.95.254 | 172.16.95.255 |
| ... | ... | ... | ... |
| 8 | 172.16.224.0/19 | 172.16.224.1 – 172.16.255.254 | 172.16.255.255 |

#### 2.4 CIDR (Classless Inter-Domain Routing)

**CIDR** = cara penulisan alamat IP dengan **prefix length** (bukan kelas).

**Contoh:** `192.168.1.0/26` → prefix /26

**Keuntungan CIDR:**
- Lebih fleksibel
- Efisien penggunaan IP
- Mendukung supernetting (route aggregation)

**Supernetting (route summarization):**
```
192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
192.168.3.0/24
       ↓ disatukan menjadi
192.168.0.0/22 (1 route untuk 4 subnet)
```

#### 2.5 VLSM (Variable Length Subnet Mask)

**VLSM** = subnetting dengan **panjang prefix berbeda** sesuai kebutuhan host.

**Analogi:**  
Anda punya **tanah 1000 m²**. Ada 3 kebutuhan:
- Rumah besar (butuh 500 m²)
- Rumah sedang (butuh 300 m²)
- Taman (butuh 200 m²)

Dengan VLSM, Anda bagi sesuai kebutuhan, bukan sama rata.

**Langkah VLSM:**
1. Urutkan kebutuhan dari **terbesar ke terkecil**
2. Alokasikan subnet untuk kebutuhan terbesar dulu
3. Lanjutkan ke kebutuhan berikutnya
4. Pastikan tidak tumpang tindih

**Contoh VLSM:**

**Soal:** 192.168.1.0/24 dibagi untuk:
- Divisi IT: 50 host
- Divisi HRD: 25 host
- Divisi Finance: 10 host
- WAN link: 2 host

**Langkah 1: Urutkan**
1. IT: 50 host → butuh /26 (62 host)
2. HRD: 25 host → butuh /27 (30 host)
3. Finance: 10 host → butuh /28 (14 host)
4. WAN: 2 host → butuh /30 (2 host)

**Langkah 2: Alokasikan**

| Divisi | Prefix | Network | Host Range | Broadcast | Keterangan |
|--------|--------|---------|------------|-----------|------------|
| IT | /26 | 192.168.1.0 | .1 – .62 | .63 | 62 host |
| HRD | /27 | 192.168.1.64 | .65 – .94 | .95 | 30 host |
| Finance | /28 | 192.168.1.96 | .97 – .110 | .111 | 14 host |
| WAN | /30 | 192.168.1.112 | .113 – .114 | .115 | 2 host |
| **Sisa** | /30 | 192.168.1.116 | .117 – .118 | .119 | Cadangan |
| **Sisa** | /29 | 192.168.1.120 | .121 – .126 | .127 | Cadangan |
| **Sisa** | /28 | 192.168.1.128 | .129 – .142 | .143 | Cadangan |
| **Sisa** | /27 | 192.168.1.160 | .161 – .190 | .191 | Cadangan |
| **Sisa** | /26 | 192.168.1.192 | .193 – .254 | .255 | Cadangan |

**Verifikasi:**
- IT: 192.168.1.0/26 → 62 host ✓ (butuh 50)
- HRD: 192.168.1.64/27 → 30 host ✓ (butuh 25)
- Finance: 192.168.1.96/28 → 14 host ✓ (butuh 10)
- WAN: 192.168.1.112/30 → 2 host ✓ (butuh 2)

#### 2.6 IPv6 Dasar

**Mengapa IPv6?**
- IPv4 hanya 4,3 miliar alamat (sudah habis)
- IPv6 punya 340 undecillion alamat (3,4 × 10^38)

**Format IPv6:**
```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
└──┬──┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘
  Hextet 1  2      3      4      5      6      7      8
  (16 bit each = 128 bit total)
```

**Aturan penulisan:**
1. **Leading zero** bisa dihilangkan:
   - `0db8` → `db8`
2. **Hextet nol** bisa disingkat `::` (hanya sekali):
   - `2001:0db8:0000:0000:0000:0000:0000:0001` → `2001:db8::1`

**Jenis alamat IPv6:**

| Jenis | Prefix | Keterangan |
|-------|--------|-----------|
| Global Unicast | 2000::/3 | Seperti public IPv4 |
| Link-Local | fe80::/10 | Hanya 1 link |
| Unique Local | fc00::/7 | Seperti private IPv4 |
| Multicast | ff00::/8 | Multicast |
| Loopback | ::1/128 | Seperti 127.0.0.1 |
| Unspecified | ::/128 | Seperti 0.0.0.0 |

**Perbandingan IPv4 vs IPv6:**

| Aspek | IPv4 | IPv6 |
|-------|------|------|
| Panjang | 32 bit | 128 bit |
| Format | Desimal (192.168.1.1) | Heksadesimal (2001:db8::1) |
| Header | 20-60 byte | 40 byte (fixed) |
| Broadcast | Ada | Tidak ada |
| NAT | Umum | Tidak perlu |
| Konfigurasi | Manual/DHCP | SLAAC/DHCPv6 |
| Keamanan | Optional (IPSec) | Built-in (IPSec) |

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Latihan subnetting 10 soal
- Latihan CIDR 5 soal
- Diskusi hasil

**Pertemuan 2:**
- Latihan VLSM 3 soal
- Simulasi IPv6 di Packet Tracer
- Kuis subnetting

### 📝 Latihan Soal

1. **Subnetkan** `192.168.10.0/24` menjadi 8 subnet!
2. **Subnetkan** `172.16.0.0/16` menjadi 16 subnet!
3. **Hitung** jumlah host untuk prefix /27!
4. **VLSM:** `10.0.0.0/24` untuk 100, 50, 20, 2 host!
5. **Tuliskan** IPv6 `2001:0db8:0000:0000:0000:0000:0000:0001` dalam bentuk singkat!
6. **Jelaskan** perbedaan CIDR & VLSM!
7. **Apa** fungsi supernetting?

### ✅ Penilaian

| Aspek | Indikator | Bobot |
|-------|-----------|-------|
| Subnetting | Ketepatan 10 soal | 40% |
| VLSM | Ketepatan 3 soal | 30% |
| IPv6 | Pemahaman konsep | 20% |
| Sikap | Keaktifan | 10% |

---

## 📘 MINGGU 3: Konsep VLAN & Konfigurasi Dasar (TP 10)

> **TP terkait:** TP 10  
> **Alokasi:** 4 JP  
> **Level:** C2–C3

### 🎯 Tujuan Pembelajaran

1. Menjelaskan konsep & manfaat VLAN
2. Mengidentifikasi jenis-jenis VLAN
3. Mengonfigurasi VLAN di switch Cisco
4. Memverifikasi konfigurasi VLAN

### 📖 Materi

#### 3.1 Konsep VLAN

**VLAN (Virtual Local Area Network)** = segmentasi **logis** jaringan pada switch, bukan fisik.

**Analogi:**  
Bayangkan **satu gedung kantor** dengan **satu switch besar**. Tanpa VLAN, semua orang bisa "mendengar" broadcast satu sama lain. Dengan VLAN, Anda membuat **ruangan virtual** — divisi IT tidak bisa "mendengar" divisi HRD meskipun secara fisik di switch yang sama.

**Ilustrasi:**
```
Tanpa VLAN:
┌─────────────────────────────────────┐
│           SWITCH (1 broadcast)      │
│  ┌───┐  ┌───┐  ┌───┐  ┌───┐        │
│  │IT │  │HRD│  │FIN│  │IT │        │
│  └───┘  └───┘  └───┘  └───┘        │
│  Semua bisa komunikasi              │
└─────────────────────────────────────┘

Dengan VLAN:
┌─────────────────────────────────────┐
│           SWITCH                     │
│  ┌─────────┐  ┌─────────┐           │
│  │ VLAN 10 │  │ VLAN 20 │           │
│  │ ┌───┐   │  │ ┌───┐   │           │
│  │ │IT │   │  │ │HRD│   │           │
│  │ └───┘   │  │ └───┘   │           │
│  │ ┌───┐   │  │ ┌───┐   │           │
│  │ │IT │   │  │ │FIN│   │           │
│  │ └───┘   │  │ └───┘   │           │
│  └─────────┘  └─────────┘           │
│  Terisolasi (butuh router)          │
└─────────────────────────────────────┘
```

**Manfaat VLAN:**

| Manfaat | Penjelasan |
|---------|-----------|
| **Segmentasi** | Memisahkan broadcast domain |
| **Keamanan** | Isolasi antar divisi |
| **Fleksibilitas** | Pindah divisi tanpa pindah kabel |
| **Efisiensi** | Mengurangi broadcast traffic |
| **Manajemen** | Mudah dikelola |
| **Biaya** | Hemat (tidak perlu switch terpisah) |

#### 3.2 Jenis-Jenis VLAN

| Jenis | Keterangan | Contoh |
|-------|-----------|--------|
| **Data VLAN** | Untuk user | VLAN 10 (IT) |
| **Voice VLAN** | Untuk VoIP | VLAN 100 |
| **Management VLAN** | Untuk manajemen switch | VLAN 99 |
| **Native VLAN** | VLAN default di trunk | VLAN 1 |
| **Default VLAN** | VLAN 1 (bawaan) | VLAN 1 |

**Rekomendasi:**
- Jangan gunakan VLAN 1 untuk user
- Gunakan VLAN 99 untuk management
- Pisahkan voice VLAN

#### 3.3 Access Port vs Trunk Port

| Aspek | Access Port | Trunk Port |
|-------|-------------|------------|
| **Anggota** | 1 VLAN | Banyak VLAN |
| **Perangkat** | PC, printer, IP Phone | Switch, router, AP |
| **Tagging** | Tidak | Ya (802.1Q) |
| **Native VLAN** | – | Ada |
| **Contoh** | Fa0/1 ke PC | Gi0/1 ke switch lain |

**Ilustrasi:**
```
ACCESS PORT:
[PC]────[Switch Fa0/1]──── VLAN 10
        (hanya 1 VLAN)

TRUNK PORT:
[Switch Gi0/1]════════════[Switch Gi0/2]
        (banyak VLAN: 10, 20, 30)
```

#### 3.4 Konfigurasi VLAN Cisco

**Langkah 1: Buat VLAN**
```cisco
Switch> enable
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name IT
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name HRD
Switch(config-vlan)# exit

Switch(config)# vlan 30
Switch(config-vlan)# name FINANCE
Switch(config-vlan)# exit
```

**Langkah 2: Konfigurasi Access Port**
```cisco
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# exit

Switch(config)# interface fa0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
Switch(config-if)# exit
```

**Langkah 3: Verifikasi**
```cisco
Switch# show vlan brief
Switch# show vlan id 10
Switch# show interfaces fa0/1 switchport
```

**Output `show vlan brief`:**
```
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/3, Fa0/4, Fa0/5, ...
10   IT                               active    Fa0/1
20   HRD                              active    Fa0/2
30   FINANCE                          active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
```

#### 3.5 Konfigurasi VLAN di Linux (vconfig)

```bash
# Install vlan
sudo apt install vlan -y

# Load module
sudo modprobe 8021q

# Buat VLAN interface
sudo vconfig add eth0 10
sudo vconfig add eth0 20

# Konfigurasi IP
sudo ip addr add 192.168.10.1/24 dev eth0.10
sudo ip addr add 192.168.20.1/24 dev eth0.20

# Aktifkan
sudo ip link set up eth0.10
sudo ip link set up eth0.20

# Verifikasi
ip -d link show eth0.10
```

#### 3.6 Studi Kasus: Segmentasi Kantor

**Kasus:** PT TJKT Mandiri memiliki 3 divisi:
- IT: 10 user
- HRD: 5 user
- Finance: 5 user

**Solusi:**
```
Switch:
- VLAN 10: IT       (Fa0/1-10)
- VLAN 20: HRD      (Fa0/11-15)
- VLAN 30: Finance  (Fa0/16-20)
- VLAN 99: Management
```

**Hasil:**
- Setiap divisi terisolasi
- Broadcast lebih efisien
- Keamanan meningkat

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Diskusi konsep VLAN
- Simulasi VLAN di Packet Tracer
- Konfigurasi VLAN dasar

**Pertemuan 2:**
- Konfigurasi VLAN di switch asli
- Verifikasi dengan show vlan
- Studi kasus segmentasi

### 📝 Praktik

**Tugas:**
1. Buat 3 VLAN (10, 20, 30) di switch
2. Konfigurasi 6 access port (2 per VLAN)
3. Verifikasi dengan show vlan brief
4. Uji isolasi antar VLAN
5. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Konfigurasi VLAN | 40% |
| Access Port | 30% |
| Verifikasi | 20% |
| Dokumentasi | 10% |

---

## 📘 MINGGU 4: Trunking, VTP & Troubleshooting VLAN (TP 10)

> **TP terkait:** TP 10  
> **Alokasi:** 4 JP  
> **Level:** C3

### 🎯 Tujuan Pembelajaran

1. Mengonfigurasi trunk port 802.1Q
2. Mengonfigurasi VTP
3. Melakukan troubleshooting VLAN
4. Memverifikasi trunk

### 📖 Materi

#### 4.1 Konsep Trunking

**Trunk** = jalur yang membawa **banyak VLAN** antara 2 switch.

**Mengapa perlu trunk?**
- Tanpa trunk: butuh 1 kabel per VLAN (boros)
- Dengan trunk: 1 kabel untuk semua VLAN (efisien)

**Ilustrasi:**
```
Tanpa Trunk (BOROS):
[Switch A]────VLAN 10────[Switch B]
[Switch A]────VLAN 20────[Switch B]
[Switch A]────VLAN 30────[Switch B]
(butuh 3 kabel)

Dengan Trunk (EFISIEN):
[Switch A]════TRUNK════[Switch B]
        (1 kabel, semua VLAN)
```

#### 4.2 802.1Q Tagging

**802.1Q** = standar IEEE untuk **VLAN tagging** di trunk.

**Struktur frame 802.1Q:**
```
┌──────────┬──────────┬─────────────┬──────────┬──────────┐
│ Dest MAC │ Src MAC  │ 802.1Q Tag  │  Type    │  Data    │
│ (6 byte) │ (6 byte) │ (4 byte)    │ (2 byte) │ (variabel)│
└──────────┴──────────┴─────────────┴──────────┴──────────┘
                        │
                        ├── TPID (2 byte): 0x8100
                        ├── Priority (3 bit): 0-7
                        ├── CFI (1 bit)
                        └── VLAN ID (12 bit): 1-4094
```

**VLAN ID range:**
- 1–1005: Normal
- 1006–4094: Extended

#### 4.3 Konfigurasi Trunk Cisco

```cisco
Switch(config)# interface gi0/1
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
Switch(config-if)# switchport trunk native vlan 99
Switch(config-if)# no shutdown
Switch(config-if)# exit
```

**Verifikasi:**
```cisco
Switch# show interfaces trunk
Switch# show interfaces gi0/1 switchport
Switch# show vlan brief
```

**Output `show interfaces trunk`:**
```
Port        Mode         Encapsulation  Status        Native vlan
Gi0/1       on           802.1q         trunking      99

Port        Vlans allowed on trunk
Gi0/1       10,20,30

Port        Vlans allowed and active in management domain
Gi0/1       10,20,30

Port        Vlans in spanning tree forwarding state and not pruned
Gi0/1       10,20,30
```

#### 4.4 VTP (VLAN Trunking Protocol)

**VTP** = protokol Cisco untuk **sinkronisasi VLAN** antar switch.

**Manfaat:**
- Tidak perlu buat VLAN di setiap switch
- Konsistensi VLAN
- Mudah dikelola

**Mode VTP:**

| Mode | Keterangan | Bisa buat VLAN? |
|------|-----------|-----------------|
| **Server** | Pusat, bisa buat/ubah/hapus | Ya |
| **Client** | Menerima dari server | Tidak |
| **Transparent** | Tidak ikut VTP, lokal | Ya (lokal) |
| **Off** | VTP dimatikan | Ya (lokal) |

**Konfigurasi VTP Server:**
```cisco
Switch(config)# vtp mode server
Switch(config)# vtp domain TJKT
Switch(config)# vtp password rahasia
Switch(config)# vtp version 2
Switch(config)# exit
```

**Konfigurasi VTP Client:**
```cisco
Switch(config)# vtp mode client
Switch(config)# vtp domain TJKT
Switch(config)# vtp password rahasia
Switch(config)# vtp version 2
```

**Verifikasi:**
```cisco
Switch# show vtp status
Switch# show vtp password
```

**Output:**
```
VTP Version capable             : 1 to 3
VTP version running             : 2
VTP Domain Name                 : TJKT
VTP Pruning Mode                : Disabled
VTP Traps Generation            : Disabled
Device ID                       : 0001.0002.0003
Configuration last modified by 0.0.0.0 at 0-0-00 00:00:00
Local updater ID is 192.168.1.1 on interface Gi0/1

Feature VLAN:
--------------
VTP Operating Mode                : Server
Maximum VLANs supported locally   : 1005
Number of existing VLANs          : 5
Configuration Revision            : 3
```

#### 4.5 Troubleshooting VLAN

| Masalah | Gejala | Penyebab | Solusi |
|---------|--------|----------|--------|
| **VLAN tidak muncul** | Show vlan kosong | VTP mismatch | Samakan domain/password |
| **Trunk tidak jalan** | Show trunk kosong | Encapsulation salah | Set dot1q |
| **Tidak bisa ping** | Ping gagal | VLAN berbeda | Routing |
| **Native VLAN mismatch** | Log error | Beda native | Samakan native |
| **VLAN tidak aktif** | Status act/lshut | Port shutdown | No shutdown |
| **PC tidak dapat IP** | APIPA | DHCP tidak reach | Cek trunk |

**Langkah troubleshooting:**
1. Cek **status port** (`show interfaces status`)
2. Cek **VLAN** (`show vlan brief`)
3. Cek **trunk** (`show interfaces trunk`)
4. Cek **VTP** (`show vtp status`)
5. Cek **native VLAN** (harus sama)
6. Cek **allowed VLAN** di trunk
7. Cek **kabel** (LAN tester)

#### 4.6 Studi Kasus: 2 Switch dengan Trunk

**Topologi:**
```
[PC1]──[SW1 Fa0/1]════TRUNK════[SW2 Fa0/1]──[PC2]
       VLAN 10                    VLAN 10
       
[PC3]──[SW1 Fa0/2]              [SW2 Fa0/2]──[PC4]
       VLAN 20                    VLAN 20
```

**Konfigurasi SW1:**
```cisco
SW1(config)# vlan 10
SW1(config-vlan)# name IT
SW1(config-vlan)# vlan 20
SW1(config-vlan)# name HRD
SW1(config-vlan)# exit

SW1(config)# interface fa0/1
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 10

SW1(config)# interface fa0/2
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 20

SW1(config)# interface gi0/1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 10,20
```

**Konfigurasi SW2:** (sama, sesuaikan port)

**Verifikasi:**
- PC1 bisa ping PC2 (VLAN 10) ✓
- PC3 bisa ping PC4 (VLAN 20) ✓
- PC1 tidak bisa ping PC3 (beda VLAN) ✓

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Konfigurasi trunk di 2 switch
- Verifikasi trunk
- Uji isolasi VLAN

**Pertemuan 2:**
- Konfigurasi VTP
- Troubleshooting kasus
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Konfigurasi 2 switch dengan trunk
2. Buat 3 VLAN
3. Konfigurasi VTP
4. Uji koneksi antar VLAN
5. Troubleshooting 2 kasus
6. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Trunking | 30% |
| VTP | 20% |
| Troubleshooting | 30% |
| Dokumentasi | 20% |

---

## 📘 MINGGU 5: Inter-VLAN Routing (TP 11)

> **TP terkait:** TP 11  
> **Alokasi:** 4 JP  
> **Level:** C3

### 🎯 Tujuan Pembelajaran

1. Menjelaskan konsep inter-VLAN routing
2. Mengonfigurasi router-on-a-stick
3. Mengonfigurasi SVI di L3 switch
4. Memverifikasi routing antar VLAN

### 📖 Materi

#### 5.1 Konsep Inter-VLAN Routing

**Inter-VLAN Routing** = menghubungkan VLAN yang berbeda agar bisa komunikasi.

**Mengapa perlu?**
- VLAN memisahkan jaringan (isolasi)
- Tapi kadang perlu komunikasi (misal: IT perlu akses server di VLAN lain)
- Butuh **router** atau **L3 switch**

**Analogi:**  
VLAN seperti **ruangan terpisah**. Untuk pindah ruangan, butuh **pintu** (router). Tanpa pintu, tidak bisa pindah.

#### 5.2 Metode Inter-VLAN Routing

| Metode | Keterangan | Kelebihan | Kekurangan |
|--------|-----------|-----------|------------|
| **Legacy** | Router dengan banyak interface | Sederhana | Boros port |
| **Router-on-a-Stick** | 1 interface, sub-interface | Hemat port | Terbatas bandwidth |
| **L3 Switch (SVI)** | Switch layer 3 | Cepat | Mahal |

**Ilustrasi:**

```
LEGACY:
[Switch]──[Router Gi0/0]── VLAN 10
[Switch]──[Router Gi0/1]── VLAN 20
(butuh 2 interface)

ROUTER-ON-A-STICK:
[Switch]════[Router Gi0/0]═══
              ├── Gi0/0.10 → VLAN 10
              └── Gi0/0.20 → VLAN 20
(1 interface, sub-interface)

L3 SWITCH:
[L3 Switch]── SVI VLAN 10
            ── SVI VLAN 20
(tanpa router eksternal)
```

#### 5.3 Konfigurasi Router-on-a-Stick

**Topologi:**
```
[PC1]──[SW Fa0/1]──VLAN 10
[PC2]──[SW Fa0/2]──VLAN 20
              │
         [SW Gi0/1]
              │
         [Router Gi0/0]
```

**Konfigurasi Switch:**
```cisco
SW(config)# vlan 10
SW(config-vlan)# name IT
SW(config-vlan)# vlan 20
SW(config-vlan)# name HRD
SW(config-vlan)# exit

SW(config)# interface fa0/1
SW(config-if)# switchport mode access
SW(config-if)# switchport access vlan 10

SW(config)# interface fa0/2
SW(config-if)# switchport mode access
SW(config-if)# switchport access vlan 20

SW(config)# interface gi0/1
SW(config-if)# switchport trunk encapsulation dot1q
SW(config-if)# switchport mode trunk
SW(config-if)# switchport trunk allowed vlan 10,20
```

**Konfigurasi Router:**
```cisco
Router(config)# interface gi0/0
Router(config-if)# no shutdown
Router(config-if)# exit

Router(config)# interface gi0/0.10
Router(config-subif)# encapsulation dot1q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit

Router(config)# interface gi0/0.20
Router(config-subif)# encapsulation dot1q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# exit
```

**Verifikasi:**
```cisco
Router# show ip interface brief
Router# show ip route
Router# ping 192.168.10.2
Router# ping 192.168.20.2
```

#### 5.4 Konfigurasi SVI di L3 Switch

```cisco
Switch(config)# ip routing

Switch(config)# vlan 10
Switch(config-vlan)# name IT
Switch(config-vlan)# vlan 20
Switch(config-vlan)# name HRD
Switch(config-vlan)# exit

Switch(config)# interface vlan 10
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config-if)# no shutdown
Switch(config-if)# exit

Switch(config)# interface vlan 20
Switch(config-if)# ip address 192.168.20.1 255.255.255.0
Switch(config-if)# no shutdown
Switch(config-if)# exit
```

**Verifikasi:**
```cisco
Switch# show ip route
Switch# show interfaces vlan 10
Switch# ping 192.168.10.2
```

#### 5.5 Konfigurasi di Linux (Router)

```bash
# Aktifkan IP forwarding
sudo sysctl -w net.ipv4.ip_forward=1
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf

# Buat sub-interface
sudo vconfig add eth0 10
sudo vconfig add eth0 20

# Konfigurasi IP
sudo ip addr add 192.168.10.1/24 dev eth0.10
sudo ip addr add 192.168.20.1/24 dev eth0.20

# Aktifkan
sudo ip link set up eth0.10
sudo ip link set up eth0.20

# Verifikasi
ip addr show
ip route show
```

#### 5.6 Studi Kasus: 3 VLAN

**Topologi:**
```
VLAN 10 (IT):      192.168.10.0/24
VLAN 20 (HRD):     192.168.20.0/24
VLAN 30 (Finance): 192.168.30.0/24

Gateway:
- VLAN 10: 192.168.10.1
- VLAN 20: 192.168.20.1
- VLAN 30: 192.168.30.1
```

**Konfigurasi Router:**
```cisco
Router(config)# interface gi0/0.10
Router(config-subif)# encapsulation dot1q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0

Router(config)# interface gi0/0.20
Router(config-subif)# encapsulation dot1q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0

Router(config)# interface gi0/0.30
Router(config-subif)# encapsulation dot1q 30
Router(config-subif)# ip address 192.168.30.1 255.255.255.0
```

**Uji:**
- PC VLAN 10 ping PC VLAN 20 → ✓
- PC VLAN 10 ping PC VLAN 30 → ✓
- PC VLAN 20 ping PC VLAN 30 → ✓

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Konsep inter-VLAN
- Konfigurasi router-on-a-stick

**Pertemuan 2:**
- Konfigurasi SVI
- Uji konektivitas
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Bangun topologi 3 VLAN
2. Konfigurasi router-on-a-stick
3. Uji ping antar VLAN
4. Konfigurasi SVI (alternatif)
5. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Konfigurasi router | 40% |
| Konfigurasi switch | 20% |
| Uji konektivitas | 30% |
| Dokumentasi | 10% |

---

## 📘 MINGGU 6: Routing Statis & Dinamis (RIP/OSPF) (TP 11)

> **TP terkait:** TP 11  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Mengonfigurasi routing statis
2. Mengonfigurasi RIP v2
3. Mengonfigurasi OSPF single area
4. Memverifikasi tabel routing

### 📖 Materi

#### 6.1 Konsep Routing

**Routing** = proses menentukan **jalur** terbaik untuk mengirim paket dari sumber ke tujuan.

**Analogi:**  
Routing seperti **GPS**. Anda memberi tahu tujuan, GPS mencari jalur terbaik.

**Jenis routing:**
| Jenis | Keterangan |
|-------|-----------|
| **Static** | Manual, ditentukan admin |
| **Dynamic** | Otomatis, protokol routing |
| **Default** | Jalur "kalau tidak ada yang cocok" |

#### 6.2 Routing Statis

**Kelebihan:** Sederhana, aman, tidak ada overhead.  
**Kekurangan:** Tidak scalable, manual.

**Konfigurasi:**
```cisco
! Route ke jaringan spesifik
Router(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.2

! Default route
Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1

! Route dengan exit interface
Router(config)# ip route 192.168.20.0 255.255.255.0 gi0/1
```

**Verifikasi:**
```cisco
Router# show ip route
Router# show ip route static
Router# ping 192.168.20.1
```

**Output `show ip route`:**
```
Codes: C - connected, S - static, R - RIP, O - OSPF, ...
Gateway of last resort is 10.0.0.1 to network 0.0.0.0

S*   0.0.0.0/0 [1/0] via 10.0.0.1
C    10.0.0.0/30 is directly connected, Gi0/1
C    192.168.10.0/24 is directly connected, Gi0/0
S    192.168.20.0/24 [1/0] via 10.0.0.2
```

#### 6.3 Routing Dinamis: RIP v2

**RIP (Routing Information Protocol)** = protokol distance-vector, hop count max 15.

**Karakteristik:**
- Metric: hop count
- Update: setiap 30 detik
- Max hop: 15
- Cocok untuk jaringan kecil

**Konfigurasi:**
```cisco
Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# no auto-summary
Router(config-router)# network 192.168.10.0
Router(config-router)# network 10.0.0.0
Router(config-router)# exit
```

**Verifikasi:**
```cisco
Router# show ip route
Router# show ip protocols
Router# show ip rip database
```

#### 6.4 Routing Dinamis: OSPF

**OSPF (Open Shortest Path First)** = protokol link-state, metric cost.

**Karakteristik:**
- Metric: cost (berdasarkan bandwidth)
- Update: trigger-based
- Scalable (cocok untuk jaringan besar)
- Area-based

**Konfigurasi:**
```cisco
Router(config)# router ospf 1
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0
Router(config-router)# exit
```

**Verifikasi:**
```cisco
Router# show ip route
Router# show ip protocols
Router# show ip ospf neighbor
Router# show ip ospf database
```

**Output `show ip ospf neighbor`:**
```
Neighbor ID     Pri   State           Dead Time   Address         Interface
2.2.2.2           1   FULL/DR         00:00:38    10.0.0.2        Gi0/1
```

#### 6.5 Perbandingan RIP vs OSPF

| Aspek | RIP v2 | OSPF |
|-------|--------|------|
| Tipe | Distance-vector | Link-state |
| Metric | Hop count | Cost |
| Max hop | 15 | Tidak terbatas |
| Update | Periodik (30s) | Trigger |
| Scalability | Kecil | Besar |
| Konvergensi | Lambat | Cepat |
| Area | Tidak | Ya |
| Kompleksitas | Rendah | Tinggi |

#### 6.6 Studi Kasus: 3 Router OSPF

**Topologi:**
```
[R1]────10.0.0.0/30────[R2]────10.0.0.4/30────[R3]
 │                       │                       │
192.168.1.0/24         192.168.2.0/24         192.168.3.0/24
```

**Konfigurasi R1:**
```cisco
R1(config)# router ospf 1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0
```

**Konfigurasi R2:**
```cisco
R2(config)# router ospf 1
R2(config-router)# network 192.168.2.0 0.0.0.255 area 0
R2(config-router)# network 10.0.0.0 0.0.0.3 area 0
R2(config-router)# network 10.0.0.4 0.0.0.3 area 0
```

**Konfigurasi R3:**
```cisco
R3(config)# router ospf 1
R3(config-router)# network 192.168.3.0 0.0.0.255 area 0
R3(config-router)# network 10.0.0.4 0.0.0.3 area 0
```

**Uji:**
- R1 ping R3 → ✓
- PC 192.168.1.1 ping PC 192.168.3.1 → ✓
- Traceroute menunjukkan jalur R1→R2→R3

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Routing statis
- RIP v2

**Pertemuan 2:**
- OSPF
- Verifikasi & troubleshooting
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Bangun topologi 3 router
2. Konfigurasi routing statis
3. Konfigurasi RIP v2
4. Konfigurasi OSPF
5. Bandingkan hasil
6. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Routing statis | 20% |
| RIP | 20% |
| OSPF | 40% |
| Dokumentasi | 20% |

---

## 📘 MINGGU 7: Layanan Jaringan (DHCP, DNS, Web, FTP) (TP 12)

> **TP terkait:** TP 12  
> **Alokasi:** 4 JP  
> **Level:** C3

### 🎯 Tujuan Pembelajaran

1. Menginstal & mengonfigurasi DHCP server
2. Menginstal & mengonfigurasi DNS server
3. Menginstal & mengonfigurasi Web server
4. Menginstal & mengonfigurasi FTP server
5. Mengonfigurasi NTP & Syslog

### 📖 Materi

#### 7.1 DHCP Server (ISC DHCP)

**Fungsi:** Memberikan IP otomatis ke klien.

**Instalasi:**
```bash
sudo apt update
sudo apt install isc-dhcp-server -y
```

**Konfigurasi `/etc/dhcp/dhcpd.conf`:**
```conf
# Global
option domain-name "tjkt.local";
option domain-name-servers 192.168.10.2;
default-lease-time 600;
max-lease-time 7200;
authoritative;

# Subnet
subnet 192.168.10.0 netmask 255.255.255.0 {
  range 192.168.10.100 192.168.10.200;
  option routers 192.168.10.1;
  option broadcast-address 192.168.10.255;
}

subnet 192.168.20.0 netmask 255.255.255.0 {
  range 192.168.20.100 192.168.20.200;
  option routers 192.168.20.1;
}

# Reservasi (fixed IP)
host printer {
  hardware ethernet 00:11:22:33:44:55;
  fixed-address 192.168.10.50;
}
```

**Konfigurasi `/etc/default/isc-dhcp-server`:**
```conf
INTERFACESv4="eth0"
```

**Aktifkan:**
```bash
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server
sudo systemctl status isc-dhcp-server
```

**Verifikasi:**
```bash
sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf
cat /var/lib/dhcp/dhcpd.leases
```

#### 7.2 DNS Server (BIND9)

**Fungsi:** Menerjemahkan nama domain ke IP.

**Instalasi:**
```bash
sudo apt install bind9 bind9utils -y
```

**Konfigurasi `/etc/bind/named.conf.local`:**
```conf
zone "tjkt.local" {
  type master;
  file "/etc/bind/db.tjkt";
  allow-transfer { 192.168.10.3; };
};

zone "10.168.192.in-addr.arpa" {
  type master;
  file "/etc/bind/db.192.168.10";
};
```

**Konfigurasi `/etc/bind/db.tjkt`:**
```dns
$TTL 86400
@ IN SOA ns1.tjkt.local. admin.tjkt.local. (
  2025011501 ; Serial
  3600       ; Refresh
  1800       ; Retry
  604800     ; Expire
  86400      ; Minimum TTL
)
@ IN NS ns1.tjkt.local.
@ IN MX 10 mail.tjkt.local.
@ IN A 192.168.10.2
ns1 IN A 192.168.10.2
www IN A 192.168.10.3
mail IN A 192.168.10.4
ftp IN A 192.168.10.5
router IN A 192.168.10.1
```

**Konfigurasi `/etc/bind/db.192.168.10`:**
```dns
$TTL 86400
@ IN SOA ns1.tjkt.local. admin.tjkt.local. (
  2025011501
  3600
  1800
  604800
  86400
)
@ IN NS ns1.tjkt.local.
2 IN PTR ns1.tjkt.local.
3 IN PTR www.tjkt.local.
4 IN PTR mail.tjkt.local.
5 IN PTR ftp.tjkt.local.
```

**Aktifkan:**
```bash
sudo named-checkconf
sudo named-checkzone tjkt.local /etc/bind/db.tjkt
sudo systemctl restart bind9
sudo systemctl enable bind9
```

**Verifikasi:**
```bash
nslookup www.tjkt.local
dig @localhost www.tjkt.local
host www.tjkt.local
```

#### 7.3 Web Server (Apache)

**Instalasi:**
```bash
sudo apt install apache2 -y
sudo systemctl enable apache2
sudo systemctl start apache2
```

**Konfigurasi Virtual Host:**
```bash
sudo nano /etc/apache2/sites-available/tjkt.conf
```

```apache
<VirtualHost *:80>
  ServerName www.tjkt.local
  ServerAdmin admin@tjkt.local
  DocumentRoot /var/www/tjkt
  ErrorLog ${APACHE_LOG_DIR}/tjkt_error.log
  CustomLog ${APACHE_LOG_DIR}/tjkt_access.log combined
</VirtualHost>
```

**Aktifkan:**
```bash
sudo mkdir -p /var/www/tjkt
echo "<h1>Selamat Datang di TJKT</h1>" | sudo tee /var/www/tjkt/index.html
sudo a2ensite tjkt.conf
sudo a2enmod rewrite
sudo systemctl reload apache2
```

**Verifikasi:**
```bash
curl http://www.tjkt.local
curl http://localhost
```

#### 7.4 FTP Server (vsftpd)

**Instalasi:**
```bash
sudo apt install vsftpd -y
```

**Konfigurasi `/etc/vsftpd.conf`:**
```conf
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
use_localtime=YES
xferlog_enable=YES
connect_from_port_20=YES
chroot_local_user=YES
allow_writeable_chroot=YES
pasv_enable=YES
pasv_min_port=40000
pasv_max_port=40100
```

**Aktifkan:**
```bash
sudo systemctl restart vsftpd
sudo systemctl enable vsftpd
```

**Verifikasi:**
```bash
ftp localhost
# Login dengan user lokal
```

#### 7.5 NTP Server

**Instalasi:**
```bash
sudo apt install ntp -y
```

**Konfigurasi `/etc/ntp.conf`:**
```conf
pool 0.id.pool.ntp.org iburst
pool 1.id.pool.ntp.org iburst
restrict -4 default kod notrap nomodify nopeer noquery limited
restrict -6 default kod notrap nomodify nopeer noquery limited
restrict 127.0.0.1
restrict ::1
```

**Verifikasi:**
```bash
sudo systemctl restart ntp
ntpq -p
ntpdate -q 0.id.pool.ntp.org
```

#### 7.6 Syslog Server

**Instalasi:**
```bash
sudo apt install rsyslog -y
```

**Konfigurasi `/etc/rsyslog.conf`:**
```conf
# Aktifkan UDP
module(load="imudp")
input(type="imudp" port="514")

# Aktifkan TCP
module(load="imtcp")
input(type="imtcp" port="514")

# Template
$template RemoteLogs,"/var/log/remote/%HOSTNAME%/%PROGRAMNAME%.log"
*.* ?RemoteLogs
& stop
```

**Aktifkan:**
```bash
sudo systemctl restart rsyslog
sudo mkdir -p /var/log/remote
sudo chown syslog:adm /var/log/remote
```

**Konfigurasi di Cisco:**
```cisco
logging host 192.168.10.20
logging trap informational
logging source-interface gi0/0
```

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Instalasi DHCP & DNS
- Uji dari klien

**Pertemuan 2:**
- Instalasi Web & FTP
- NTP & Syslog
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Instalasi DHCP server
2. Instalasi DNS server (domain tjkt.local)
3. Instalasi Web server (www.tjkt.local)
4. Instalasi FTP server
5. Uji semua layanan
6. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| DHCP | 20% |
| DNS | 25% |
| Web | 20% |
| FTP | 15% |
| NTP/Syslog | 10% |
| Dokumentasi | 10% |

---

## 📘 MINGGU 8: Evaluasi Tengah Semester (UTS)

> **Alokasi:** 4 JP  
> **Bentuk:** Teori + Praktik

### 📋 Kisi-Kisi UTS

| No | Materi | Bentuk | Bobot |
|----|--------|--------|-------|
| 1 | OSI/TCP-IP & IP addressing | PG + Essay | 10% |
| 2 | Subnetting & VLSM | PG + Essay | 20% |
| 3 | VLAN & Trunking | PG + Praktik | 25% |
| 4 | Inter-VLAN & Routing | PG + Praktik | 25% |
| 5 | Layanan Jaringan | PG + Essay | 15% |
| 6 | Troubleshooting | Essay | 5% |

### 📝 Contoh Soal

**A. Pilihan Ganda (30 soal)**
1. Jumlah host usable untuk prefix /27 adalah...
   - a. 30 ✓
   - b. 32
   - c. 62
   - d. 64

**B. Essay (5 soal)**
1. Subnetkan `172.16.0.0/16` menjadi 8 subnet! Tuliskan tabel lengkap!
2. Jelaskan perbedaan access port & trunk port!
3. Konfigurasi VLAN 10 & 20 di switch Cisco!
4. Jelaskan cara kerja router-on-a-stick!
5. Sebutkan 3 layanan jaringan dan fungsinya!

**C. Praktik**
1. Konfigurasi 3 VLAN + trunk + inter-VLAN routing
2. Uji ping antar VLAN
3. Dokumentasi

### ✅ Kriteria Kelulusan

| Nilai | Kategori |
|-------|----------|
| 85–100 | Sangat Baik |
| 70–84 | Baik |
| 60–69 | Cukup |
| < 60 | Remidi |

---

## 📘 MINGGU 9: Keamanan Jaringan — ACL & Firewall (TP 13)

> **TP terkait:** TP 13  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Menjelaskan konsep keamanan CIA
2. Mengonfigurasi ACL standard & extended
3. Mengonfigurasi firewall Linux
4. Menganalisis log keamanan

### 📖 Materi

#### 9.1 Konsep Keamanan CIA

| Aspek | Keterangan | Contoh |
|-------|-----------|--------|
| **Confidentiality** | Kerahasiaan data | Enkripsi, password |
| **Integrity** | Keutuhan data | Hash, checksum |
| **Availability** | Ketersediaan layanan | Backup, redundancy |

**Ancaman umum:**
- Malware (virus, worm, trojan)
- Phishing
- DDoS
- Man-in-the-middle
- SQL injection
- Brute force

#### 9.2 ACL (Access Control List)

**ACL** = daftar aturan untuk **mengizinkan** atau **menolak** traffic.

**Jenis ACL:**

| Jenis | Nomor | Keterangan |
|-------|-------|-----------|
| **Standard** | 1-99, 1300-1999 | Berdasarkan source IP |
| **Extended** | 100-199, 2000-2699 | Source, dest, port, protokol |
| **Named** | Nama | ACL dengan nama |

**Aturan penting:**
- ACL dibaca **dari atas ke bawah**
- **First match** yang berlaku
- Ada **implicit deny** di akhir

**Standard ACL:**
```cisco
! Izinkan network 192.168.10.0/24
Router(config)# access-list 10 permit 192.168.10.0 0.0.0.255
Router(config)# access-list 10 deny any

! Terapkan ke interface
Router(config)# interface gi0/1
Router(config-if)# ip access-group 10 out
```

**Extended ACL:**
```cisco
! Izinkan HTTP & HTTPS dari 192.168.10.0/24
Router(config)# access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq 80
Router(config)# access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq 443

! Izinkan DNS
Router(config)# access-list 100 permit udp 192.168.10.0 0.0.0.255 any eq 53

! Izinkan ping
Router(config)# access-list 100 permit icmp 192.168.10.0 0.0.0.255 any echo

! Tolak sisanya
Router(config)# access-list 100 deny ip any any

! Terapkan
Router(config)# interface gi0/0
Router(config-if)# ip access-group 100 in
```

**Verifikasi:**
```cisco
Router# show access-lists
Router# show ip interface gi0/0
Router# show ip access-lists 100
```

#### 9.3 Firewall Linux (iptables)

**Konsep:**
```
┌─────────────────────────────────────┐
│           iptables                   │
│                                     │
│  Tables:                            │
│  ├── filter (default)               │
│  │   ├── INPUT                      │
│  │   ├── FORWARD                    │
│  │   └── OUTPUT                     │
│  ├── nat                            │
│  │   ├── PREROUTING                 │
│  │   ├── POSTROUTING                │
│  │   └── OUTPUT                     │
│  └── mangle                         │
└─────────────────────────────────────┘
```

**Konfigurasi dasar:**
```bash
# Reset
sudo iptables -F
sudo iptables -X
sudo iptables -t nat -F

# Default policy
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT

# Izinkan loopback
sudo iptables -A INPUT -i lo -j ACCEPT

# Izinkan established
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Izinkan SSH
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Izinkan HTTP/HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Izinkan ping
sudo iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT

# Log & drop sisanya
sudo iptables -A INPUT -j LOG --log-prefix "IPTABLES-DROP: "
sudo iptables -A INPUT -j DROP

# Simpan
sudo apt install iptables-persistent -y
sudo netfilter-persistent save
```

**Verifikasi:**
```bash
sudo iptables -L -n -v
sudo iptables -t nat -L -n -v
```

#### 9.4 Firewall Linux (nftables)

```bash
# Buat table
sudo nft add table inet filter

# Buat chain
sudo nft add chain inet filter input { type filter hook input priority 0\; policy drop\; }
sudo nft add chain inet filter forward { type filter hook forward priority 0\; policy drop\; }
sudo nft add chain inet filter output { type filter hook output priority 0\; policy accept\; }

# Izinkan loopback
sudo nft add rule inet filter input iif lo accept

# Izinkan established
sudo nft add rule inet filter input ct state established,related accept

# Izinkan SSH, HTTP, HTTPS
sudo nft add rule inet filter input tcp dport { 22, 80, 443 } accept

# Izinkan ping
sudo nft add rule inet filter input icmp type echo-request accept

# Log & drop
sudo nft add rule inet filter input log prefix \"NFT-DROP: \" drop

# Simpan
sudo nft list ruleset > /etc/nftables.conf
```

#### 9.5 Studi Kasus: Membatasi Akses

**Kasus:** Divisi Finance (VLAN 30) hanya boleh akses server (VLAN 40), tidak boleh akses internet.

**Solusi dengan ACL:**
```cisco
! Izinkan Finance ke Server
Router(config)# access-list 101 permit ip 192.168.30.0 0.0.0.255 192.168.40.0 0.0.0.255

! Tolak Finance ke internet
Router(config)# access-list 101 deny ip 192.168.30.0 0.0.0.255 any

! Izinkan lainnya
Router(config)# access-list 101 permit ip any any

! Terapkan
Router(config)# interface gi0/0.30
Router(config-subif)# ip access-group 101 in
```

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Konsep CIA
- ACL standard & extended

**Pertemuan 2:**
- Firewall Linux
- Studi kasus
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Konfigurasi ACL standard
2. Konfigurasi ACL extended
3. Konfigurasi firewall Linux
4. Uji akses
5. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| ACL | 40% |
| Firewall | 40% |
| Dokumentasi | 20% |

---

## 📘 MINGGU 10: NAT & Hardening Perangkat (TP 13)

> **TP terkait:** TP 13  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Menjelaskan konsep NAT
2. Mengonfigurasi NAT statis, dinamis, PAT
3. Melakukan hardening perangkat
4. Menganalisis log keamanan

### 📖 Materi

#### 10.1 Konsep NAT

**NAT (Network Address Translation)** = menerjemahkan IP private ke IP public.

**Mengapa perlu?**
- IP public terbatas
- IP private tidak bisa di internet
- Keamanan (menyembunyikan IP internal)

**Jenis NAT:**

| Jenis | Keterangan | Contoh |
|-------|-----------|--------|
| **Static NAT** | 1 private ↔ 1 public | Server |
| **Dynamic NAT** | Pool public | Klien |
| **PAT (Overload)** | Banyak private → 1 public | Umum |

**Ilustrasi:**
```
Static NAT:
192.168.1.10 ←→ 203.0.113.10

Dynamic NAT:
192.168.1.10 → 203.0.113.10
192.168.1.11 → 203.0.113.11
192.168.1.12 → 203.0.113.12

PAT:
192.168.1.10:1234 ─┐
192.168.1.11:1235 ─┼→ 203.0.113.10
192.168.1.12:1236 ─┘
```

#### 10.2 Konfigurasi Static NAT

```cisco
Router(config)# ip nat inside source static 192.168.1.10 203.0.113.10

Router(config)# interface gi0/0
Router(config-if)# ip nat inside

Router(config)# interface gi0/1
Router(config-if)# ip nat outside
```

#### 10.3 Konfigurasi Dynamic NAT

```cisco
! Definisikan pool
Router(config)# ip nat pool PUBLIC 203.0.113.10 203.0.113.20 netmask 255.255.255.0

! Definisikan ACL
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! Terapkan
Router(config)# ip nat inside source list 1 pool PUBLIC

! Interface
Router(config)# interface gi0/0
Router(config-if)# ip nat inside
Router(config)# interface gi0/1
Router(config-if)# ip nat outside
```

#### 10.4 Konfigurasi PAT (Overload)

```cisco
! ACL
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! PAT
Router(config)# ip nat inside source list 1 interface gi0/1 overload

! Interface
Router(config)# interface gi0/0
Router(config-if)# ip nat inside
Router(config)# interface gi0/1
Router(config-if)# ip nat outside
```

**Verifikasi:**
```cisco
Router# show ip nat translations
Router# show ip nat statistics
Router# clear ip nat translation *
```

**Output:**
```
Pro Inside global      Inside local       Outside local      Outside global
tcp 203.0.113.10:1024  192.168.1.10:1024  8.8.8.8:53         8.8.8.8:53
tcp 203.0.113.10:1025  192.168.1.11:1025  8.8.8.8:80         8.8.8.8:80
```

#### 10.5 NAT di Linux (iptables)

```bash
# Aktifkan IP forwarding
sudo sysctl -w net.ipv4.ip_forward=1

# PAT (Masquerade)
sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE

# Static NAT (DNAT)
sudo iptables -t nat -A PREROUTING -i eth1 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80

# Simpan
sudo netfilter-persistent save
```

#### 10.6 Hardening Perangkat

**Cisco Hardening:**
```cisco
! Ganti hostname
Router(config)# hostname R1

! Password enable
R1(config)# enable secret Rahasia123!

! Password console
R1(config)# line console 0
R1(config-line)# password Console123!
R1(config-line)# login
R1(config-line)# exit

! Password VTY (SSH)
R1(config)# line vty 0 4
R1(config-line)# transport input ssh
R1(config-line)# login local
R1(config-line)# exit

! User lokal
R1(config)# username admin secret Admin123!

! SSH
R1(config)# ip domain-name tjkt.local
R1(config)# crypto key generate rsa modulus 2048
R1(config)# ip ssh version 2

! Banner
R1(config)# banner motd #AUTHORIZED ACCESS ONLY#

! Matikan service tidak perlu
R1(config)# no ip http server
R1(config)# no cdp run

! Simpan
R1# copy running-config startup-config
```

**Linux Hardening:**
```bash
# Update sistem
sudo apt update && sudo apt upgrade -y

# SSH hardening
sudo nano /etc/ssh/sshd_config
# PermitRootLogin no
# PasswordAuthentication no
# Port 2222

# Firewall
sudo ufw enable
sudo ufw allow 2222/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Fail2ban
sudo apt install fail2ban -y

# Update otomatis
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

#### 10.7 Analisis Log

**Cisco:**
```cisco
R1# show logging
R1# show users
R1# show ssh
R1# show ip ssh
```

**Linux:**
```bash
# Auth log
sudo tail -f /var/log/auth.log

# Syslog
sudo tail -f /var/log/syslog

# Fail2ban
sudo fail2ban-client status sshd
```

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Konsep NAT
- Konfigurasi NAT (Cisco & Linux)

**Pertemuan 2:**
- Hardening perangkat
- Analisis log
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Konfigurasi static NAT
2. Konfigurasi PAT
3. Hardening router Cisco
4. Hardening Linux
5. Analisis log
6. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| NAT | 40% |
| Hardening | 40% |
| Log analysis | 10% |
| Dokumentasi | 10% |

---

## 📘 MINGGU 11: Konsep VPN & WireGuard (TP 14)

> **TP terkait:** TP 14  
> **Alokasi:** 4 JP  
> **Level:** C2–C3

### 🎯 Tujuan Pembelajaran

1. Menjelaskan konsep VPN & tunneling
2. Mengonfigurasi WireGuard server
3. Mengonfigurasi WireGuard client
4. Menguji koneksi VPN

### 📖 Materi

#### 11.1 Konsep VPN

**VPN (Virtual Private Network)** = jaringan **privat virtual** yang dibangun di atas jaringan **publik**.

**Analogi:**  
Bayangkan Anda ingin mengirim **surat rahasia** melalui **kantor pos umum**. Anda masukkan surat ke **kotak terkunci** (tunnel), lalu kirim. Hanya penerima yang punya kunci yang bisa membuka.

**Manfaat VPN:**
- **Kerahasiaan** – data terenkripsi
- **Integritas** – data tidak bisa diubah
- **Autentikasi** – memastikan identitas
- **Akses remote** – akses kantor dari luar
- **Bypass geo-blocking** – akses konten terbatas

#### 11.2 Jenis VPN

| Jenis | Keterangan | Contoh |
|-------|-----------|--------|
| **Site-to-Site** | Antar kantor | Kantor Jakarta ↔ Surabaya |
| **Remote Access** | User ke kantor | Karyawan WFH |
| **Client-to-Site** | Laptop ke kantor | Sales di lapangan |
| **Site-to-Client** | Kantor ke user | Jarang |

#### 11.3 Protokol VPN

| Protokol | Enkripsi | Kecepatan | Platform | Kesulitan |
|----------|----------|-----------|----------|-----------|
| **WireGuard** | ChaCha20 | Sangat cepat | Linux, mobile | Mudah |
| **OpenVPN** | AES | Sedang | Multi | Sedang |
| **IPSec** | AES | Cepat | Cisco, Linux | Sulit |
| **L2TP/IPSec** | AES | Sedang | Multi | Sedang |
| **PPTP** | Lemah | Cepat | Legacy | Mudah |
| **SSTP** | AES | Sedang | Windows | Mudah |

#### 11.4 WireGuard

**WireGuard** = protokol VPN modern, ringan, cepat, dan aman.

**Kelebihan:**
- Kode hanya ~4000 baris (OpenVPN ~100.000)
- Cepat (menggunakan ChaCha20)
- Mudah dikonfigurasi
- Built-in di Linux kernel 5.6+

**Instalasi:**
```bash
sudo apt update
sudo apt install wireguard -y
```

**Generate Key:**
```bash
# Private key
wg genkey | tee privatekey | wg pubkey > publickey

# Atau untuk server & client
wg genkey | tee server_private.key | wg pubkey > server_public.key
wg genkey | tee client_private.key | wg pubkey > client_public.key
```

**Konfigurasi Server `/etc/wireguard/wg0.conf`:**
```ini
[Interface]
Address = 10.10.0.1/24
ListenPort = 51820
PrivateKey = <server_private_key>
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT
PostUp = iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT
PostDown = iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
# Client 1
PublicKey = <client1_public_key>
AllowedIPs = 10.10.0.2/32

[Peer]
# Client 2
PublicKey = <client2_public_key>
AllowedIPs = 10.10.0.3/32
```

**Aktifkan:**
```bash
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
sudo wg show
```

**Konfigurasi Client `/etc/wireguard/wg0.conf`:**
```ini
[Interface]
Address = 10.10.0.2/24
PrivateKey = <client_private_key>
DNS = 8.8.8.8

[Peer]
PublicKey = <server_public_key>
Endpoint = 203.0.113.10:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```

**Aktifkan Client:**
```bash
sudo wg-quick up wg0
sudo wg show
ping 10.10.0.1
```

**Verifikasi:**
```bash
# Di server
sudo wg show
# Output: peer, endpoint, allowed ips, latest handshake, transfer

# Di client
sudo wg show
ping 10.10.0.1
curl ifconfig.me  # Cek IP public
```

#### 11.5 Studi Kasus: Remote Access

**Kasus:** Karyawan ingin akses server kantor (192.168.10.10) dari rumah.

**Solusi:**
1. Server VPN di kantor (IP public: 203.0.113.10)
2. Client VPN di rumah
3. AllowedIPs = 192.168.10.0/24 (hanya akses jaringan kantor)

**Konfigurasi Client:**
```ini
[Interface]
Address = 10.10.0.2/24
PrivateKey = <client_private_key>

[Peer]
PublicKey = <server_public_key>
Endpoint = 203.0.113.10:51820
AllowedIPs = 192.168.10.0/24
PersistentKeepalive = 25
```

**Uji:**
```bash
ping 192.168.10.10
ssh user@192.168.10.10
```

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Konsep VPN
- Instalasi WireGuard
- Generate key

**Pertemuan 2:**
- Konfigurasi server & client
- Uji koneksi
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Instalasi WireGuard
2. Konfigurasi server
3. Konfigurasi 2 client
4. Uji koneksi antar client
5. Uji akses ke jaringan kantor
6. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Instalasi | 20% |
| Konfigurasi server | 30% |
| Konfigurasi client | 30% |
| Dokumentasi | 20% |

---

## 📘 MINGGU 12: OpenVPN & SSH Tunnel (TP 14)

> **TP terkait:** TP 14  
> **Alokasi:** 4 JP  
> **Level:** C3

### 🎯 Tujuan Pembelajaran

1. Mengonfigurasi OpenVPN server
2. Mengonfigurasi OpenVPN client
3. Mengonfigurasi SSH tunnel
4. Menguji koneksi

### 📖 Materi

#### 12.1 OpenVPN

**OpenVPN** = protokol VPN open source, fleksibel, dan aman.

**Kelebihan:**
- Cross-platform
- Fleksibel (TCP/UDP)
- Banyak fitur
- Komunitas besar

**Kekurangan:**
- Lebih kompleks dari WireGuard
- Sedikit lebih lambat

#### 12.2 Instalasi OpenVPN

```bash
sudo apt update
sudo apt install openvpn easy-rsa -y
```

**Setup CA:**
```bash
make-cadir ~/openvpn-ca
cd ~/openvpn-ca
./easyrsa init-pki
./easyrsa build-ca nopass
./easyrsa gen-req server nopass
./easyrsa sign-req server server
./easyrsa gen-dh
openvpn --genkey --secret ta.key

# Client
./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1
```

**Konfigurasi Server `/etc/openvpn/server.conf`:**
```conf
port 1194
proto udp
dev tun
ca ca.crt
cert server.crt
key server.key
dh dh.pem
tls-auth ta.key 0

server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt

push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
push "dhcp-option DNS 8.8.4.4"

keepalive 10 120
cipher AES-256-CBC
auth SHA256
user nobody
group nogroup
persist-key
persist-tun

status openvpn-status.log
verb 3
```

**Aktifkan:**
```bash
sudo cp ~/openvpn-ca/pki/ca.crt /etc/openvpn/
sudo cp ~/openvpn-ca/pki/issued/server.crt /etc/openvpn/
sudo cp ~/openvpn-ca/pki/private/server.key /etc/openvpn/
sudo cp ~/openvpn-ca/pki/dh.pem /etc/openvpn/
sudo cp ~/openvpn-ca/ta.key /etc/openvpn/

sudo systemctl start openvpn@server
sudo systemctl enable openvpn@server
sudo systemctl status openvpn@server
```

**Aktifkan IP Forwarding:**
```bash
sudo sysctl -w net.ipv4.ip_forward=1
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf

sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
sudo netfilter-persistent save
```

**Konfigurasi Client `client1.ovpn`:**
```conf
client
dev tun
proto udp
remote 203.0.113.10 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client1.crt
key client1.key
tls-auth ta.key 1
cipher AES-256-CBC
auth SHA256
verb 3
```

**Koneksi Client:**
```bash
sudo openvpn --config client1.ovpn
ping 10.8.0.1
curl ifconfig.me
```

#### 12.3 SSH Tunnel

**SSH Tunnel** = terowongan melalui SSH untuk meneruskan port.

**Jenis:**
| Jenis | Perintah | Fungsi |
|-------|----------|--------|
| **Local** | `-L` | Akses remote via lokal |
| **Remote** | `-R` | Akses lokal via remote |
| **Dynamic** | `-D` | SOCKS proxy |

**Local Port Forwarding:**
```bash
ssh -L 8080:localhost:80 user@server
# Akses http://localhost:8080 → server:80
```

**Remote Port Forwarding:**
```bash
ssh -R 9090:localhost:3000 user@server
# Akses server:9090 → localhost:3000
```

**Dynamic (SOCKS Proxy):**
```bash
ssh -D 1080 user@server
# Konfigurasi browser: SOCKS5 localhost:1080
```

**Contoh: Akses Database Remote**
```bash
ssh -L 3306:localhost:3306 user@server
mysql -h 127.0.0.1 -P 3306 -u dbuser -p
```

#### 12.4 Perbandingan VPN

| Aspek | WireGuard | OpenVPN | SSH Tunnel |
|-------|-----------|---------|------------|
| Kecepatan | Sangat cepat | Sedang | Cepat |
| Kompleksitas | Mudah | Sedang | Mudah |
| Cross-platform | Ya | Ya | Ya |
| GUI | Ya | Ya | Tidak |
| Use case | Site-to-site | Remote access | Port forwarding |
| Enkripsi | ChaCha20 | AES | AES |

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Instalasi OpenVPN
- Setup CA
- Konfigurasi server

**Pertemuan 2:**
- Konfigurasi client
- SSH tunnel
- Uji koneksi
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Instalasi OpenVPN
2. Setup CA & certificate
3. Konfigurasi server
4. Konfigurasi client
5. Uji koneksi
6. SSH tunnel (local & remote)
7. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| OpenVPN server | 30% |
| OpenVPN client | 30% |
| SSH tunnel | 20% |
| Dokumentasi | 20% |

---

## 📘 MINGGU 13: Konsep QoS & Klasifikasi Traffic (TP 15)

> **TP terkait:** TP 15  
> **Alokasi:** 4 JP  
> **Level:** C2–C3

### 🎯 Tujuan Pembelajaran

1. Menjelaskan konsep QoS
2. Mengidentifikasi parameter QoS
3. Mengklasifikasikan traffic
4. Menjelaskan model QoS

### 📖 Materi

#### 13.1 Konsep QoS

**QoS (Quality of Service)** = kemampuan jaringan untuk **memprioritaskan** traffic tertentu.

**Analogi:**  
Bayangkan **jalan raya** dengan **jalur khusus**:
- **Jalur bus** (VoIP) – prioritas tinggi
- **Jalur mobil** (web) – prioritas sedang
- **Jalur sepeda** (download) – prioritas rendah

**Mengapa QoS?**
- Bandwidth terbatas
- Traffic beragam
- Aplikasi real-time butuh prioritas
- Mencegah kongesti

#### 13.2 Parameter QoS

| Parameter | Standar | Keterangan |
|-----------|---------|-----------|
| **Bandwidth** | Max | Kapasitas maksimal |
| **Throughput** | Max | Kecepatan nyata |
| **Delay** | < 150 ms | Waktu transit |
| **Jitter** | < 30 ms | Variasi delay |
| **Packet Loss** | < 1% | Paket hilang |
| **MOS** | > 4.0 | Mean Opinion Score |

**Penjelasan:**

```
Delay:
[Kirim] ──10ms── [Terima]
Total delay = 10ms

Jitter:
Paket 1: 10ms
Paket 2: 15ms
Paket 3: 12ms
Jitter = 15-10 = 5ms

Packet Loss:
Kirim 100 paket, terima 98 → Loss = 2%
```

#### 13.3 Klasifikasi Traffic

| Kelas | Traffic | Prioritas | Contoh |
|-------|---------|-----------|--------|
| **VoIP** | Suara | Highest | SIP, RTP |
| **Video** | Streaming | High | YouTube, Zoom |
| **Web** | HTTP/HTTPS | Medium | Browsing |
| **FTP** | Download | Low | File transfer |
| **P2P** | Torrent | Lowest | BitTorrent |

**DSCP (Differentiated Services Code Point):**

| DSCP | Nilai | Keterangan |
|------|-------|-----------|
| EF | 46 | Expedited Forwarding (VoIP) |
| AF41 | 34 | Video |
| AF31 | 26 | Streaming |
| AF21 | 18 | Web |
| AF11 | 10 | Bulk |
| BE | 0 | Best Effort (default) |

#### 13.4 Model QoS

| Model | Keterangan | Kelebihan | Kekurangan |
|-------|-----------|-----------|------------|
| **Best Effort** | Tidak ada prioritas | Sederhana | Tidak adil |
| **IntServ** | Reservasi resource | Terjamin | Kompleks |
| **DiffServ** | Klasifikasi per kelas | Scalable | Kurang terjamin |

**Ilustrasi:**
```
Best Effort:
[VoIP]──┐
[Web]───┼──→ [Semua sama]
[FTP]───┘

DiffServ:
[VoIP]──→ [Prioritas 1] ──┐
[Web]───→ [Prioritas 2] ──┼──→ [Klasifikasi]
[FTP]───→ [Prioritas 3] ──┘
```

#### 13.5 Tools QoS

| Tool | Platform | Fungsi |
|------|----------|--------|
| **CBWFQ** | Cisco | Class-Based Weighted Fair Queueing |
| **LLQ** | Cisco | Low Latency Queueing |
| **HTB** | Linux | Hierarchical Token Bucket |
| **tc** | Linux | Traffic Control |
| **Queue Tree** | MikroTik | Queueing |
| **Simple Queue** | MikroTik | Queueing sederhana |

#### 13.6 Studi Kasus: Prioritas VoIP

**Kasus:** Kantor dengan bandwidth 100 Mbps. VoIP harus lancar meski ada download besar.

**Solusi:**
- VoIP: prioritas tinggi, min 10 Mbps
- Web: prioritas sedang, min 30 Mbps
- Download: prioritas rendah, max 60 Mbps

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Konsep QoS
- Parameter QoS
- Klasifikasi traffic

**Pertemuan 2:**
- Model QoS
- Studi kasus
- Diskusi

### 📝 Latihan Soal

1. **Jelaskan** pengertian QoS!
2. **Sebutkan** 5 parameter QoS!
3. **Apa** perbedaan delay & jitter?
4. **Sebutkan** 3 model QoS!
5. **Jelaskan** fungsi DSCP!

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Pengetahuan | 60% |
| Sikap | 20% |
| Keterampilan | 20% |

---

## 📘 MINGGU 14: Implementasi QoS & Manajemen Bandwidth (TP 15)

> **TP terkait:** TP 15  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Mengonfigurasi QoS di Cisco
2. Mengonfigurasi QoS di Linux (tc HTB)
3. Mengonfigurasi QoS di MikroTik
4. Monitoring bandwidth

### 📖 Materi

#### 14.1 QoS Cisco (CBWFQ + LLQ)

**Langkah 1: Klasifikasi**
```cisco
! Class map
Router(config)# class-map match-any VOIP
Router(config-cmap)# match protocol rtp
Router(config-cmap)# match access-group 100
Router(config-cmap)# exit

Router(config)# class-map match-any WEB
Router(config-cmap)# match protocol http
Router(config-cmap)# match protocol https
Router(config-cmap)# exit

Router(config)# class-map match-any BULK
Router(config-cmap)# match protocol ftp
Router(config-cmap)# exit

! ACL untuk VoIP
Router(config)# access-list 100 permit udp any any range 16384 32767
```

**Langkah 2: Policy Map**
```cisco
Router(config)# policy-map QOS-POLICY
Router(config-pmap)# class VOIP
Router(config-pmap-c)# priority 1000
Router(config-pmap-c)# exit

Router(config-pmap)# class WEB
Router(config-pmap-c)# bandwidth 30000
Router(config-pmap-c)# exit

Router(config-pmap)# class BULK
Router(config-pmap-c)# bandwidth 20000
Router(config-pmap-c)# exit

Router(config-pmap)# class class-default
Router(config-pmap-c)# fair-queue
Router(config-pmap-c)# exit
```

**Langkah 3: Terapkan ke Interface**
```cisco
Router(config)# interface gi0/1
Router(config-if)# service-policy output QOS-POLICY
Router(config-if)# exit
```

**Verifikasi:**
```cisco
Router# show policy-map
Router# show policy-map interface gi0/1
Router# show queueing interface gi0/1
```

#### 14.2 QoS Linux (tc HTB)

**Struktur HTB:**
```
Root qdisc (1:)
├── Class 1:1 (100mbit)
│   ├── Class 1:10 (VoIP, prio 1)
│   ├── Class 1:20 (Web, prio 2)
│   └── Class 1:30 (Default, prio 3)
```

**Konfigurasi:**
```bash
# Hapus qdisc lama
sudo tc qdisc del dev eth0 root 2>/dev/null

# Buat root qdisc
sudo tc qdisc add dev eth0 root handle 1: htb default 30

# Buat class utama
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 100mbit

# Buat class VoIP
sudo tc class add dev eth0 parent 1:1 classid 1:10 htb rate 10mbit ceil 20mbit prio 1

# Buat class Web
sudo tc class add dev eth0 parent 1:1 classid 1:20 htb rate 30mbit ceil 80mbit prio 2

# Buat class Default
sudo tc class add dev eth0 parent 1:1 classid 1:30 htb rate 60mbit ceil 100mbit prio 3

# Filter untuk VoIP (port 16384-32767)
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 \
  match ip dport 16384 0xffff flowid 1:10

# Filter untuk Web (port 80, 443)
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 2 u32 \
  match ip dport 80 0xffff flowid 1:20
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 2 u32 \
  match ip dport 443 0xffff flowid 1:20

# Verifikasi
sudo tc qdisc show dev eth0
sudo tc class show dev eth0
sudo tc filter show dev eth0
```

#### 14.3 QoS MikroTik

**Simple Queue:**
```rsc
/queue simple
add name=VOIP target=192.168.10.0/24 max-limit=10M/10M priority=1
add name=WEB target=192.168.20.0/24 max-limit=30M/30M priority=2
add name=DEFAULT target=0.0.0.0/0 max-limit=60M/60M priority=8
```

**Queue Tree:**
```rsc
/ip firewall mangle
add chain=prerouting protocol=udp dst-port=16384-32767 action=mark-packet new-packet-mark=voip
add chain=prerouting protocol=tcp dst-port=80,443 action=mark-packet new-packet-mark=web

/queue tree
add name=VOIP parent=global packet-mark=voip max-limit=10M priority=1
add name=WEB parent=global packet-mark=web max-limit=30M priority=2
add name=DEFAULT parent=global max-limit=60M priority=8
```

#### 14.4 Monitoring Bandwidth

**iftop:**
```bash
sudo apt install iftop -y
sudo iftop -i eth0
```

**nload:**
```bash
sudo apt install nload -y
nload eth0
```

**bmon:**
```bash
sudo apt install bmon -y
bmon
```

**vnstat:**
```bash
sudo apt install vnstat -y
sudo vnstat -i eth0 -l
vnstat -d
vnstat -m
```

**Cacti/MRTG:**
- Monitoring via SNMP
- Grafik historis
- Alert

#### 14.5 Uji QoS

**Test VoIP:**
```bash
# Di server
iperf3 -s -u

# Di client (VoIP)
iperf3 -c server -u -b 1M -t 60
```

**Test Web:**
```bash
# Di client
wget http://server/file.bin
```

**Test Download:**
```bash
# Di client
scp largefile user@server:/tmp/
```

**Cek hasil:**
- VoIP: delay < 150ms, jitter < 30ms, loss < 1%
- Web: throughput sesuai
- Download: tidak mengganggu VoIP

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- QoS Cisco
- QoS Linux

**Pertemuan 2:**
- QoS MikroTik
- Monitoring
- Uji prioritas
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Konfigurasi QoS Cisco
2. Konfigurasi QoS Linux
3. Monitoring bandwidth
4. Uji prioritas VoIP
5. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Konfigurasi QoS | 40% |
| Uji prioritas | 30% |
| Monitoring | 20% |
| Dokumentasi | 10% |

---

## 📘 MINGGU 15: Monitoring & Manajemen Jaringan (TP 16)

> **TP terkait:** TP 16  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Menjelaskan SNMP, Syslog, NetFlow
2. Menginstal Zabbix
3. Menginstal Grafana
4. Konfigurasi alerting

### 📖 Materi

#### 15.1 Protokol Monitoring

| Protokol | Fungsi | Port |
|----------|--------|------|
| **SNMP** | Monitoring perangkat | 161/162 |
| **Syslog** | Log terpusat | 514 |
| **NetFlow** | Analisis traffic | 2055 |
| **IPFIX** | NetFlow modern | 4739 |
| **sFlow** | Sampling traffic | 6343 |

#### 15.2 SNMP

**Komponen:**
- **Manager** – server monitoring
- **Agent** – perangkat yang dimonitor
- **MIB** – database informasi
- **OID** – identifier objek

**Konfigurasi Cisco:**
```cisco
snmp-server community public RO
snmp-server community private RW
snmp-server host 192.168.10.20 version 2c public
snmp-server enable traps
snmp-server location "Lab TJKT"
snmp-server contact "admin@tjkt.local"
```

**Konfigurasi Linux:**
```bash
sudo apt install snmpd -y
sudo nano /etc/snmp/snmpd.conf
# rocommunity public 192.168.10.0/24
sudo systemctl restart snmpd
```

**Test:**
```bash
snmpwalk -v2c -c public 192.168.10.1
snmpget -v2c -c public 192.168.10.1 sysDescr.0
```

#### 15.3 Syslog

**Konfigurasi Server:**
```bash
sudo apt install rsyslog -y
sudo nano /etc/rsyslog.conf
# module(load="imudp")
# input(type="imudp" port="514")
sudo systemctl restart rsyslog
```

**Konfigurasi Cisco:**
```cisco
logging host 192.168.10.20
logging trap informational
logging source-interface gi0/0
```

**Verifikasi:**
```bash
sudo tail -f /var/log/remote/*/*.log
```

#### 15.4 Zabbix

**Instalasi:**
```bash
sudo apt install zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-agent -y

# Buat database
sudo mysql -uroot -p
CREATE DATABASE zabbix CHARACTER SET utf8 COLLATE utf8_bin;
CREATE USER 'zabbix'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON zabbix.* TO 'zabbix'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Import schema
zcat /usr/share/zabbix-sql-scripts/mysql/server.sql.gz | mysql -uzabbix -p zabbix

# Konfigurasi
sudo nano /etc/zabbix/zabbix_server.conf
# DBPassword=password

sudo systemctl restart zabbix-server zabbix-agent apache2
sudo systemctl enable zabbix-server zabbix-agent apache2
```

**Akses:** `http://server/zabbix`  
**Default login:** Admin / zabbix

**Tambahkan host:**
1. Configuration → Hosts → Create host
2. Host name: R1
3. IP address: 192.168.10.1
4. SNMP interface: 161
5. Template: Cisco IOS SNMP

#### 15.5 Grafana + Prometheus

**Instalasi Prometheus:**
```bash
sudo apt install prometheus -y
```

**Konfigurasi `/etc/prometheus/prometheus.yml`:**
```yaml
scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['192.168.10.10:9100']
  - job_name: 'snmp'
    static_configs:
      - targets: ['192.168.10.1']
    metrics_path: /snmp
    params:
      module: [if_mib]
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 192.168.10.20:9116
```

**Instalasi Grafana:**
```bash
sudo apt install grafana -y
sudo systemctl start grafana-server
sudo systemctl enable grafana-server
```

**Akses:** `http://server:3000`  
**Default login:** admin / admin

**Tambahkan data source:**
1. Configuration → Data Sources → Add
2. Prometheus
3. URL: `http://localhost:9090`

#### 15.6 Alerting

**Zabbix Alert:**
1. Configuration → Actions → Trigger actions
2. Condition: Trigger severity ≥ Warning
3. Operation: Send email

**Email configuration:**
```bash
sudo apt install mailutils -y
```

**Grafana Alert:**
1. Panel → Edit → Alert
2. Condition: avg() > threshold
3. Notification channel: Email/Telegram

#### 15.7 Dashboard

**Contoh dashboard:**
- CPU usage
- Memory usage
- Interface traffic
- Disk usage
- Uptime
- Packet loss

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- SNMP & Syslog
- Instalasi Zabbix

**Pertemuan 2:**
- Grafana + Prometheus
- Alerting
- Dashboard
- Dokumentasi

### 📝 Praktik

**Tugas:**
1. Konfigurasi SNMP di router
2. Konfigurasi Syslog
3. Instalasi Zabbix
4. Tambahkan 2 host
5. Buat dashboard
6. Konfigurasi alert
7. Dokumentasi

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| SNMP/Syslog | 20% |
| Zabbix | 30% |
| Grafana | 20% |
| Alert | 15% |
| Dokumentasi | 15% |

---

## 📘 MINGGU 16: Dokumentasi, SOP & Backup (TP 16)

> **TP terkait:** TP 16  
> **Alokasi:** 4 JP  
> **Level:** C3–C4

### 🎯 Tujuan Pembelajaran

1. Menyusun dokumentasi teknis
2. Membuat SOP operasional
3. Melakukan backup & restore
4. Menerapkan change management

### 📖 Materi

#### 16.1 Dokumentasi Teknis

**Jenis dokumen:**

| Dokumen | Isi | Frekuensi update |
|---------|-----|------------------|
| **Topologi** | Diagram jaringan | Saat berubah |
| **Inventaris** | Daftar perangkat | Saat berubah |
| **IP Plan** | Tabel IP | Saat berubah |
| **VLAN Plan** | Tabel VLAN | Saat berubah |
| **Konfigurasi** | Setting perangkat | Saat berubah |
| **Pengujian** | Hasil test | Setiap test |
| **SOP** | Prosedur | Tahunan |

**Contoh IP Plan:**

| VLAN | Nama | Network | Gateway | DHCP Range | Keterangan |
|------|------|---------|---------|------------|------------|
| 10 | IT | 192.168.10.0/24 | .1 | .100–.200 | Divisi IT |
| 20 | HRD | 192.168.20.0/24 | .1 | .100–.200 | Divisi HRD |
| 30 | FIN | 192.168.30.0/24 | .1 | .100–.200 | Divisi Finance |
| 99 | MGMT | 192.168.99.0/24 | .1 | – | Management |
| 100 | VOIP | 192.168.100.0/24 | .1 | .100–.200 | VoIP |

**Contoh VLAN Plan:**

| VLAN | Nama | Port | Keterangan |
|------|------|------|------------|
| 10 | IT | Fa0/1-10 | Divisi IT |
| 20 | HRD | Fa0/11-15 | Divisi HRD |
| 30 | FIN | Fa0/16-20 | Divisi Finance |
| 99 | MGMT | Gi0/1 | Management |
| 100 | VOIP | Fa0/21-24 | VoIP |

#### 16.2 SOP Operasional

**Struktur SOP:**
```
SOP [NAMA PROSEDUR]
─────────────────────
1. Tujuan
2. Ruang lingkup
3. Referensi
4. Definisi
5. Alat & bahan
6. Prosedur
7. Dokumentasi
8. Penanggung jawab
9. Revisi
```

**Contoh SOP Backup Config:**
```
SOP BACKUP KONFIGURASI
──────────────────────
1. Tujuan: Menyimpan konfigurasi perangkat
2. Ruang lingkup: Semua router & switch
3. Referensi: Kebijakan IT
4. Definisi: Backup = salinan konfigurasi
5. Alat: TFTP/FTP server, kabel console
6. Prosedur:
   a. Login ke perangkat
   b. Jalankan: copy running-config tftp:
   c. Masukkan IP TFTP server
   d. Simpan file: [hostname]-[tanggal].cfg
   e. Verifikasi file
7. Dokumentasi: Catat di log backup
8. Penanggung jawab: Admin jaringan
9. Revisi: Setiap 6 bulan
```

#### 16.3 Backup & Restore

**Cisco:**
```cisco
! Backup ke TFTP
Router# copy running-config tftp:
Address or name of remote host []? 192.168.10.20
Destination filename [router-confg]? R1-2025-01-15.cfg

! Restore dari TFTP
Router# copy tftp: running-config
Address or name of remote host []? 192.168.10.20
Source filename []? R1-2025-01-15.cfg

! Backup ke FTP
Router# copy running-config ftp:
Address or name of remote host []? 192.168.10.20
Destination filename []? R1-2025-01-15.cfg
```

**Linux:**
```bash
# Backup
tar -czf backup-$(date +%F).tar.gz /etc/

# Backup ke remote
rsync -avz /etc/ user@backup:/backup/

# Restore
tar -xzf backup-2025-01-15.tar.gz -C /
```

**Database:**
```bash
mysqldump -u root -p database > backup.sql
mysql -u root -p database < backup.sql
```

#### 16.4 Change Management

**Tahapan:**
```
1. REQUEST
   └─ Permintaan perubahan
2. REVIEW
   └─ Evaluasi dampak
3. APPROVAL
   └─ Persetujuan
4. IMPLEMENTASI
   └─ Eksekusi
5. VERIFIKASI
   └─ Uji hasil
6. DOKUMENTASI
   └─ Catat perubahan
```

**Form Change Request:**
```
CHANGE REQUEST
──────────────
No: CR-2025-001
Tanggal: 2025-01-15
Pemohon: Admin
Perubahan: Tambah VLAN 40
Alasan: Divisi Marketing baru
Dampak: Switch restart
Rencana: 2025-01-16 22:00
Rollback: Restore config
Approval: Manager IT
```

#### 16.5 Tools Dokumentasi

| Tool | Fungsi |
|------|--------|
| **draw.io** | Diagram |
| **Visio** | Diagram |
| **NetBox** | IPAM & DCIM |
| **BookStack** | Wiki |
| **Confluence** | Dokumentasi |
| **GitBook** | Dokumentasi |
| **Markdown** | Dokumentasi |

#### 16.6 Dokumentasi Lab

**Struktur:**
```
lab-tjkt/
├── README.md
├── topologi/
│   ├── logical.png
│   └── physical.png
├── config/
│   ├── R1.cfg
│   ├── R2.cfg
│   ├── SW1.cfg
│   └── SW2.cfg
├── ip-plan.md
├── vlan-plan.md
├── sop/
│   ├── backup.md
│   ├── restore.md
│   └── troubleshooting.md
└── test-results/
    ├── ping.md
    ├── traceroute.md
    └── speedtest.md
```

### 🧪 Aktivitas Pembelajaran

**Pertemuan 1:**
- Dokumentasi teknis
- IP Plan & VLAN Plan

**Pertemuan 2:**
- SOP
- Backup & restore
- Change management
- Dokumentasi

### 📝 Tugas

**Tugas:**
1. Buat topologi jaringan
2. Buat IP Plan & VLAN Plan
3. Buat 3 SOP
4. Backup config
5. Buat change request
6. Dokumentasi lengkap

### ✅ Penilaian

| Aspek | Bobot |
|-------|-------|
| Dokumentasi | 30% |
| SOP | 30% |
| Backup | 20% |
| Change management | 10% |
| Presentasi | 10% |

---

## 📘 MINGGU 17: Proyek Akhir — Desain & Implementasi Dasar (TP 16)

> **TP terkait:** TP 16  
> **Alokasi:** 4 JP  
> **Level:** C4–C6

### 🎯 Tujuan Pembelajaran

1. Merancang jaringan kantor kecil
2. Mengimplementasikan VLAN & routing
3. Mengimplementasikan layanan dasar
4. Dokumentasi tahap 1

### 📖 Skenario Proyek

**Studi Kasus: PT TJKT Mandiri**

PT TJKT Mandiri adalah perusahaan kecil dengan:
- **3 divisi:** IT (20 user), HRD (10 user), Finance (5 user)
- **1 server** (DHCP, DNS, Web, FTP)
- **3 extension VoIP**
- **Internet:** 100 Mbps
- **Gedung:** 2 lantai

**Kebutuhan:**
- VLAN per divisi
- Routing antar-VLAN
- DHCP & DNS
- Web server internal
- Firewall & NAT
- VPN remote access
- QoS untuk VoIP
- Monitoring
- Dokumentasi

### 📋 Tahapan Proyek

**Minggu 17: Desain & Implementasi Dasar**

| No | Tahap | Output |
|----|-------|--------|
| 1 | Desain topologi | Diagram logis & fisik |
| 2 | IP Plan | Tabel IP & VLAN |
| 3 | Konfigurasi VLAN | VLAN 10, 20, 30, 99 |
| 4 | Konfigurasi trunk | Trunk antar switch |
| 5 | Inter-VLAN routing | Router-on-a-stick |
| 6 | Konfigurasi DHCP | DHCP server |
| 7 | Konfigurasi DNS | DNS server |
| 8 | Uji dasar | Ping antar VLAN |

### 🎨 Desain Topologi

```
                    ┌─────────────┐
                    │  INTERNET   │
                    │  100 Mbps   │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   ROUTER    │
                    │ 192.168.1.1 │
                    │   NAT/PAT   │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   SWITCH    │
                    │  L3/SVI     │
                    └─┬──┬──┬──┬──┘
                      │  │  │  │
        ┌─────────────┘  │  │  └─────────────┐
        │                │  │                │
   ┌────┴────┐      ┌────┴──┴────┐      ┌────┴────┐
   │ VLAN 10 │      │  VLAN 20   │      │ VLAN 30 │
   │   IT    │      │   HRD      │      │ FINANCE │
   │20 user  │      │ 10 user    │      │ 5 user  │
   └─────────┘      └────────────┘      └─────────┘

   ┌─────────────┐      ┌─────────────┐
   │  SERVER     │      │   VoIP      │
   │  VLAN 40    │      │  VLAN 100   │
   │ DHCP/DNS    │      │ 3 extension │
   │ Web/FTP     │      └─────────────┘
   └─────────────┘
```

### 📊 IP & VLAN Plan

| VLAN | Nama | Network | Gateway | DHCP Range | Keterangan |
|------|------|---------|---------|------------|------------|
| 10 | IT | 192.168.10.0/24 | .1 | .100–.200 | 20 user |
| 20 | HRD | 192.168.20.0/24 | .1 | .100–.150 | 10 user |
| 30 | FIN | 192.168.30.0/24 | .1 | .100–.120 | 5 user |
| 40 | SERVER | 192.168.40.0/24 | .1 | Static | Server |
| 99 | MGMT | 192.168.99.0/24 | .1 | – | Management |
| 100 | VOIP | 192.168.100.0/24 | .1 | .100–.110 | VoIP |

### ⚙️ Implementasi Dasar

**1. Konfigurasi VLAN:**
```cisco
! Buat VLAN
vlan 10
 name IT
vlan 20
 name HRD
vlan 30
 name FINANCE
vlan 40
 name SERVER
vlan 99
 name MGMT
vlan 100
 name VOIP
```

**2. Konfigurasi Access Port:**
```cisco
! IT
interface range fa0/1-20
 switchport mode access
 switchport access vlan 10

! HRD
interface range fa0/1-10
 switchport mode access
 switchport access vlan 20

! Finance
interface range fa0/1-5
 switchport mode access
 switchport access vlan 30
```

**3. Konfigurasi Trunk:**
```cisco
interface gi0/1
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40,99,100
 switchport trunk native vlan 99
```

**4. Inter-VLAN Routing:**
```cisco
interface gi0/0.10
 encapsulation dot1q 10
 ip address 192.168.10.1 255.255.255.0

interface gi0/0.20
 encapsulation dot1q 20
 ip address 192.168.20.1 255.255.255.0

interface gi0/0.30
 encapsulation dot1q 30
 ip address 192.168.30.1 255.255.255.0

interface gi0/0.40
 encapsulation dot1q 40
 ip address 192.168.40.1 255.255.255.0

interface gi0/0.99
 encapsulation dot1q 99
 ip address 192.168.99.1 255.255.255.0

interface gi0/0.100
 encapsulation dot1q 100
 ip address 192.168.100.1 255.255.255.0
```

**5. DHCP Server:**
```bash
# /etc/dhcp/dhcpd.conf
subnet 192.168.10.0 netmask 255.255.255.0 {
  range 192.168.10.100 192.168.10.200;
  option routers 192.168.10.1;
  option domain-name-servers 192.168.40.10;
}

subnet 192.168.20.0 netmask 255.255.255.0 {
  range 192.168.20.100 192.168.20.150;
  option routers 192.168.20.1;
  option domain-name-servers 192.168.40.10;
}

subnet 192.168.30.0 netmask 255.255.255.0 {
  range 192.168.30.100 192.168.30.120;
  option routers 192.168.30.1;
  option domain-name-servers 192.168.40.10;
}
```

**6. DNS Server:**
```bash
# /etc/bind/named.conf.local
zone "tjkt.local" {
  type master;
  file "/etc/bind/db.tjkt";
};
```

**7. Uji Dasar:**
```bash
# Ping antar VLAN
ping 192.168.10.100  # dari VLAN 20
ping 192.168.20.100  # dari VLAN 10

# Cek DHCP
ipconfig /renew

# Cek DNS
nslookup www.tjkt.local
```

### 📝 Output Minggu 17

1. **Topologi** (logis & fisik)
2. **IP & VLAN Plan**
3. **Konfigurasi VLAN & trunk**
4. **Inter-VLAN routing**
5. **DHCP & DNS server**
6. **Hasil uji dasar**
7. **Dokumentasi tahap 1**

---

## 📘 MINGGU 18: Proyek Akhir — Implementasi Lanjutan & Presentasi (TP 16)

> **TP terkait:** TP 16  
> **Alokasi:** 4 JP  
> **Level:** C4–C6

### 🎯 Tujuan Pembelajaran

1. Mengimplementasikan keamanan (ACL, NAT, Firewall)
2. Mengimplementasikan VPN
3. Mengimplementasikan QoS
4. Monitoring & dokumentasi
5. Presentasi & demo

### 📋 Tahapan Proyek

**Minggu 18: Implementasi Lanjutan & Presentasi**

| No | Tahap | Output |
|----|-------|--------|
| 1 | Firewall & NAT | Konfigurasi |
| 2 | ACL | Konfigurasi |
| 3 | VPN | WireGuard/OpenVPN |
| 4 | QoS | Prioritas VoIP |
| 5 | Monitoring | Zabbix/Grafana |
| 6 | Dokumentasi | Laporan lengkap |
| 7 | Presentasi | Slide & demo |

### ⚙️ Implementasi Lanjutan

**1. NAT/PAT:**
```cisco
access-list 1 permit 192.168.0.0 0.0.255.255
ip nat inside source list 1 interface gi0/1 overload

interface gi0/0
 ip nat inside

interface gi0/1
 ip nat outside
```

**2. ACL:**
```cisco
! Finance hanya boleh akses server
access-list 101 permit ip 192.168.30.0 0.0.0.255 192.168.40.0 0.0.0.255
access-list 101 deny ip 192.168.30.0 0.0.0.255 any
access-list 101 permit ip any any

interface gi0/0.30
 ip access-group 101 in
```

**3. VPN (WireGuard):**
```bash
# Server
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0

# Client
sudo wg-quick up wg0
ping 10.10.0.1
```

**4. QoS:**
```cisco
class-map match-any VOIP
 match protocol rtp

policy-map QOS
 class VOIP
  priority 1000
 class class-default
  fair-queue

interface gi0/1
 service-policy output QOS
```

**5. Monitoring:**
- Zabbix untuk router & server
- Grafana untuk dashboard
- Alert via email

**6. Dokumentasi:**
- Topologi final
- Konfigurasi lengkap
- Hasil pengujian
- SOP
- Laporan

### 🎤 Presentasi

**Struktur presentasi (15 menit):**
1. **Pembukaan** (1 menit)
2. **Latar belakang** (2 menit)
3. **Desain** (3 menit)
4. **Implementasi** (4 menit)
5. **Hasil** (3 menit)
6. **Kesimpulan** (1 menit)
7. **Q&A** (1 menit)

**Slide:**
1. Judul
2. Latar belakang
3. Topologi
4. IP/VLAN Plan
5. Konfigurasi
6. Hasil uji
7. Monitoring
8. Kesimpulan

### 📦 Deliverables

1. **Proposal proyek**
2. **Topologi jaringan**
3. **IP & VLAN plan**
4. **Konfigurasi perangkat**
5. **Hasil pengujian**
6. **Dokumentasi & SOP**
7. **Laporan akhir**
8. **Presentasi**

### 🧪 Rubrik Proyek Akhir

| Aspek | Bobot | Kriteria |
|-------|-------|----------|
| **Desain** | 15% | Jelas, scalable, aman |
| **VLAN/Routing** | 20% | Berfungsi |
| **Layanan** | 15% | DHCP, DNS, Web, FTP |
| **Keamanan** | 15% | ACL, NAT, Firewall |
| **VPN** | 10% | Berfungsi |
| **QoS** | 10% | Prioritas VoIP |
| **Monitoring** | 5% | Dashboard |
| **Dokumentasi** | 5% | Lengkap |
| **Presentasi** | 5% | Menarik |

### ✅ Penilaian

Total nilai proyek = 100%.

---

## 📘 MINGGU 19: Evaluasi Akhir Semester (UAS)

> **Alokasi:** 4 JP  
> **Bentuk:** Teori + Praktik Terpadu

### 📋 Kisi-Kisi UAS

| No | Materi | Bentuk | Bobot |
|----|--------|--------|-------|
| 1 | Subnetting & VLSM | PG + Essay | 10% |
| 2 | VLAN & Trunking | PG + Praktik | 15% |
| 3 | Routing (statis, RIP, OSPF) | PG + Praktik | 15% |
| 4 | Layanan Jaringan | PG + Praktik | 15% |
| 5 | Keamanan (ACL, Firewall, NAT) | PG + Essay | 15% |
| 6 | VPN | PG + Praktik | 10% |
| 7 | QoS | PG + Essay | 10% |
| 8 | Monitoring & Dokumentasi | Essay | 10% |

### 📝 Bentuk Soal

**A. Teori (40%)**
- 40 soal pilihan ganda
- 5 soal essay

**B. Praktik (60%)**
- Konfigurasi VLAN + routing (20%)
- Konfigurasi layanan (15%)
- Konfigurasi keamanan (15%)
- Konfigurasi VPN/QoS (10%)

### ✅ Kriteria Kelulusan

| Nilai | Kategori | Keterangan |
|-------|----------|------------|
| 90–100 | A | Sangat Baik |
| 80–89 | B | Baik |
| 70–79 | C | Cukup |
| 60–69 | D | Kurang |
| < 60 | E | Tidak Lulus |

---

## 📎 LAMPIRAN

### Glosarium

| Istilah | Arti |
|---------|------|
| **ACL** | Access Control List — daftar aturan akses |
| **CIDR** | Classless Inter-Domain Routing |
| **DHCP** | Dynamic Host Configuration Protocol |
| **DNS** | Domain Name System |
| **DSCP** | Differentiated Services Code Point |
| **Firewall** | Sistem keamanan jaringan |
| **HTB** | Hierarchical Token Bucket |
| **IPAM** | IP Address Management |
| **Jitter** | Variasi delay |
| **NAT** | Network Address Translation |
| **OSPF** | Open Shortest Path First |
| **PAT** | Port Address Translation |
| **QoS** | Quality of Service |
| **RIP** | Routing Information Protocol |
| **SOP** | Standard Operating Procedure |
| **SVI** | Switch Virtual Interface |
| **Trunk** | Jalur banyak VLAN |
| **VLAN** | Virtual Local Area Network |
| **VLSM** | Variable Length Subnet Mask |
| **VPN** | Virtual Private Network |
| **VTP** | VLAN Trunking Protocol |
| **WireGuard** | Protokol VPN modern |

### Daftar Singkatan

| Singkatan | Kepanjangan |
|-----------|-------------|
| ACL | Access Control List |
| CIDR | Classless Inter-Domain Routing |
| DHCP | Dynamic Host Configuration Protocol |
| DNS | Domain Name System |
| DSCP | Differentiated Services Code Point |
| FTP | File Transfer Protocol |
| HTB | Hierarchical Token Bucket |
| HTTP | Hypertext Transfer Protocol |
| IPAM | IP Address Management |
| IPSec | Internet Protocol Security |
| NAT | Network Address Translation |
| NTP | Network Time Protocol |
| OSPF | Open Shortest Path First |
| PAT | Port Address Translation |
| QoS | Quality of Service |
| RIP | Routing Information Protocol |
| SNMP | Simple Network Management Protocol |
| SOP | Standard Operating Procedure |
| SSH | Secure Shell |
| SVI | Switch Virtual Interface |
| VLAN | Virtual Local Area Network |
| VLSM | Variable Length Subnet Mask |
| VoIP | Voice over Internet Protocol |
| VPN | Virtual Private Network |
| VTP | VLAN Trunking Protocol |

### Rubrik Penilaian

#### A. Rubrik Praktik

| Aspek | 4 | 3 | 2 | 1 |
|-------|---|---|---|---|
| Persiapan | Lengkap & siap | Lengkap | Kurang 1 | Kurang >1 |
| Prosedur | Sesuai SOP | Sesuai | Kurang | Tidak |
| Hasil | Berfungsi presisi | Berfungsi | Kurang | Gagal |
| Waktu | Lebih cepat | Tepat | Lewat 10% | Lewat >20% |
| K3 | APD lengkap | APD lengkap | Kurang | Tidak |

**Nilai = (Total / 20) × 100**

#### B. Rubrik Laporan

| Aspek | Bobot |
|-------|-------|
| Kelengkapan | 25% |
| Ketepatan | 25% |
| Analisis | 25% |
| Presentasi | 15% |
| Referensi | 10% |

#### C. Rubrik Sikap

| Sikap | Skor 1–4 |
|-------|----------|
| Disiplin | |
| Kerja sama | |
| K3 | |
| Tanggung jawab | |
| Inisiatif | |

### Referensi

#### Buku
1. Cisco Networking Academy. (2020). *CCNA: Switching, Routing, and Wireless Essentials*.
2. Cisco Networking Academy. (2020). *CCNA: Enterprise Networking, Security, and Automation*.
3. Odom, W. (2020). *Cisco CCNA 200-301 Official Cert Guide*.
4. Tanenbaum, A. S. (2011). *Computer Networks*.
5. Stallings, W. (2017). *Data and Computer Communications*.
6. Forouzan, B. A. (2012). *Data Communications and Networking*.

#### Standar
1. IEEE 802.1Q VLAN Tagging
2. IEEE 802.1X Port-Based Access Control
3. RFC 1918 Private Address
4. RFC 2131 DHCP
5. RFC 2328 OSPF v2
6. RFC 8446 TLS 1.3
7. RFC 8443 WireGuard

#### Website
1. https://www.cisco.com
2. https://www.wireguard.com
3. https://www.openvpn.net
4. https://www.zabbix.com
5. https://grafana.com
6. https://www.mikrotik.com

#### Video Tutorial
1. Cisco Networking Academy YouTube
2. David Bombal
3. NetworkChuck
4. Keith Barker

---

## 🏁 PENUTUP

Selamat! Anda telah menyelesaikan **Modul Super Lengkap Semester 2 TJKT**.

### 📌 Poin Penting Semester 2

| Blok | Poin Kunci |
|------|-----------|
| **Subnetting** | VLSM efisien, CIDR fleksibel |
| **VLAN** | Segmentasi, trunk 802.1Q |
| **Routing** | Inter-VLAN, OSPF |
| **Layanan** | DHCP, DNS, Web, FTP |
| **Keamanan** | ACL, Firewall, NAT |
| **VPN** | WireGuard, OpenVPN |
| **QoS** | Prioritas VoIP, HTB |
| **Monitoring** | Zabbix, Grafana |
| **Proyek** | Terpadu, terdokumentasi |

### 🎯 Persiapan ke Dunia Kerja

- **Sertifikasi:** CCNA, MTCNA, Network+, Security+
- **Soft skill:** Komunikasi, teamwork, problem solving
- **Portfolio:** Dokumentasi proyek
- **Magang:** ISP, data center, IT support
- **Karir:** Network Engineer, Network Admin, IT Support

### 🚀 Lanjutan

Setelah Semester 2, Anda dapat melanjutkan ke:
- **CCNA** – Cisco Certified Network Associate
- **CCNP** – Cisco Certified Network Professional
- **MTCNA** – MikroTik Certified Network Associate
- **Network+** – CompTIA Network+
- **Security+** – CompTIA Security+

---

> 💪 **"Jaringan kuat, karier hebat!"**
> 
> **Tetap belajar, utamakan K3, dan jadilah teknisi profesional!** 🚀

---

**Dibuat dengan ❤️ untuk pembelajaran TJKT**  
**Versi:** 2.0 (Super Lengkap)  
**Terakhir update:** 2025  
**Lisensi:** CC BY-SA 4.0  
**Total halaman:** ± 100+ halaman setara  
**Total materi:** 19 minggu × 4 JP = 76 JP
