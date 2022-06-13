class Queue {

    constructor() {
      this.queue = {}
      this.count = 0
      this.head = 0
    }
  
    enqueue(element){
      this.queue[this.count] = element
      this.count++
      return this.queue
    }
  
    dequeue(){
      const result = this.queue[this.head]
      delete this.queue[this.head]
      this.head++
      return result
    }
  
    peek(){
      return this.queue[this.head]
    }
  
    front(){
      return this.queue[this.head]
    }
  
    back(){
      return this.queue[this.count - 1]
    }
  
    size(){
      return this.count - this.head
    }
  
    print(){
      console.log(this.queue)
    }
  
    isEmpty(){
      // return this.count - this.head === 0
      return this.count === this.head
    }
  
    clear() {
      this.queue = {}
      this.count = 0
      this.head = 0
    }
  
}

/* 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando 
el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco] */

function colors(queue) {
    let original = new Queue();
    let one = new Queue();
    let two = new Queue();

    for (let i = 0; i < queue.length; i++) {
        original.enqueue(queue[i]); 
    }
    
    let control = original.size() * 2
    while (original.isEmpty() !== true) {
        if (control % 2 == 0) {
            let saveOne = original.front();
            original.dequeue(); 
            one.enqueue(saveOne)
            control -= 1;
        } else {
            let saveTwo = original.front();
            original.dequeue();
            two.enqueue(saveTwo);
            control -= 1;
        }
    }
    one.print();
    two.print();
}

colors(["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"])

/*6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. 
Sin embargo, llegada la hora de inicio hay muchos "colados", es por esto que se le 
ordena al vigilante que retire a todos aquellos que no tienen ticket. 
Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.*/

function orden(ticket) {
    let cola = new Queue();

    for (let i = 0; i < ticket.length; i++) {
        cola.enqueue(ticket[i]); 
    }

    for (let i = 0; i < ticket.length; i++) {
        let saveFirst = cola.front();
        cola.dequeue();
        cola.size() -= 1;
        if (saveFirst.ticket == true) {
            cola.enqueue (saveFirst)
        }
    }
    cola.print();
}

orden([
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
]);