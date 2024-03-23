import Impuestos from "./Impuestos.js";

class Cliente {
  constructor(nombre, impuestos) {
    this._nombre = nombre;
    this._impuestos = impuestos;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return this._impuestos.calcularImpuesto();
  }
}

export default Cliente;
