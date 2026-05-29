/**
 * Constante do Número do WhatsApp
 */
const WHATSAPP_NUMBER = "554135855059";

/**
 * Função para gerar link do WhatsApp com mensagem codificada
 */
function gerarLinkWhatsApp(mensagem) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

// Dados de galeria para cada categoria
const galeriaDados = {
    "Sofás": {
        imagem: "assets/cat-sofas.png",
        itens: [
            { nome: "Sofá Retrátil 3 Lugares", imagem: "assets/sofa-01.webp" },
            { nome: "Sofá de Canto Moderno", imagem: "assets/sofa-02.webp" },
            { nome: "Sofá 2 Lugares Suede", imagem: "assets/sofa-03.webp" },
            { nome: "Poltrona Decorativa", imagem: "assets/sofa-04.webp" },
            { nome: "Sofá Reclinável Premium", imagem: "assets/sofa-05.webp" },
            { nome: "Sofá Retrátil de Canto", imagem: "assets/sofa-06.webp" },
            { nome: "Sofá Estofado Luxo", imagem: "assets/sofa-07.webp" }
        ]
    },
    "Guarda-roupas": {
        imagem: "assets/cat-guardaroupas.png",
        itens: [
            { nome: "Guarda-Roupa Casal Premium", imagem: "assets/guardaroupa-01.webp" },
            { nome: "Guarda-Roupa Duplex Moderno", imagem: "assets/guardaroupa-02.webp" }
        ]
    },
    "Camas e colchões": {
        imagem: "assets/cat-camas.png",
        itens: [
            { nome: "Cama Box Casal 01", imagem: "assets/casal-01.webp" },
            { nome: "Cama Box Casal 02", imagem: "assets/casal-02.webp" },
            { nome: "Cama Box Casal 03", imagem: "assets/casal-03.webp" },
            { nome: "Cama Box Casal 04", imagem: "assets/casal-04.webp" },
            { nome: "Cama Box Casal 05", imagem: "assets/casal-05.webp" },
            { nome: "Cama Box Casal 06", imagem: "assets/casal-06.webp" },
            { nome: "Cama Box Solteiro 01", imagem: "assets/solteiro-01.webp" },
            { nome: "Cama Box Solteiro 02", imagem: "assets/solteiro-02.webp" },
            { nome: "Cama Box Solteiro 03", imagem: "assets/solteiro-03.webp" }
        ]
    },
    "Mesas e cadeiras": {
        imagem: "assets/cat-mesas.png",
        itens: [
            { nome: "Conjunto Mesa de Jantar", imagem: "assets/mesa-01.webp" },
            { nome: "Mesa de Jantar 4 Cadeiras", imagem: "assets/mesa-02.webp" },
            { nome: "Mesa Tampo de Vidro", imagem: "assets/mesa-03.webp" },
            { nome: "Mesa de Madeira Moderna", imagem: "assets/mesa-04.webp" },
            { nome: "Mesa de Jantar 6 Cadeiras", imagem: "assets/mesa-05.webp" },
            { nome: "Mesa Redonda 4 Cadeiras", imagem: "assets/mesa-06.webp" },
            { nome: "Mesa de Cozinha Compacta", imagem: "assets/mesa-07.webp" }
        ]
    },
    "Racks e painéis": {
        imagem: "assets/cat-racks.png",
        itens: [
            { nome: "Rack de Madeira com Painel", imagem: "assets/racks-01.webp" },
            { nome: "Rack Retrô Moderno", imagem: "assets/racks-02.webp" },
            { nome: "Rack com Painel Integrado", imagem: "assets/racks-03.webp" }
        ]
    },
    "Cozinhas e armários": {
        imagem: "assets/cat-cozinhas.png",
        itens: [
            { nome: "Armário de Cozinha Compacto", imagem: "assets/cozinha-01.webp" },
            { nome: "Armário de Cozinha Completo", imagem: "assets/cozinha-02.webp" },
            { nome: "Balcão de Pia", imagem: "assets/cozinha-03.webp" }
        ]
    },
    "Eletrodomésticos": {
        imagem: "assets/cat-eletro.png",
        itens: [
            { nome: "Geladeira Duplex Inox", imagem: "assets/geladeira-01.webp" },
            { nome: "Geladeira Frost Free Branca", imagem: "assets/geladeira-02.webp" },
            { nome: "Geladeira Consul Facilite", imagem: "assets/geladeira-03.webp" },
            { nome: "Geladeira Frost Free Premium", imagem: "assets/geladeira-05.webp" },
            { nome: "Máquina de Lavar Brastemp", imagem: "assets/maquina-01.webp" },
            { nome: "Máquina de Lavar Consul", imagem: "assets/maquina-02.webp" },
            { nome: "Máquina de Lavar Electrolux", imagem: "assets/maquina-03.webp" },
            { nome: "Máquina de Lavar Premium", imagem: "assets/maquina-04.webp" }
        ]
    },
    "Decoração": {
        imagem: "assets/cat-decoracao.png",
        itens: [
            { nome: "Quadro Decorativo", imagem: "assets/decoracao-01.webp" },
            { nome: "Vaso de Decoração 1", imagem: "assets/decoracao-02.webp" },
            { nome: "Vaso de Decoração 2", imagem: "assets/decoracao-03.webp" },
            { nome: "Vaso de Decoração 3", imagem: "assets/decoracao-04.webp" },
            { nome: "Enfeite Decorativo 1", imagem: "assets/decoracao-05.webp" },
            { nome: "Enfeite Decorativo 2", imagem: "assets/decoracao-06.webp" },
            { nome: "Enfeite Decorativo 3", imagem: "assets/decoracao-07.webp" },
            { nome: "Enfeite Decorativo 4", imagem: "assets/decoracao-08.webp" }
        ]
    }
};

