import Cliente from './assets/js/clientes.js';
import Impuestos from './assets/js/Impuestos.js';

// Crear instancia de Impuestos
const impuestosCliente1 = new Impuestos(10000, 2000);

// Crear instancia de Cliente con la instancia de Impuestos
const cliente1 = new Cliente('Juan', impuestosCliente1);

// Mostrar información del cliente y sus impuestos
console.log("Información del cliente:");
console.log("Nombre del cliente:", cliente1.nombre);
console.log("Monto bruto anual del cliente:", cliente1._impuestos.MontoBrutoAnual);
console.log("Deducciones del cliente:", cliente1._impuestos.deducciones);
console.log("Impuesto total a pagar por el cliente:", cliente1.calcularImpuesto());
