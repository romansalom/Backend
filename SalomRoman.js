

class Usuario {
  constructor (nombre , apellido ,mascotas=[] ,libros=[] ) {
    this.nombre = nombre
    this.apellido = apellido
    this.mascotas = [] 
    this.libros = []
  } 

  getFullName(){
    console.log(`El nombre del usuario de esta consola es ${this.nombre} ${this.apellido}`)

  }

  addMascotas(mascotas){
    this.mascotas.push(mascotas)
    console.log(`el usuario tiene ${this.mascotas}`)

  }
  countMascotas(){
   let total_mascotas = this.mascotas.length
   return total_mascotas

}

addBook(nombreLibro,autorLibro){
    this.libros.push({nombre: nombreLibro , autor : autorLibro })
    console.log(this.libros)
}
getBookNames(){
    const nombreLibro = this.libros.map(libros => libros.nombre)
return nombreLibro
}

}
{
let roman = new Usuario  ("Roman" , "Salom" , [] , [])
console.log(roman.getFullName())
roman.addMascotas('Perro')
roman.addMascotas('Gato')
console.log(roman.addMascotas("Raton"))
console.log(roman.addBook("Las mil y una noches" , "Antoine Galland"))
console.log(roman.addBook("Caperucita Roja" , "Perrault"))
console.log(roman.countMascotas())
console.log(roman)}


