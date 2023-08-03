class ProductManager {
    constructor (){
        this.products = []
    }


static id = 0;


addProduct (products) {
if(products.title  && products.description && products.price && products.thumbnail && products.code && products.stock){
    const code = this.products.find (p => p.code === products.code )
if (code === undefined){

this.products.push(products)
products.id = ProductManager.id ++ 

console.log("Se agrego nuevo producto");

}else {
    console.log ("El Codigo ya existe");
}


}else{
 console.log ("Campo Obligatorio")
}

}

getProductById (id)
{
    const product = this.products.find (p => p.id === id)

    if (!product) { return 'NOT FOUND'}
    return product

}

getProducts ()
    {return this.products}
}


const manager = new ProductManager ()

//Productos agregados
manager.addProduct({title:'Taburete Tattoo', description:'taburete ajustable', price: 31.25, thumbnail:'imag por definir', code:2006, stock: 1})
manager.addProduct({title:'Agujas RL', description:'Pack 20 Agujas', price: 25.80, thumbnail:'imag por definir', code:9006, stock: 1})

//codigo repetido
manager.addProduct({title:'Maquina Pen', description:'Velocidad: Máx 10000 RPM, Entrada: Máx 12V,Carrera: 3.5MM,Motor: 4.5W potente motor,Cuerpo: Aluminio,Longitud HP: 120 mm,Aguja: Cartucho', price: 156.89, thumbnail:'imag por definir', code:9006, stock: 1})

//Campo vacio
manager.addProduct({title:'', description:'', price: 156.89, thumbnail:'imag por definir', code:'', stock: 1})

//Pruebas
console.log(manager.getProductById(0))
console.log(manager.getProductById(8))
console.log(manager.getProducts())
