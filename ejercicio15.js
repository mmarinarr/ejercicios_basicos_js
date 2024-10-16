const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

const camProducts = [];
for (const cam of products) {
    if (cam.includes("Camiseta")) {
        camProducts.push(cam)
    }
}
console.log(camProducts)