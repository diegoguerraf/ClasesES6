"use strict";

var _clientes = _interopRequireDefault(require("./js/clientes.js"));
var _Impuestos = _interopRequireDefault(require("./js/Impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crear instancia de Impuestos
var impuestosCliente1 = new _Impuestos["default"](10000, 2000);

// Crear instancia de Cliente con la instancia de Impuestos
var cliente1 = new _clientes["default"]('Juan', impuestosCliente1);

// Mostrar información del cliente y sus impuestos
console.log("Información del cliente:");
console.log("Nombre del cliente:", cliente1.nombre);
console.log("Monto bruto anual del cliente:", cliente1._impuestos.MontoBrutoAnual);
console.log("Deducciones del cliente:", cliente1._impuestos.deducciones);
console.log("Impuesto total a pagar por el cliente:", cliente1.calcularImpuesto());
