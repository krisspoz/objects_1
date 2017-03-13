function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", cena to " + this.cena + ", kolor to " + this.kolor + ".");
}

var samsungGalaxyS6 = new Telefon("Samsung", 2000, "silver");

var iPhone6s = new Telefon("Apple", 2250, "black");

var onePlusOne = new Telefon("OnePlus", 1200, "black");


samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();