const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var sucursalesSchema = new Schema({
    id :Number,
    ciudad : String,
    direccion : String,
    telefono_fijo : String,
    celular : String,
    correo: String
})

var empleadosSchema= new Schema({
    id : Number,
    id_sucursal_donde_labora : Number,
    cedula:String,
    nombre: String,
    apellido: String,
    direccion : String,
    ciudad: String,
    celular: String,
    correo: String
})

var alquileresSchema = new Schema({
    id:Number,
    id_vehiculo : String,
    id_cliente : Number,
    id_empleado : Number,
    fecha_salida: Date,
    fecha_llegada: Date,
    fecha_llegada_esperada : Date,
    valor_por_semana_alquiler: Number,
    valor_por_dia_alquier: Number,
    porcentaje_descuento:Number,
    valor_cotizado: Number,
    valor_pagado:Number,
    sucursales_id: Number,
    sucursales_id1:Number
})
var vehiculoSchema = new Schema({
    placa : String,
    tipo_vehiculo: String,
    referencia : String,
    modelo : String,
    puertas : Number,
    capacidad : Number,
    sunroof : Boolean,
    motor : Number,
    color: String,
    disponible : Boolean,
    precio_dia: Number,
    precio_semana:Number
})

var historialSchema= new Schema({
    id : Number,
    placa : String,
    time_start:Date
})

var clientesSchema = new Schema ({
    id:Number,
    cedula:String,
    nombre:String,
    apellido: String,
    direccion:String,
    ciudad : String,
    celular:String,
    correo:String,
    contrasena:String
})

module.exports=mongoose.model("Empleados",empleadosSchema);
module.exports=mongoose.model("Alquileres",alquileresSchema);
module.exports=mongoose.model("Vehiculo",vehiculoSchema);
module.exports=mongoose.model("Historial",historialSchema);
module.exports=mongoose.model("Clientes",clientesSchema);
module.exports=mongoose.model("Sucursales",sucursalesSchema);