/**
 * Função para abrir a Galeria de Fotos (Modal)
 */
window.abrirGaleria = function(categoriaNome) {
    const modal = document.getElementById('galeria-modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const galeriaGrid = document.getElementById('galeria-grid');
    const modalBtn = document.getElementById('modal-whatsapp-btn');
    
    if (!modal) return;

    // Atualizar textos
    modalTitulo.textContent = categoriaNome;
    
    // Gerar link do WhatsApp geral para o botão do modal
    const mensagemGeral = `Olá, gostaria de consultar as opções e valores da categoria: ${categoriaNome}.`;
    modalBtn.setAttribute('href', gerarLinkWhatsApp(mensagemGeral));
    
    // Limpar galeria anterior
    galeriaGrid.innerHTML = '';
    
    // Buscar dados reais da categoria
    const dados = galeriaDados[categoriaNome] || { imagem: "assets/hero-furniture.png", itens: ["Produto da Loja 1", "Produto da Loja 2"] };
    
    // Renderizar itens
    dados.itens.forEach((item) => {
        const itemNome = typeof item === 'object' ? item.nome : item;
        const itemImagem = (typeof item === 'object' && item.imagem) ? item.imagem : dados.imagem;
        const itemMsg = `Olá! Vi no site da Casa Bela Móveis o item "${itemNome}" na categoria "${categoriaNome}" e gostaria de saber o valor e disponibilidade.`;
        const linkWppItem = gerarLinkWhatsApp(itemMsg);
        
        const cardItem = document.createElement('div');
        cardItem.className = 'galeria-item';
        cardItem.innerHTML = `
            <img src="${itemImagem}" alt="${itemNome}" class="galeria-imagem-real">
            <div class="galeria-item-overlay">
                <span class="galeria-item-titulo">${itemNome}</span>
                <a href="${linkWppItem}" target="_blank" class="btn-galeria-consultar">Consultar</a>
            </div>
        `;
        galeriaGrid.appendChild(cardItem);
    });
    
    // Abrir modal com transição suave
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Impedir o scroll da página de fundo enquanto o modal está aberto
        document.body.style.overflow = 'hidden';
};

window.abrirGaleriaRodape = function(categoriaNome) {
    const secaoCategorias = document.getElementById('categorias');
    if (secaoCategorias) {
        secaoCategorias.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
        window.abrirGaleria(categoriaNome);
    }, 600);
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU MOBILE
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu && hamburger) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // 2. CONFIGURAR BOTÕES DE WHATSAPP ESTÁTICOS
    const whatsappButtons = document.querySelectorAll('[data-mensagem]');
    whatsappButtons.forEach(btn => {
        const msg = btn.getAttribute('data-mensagem');
        if (msg) {
            btn.setAttribute('href', gerarLinkWhatsApp(msg));
        }
    });

    // 3. RENDERIZAR CATEGORIAS DINAMICAMENTE
    const categorias = [
        { nome: "Sofás", descricao: "Opções confortáveis para sala de estar, visitas e momentos em família.", icone: "🛋️", imagem: "assets/cat-sofas.png" },
        { nome: "Guarda-roupas", descricao: "Modelos usados e seminovos para organizar melhor o seu quarto.", icone: "🚪", imagem: "assets/cat-guardaroupas.png" },
        { nome: "Camas e colchões", descricao: "Itens selecionados para trazer mais conforto ao seu descanso.", icone: "🛏️", imagem: "assets/cat-camas.png" },
        { nome: "Mesas e cadeiras", descricao: "Conjuntos para cozinha, sala de jantar e ambientes familiares.", icone: "🪑", imagem: "assets/cat-mesas.png" },
        { nome: "Racks e painéis", descricao: "Soluções para deixar sua sala mais bonita e funcional.", icone: "📺", imagem: "assets/cat-racks.png" },
        { nome: "Cozinhas e armários", descricao: "Móveis para organizar sua cozinha com praticidade e economia.", icone: "🍳", imagem: "assets/cat-cozinhas.png" },
        { nome: "Eletrodomésticos", descricao: "Fogões, geladeiras, máquinas de lavar e outros itens para o dia a dia.", icone: "❄️", imagem: "assets/cat-eletro.png" },
        { nome: "Decoração", descricao: "Peças variadas para complementar os ambientes da sua casa.", icone: "🖼️", imagem: "assets/cat-decoracao.png" }
    ];

    const categoriasGrid = document.getElementById('categorias-grid');
    if (categoriasGrid) {
        categorias.forEach((cat, index) => {
            const card = document.createElement('div');
            card.className = 'categoria-card animate-on-scroll';
            card.style.transitionDelay = `${(index % 4) * 100}ms`;
            
            card.innerHTML = `
                <div class="categoria-imagem-container">
                    <img src="${cat.imagem}" alt="${cat.nome}" class="categoria-img-real">
                    <div class="categoria-icon-overlay">${cat.icone}</div>
                </div>
                <div class="categoria-info">
                    <h3>${cat.nome}</h3>
                    <p>${cat.descricao}</p>
                    <button class="btn-link" style="background:none; border:none; cursor:pointer;" onclick="abrirGaleria('${cat.nome}')">Ver fotos</button>
                </div>
            `;
            categoriasGrid.appendChild(card);
        });
    }

    // 4. RENDERIZAR PRODUTOS EM DESTAQUE DINAMICAMENTE
    const produtos = [
        { nome: "Sofá seminovo", categoria: "Sofás", descricao: "Sofás selecionados para trazer conforto, economia e beleza para sua sala.", imagem: "assets/cat-sofas.png" },
        { nome: "Guarda-rowpa usado", categoria: "Guarda-roupas", descricao: "Modelos variados para organizar seu quarto com ótimo custo-benefício.", imagem: "assets/cat-guardaroupas.png" },
        { nome: "Mesa de jantar", categoria: "Mesas e cadeiras", descricao: "Conjuntos para deixar sua cozinha ou sala de jantar mais completa.", imagem: "assets/cat-mesas.png" },
        { nome: "Cama completa", categoria: "Camas e colchões", descricao: "Opções para quem busca conforto, praticidade e economia.", imagem: "assets/cat-camas.png" },
        { nome: "Rack para TV", categoria: "Racks e painéis", descricao: "Móveis funcionais para organizar sua sala e valorizar sua TV.", imagem: "assets/cat-racks.png" },
        { nome: "Fogão", categoria: "Eletrodomésticos", descricao: "Eletrodomésticos selecionados para facilitar sua rotina.", imagem: "assets/cat-eletro.png" },
        { nome: "Geladeira", categoria: "Eletrodomésticos", descricao: "Opções usadas e seminovas conforme disponibilidade em loja.", imagem: "assets/cat-eletro.png" },
        { nome: "Máquina de lavar", categoria: "Eletrodomésticos", descricao: "Produtos para deixar sua casa mais prática e completa.", imagem: "assets/cat-lavadora.png" }
    ];

    const produtosGrid = document.getElementById('produtos-grid');
    if (produtosGrid) {
        produtos.forEach((prod, index) => {
            const nomeCorreto = prod.nome === "Guarda-rowpa usado" ? "Guarda-roupa usado" : prod.nome;
            const mensagem = `Olá, vim pelo site da Casa Bela Móveis e gostaria de saber mais sobre este produto: ${nomeCorreto}.`;
            const linkWpp = gerarLinkWhatsApp(mensagem);

            const card = document.createElement('div');
            card.className = 'produto-card animate-on-scroll';
            card.style.transitionDelay = `${(index % 4) * 100}ms`;

            card.innerHTML = `
                <div class="imagem-container">
                    <img src="${prod.imagem}" alt="Foto de ${nomeCorreto}" class="produto-imagem-real">
                </div>
                <div class="produto-info">
                    <span class="produto-categoria">${prod.categoria}</span>
                    <h3>${nomeCorreto}</h3>
                    <p>${prod.descricao}</p>
                    <div>
                        <span class="selo-produto">Consulte disponibilidade</span>
                    </div>
                    <a href="#contato-whatsapp" class="btn-primary">Solicitar Fotos Reais</a>
                </div>
            `;
            produtosGrid.appendChild(card);
        });
    }

    // 5. INTERSECTION OBSERVER PARA ANIMAÇÕES DE SCROLL (Fade-up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // 6. LÓGICA DO MODAL (FECHAR)
    const modal = document.getElementById('galeria-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    function fecharModal() {
        if(modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = 'auto';
            document.body.style.overflowX = 'hidden';
        }
    }
    
    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', fecharModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

});
