class Auto {
  constructor(marca, velocidad) {
    this.marca = marca;
    this.velocidad = velocidad;
  }

  acelerar() {
    this.velocidad += 10;
  }
  frenar() {
    this.velocidad -= 10;
  }
}

export default Auto;
