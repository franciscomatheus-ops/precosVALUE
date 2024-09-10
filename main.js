const Products = [
    { nome: 'Milho Moido ', valor: 0, estoque: false },
    { nome: 'Milho Grao', valor: 0, estoque: false },
    { nome: 'Torta de Algodao Fina', valor: 72, estoque: true },
    { nome: 'Torta de Algodao tablete', valor: 67, estoque: true },
    { nome: 'Soja Oleopan', valor: 0, estoque: false },
    { nome: 'Soja Cagil', valor: 0, estoque: false },
    { nome: 'Casca de Soja Peletizada', valor: 0, estoque: false },
    { nome: 'Farelo de Trigo', valor: 0, estoque: false },
    { nome: 'Sal Moido Campeão', valor: 22, estoque: true },
    { nome: 'Sal Moido Solto', valor: 20, estoque: true },
    { nome: 'Sal Grosso 1x30', valor: 33, estoque: true },
    { nome: 'Arame Moto 500 mts', valor: 0, estoque: false },
    { nome: 'Arame Moto 250 mts', valor: 0, estoque: false },
    { nome: 'Arame Rodeio 500 mts', valor: 0, estoque: false },
    { nome: 'Arame Rodeio 250 mts', valor: 0, estoque: false },
    { nome: 'Grampo 1Kg', valor: 18, estoque: true },
    { nome: 'Arame Liso nº 16 1Kg', valor: 25, estoque: true },
    { nome: 'Arame Liso nº 18 1Kg', valor: 25, estoque: true },
    { nome: 'Arame Recozido 1Kg', valor: 25.00, estoque: true },
    { nome: 'Macfos 40 corte', valor: 0, estoque: false },
    { nome: 'Macfos 73 leite', valor: 80, estoque: true },
    { nome: 'Manguito ', valor: 10, estoque: true },
    { nome: 'Farinha de Osso', valor: 138, estoque: true },
    { nome: 'Enxofre Agropecuario', valor: 203, estoque: true },
    { nome: 'Calcario Calcitico', valor: 42, estoque: true },
    { nome: 'V Master sal mineral ', valor: 120, estoque: true },
    { nome: 'SUPLEMENTO V MASTER', valor: 110, estoque: true },
    { nome: 'Bovi Fos 160', valor: 180, estoque: true },
    { nome: 'Probiol Leite', valor: 110, estoque: true },
    { nome: 'Parasitario', valor: 46, estoque: true },
    { nome: 'ADE', valor: 39, estoque: true },
    { nome: 'V MASTER + GANHO 30kg', valor: 110, estoque: true },
    { nome: 'BOVIFOS PROTEICO 20', valor: 110, estoque: true },
    { nome: 'Total leite', valor: 110, estoque: true },
    { nome: 'Total corte ', valor: 110, estoque: true },
    { nome: 'Total controle', valor: 110, estoque: true },
    { nome: 'Total Ureia ', valor: 110, estoque: true },
    { nome: 'Lester 15 Kg', valor: 0, estoque: false },
    { nome: 'Lester 25 Kg', valor: 0, estoque: false },
    { nome: 'TIPSY Filhote 10 kg', valor: 0, estoque: false },
    { nome: 'TIPSY Filhote 25 kg', valor: 0, estoque: false },
    { nome: 'Bonny Adut Premiu 15', valor: 0, estoque: false },
    { nome: 'Ding Dog Plus 15Kg', valor: 0, estoque: false },
    { nome: 'Ding Dog Plus 25Kg', valor: 0, estoque: false },
    { nome: 'Mister CAT 10kg ', valor: 0, estoque: false },
    { nome: 'Mister CAT 25Kg', valor: 0, estoque: false },
    { nome: 'Bobby Gatos 15kg', valor: 130, estoque: true },
    { nome: 'Bobby Junior 10kg', valor: 80.00, estoque: true },
    { nome: 'Vitapop 15kg', valor: 70, estoque: true },
    { nome: 'Vitapop 25kg', valor: 100, estoque: true },
    { nome: 'BomPeixe Eng', valor: 0, estoque: false },
    { nome: 'Ureia Agricola', valor: 130, estoque: true },
    { nome: 'Nucleo Suino inicial ', valor: 170, estoque: true },
    { nome: 'Nucleo Suino Crescimento', valor: 150, estoque: true },
    { nome: 'Nucleo Suino Gestação', valor: 192, estoque: true },
    { nome: 'Nucleo Suino Lactação', valor: 180, estoque: true },
    { nome: 'Nucleo Suino Terminação', valor: 154, estoque: true },
    { nome: 'Nuc Aves Frango Cresc', valor: 0, estoque: false },
    { nome: 'Nuc Aves Frango Postura', valor: 0, estoque: false },
    { nome: 'Farelo Enriquecido', valor: 52, estoque: false },
    { nome: 'Capim Aruana', valor: 350, estoque: false },
    { nome: 'Capim Decubens', valor: 240, estoque: false },
    { nome: 'Capim Rozizienses', valor: 190, estoque: false },
    { nome: 'Capim Massai', valor: 380, estoque: false },
    { nome: 'Capim Mombaça', valor: 345, estoque: false },
    { nome: 'Tela mangueirão 1M Fio 18', valor: 657, estoque: false },
    { nome: 'Tela mangueirao 1M Fio 16', valor: 0, estoque: false },
    { nome: 'Tela mangueirao 1.5M Fio 16', valor: 830, estoque: true },
    { nome: 'Tela Pinteiro 1.5M ', valor: 230, estoque: true },
    { nome: 'Tela Viveiro 1M Fio 26', valor: 453, estoque: true },
    { nome: 'MANGUEIRA IRRIGACAO 1.3MM', valor: 80, estoque: true },
    { nome: 'MANGUEIRA IRRIGACAO 1.5MM', valor: 110, estoque: true },
    { nome: 'MACHADO LARGO 3.5 Lb S/CB', valor: 65, estoque: true },
    { nome: 'Machado Lenhador 3.5 Lb C/CB', valor: 115, estoque: true },
    { nome: 'Pa Ajut Bico S/CB', valor: 45, estoque: true },
    { nome: 'Pá De Bico Leve C/CB', valor: 55, estoque: true },
    { nome: 'Picareta Chibanka', valor: 75, estoque: true },
    { nome: 'Foice Rocadeira', valor: 30, estoque: true },
    { nome: 'Ancinho/Rastelo', valor: 20, estoque: true },
    { nome: 'Cabo de PA', valor: 15, estoque: true },
    { nome: 'Cabo de Picareta', valor: 15, estoque: true },
    { nome: 'Cabo de Enxda', valor: 15, estoque: true },
    { nome: 'Cavadeira Articulada Paraboni', valor: 0, estoque: false },
    { nome: 'Carrinho de Mão Tramotina', valor: 0, estoque: false },
    { nome: 'Carrinho de Mão Paraboni', valor: 220, estoque: true },
    { nome: 'Facão Corneta 14', valor: 47, estoque: true },
    { nome: 'Facão Corneta 18', valor: 65, estoque: true },
    { nome: 'Botina Crival 38', valor: 44, estoque: true },
    { nome: 'Botina Crival 40', valor: 44, estoque: true },
    { nome: 'Botina Crival 41', valor: 44, estoque: true },
    { nome: 'Botina Crival 42', valor: 44, estoque: true },
    { nome: 'Dobradica 03', valor: 32, estoque: true },
    { nome: 'Dobradica 02', valor: 25, estoque: true },
    { nome: 'Enxada 2.5 L', valor: 30, estoque: true },
    { nome: 'Enxadão/Enxadete', valor: 27, estoque: true },
    { nome: 'Martelo 23 mm', valor: 30, estoque: true },
    { nome: 'Martelo 25 mm', valor: 35, estoque: true },
    { nome: 'Martelo 27 mm', valor: 40, estoque: true },
    { nome: 'Corda de Seda n° 3 1x400', valor: 1, estoque: true },
    { nome: 'Corda de seda n° 5 1x190', valor: 1, estoque: true },
    { nome: 'Corda de Seda n° 12 1x105', valor: 2.5, estoque: false },
    { nome: 'Lona Preta 1x4 100mts', valor: 6, estoque: true },
    { nome: 'Sc de Silagem', valor: 2, estoque: false },
    { nome: 'Super Simples', valor: 90, estoque: false },
    { nome: 'Adubo 20 10 20', valor: 175, estoque: false }
]

