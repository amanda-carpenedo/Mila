# CLAUDE.md — Guia do Projeto

> Este documento define as regras, padrões e referências visuais para o desenvolvimento do site em HTML/CSS/JavaScript, com posterior migração para WordPress. Claude deve seguir este guia rigorosamente em todas as interações do projeto.

---

## 1. VISÃO GERAL DO PROJETO

- **Tipo:** Site institucional + e-commerce
- **Stack de desenvolvimento:** HTML5, CSS3, JavaScript (vanilla)
- **Destino final:** WordPress com tema customizado do zero (ver seção 9)
- **Design de referência:** Figma — https://www.figma.com/design/64QcgyLBHwCvyGMenxyzKp/MILA-WEBSITE
- **Objetivo principal:** Reproduzir o design do Figma com fidelidade pixel-perfect, respeitando paleta, tipografia, espaçamentos e comportamentos interativos definidos no layout.

---

## 2. REGRA FUNDAMENTAL

> **Fidelidade ao Figma é prioridade absoluta.**
> Claude não deve tomar decisões estéticas por conta própria. Toda cor, fonte, espaçamento, tamanho de componente e comportamento visual deve espelhar exatamente o que está no Figma. Em caso de dúvida, perguntar antes de assumir.

---

## 3. IDENTIDADE VISUAL

### 3.1 Paleta de Cores

```css
:root {
  /* Rosa MILA — cor de marca */
  --color-primary:        #F2B1E3; /* logo, botões: texto, borda e hover */

  /* Cinza MILA — UI neutra */
  --color-ui:             #81827D; /* menu, header, footer */

  /* Neutros */
  --color-white:          #FFFFFF;
  --color-black:          #000000;

  /* Fundos */
  --color-bg-primary:     #FFFFFF;
  --color-bg-secondary:   #F9F9F9;

  /* Textos */
  --color-text-primary:   #81827D;
  --color-text-secondary: #000000;
  --color-text-muted:     #AAAAAA;
}
```

**Regras de uso:**

| Elemento | Variável |
|---|---|
| Logo | `--color-primary` |
| Botão — texto e borda | `--color-primary` |
| Botão — hover fundo | `--color-primary` |
| Botão — hover texto | `--color-white` |
| Menu / links nav | `--color-ui` |
| Header e Footer | `--color-ui` |
| Corpo de texto | `--color-text-primary` |
| Títulos de seção | `--color-text-secondary` |

> ⚠️ Nunca usar valores hex diretamente no CSS de componentes — sempre referenciar as variáveis acima.

---

### 3.2 Tipografia

**Fonte única do projeto:** [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts)

```html
<!-- Incluir no <head> de todas as páginas -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
```

```css
:root {
  /* Fonte */
  --font-primary: 'Montserrat', sans-serif;

  /* Escala tipográfica */
  --text-xs:   0.75rem;   /*  12px */
  --text-sm:   0.875rem;  /*  14px */
  --text-base: 1rem;      /*  16px */
  --text-lg:   1.125rem;  /*  18px */
  --text-xl:   1.25rem;   /*  20px */
  --text-2xl:  1.5rem;    /*  24px */
  --text-3xl:  1.875rem;  /*  30px */
  --text-4xl:  2.25rem;   /*  36px */
  --text-5xl:  3rem;      /*  48px */
  --text-6xl:  3.75rem;   /*  60px */

  /* Pesos disponíveis */
  --font-light:      300;
  --font-regular:    400;
  --font-medium:     500;
  --font-semibold:   600;
  --font-bold:       700;
  --font-extrabold:  800;

  /* Line-height */
  --leading-tight:  1.2;
  --leading-normal: 1.5;
  --leading-loose:  1.8;

  /* Letter-spacing */
  --tracking-tight:  -0.02em;
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;
  --tracking-wider:   0.1em;
  --tracking-widest:  0.2em;  /* usar em labels e nav em uppercase */
}
```

**Aplicação:**
- Toda tipografia do projeto usa `--font-primary` (Montserrat)
- Títulos principais: peso 700–800, tracking ajustado conforme Figma
- Navegação e labels: peso 500–600, uppercase + letter-spacing largo
- Corpo de texto: peso 400, line-height normal

---

### 3.3 Logo

