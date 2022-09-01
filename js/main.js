class Productos {
    constructor (nombre, precio) {
      this.nombre = nombre;
      this.precio = parseFloat(precio);
    }
  }
  
  //Declaramos un array de productos para almacenar objetos
  
  let productos = [];
  
  let precioTotalCarrito = 0
  
 
   
  
    function ConcatenarMensajes(){
      var mensajeFinal = "";
      var SePresionoEscape = true;
      var ultimaPalabra = "";
      alert ("Finalizara la funcion al presion la tecla 'Esc' o presionando el boton 'Cancelar'");
      while(ultimaPalabra != null){
           mensajeFinal += ultimaPalabra;
           if(mensajeFinal != ""){
             alert("Mensaje completo: " + mensajeFinal);
           }
           ultimaPalabra = prompt("Ingrese una palabra: ");
        }
      alert ("Mensaje Final: " + mensajeFinal);
      
    }
  
    function agregarAlCarrito(productoNombre, precioAgregar){
      productos.push(new Productos(productoNombre, precioAgregar));
      precioTotalCarrito += precioAgregar;
      let divContenedor = document.getElementById("divCarritoEfectuarCompra");
          if(divContenedor.classList.contains("d-ocultar")){
          divContenedor.classList.remove("d-ocultar");
          }
      let btnId = document.getElementById("btnCarritoEfectuarCompra");
      btnId.textContent = "Comprar $ " + precioTotalCarrito;
    }
  
    function cerrarDivCarrito(){
      precioTotalCarrito = 0;
      productos = [];
         let divContenedor = document.getElementById("divCarritoEfectuarCompra");
      divContenedor.classList.add("d-ocultar");
    }
  
    function realizarCompra() {
      let mensaje = "Se realizó la compra de los siguientes productos: \n";
      for(const producto of productos){
        mensaje += producto.nombre + " = " + producto.precio + "\n";
      }
      alert(mensaje);
    }
  