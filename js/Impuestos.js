class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get MontoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  set MontoBrutoAnual(nuevoMonto) {
    this._montoBrutoAnual = nuevoMonto;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }

  calcularImpuesto() {
    return ((this._montoBrutoAnual - this._deducciones) * 0.21);
  }
}

export default Impuestos;

