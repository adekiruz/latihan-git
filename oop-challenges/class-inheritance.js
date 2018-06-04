// Class Utama
class Tumbuhan {
	constructor(nama, tipeAkar, dapatDikonsumsi) {
		this.nama = nama;
		this.tipeAkar = tipeAkar;
		this.dapatDikonsumsi = dapatDikonsumsi;
	}
	detail() {
		console.log('Nama Tumbuhan:', this.nama);
		console.log('Dapat Dikonsumsi:', this.dapatDikonsumsi);
		console.log('Tipe Akar:', this.tipeAkar);
	}
}

// Subclass 1
class TumbuhanAkarSerabut extends Tumbuhan {
	constructor(nama, dapatDikonsumsi) {
		super(nama, 'Serabut', dapatDikonsumsi);
		this.jumlahKepingBiji = 1;
	}
	tampilkanDetail() {
		this.detail();
		console.log('Info:', 'Tumbuhan biji berkeping '+ this.jumlahKepingBiji +' (Monokotil)');
	}
}

// Subclass 2
class TumbuhanAkarTunggal extends Tumbuhan {
	constructor(nama, dapatDikonsumsi) {
		super(nama, 'Tunggal', dapatDikonsumsi);
		this.jumlahKepingBiji = 2;
	}
	tampilkanDetail() {
		this.detail();
		console.log('Info:', 'Tumbuhan biji berkeping '+ this.jumlahKepingBiji +' (Dikotil)');
	}
}

// instance
var padi = new TumbuhanAkarTunggal('Padi', 'Ya');
// method dari class utama
padi.detail();
console.log();
// method dari instance ini
padi.tampilkanDetail();
console.log();
console.log();
console.log();

// instance
var kacang = new TumbuhanAkarSerabut('Kacang', 'Ya');
// method dari class utama
padi.detail();
console.log();
// method dari instance ini
kacang.tampilkanDetail();
