const quizData = {
tkj: [
{question:"Apa kepanjangan dari LAN?",options:["Local Area Network","Large Area Network","Long Area Network","Limited Area Network"],answer:0},
{question:"Apa kepanjangan dari WAN?",options:["Wide Area Network","Wireless Area Network","World Area Network","Web Area Network"],answer:0},
{question:"Perangkat penghubung jaringan?",options:["Router","CPU","RAM","Monitor"],answer:0},
{question:"Perangkat dalam LAN?",options:["Switch","Keyboard","Printer","Scanner"],answer:0},
{question:"Alamat unik perangkat?",options:["IP Address","DNS","Gateway","Subnet"],answer:0},

{question:"Fungsi DNS?",options:["Mengubah domain ke IP","Menyimpan data","Firewall","Router"],answer:0},
{question:"Topologi bintang?",options:["Ring","Bus","Star","Mesh"],answer:2},
{question:"Topologi lingkaran?",options:["Star","Bus","Ring","Mesh"],answer:2},
{question:"Kabel umum?",options:["Fiber","UTP","Koaksial","STP"],answer:1},
{question:"Media tercepat?",options:["UTP","Koaksial","Fiber Optic","STP"],answer:2},

{question:"Perangkat penguat sinyal?",options:["Router","Repeater","Switch","Bridge"],answer:1},
{question:"Fungsi switch?",options:["Mengatur lalu lintas LAN","Menyimpan data","Firewall","DNS"],answer:0},
{question:"Fungsi router?",options:["Menghubungkan jaringan","Menyimpan data","Printer","Scanner"],answer:0},
{question:"Fungsi modem?",options:["Menghubungkan internet","Keyboard","Monitor","Mouse"],answer:0},
{question:"Apa itu server?",options:["Penyedia layanan","Pengguna","Router","Switch"],answer:0},

{question:"Apa itu client?",options:["Pengguna layanan","Server","Router","Switch"],answer:0},
{question:"Perintah cek koneksi?",options:["ping","dir","copy","del"],answer:0},
{question:"Perintah lihat IP?",options:["ipconfig","ping","dir","netstat"],answer:0},
{question:"Jumlah bit IPv4?",options:["16","32","64","128"],answer:1},
{question:"Port HTTP?",options:["21","22","80","443"],answer:2},

{question:"Port HTTPS?",options:["80","21","443","25"],answer:2},
{question:"Kepanjangan HTTP?",options:["HyperText Transfer Protocol","High Transfer Protocol","Hyper Tool Protocol","Host Transfer Protocol"],answer:0},
{question:"Kepanjangan FTP?",options:["File Transfer Protocol","Fast Transfer Protocol","File Tool Protocol","Free Transfer Protocol"],answer:0},
{question:"Fungsi firewall?",options:["Mengamankan jaringan","Mempercepat","Menyimpan","Router"],answer:0},
{question:"NIC adalah?",options:["Kartu jaringan","CPU","RAM","HDD"],answer:0},

{question:"MAC Address?",options:["Alamat fisik","IP Address","Domain","Gateway"],answer:0},
{question:"DHCP?",options:["Memberi IP otomatis","Firewall","Router","Switch"],answer:0},
{question:"Subnet mask?",options:["Pembagi jaringan","IP","DNS","Gateway"],answer:0},
{question:"Bandwidth?",options:["Kecepatan data","Ukuran kabel","IP","Server"],answer:0},
{question:"Latency?",options:["Waktu tunda","Kecepatan","Ukuran","Router"],answer:0},

{question:"Access point?",options:["Wifi","CPU","RAM","Printer"],answer:0},
{question:"SSID?",options:["Nama wifi","Password","IP","Router"],answer:0},
{question:"Proxy?",options:["Perantara internet","Firewall","Router","Switch"],answer:0},
{question:"VLAN?",options:["Jaringan virtual","Router","IP","Server"],answer:0},
{question:"Bridge?",options:["Penghubung jaringan","CPU","RAM","HDD"],answer:0},

{question:"Topologi paling umum?",options:["Bus","Ring","Star","Mesh"],answer:2},
{question:"Kabel straight?",options:["Perangkat beda","Perangkat sama","Server","Internet"],answer:0},
{question:"Kabel crossover?",options:["Perangkat sama","Perangkat beda","Server","Internet"],answer:0},
{question:"OSI layer ke-7?",options:["Application","Network","Transport","Data Link"],answer:0},
{question:"OSI layer ke-3?",options:["Network","Application","Session","Physical"],answer:0},

{question:"TCP?",options:["Protokol jaringan","Router","Switch","Server"],answer:0},
{question:"UDP?",options:["Protokol jaringan","CPU","RAM","Monitor"],answer:0},
{question:"Traceroute?",options:["Melacak jaringan","Download","Upload","Firewall"],answer:0},
{question:"Hosting?",options:["Tempat website","Router","Switch","IP"],answer:0},
{question:"Domain?",options:["Nama website","IP","Server","Router"],answer:0},

{question:"CDN?",options:["Mempercepat akses","Menyimpan","Firewall","Router"],answer:0},
{question:"Switch unmanaged?",options:["Tanpa konfigurasi","Mahal","Besar","Wireless"],answer:0},
{question:"Topologi mesh?",options:["Banyak jalur","Satu jalur","Lingkaran","Bintang"],answer:0},
{question:"Repeater?",options:["Penguat sinyal","Router","Switch","Server"],answer:0},
{question:"Gateway?",options:["Penghubung jaringan","CPU","RAM","Printer"],answer:0},

{question:"Apa itu IP publik?",options:["IP internet","IP lokal","DNS","Gateway"],answer:0},
{question:"IP private?",options:["IP lokal","IP internet","DNS","Router"],answer:0},
{question:"Default gateway?",options:["Jalur keluar jaringan","Router","Switch","DNS"],answer:0},
{question:"DNS server?",options:["Penerjemah domain","Router","Switch","Server"],answer:0},
{question:"Ping timeout?",options:["Koneksi gagal","Koneksi cepat","Server","Router"],answer:0},

{question:"OSI layer 1?",options:["Physical","Application","Network","Transport"],answer:0},
{question:"OSI layer 2?",options:["Data Link","Network","Session","Transport"],answer:0},
{question:"OSI layer 4?",options:["Transport","Network","Session","Application"],answer:0},
{question:"OSI layer 5?",options:["Session","Transport","Network","Physical"],answer:0},
{question:"OSI layer 6?",options:["Presentation","Session","Network","Transport"],answer:0},

{question:"Protokol email?",options:["SMTP","HTTP","FTP","DNS"],answer:0},
{question:"Port FTP?",options:["21","22","80","443"],answer:0},
{question:"Port SSH?",options:["22","21","80","25"],answer:0},
{question:"Port SMTP?",options:["25","80","21","443"],answer:0},
{question:"Port DNS?",options:["53","80","21","25"],answer:0},

{question:"Jenis jaringan kecil?",options:["LAN","WAN","MAN","PAN"],answer:0},
{question:"Jaringan kota?",options:["MAN","LAN","WAN","PAN"],answer:0},
{question:"Jaringan global?",options:["WAN","LAN","MAN","PAN"],answer:0},
{question:"PAN?",options:["Personal Area Network","Private Area Network","Public Area Network","Primary Area Network"],answer:0},
{question:"Wireless LAN?",options:["WLAN","LAN","WAN","MAN"],answer:0},

{question:"SSID tersembunyi?",options:["Hidden network","Public network","LAN","WAN"],answer:0},
{question:"Keamanan wifi?",options:["WPA2","HTTP","FTP","DNS"],answer:0},
{question:"Kabel STP?",options:["Shielded","Unshielded","Fiber","Koaksial"],answer:0},
{question:"UTP?",options:["Unshielded","Shielded","Fiber","Koaksial"],answer:0},
{question:"Koaksial?",options:["Kabel inti tunggal","Fiber","UTP","STP"],answer:0},

{question:"Fiber optic?",options:["Cahaya","Listrik","Magnet","Radio"],answer:0},
{question:"RJ45?",options:["Konektor LAN","Router","Switch","Server"],answer:0},
{question:"RJ11?",options:["Kabel telepon","LAN","Fiber","UTP"],answer:0},
{question:"Crimping tool?",options:["Pasang kabel","Router","Switch","Server"],answer:0},
{question:"Tester LAN?",options:["Tes kabel","Router","Switch","Server"],answer:0},

{question:"Loopback IP?",options:["127.0.0.1","192.168.1.1","8.8.8.8","10.0.0.1"],answer:0},
{question:"DNS Google?",options:["8.8.8.8","127.0.0.1","192.168.1.1","10.0.0.1"],answer:0},
{question:"Private IP kelas C?",options:["192.168.x.x","10.x.x.x","172.x.x.x","8.8.8.8"],answer:0},
{question:"Private IP kelas A?",options:["10.x.x.x","192.168.x.x","172.x.x.x","8.8.8.8"],answer:0},
{question:"Private IP kelas B?",options:["172.16.x.x","192.168.x.x","10.x.x.x","8.8.8.8"],answer:0}
]
};
