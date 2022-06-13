class Stack {

    constructor() {
      this.stack = {}
      this.count = 0
    }
  
    push(element){
      this.stack[this.count] = element
      this.count++
      return this.stack
    }
  
    pop(){
      this.count--
      const result = this.stack[this.count]
      delete this.stack[this.count]
      return result
    }
  
    peek(){
      return this.stack[this.count - 1]
    }
  
    size(){
      return this.count
    }
  
    print(){
      console.log(this.stack)
    }
  
    isEmpty(){
      return this.count === 0
    }
  
    clear() {
      this.stack = {}
      this.count = 0
    }
}

/*Pilas
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja']
*/

function miFuncion(stack, number) {
    let newStack = new Stack();
    for(let i = 0; i < number; i++) {
        newStack.push(stack[i]); 
    }
    console.log(newStack)
}

miFuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 4)

/*2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, 
y dos valores también de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en 
algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]*/

function reemplazar(stack, nuevo, viejo) {
  let numberStack = new Stack();
  for (let i = 0; i < stack.length; i++) {
    numberStack.push(stack[i])
  }
  while (numberStack.peek() !== viejo) {
    numberStack.pop();
  } 
  numberStack.pop();
  numberStack.push(nuevo);
  console.log(numberStack)
}

/*3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/

function viaje() {
  let recorrido = new Stack();
  let destino = new Stack();
  let control = ["Origen", "pueblo 1", "pueblo 2", "destino"]
  for (let i = 0; i < control.length; i++) {
    recorrido.push(control[i])
  }
  for (let i = control.indexOf(recorrido.peek()); i >= 0; i--) {
    destino.push(control[i])
  }
  console.log(recorrido)
  console.log(destino)
}

/*4.-  Un almacén tiene capacidad para apilar "n" contenedores. 
Cada contenedor tiene un número de identificación. 
Cuando se desea retirar un contenedor específico, deben retirarse primero los 
contenedores que están encima de él y colocarlos en otra pila, 
efectuar el retiro y regresarlos a su respectivo lugar. */

function almacen(stack, n, contenedor) {
  let one = new Stack();
  let temporal = new Stack(); 

  for (let i = 0; i < n; i++) {
    one.push(stack[i]); 
  }

  while (one.peek() !== contenedor) {
    let save = one.peek();
    one.pop()
    temporal.push(save)
  }
  one.pop()

  while (temporal.isEmpty() == false) {
    let save = temporal.peek();
    temporal.pop()
    one.push(save)
  }

  console.log(one)
  console.log(`Se extrajo ${contenedor}`)
}

almacen(["N120", "N121", "N122", "N123", "N124", "N125", "N216", "N217"], 7, "N123")