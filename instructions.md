Carrinho de compras
Aviso!
Esse exercício não precisa ser enviado, ou seja, não será corrigido.

SOBRE A APLICAÇÃO
O Televendas de uma grande loja precisa de uma aplicação para cadastrar produtos e efetivar compras para os clientes, verificar o preço final da compra e da soma de descontos obtidos.

O usuário (vendedor) pode:
Cadastrar produtos informando: código, name, description, price e discount;
Adicionar os produtos ao carrinho;
Verificar no carrinho: preço final da compra e valor economizado somando os descontos dos produto
O QUE DEVE CONTER
O formulário para cadastro dos produtos,
Abaixo do formulário a lista com os produtos que já existem (no array) e atualizar com novo item cadastrado.
No topo da página apresente o valor da compra, e quanto o cliente economizou (somando os descontos obtidos).
CRITÉRIOS
State;
Componentes;
Props
Use em sua Lógica, três métodos de array, map, filter e reduce;
Callback.
Use estes produtos abaixo para iniciar a aplicação.

const [products, setProducts] = useState([
     {
      code: 10,
       name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
 ]);
        