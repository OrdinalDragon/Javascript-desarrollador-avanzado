class CuentaBancaria {
  #saldo = 100_000_000;

  // SETTER
  depositar(monto) {
    if (monto <= 0) console.error('Monto inválido');
    this.#saldo += monto;
  }
  // GETTER
  verSaldo() {
    return this.#saldo;
  }
}

export default CuentaBancaria;
