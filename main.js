// Abstração: DispositivoMovel
class DispositivosMovel {
    constructor(modelo, fabricante, anoModelo, anoFabricacao) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.anoModelo = anoModelo;
        this.anoFabricacao = anoFabricacao;
    }

    ligar() {
        console.log("iniciar");
    }
}

// Classe herdeira 1: Smartphone
class Smartphone extends DispositivosMovel {
    constructor(modelo, fabricante, anoModelo, anoFabricacao, temCameraFrontal) {
        super(modelo, fabricante, anoModelo, anoFabricacao); 
        this.temCameraFrontal = temCameraFrontal;
    }

    tirarSelfie() {
        if (this.temCameraFrontal) {
            console.log(`${this.modelo} tirando selfie...`);
        } else {
            console.log(`${this.modelo} nao tem camera frontal.`);
        }
    }
}

// Classe herdeira 2: Tablet
class Tablet extends DispositivosMovel {
    constructor(modelo, fabricante, anoModelo, anoFabricacao, temCaneta) {
        super(modelo, fabricante, anoModelo, anoFabricacao); 
        this.temCaneta = temCaneta;
    }

    desenhar() {
        if (this.temCaneta) {
            console.log(`${this.modelo} desenhando com a caneta...`);
        } else {
            console.log(`${this.modelo} nao tem caneta`);
        }
    }
}

// Instâncias 
const smartphoneDoRivaldo2 = new Smartphone("iPhone", "Apple", 2024, 2023, true);
const smartphoneDaEvelyn2 = new Smartphone("Samsung", "Samsung", 2025, 2024, false);
const tabletDoClaudio2 = new Tablet("Xiaomi Pad", "Xiaomi", 2023, 2022, true);

// Testes
console.log(smartphoneDoRivaldo2);
smartphoneDoRivaldo2.tirarSelfie();

console.log(smartphoneDaEvelyn2);
smartphoneDaEvelyn2.tirarSelfie();

console.log(tabletDoClaudio2);
tabletDoClaudio2.desenhar();

