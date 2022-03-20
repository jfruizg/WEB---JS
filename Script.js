var areaCuadrado = function(valor) {
    return valor * valor
}

var permitro_cuadrado = function(valor) {
    return valor * 4
}

var areaTraingulo = function(b, a) {
    return (b * a) / 2
}

var perimetroTriangulo = function(lado) {
    return lado * 3
}

var areaCirculo = function(r) {
    return (r * r) * 3, 1416
}

var perimetroTriangulo = function(r) {
    return 2 * 3, 1416 * r
}


function calcularAreaCuadrado() {
    const input = document.getElementById("datoCuadrado");
    const valor = input.value;

    const result = areaCuadrado(valor);
    alert(result)


}


function calcularPerimetroCuadrado() {
    const input = document.getElementById("datoCuadrado");
    const valor = input.value;

    const result = permitro_cuadrado(valor);
    alert(result)


}