document.addEventListener('DOMContentLoaded', function () {
    const Main = document.getElementById('main');

    Products.forEach(product =>{
        if (product.estoque) {
            let Div = document.createElement('div');
            let SpanName = document.createElement('span');
            let SpanValue = document.createElement('span');
            Div.classList.add(product.estoque ? 'DivTrue' : 'DivFalse');
            Div.id = product.nome;
            SpanName.textContent = product.nome.toLowerCase();
            SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
            Div.appendChild(SpanName)
            Div.appendChild(SpanValue)
            Main.appendChild(Div)

            Div.addEventListener('click', function(){
                for (let x in Products){
                    if(Div.id == Products[x].nome){
                        console.log(Products[x]);
                    }
                }
            })
        }
    })

})

function SearchItens(InpValue) {

    const Main = document.getElementById('main');
    Main.textContent = '';

    InpValue = InpValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (InpValue != '' && InpValue != '!true' && InpValue != '!false' && InpValue != '!all') {
        Products.forEach(product =>{
            let NameProduct = product.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (NameProduct.includes(InpValue) && product.estoque) {
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                Div.classList.add(product.estoque ? 'DivTrue' : 'DivFalse');
                Div.id = product.nome;
                SpanName.textContent = product.nome.toLowerCase();
                SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)

                Div.addEventListener('click', function(){
                    for (let x in Products){
                        if(Div.id == Products[x].nome){
                            console.log(Products[x]);
                        }
                    }
                })
            }
        })
    }
    else if (InpValue == '!true') {
        Products.forEach(product=>{
            if (product.estoque) {
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                Div.classList.add('DivTrue');
                Div.id = product.nome;
                SpanName.textContent = product.nome.toLowerCase();
                SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)

                Div.addEventListener('click', function(){
                    for (let x in Products){
                        if(Div.id == Products[x].nome){
                            console.log(Products[x]);
                        }
                    }
                })
            }
        })
    }
    else if (InpValue == '!false') {
        Products.forEach(product=>{
            if (!product.estoque) {
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                Div.classList.add('DivFalse');
                Div.id = product.nome;
                SpanName.textContent = product.nome.toLowerCase();
                SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)

                Div.addEventListener('click', function(){
                    for (let x in Products){
                        if(Div.id == Products[x].nome){
                            console.log(Products[x]);
                        }
                    }
                })
            }
        })
    }
    else if (InpValue == '!all') {
        Products.forEach(product=>{
            let Div = document.createElement('div');
            let SpanName = document.createElement('span');
            let SpanValue = document.createElement('span');
            Div.classList.add(product.estoque ? 'DivTrue' : 'DivFalse');
            Div.id = product.nome;
            SpanName.textContent = product.nome.toLowerCase();
            SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
            Div.appendChild(SpanName)
            Div.appendChild(SpanValue)
            Main.appendChild(Div)
            Div.addEventListener('click', function(){
                for (let x in Products){
                    if(Div.id == Products[x].nome){
                        console.log(Products[x]);
                    }
                }
            })
        })
    }
    else {
        Products.forEach(product =>{
            if (product.estoque) {
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                Div.classList.add(product.estoque ? 'DivTrue' : 'DivFalse');
                Div.id = product.nome;
                SpanName.textContent = product.nome.toLowerCase();
                SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)
    
                Div.addEventListener('click', function(){
                    for (let x in Products){
                        if(Div.id == Products[x].nome){
                            console.log(Products[x]);
                        }
                    }
                })
            }
        })
    }
}
document.addEventListener('keydown', function(event) {
    
    if (event.key === 'Delete') {
        
        const inp = document.getElementById('inp');
        inp.value = '';

        const Main = document.getElementById('main');
        Main.textContent = '';

        Products.forEach(product =>{
            if (product.estoque) {
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                Div.classList.add(product.estoque ? 'DivTrue' : 'DivFalse');
                Div.id = product.nome;
                SpanName.textContent = product.nome.toLowerCase();
                SpanValue.textContent = product.valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)
    
                Div.addEventListener('click', function(){
                    for (let x in Products){
                        if(Div.id == Products[x].nome){
                            console.log(Products[x]);
                        }
                    }
                })
            }
        })
    }
});