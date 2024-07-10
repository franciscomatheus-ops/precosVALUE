
const Products = [
    { nome: 'Milho Fino', valor: 0, estoque: false },
    { nome: 'Milho Fino 50kg', valor: 0, estoque: false },
    { nome: 'Milho Grao', valor: 0, estoque: false },
    { nome: 'Torta de Algodao Fina', valor: 80, estoque: true },
    { nome: 'Torta Algodao tablete', valor: 80, estoque: true },
    { nome: 'Torta Algodao fina 40kg', valor: 0, estoque: false },
    { nome: 'Soja Oleopan', valor: 0, estoque: false },
    { nome: 'Soja Bugue', valor: 0, estoque: false },
    { nome: 'Soja Cagil', valor: 0, estoque: false },
    { nome: 'Casca de Soja Peletizada', valor: 0, estoque: false },
    { nome: 'Casca de Soja Moida', valor: 0, estoque: false },
    { nome: 'Farelo de Trigo', valor: 55.00, estoque: false },
    { nome: 'Sal Campeão 1x30', valor: 25.00, estoque: true },
    { nome: 'Sal 1x25 Fardo', valor: 21.00, estoque: true },
    { nome: 'Sal Grosso 1x30 Fardo', valor: 33.00, estoque: true },
    { nome: 'Arame Moto 500 mts', valor: 0, estoque: false },
    { nome: 'Arame Moto 250 mts', valor: 0, estoque: false },
    { nome: 'Arame Rodeio 250 Mts', valor: 0, estoque: false },
    { nome: 'Arame Forte 500Mts', valor: 0, estoque: false },
    { nome: 'Grampo', valor: 15.00, estoque: true },
    { nome: 'Arame Liso 16 Kg', valor: 0, estoque: false },
    { nome: 'Arame Liso 18 Kg', valor: 26.00, estoque: true },
    { nome: 'Arame Recozido Kg', valor: 25.00, estoque: true },
    { nome: 'Sal Protei Masfos 40', valor: 80, estoque: true },
    { nome: 'Sal Protei Masfos 73', valor: 80, estoque: true },
    { nome: 'Proteinado BOVINO', valor: 0, estoque: false },
    { nome: 'Sal DuBom caprino', valor: 80.00, estoque: true },
    { nome: 'Manguito', valor: 10.00, estoque: true },
    { nome: 'Farinha de Osso', valor: 138.00, estoque: true },
    { nome: 'Enxofre Agropecuario', valor: 203.00, estoque: true },
    { nome: 'Calcario Calcitico', valor: 42.00, estoque: true },
    { nome: 'V Master', valor: 120.00, estoque: true },
    { nome: 'V MASTER SUPLEMENTO', valor: 111.50, estoque: true },
    { nome: 'Bovi Fos 160', valor: 180.00, estoque: true },
    { nome: 'Agrobov Probiol Leite', valor: 100.00, estoque: true },
    { nome: 'Agrobov Parasitario', valor: 46.00, estoque: true },
    { nome: 'VITA BOVI ADE', valor: 39.00, estoque: true },
    { nome: 'V MASTER GANHO PESO', valor: 110.00, estoque: true },
    { nome: 'BOVIFOS PROTEICO 20', valor: 110.00, estoque: true },
    { nome: 'Total leite', valor: 110.00, estoque: true },
    { nome: 'Total corte', valor: 110.00, estoque: true },
    { nome: 'Total controle', valor: 110.00, estoque: true },
    { nome: 'Total Ureia', valor: 120.00, estoque: true },
    { nome: 'Lester 15 Kg', valor: 58.00, estoque: false },
    { nome: 'Lester 25 Kg', valor: 92.00, estoque: false },
    { nome: 'TIPSY Nat Filho 10 kg', valor: 70.00, estoque: false },
    { nome: 'TIPSY Nat Filho 25 kg', valor: 0.00, estoque: false },
    { nome: 'Bonny Adut Premiu 15', valor: 115.00, estoque: false },
    { nome: 'Ding Dog Plus - 15Kg', valor: 80.00, estoque: false },
    { nome: 'Ding Dog Plus - 25Kg', valor: 125.00, estoque: false },
    { nome: 'Mister CAT - 10kg', valor: 65.00, estoque: false },
    { nome: 'Mister CAT - 25 Kg', valor: 130.00, estoque: false },
    { nome: 'AVES - MP11 INICIAL 20Kg', valor: 85.00, estoque: false },
    { nome: 'MP 12 Engorda', valor: 62.00, estoque: false },
    { nome: 'MP 05 postura intesiva', valor: 67.00, estoque: false },
    { nome: 'MP 02 Postura e Cresc', valor: 73.00, estoque: false },
    { nome: 'MP 44Crescimto20', valor: 78.00, estoque: false },
    { nome: 'MP 45 Engorda 20 kg', valor: 62.00, estoque: false },
    { nome: 'MP 35 Alevinos 25 Kg', valor: 120.00, estoque: false },
    { nome: 'MP 31 Crescimento', valor: 103.00, estoque: false },
    { nome: 'MP 39 Engorda', valor: 90.00, estoque: false },
    { nome: 'MP 83 manutec 40Kg', valor: 115.00, estoque: false },
    { nome: 'MP 88 Alta Energia 40 Kg', valor: 140.00, estoque: false },
    { nome: 'MP 84 Poltro Proteina 40K', valor: 134.00, estoque: false },
    { nome: 'Bobby Gatos 15 kg', valor: 130.00, estoque: false },
    { nome: 'Bobby Junior - 1x10kg', valor: 80.00, estoque: false },
    { nome: 'Vitapop 15kg', valor: 70.00, estoque: false },
    { nome: 'Vitapop 25kg', valor: 100.00, estoque: false },
    { nome: 'Nucleo Lactação Bom Milk', valor: 130.00, estoque: false },
    { nome: 'Peixe Eng', valor: 105.00, estoque: false },
    { nome: 'Frango Inicial', valor: 85.00, estoque: false },
    { nome: 'Frango cresc', valor: 85.00, estoque: false },
    { nome: 'Frango Postura', valor: 78.00, estoque: false },
    { nome: 'Frango inicial granulada', valor: 145.00, estoque: false },
    { nome: 'Ureia Agricola', valor: 130.00, estoque: true },
    { nome: 'Nucleo inicial Complt', valor: 170.00, estoque: true },
    { nome: 'Nucleo Crescimento', valor: 150.00, estoque: true },
    { nome: 'Nucleo Gestação', valor: 192.00, estoque: true },
    { nome: 'Nucleo Lactação', valor: 211.00, estoque: true },
    { nome: 'Nucleo Terminação', valor: 154.00, estoque: true },
    { nome: 'Nuc Frango Cresc', valor: 145.00, estoque: true },
    { nome: 'Nuc Frango Postura', valor: 215.00, estoque: true },
    { nome: 'Farelo Enriquecido', valor: 52.30, estoque: true },
    { nome: 'Capim Aruana', valor: 350.00, estoque: false },
    { nome: 'Capim Decubens', valor: 240.00, estoque: false },
    { nome: 'Capim Rozizienses', valor: 190.00, estoque: false },
    { nome: 'Capim Massai', valor: 380.00, estoque: false },
    { nome: 'Capim Mombaça', valor: 345.00, estoque: false },
    { nome: 'Tela mangueirao 1 Fio 18', valor: 440.00, estoque: false },
    { nome: 'Tela mangueirao 1 Fio 16', valor: 646.00, estoque: false },
    { nome: 'Tela mangueirao 1 Fio 18', valor: 657.00, estoque: true },
    { nome: 'Tela Pinteiro 1 Fio 24', valor: 310.00, estoque: false },
    { nome: 'Tela Viveiro 1 Fio 26', valor: 453.00, estoque: true },
    { nome: 'Machado Lenhador 3,5 Lb', valor: 115.00, estoque: true },
    { nome: 'Pa Ajut Bico C Cabo', valor: 45.00, estoque: true },
    { nome: 'Picareta Chibanka', valor: 75.00, estoque: false },
    { nome: 'Enxada Larga C/cb', valor: 57.00, estoque: true },
    { nome: 'Enxada Larga S/cb', valor: 33.00, estoque: true },
    { nome: 'Foice Rocadeira', valor: 33.00, estoque: false },
    { nome: 'Foice Rocadeira tramontina', valor: 30.00, estoque: false },
    { nome: 'Ancinho(Rastelo)', valor: 20.00, estoque: true },
    { nome: 'Cabo de PA', valor: 10.00, estoque: true },
    { nome: 'Cabo de Picareta', valor: 12.00, estoque: true },
    { nome: 'Cabo de Enxda', valor: 11.00, estoque: true },
    { nome: 'Cavadeira Articulada Paraboni', valor: 65.00, estoque: false },
    { nome: 'Pá De Bico Leve Paraboni', valor: 45.00, estoque: true },
    { nome: 'Carrinho de Mão Tramotina', valor: 220.00, estoque: false },
    { nome: 'Carrinho de Mão Paraboni', valor: 260.00, estoque: false },
    { nome: 'Facão Corneta 14', valor: 47.00, estoque: true },
    { nome: 'Facão Corneta 18', valor: 60.00, estoque: true },
    { nome: 'Botina Crival 38', valor: 44.00, estoque: true },
    { nome: 'Botina Crival 40', valor: 44.00, estoque: true },
    { nome: 'Botina Crival 41', valor: 44.00, estoque: true },
    { nome: 'Botina Crival 42', valor: 44.00, estoque: true },
    { nome: 'Dobradica 03', valor: 32.00, estoque: true },
    { nome: 'Dobradica 02', valor: 25.00, estoque: true },
    { nome: 'Enxadete', valor: 27.00, estoque: false },
    { nome: 'Martelo 23 mm', valor: 30.00, estoque: true },
    { nome: 'Martelo tramontina 27mm', valor: 38.00, estoque: true },
    { nome: 'Corda de Seda n° 3 1x400', valor: 1.00, estoque: true },
    { nome: 'Corda de seda n° 5 1x190', valor: 1.00, estoque: true },
    { nome: 'Corda de Seda n° 12 1x105', valor: 2.50, estoque: false },
    { nome: 'Lona Preta 1x4 100mts', valor: 6.00, estoque: true },
    { nome: 'Saco de Silagem', valor: 2.00, estoque: true },
    { nome: 'Adubo Super Simples', valor: 90.00, estoque: true },
    { nome: 'Adubo 20 10 ', valor: 175.00, estoque: false }
]
document.addEventListener('DOMContentLoaded', function () {
    const Main = document.getElementById('main');

    for (let x in Products) {
        if (Products[x].estoque) {
            let Div = document.createElement('div');
            let SpanName = document.createElement('span');
            let SpanValue = document.createElement('span');
            SpanName.textContent = Products[x].nome.toLowerCase();
            SpanValue.textContent = Products[x].valor.toFixed(2).replace('.', ',');
            Div.appendChild(SpanName)
            Div.appendChild(SpanValue)
            Main.appendChild(Div)    
        }
    }

})

function SearchItens(InpValue) {

    const Main = document.getElementById('main');
    Main.textContent = ''
    // console.log(InpValue)
    InpValue = InpValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (InpValue != '') {
        for (let key in Products) {
            let NameProduct = Products[key].nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (InpValue != '' && NameProduct.startsWith(InpValue) && Products[key].estoque) {
                
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                SpanName.textContent = Products[key].nome.toLowerCase();
                SpanValue.textContent = Products[key].valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)
                // console.log(Products[key].nome)
    
            }
        }
    }
    else {
        for (let x in Products) {
            if (Products[x].estoque) {
                let Div = document.createElement('div');
                let SpanName = document.createElement('span');
                let SpanValue = document.createElement('span');
                SpanName.textContent = Products[x].nome.toLowerCase();
                SpanValue.textContent = Products[x].valor.toFixed(2).replace('.', ',');
                Div.appendChild(SpanName)
                Div.appendChild(SpanValue)
                Main.appendChild(Div)
            }
        }
    }

}
