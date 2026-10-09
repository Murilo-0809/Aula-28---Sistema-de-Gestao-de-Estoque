// Questão 1.1 //
const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];

console.log(categorias);

// Questão 1.2 //
const codigosProdutos = [101, 102, 103, 104];

const fornecedores = new Array(
    'TechSupply',
    'ModaExpress',
    'SuperFoods'
);

console.log(codigosProdutos);
console.log(fornecedores);

// Questão 1.3 //
console.log(categorias[0]);

categorias[1] = 'Calçados';

console.log(categorias);

// Questão 2.1 //
categorias.push('Livros');
console.log(categorias);

categorias.pop();
console.log(categorias);

categorias.unshift('Brinquedos');
console.log(categorias);

categorias.shift();
console.log(categorias);

// Questão 2.2 //
console.log(categorias.length);

//Questão 2.3 //
console.log(categorias.indexOf('Calçados'));

console.log(categorias.includes('Eletrônicos'));

//Questão 3.1 //
for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}

//Questão 3.2 //
for (const categoria of categorias) {
    console.log(categoria);
}

// Parte 4 //
const produtos = [
    { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
    { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
    { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

// Questão 4.1 //
console.log(produtos[0].nome);

// Questão 4.2 //
// A //
const produtosBaratos = produtos.filter(
    produto => produto.preco < 300.00
);

console.log(produtosBaratos);

// B //
const precos = [50, 150, 200, 350, 400];

const multiplosDe100 = precos.filter(
    preco => preco % 100 === 0
);

console.log(multiplosDe100);

// Questão 4.3 //
// A //
const quantidades = [2, 3, 5, 10];

const totalItens = quantidades.reduce(
    (total, quantidade) => total + quantidade,
    0
);

console.log(totalItens);

// B //
const valorEstoque = produtos.reduce(
    (total, produto) => total + produto.preco * produto.estoque,
    0
);

console.log(valorEstoque);

// Questão 4.4 //
// A //
const precosOriginais = [100, 200, 300];

const precosComDesconto = precosOriginais.map(
    preco => preco * 0.9
);

console.log(precosComDesconto);

// B //
const nomesProdutos = produtos.map(
    produto => produto.nome
);

console.log(nomesProdutos);

// Questão 4.5 //
const produtosOrdenados = produtos.slice();

produtosOrdenados.sort(
    (a, b) => a.preco - b.preco
);

console.log(produtosOrdenados);

// Questão 4.6 //
// A //
console.log(produtos.some(
    produto => produto.estoque < 5
));

// B //
const inventario = [
    { nome: 'Teclado', estoque: 15 },
    { nome: 'Mouse', estoque: 2 },
    { nome: 'Headset', estoque: 10 }
];

const estoqueCritico = inventario.some(
    produto => produto.estoque < 5
);

console.log(estoqueCritico);

const produtoCritico = inventario.find(
    produto => produto.estoque < 5
);

console.log(produtoCritico);