- **Arquivo principal:** `assets/img/logo.svg`
- **Versão principal:** horizontal, em `--color-primary` (#F2B1E3), usada sobre o hero
- **Versão footer:** versão reduzida / menor, aplicada no rodapé
- **Área de proteção:** mínimo 16px em todos os lados
- **Nunca:** distorcer proporções, recolorizar fora do padrão, usar sobre fundos de baixo contraste com o rosa

---

### 3.4 Imagens e Assets

- **Localização:** `assets/img/` (fotos), `assets/icons/` (ícones), `assets/fonts/` (fontes locais)
- **Formato preferido:** `.webp` para fotos, `.svg` para ícones e ilustrações
- **Imagens fornecidas pelo cliente:** [COMPLETAR: listar ou descrever os conjuntos de imagens]
- **Proporções recorrentes no layout:** [COMPLETAR: ex. 16:9 para banners, 1:1 para cards de equipe]
- **Alt text:** sempre descritivo e semântico

---

## 4. ESPAÇAMENTO E GRID

> Baseado no sistema de espaçamento definido no Figma.

```css
:root {
  /* Espaçamentos base (múltiplos de 8px recomendado) */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Grid */
  --container-max:    1280px; /* [COMPLETAR conforme Figma] */
  --container-pad:    24px;   /* padding lateral em mobile */
  --grid-columns:     12;
  --grid-gap:         24px;
}
```

---

## 5. COMPONENTES

> Cada componente deve ser construído como arquivo separado em `components/` e deve espelhar exatamente o componente do Figma.

### Componentes do projeto MILA:

| Componente | Arquivo CSS | Arquivo HTML parcial | Status |
|---|---|---|---|
| Header / Navegação | `components/header.css` | `components/header.html` | [ ] |
| Hero / Banner principal | `components/hero.css` | `components/hero.html` | [ ] |
| Seção Shop (CTA) | `components/shop.css` | `components/shop.html` | [ ] |
| Seção Gallery (CTA) | `components/gallery.css` | `components/gallery.html` | [ ] |
| Seção About (CTA) | `components/about.css` | `components/about.html` | [ ] |
| Footer | `components/footer.css` | `components/footer.html` | [ ] |

---

### Especificações por componente

#### Header / Navegação
- Cor do texto dos links: `--color-ui` (#81827D)
- Logo: versão principal (`assets/img/logo.svg`) posicionada conforme Figma
- **Comportamento:** `position: sticky; top: 0;` — permanece fixo ao rolar a página
- **z-index:** garantir que fique acima de todos os outros elementos (`z-index: 100` ou superior)
- **Fundo ao rolar:** [COMPLETAR — fundo branco sólido desde o início, ou ganha sombra/fundo ao fazer scroll?]
- Mobile: [COMPLETAR — hamburger menu? drawer lateral?]

#### Hero / Banner principal
- Logo em destaque: versão horizontal rosa (`--color-primary`) sobre imagem/fundo
- [COMPLETAR — tem texto sobreposto? botão CTA? imagem de fundo ou vídeo?]

#### Seção Shop (CTA)
- [COMPLETAR — grid de produtos? cards? botão de acesso à loja?]

#### Seção Gallery (CTA)
- [COMPLETAR conforme Figma — grid simples, lightbox, slider ou link para página?]
- Número de imagens exibidas na home: [COMPLETAR]
- Comportamento do hover nas imagens: [COMPLETAR]

#### Seção About (CTA)
- [COMPLETAR — texto + imagem? qual o CTA?]

#### Footer
- Logo: versão menor (`assets/img/logo.svg` redimensionada)
- Cor do texto: `--color-ui` (#81827D)
- [COMPLETAR — tem links de nav? redes sociais? newsletter?]

---

### Páginas do site

| Página | Template | Status |
|---|---|---|
| Home | `index.html` | [ ] |
| [COMPLETAR] | | [ ] |

> Definir as páginas internas conforme avanço do Figma.

---

### Padrão de nomenclatura de classes (BEM):
```
.bloco
.bloco__elemento
.bloco--modificador
```

**Exemplo de botão do projeto:**
```html
<!-- Botão padrão MILA -->
<a class="btn btn--outline" href="#">Shop Now</a>
```

```css
.btn {
  font-family:     var(--font-primary);
  font-weight:     var(--font-medium);
  letter-spacing:  var(--tracking-wide);
  text-transform:  uppercase;
  transition:      background-color 0.25s ease, color 0.25s ease;
}

.btn--outline {
  color:            var(--color-primary);
  border:           1px solid var(--color-primary);
  background-color: transparent;
}

.btn--outline:hover {
  background-color: var(--color-primary);
  color:            var(--color-white);
}
```

---

## 6. RESPONSIVIDADE

> Todos os componentes devem ser responsivos e fiéis ao layout mobile do Figma.

```css
/* Breakpoints */
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
--bp-2xl: 1536px;
```

**Abordagem:** Mobile-first (`min-width`)

**Regra:** Se o Figma tiver layout mobile definido, seguir à risca. Se não houver, adaptar de forma proporcional mantendo hierarquia visual.

---

## 7. INTERAÇÕES E ANIMAÇÕES

- **Princípio:** Animações devem ser funcionais e discretas, não chamar mais atenção do que o conteúdo.
- **Duração padrão:** 200–350ms
- **Easing padrão:** `ease-in-out` ou `cubic-bezier` definido no Figma (se houver)
- **Estados obrigatórios:** `:hover`, `:focus`, `:active`, `:disabled` em todos os elementos interativos
- **Acessibilidade:** respeitar `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. ESTRUTURA DE ARQUIVOS

```
mila-website/
├── index.html
├── CLAUDE.md
└── assets/
    ├── css/
    │   ├── variables.css          ← tokens: cores, fontes, espaçamentos
    │   ├── reset.css              ← reset/normalize
    │   ├── typography.css         ← estilos tipográficos globais
    │   ├── buttons.css            ← estilos globais de botões
    │   ├── main.css               ← importa todos os arquivos acima
    │   └── components/
    │       ├── header.css
    │       ├── hero.css
    │       ├── shop.css
    │       ├── gallery.css
    │       ├── about.css
    │       └── footer.css
    ├── js/
    │   ├── main.js
    │   └── components/
    │       ├── header.js          ← menu mobile, sticky, etc.
    │       └── gallery.js         ← lightbox ou slider, se houver
    ├── img/
    │   ├── logo.svg               ← versão principal
    │   └── [fotos fornecidas]
    ├── icons/
    └── fonts/                     ← apenas se houver fontes locais
```

---

## 9. MIGRAÇÃO PARA WORDPRESS

### 9.1 Stack Recomendada (projeto do zero)

Para um site institucional + e-commerce com design 100% customizado vindo do Figma, a abordagem recomendada é:

```
Tema base:     GeneratePress (starter theme — < 30KB, sem estilo imposto)
E-commerce:    WooCommerce
Campos custom: Advanced Custom Fields (ACF Pro)
Blocos custom: ACF Blocks ou register_block_type() nativo
Editor:        Gutenberg (block editor nativo — sem page builder)
```

**Por que essa combinação?**

| Critério | Decisão |
|---|---|
| Design pixel-perfect do Figma | Tema base sem estilos = zero conflito com o CSS customizado |
| Performance | GeneratePress < 30KB, sem bloat de page builder |
| E-commerce | WooCommerce é o padrão absoluto; templates de loja sobrepostos no tema |
| Conteúdo editável pelo cliente | ACF mapeia campos por componente/página sem expor código |
| Manutenção futura | Código limpo, sem dependência de licença de page builder |
| Longevidade | Alinhado com a direção do WordPress (FSE/Gutenberg) |

> **Não usar:** Elementor, Divi, WPBakery — page builders introduzem bloat, shortcodes proprietários e conflitam com CSS customizado do Figma.

---

### 9.2 Estrutura do Tema WordPress

```
mila-theme/
├── style.css              ← cabeçalho do tema (nome, versão)
├── functions.php          ← enqueue de scripts/estilos, suporte a features, CPTs
├── index.php              ← fallback obrigatório
├── header.php
├── footer.php
├── page.php               ← template padrão de páginas
├── front-page.php         ← homepage
├── single.php             ← post individual
├── archive.php            ← listagens
├── 404.php
├── woocommerce/           ← overrides de templates WooCommerce
│   ├── archive-product.php
│   ├── single-product.php
│   └── cart/, checkout/
├── template-parts/        ← componentes reutilizáveis (get_template_part)
│   ├── header/
│   ├── components/
│   └── sections/
└── assets/                ← mesma estrutura do HTML estático
    ├── css/
    ├── js/
    ├── img/
    └── fonts/
```

---

### 9.3 Mapeamento HTML → WordPress

| HTML estático | WordPress |
|---|---|
| `<header>` | `header.php` + `wp_nav_menus()` |
| Seções da home | `front-page.php` com `get_template_part()` |
| Textos editáveis | ACF fields (texto, imagem, link) |
| Loop de posts/produtos | `WP_Query` ou loop nativo |
| Formulário de contato | Contact Form 7 ou WPForms |
| Carrinho / checkout | WooCommerce templates override |

---

### 9.4 Plugins Previstos

| Plugin | Função |
|---|---|
| WooCommerce | Loja, produtos, carrinho, checkout |
| ACF Pro | Campos customizados por template |
| Yoast SEO | SEO e metadados |
| Contact Form 7 | Formulários |
| WP Rocket ou LiteSpeed Cache | Performance e cache |
| Smush ou ShortPixel | Otimização de imagens |

---

### 9.5 Regras de Migração

- Manter **exatamente os mesmos nomes de classes CSS** do HTML estático
- Não usar shortcodes de page builders em nenhuma hipótese
- Todo conteúdo editável pelo cliente deve ser mapeado em **campo ACF** — nunca hardcoded no template
- Templates WooCommerce sempre em `woocommerce/` dentro do tema (nunca modificar o plugin)
- Usar `wp_enqueue_scripts()` para todos os assets — nunca `<link>` ou `<script>` direto no `header.php`

---

## 10. QUALIDADE E REVISÃO

Antes de entregar qualquer página ou componente, verificar:

- [ ] Pixel-perfect em relação ao Figma (desktop e mobile)
- [ ] Todas as variáveis CSS usadas (sem valores hardcoded)
- [ ] HTML semântico e acessível (uso correto de `<header>`, `<main>`, `<section>`, `aria-*`)
- [ ] Imagens com `alt` descritivo
- [ ] Sem erros no console
- [ ] Testado nos breakpoints definidos
- [ ] Estados de hover/focus visíveis em todos os interativos
- [ ] Fontes e assets carregando corretamente

---

## 11. O QUE CLAUDE NÃO DEVE FAZER

- ❌ Alterar cores, fontes ou espaçamentos por conta própria
- ❌ Usar bibliotecas externas não autorizadas (ex. Bootstrap, Tailwind) sem solicitação
- ❌ Criar componentes que não existam no Figma sem aprovação
- ❌ Usar valores hardcoded em vez de variáveis CSS
- ❌ Ignorar o layout mobile
- ❌ Usar `!important` desnecessariamente
- ❌ Gerar placeholder de imagem quando o asset real foi fornecido

---

## 12. SEÇÕES A COMPLETAR

> Informações que ainda precisam ser fornecidas para o documento ficar 100% completo:

- [x] Link do Figma ✓
- [x] Paleta de cores ✓
- [x] Tipografia ✓
- [x] Logo — arquivo e versões ✓
- [x] Componentes da homepage ✓
- [x] Comportamento do Header (sticky) ✓
- [ ] **Fotos e assets** — enviar os arquivos de imagem
- [ ] **Header mobile** — hamburger? drawer lateral? como fecha?
- [ ] **Header fundo ao rolar** — fundo branco desde o início ou adiciona sombra/cor ao fazer scroll?
- [ ] **Hero** — tem texto sobreposto? botão CTA? imagem de fundo ou vídeo?
- [ ] **Seção Shop** — grid de produtos? quantos por linha? cards com hover?
- [ ] **Seção Gallery** — grid simples, lightbox, slider ou link para página?
- [ ] **Seção About** — layout texto + imagem? qual o CTA?
- [ ] **Footer** — links de navegação, redes sociais, newsletter?
- [ ] **Páginas internas** — quais páginas existem além da home?
- [ ] **Integrações externas** — redes sociais, analytics, newsletter, pagamento?
- [ ] **WordPress** — detalhamento da migração (fase posterior)

---

*Este documento é vivo e deve ser atualizado conforme o projeto evolui.*
