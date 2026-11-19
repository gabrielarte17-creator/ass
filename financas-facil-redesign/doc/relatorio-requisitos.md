# Finanças Fácil — Relatório de Requisitos (DFEW.08)

Este relatório documenta, requisito a requisito, o que já estava implementado no projeto original e o que foi adicionado para completar o escopo do roteiro. **Nenhum conteúdo, imagem, texto ou layout já pronto foi removido ou redesenhado** — todas as adições foram feitas de forma discreta, seguindo o estilo visual existente.

## Status dos 20 requisitos

| # | Requisito | Status | O que foi feito |
|---|---|---|---|
| 1 | Organização da pasta raiz e nomenclatura | ✅ Atendido (corrigido) | Criadas as subpastas `img/`, `video/`, `audio/` e `doc/` (só existiam `css/` e `js/`). Todos os HTML permanecem na raiz. |
| 2 | HTML5 semântico | ✅ Já atendido | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` em todas as páginas (não alterado). |
| 3 | CSS3 — TAG, CLASSE, ID / inline, incorporado, externo | ✅ Atendido (corrigido) | Externo e inline já existiam. Adicionados seletores por ID (`#searchInput:focus`, `#formMessage.alert`) em `css/style.css` e um bloco `<style>` incorporado no `<head>` de `indicadores.html`. |
| 4 | HTML/CSS/JS puros em ≥ 2 páginas | ✅ Atendido | `index.html` e `glossario.html` continuam 100% livres de framework/biblioteca. |
| 5 | Menu com links internos e externos + hover | ✅ Atendido (corrigido) | Adicionado o link externo "B3 (site oficial)" ao final do menu em todas as 10 páginas, usando a classe `.nav-link` já existente (herda o hover original). |
| 6 | Header / conteúdo responsivo / footer em todas as páginas | ✅ Já atendido | Estrutura idêntica e consistente nas 10 páginas (não alterado). |
| 7 | Player de vídeo e de áudio com controles nativos | ✅ Atendido (adicionado) | Nova seção "Resumo em vídeo e áudio" em `indicadores.html`, com `<video controls>` e `<audio controls>`, usando arquivos **originais** (`video/resumo-mercado-video.mp4` e `audio/resumo-mercado.mp3`), gerados especificamente para este projeto. |
| 8 | CSS Grid Layout | ✅ Já atendido | `.hero-grid`, `.market-cards`, `.story-grid`, `.indicator-grid`, `.terms`, `.footer-grid`, `.contact-form` (não alterado). |
| 9 | CSS Flexbox | ✅ Já atendido | `.topline-inner`, `.header-main`, `.search`, `.nav-inner`, `.ticker-inner`, `.section-head` (não alterado). |
| 10 | Cartões (título, imagem, texto, link) horizontais | ✅ Já atendido | `.story-card` dentro de `.story-grid` (não alterado). |
| 11 | Responsividade (smartphone e desktop) | ✅ Já atendido | Media queries em 850px e 580px, testadas também nas seções novas (375px e 1280px). |
| 12 | Tabela de dados ≥ 4×4 com títulos | ✅ Atendido (adicionado) | Tabela "Histórico da semana" em `indicadores.html`, com `<thead><th>` (Data, Ibovespa, Dólar, Brent, Variação) e 5 linhas de dados. |
| 13 | Formulário de contato (text, email, select, submit, textarea) | ✅ Já atendido | Campos existentes em `contato.html` mantidos sem alteração estrutural. |
| 14 | Validações required, minlength, pattern, placeholder | ✅ Atendido (corrigido) | Adicionados `minlength` (nome e mensagem) e `pattern` (nome) em `contato.html`; `required` e `placeholder` já existiam. |
| 15 | Estados :focus, :hover, :invalid estilizados | ✅ Atendido (corrigido) | `:hover` já existia. Adicionadas regras `:focus` (campo de busca e formulário) e `:invalid` (formulário) em `css/style.css`. |
| 16 | Classes utilitárias do Bootstrap (menus, botões, formulários, alertas, cards) | ✅ Atendido (adicionado) | Bootstrap 5.3 local adicionado em 8 páginas. Botão (`btn btn-primary`) e campos (`form-control`/`form-select`) em `contato.html`; alerta (`alert alert-info`/`alert-success`) na mensagem do formulário; card (`card`/`card-body`) na seção de vídeo/áudio/conversor em `indicadores.html`; utilitário de menu (`text-decoration-none`) no novo link do nav. |
| 17 | Eventos em JavaScript puro manipulando o DOM dinamicamente | ✅ Atendido (reforçado) | Já existiam busca, filtro do glossário e demo do formulário. Adicionados: persistência/restauração do formulário de contato e o conversor de câmbio (atualização dinâmica do DOM a cada evento `input`). |
| 18 | As 4 estruturas básicas de programação (sequencial, condicional, repetição, dados) | ✅ Atendido (reforçado) | Demonstradas de forma explícita no conversor de câmbio (`atualizarConversao`, em `js/script.js`): sequência de passos, condicional de validação, repetição (`forEach` sobre array de múltiplos) e dados (arrays/objetos). |
| 19 | localStorage (dados do usuário não se perdem ao atualizar/fechar) | ✅ Atendido (adicionado) | O formulário de contato salva o rascunho em `localStorage` a cada campo digitado e o restaura ao reabrir `contato.html`; é limpo após o envio simulado. |
| 20 | Uso do GitHub para publicar o projeto | ⏳ Depende da equipe | É uma etapa de processo, não de código — o ZIP está pronto para ser enviado a um repositório GitHub público pela equipe. |

## Arquivos modificados (e motivo)

| Arquivo | Motivo da alteração |
|---|---|
| `index.html` | Imagens trocadas para `img/` local (offline); link externo "B3" no menu. Nenhuma outra alteração — página permanece 100% pura (sem framework). |
| `glossario.html` | Apenas o link externo "B3" no menu. Permanece 100% pura (sem framework). |
| `ultimas.html`, `mercados.html`, `economia.html`, `empresas.html`, `investimentos.html`, `cripto.html` | Imagens trocadas para `img/` local; Bootstrap local adicionado (`css/bootstrap.min.css` + `js/bootstrap.bundle.min.js`); link externo "B3" no menu. |
| `indicadores.html` | Imagem do painel trocada para `img/` local; Bootstrap local adicionado; link externo "B3" no menu; `<style>` incorporado no `<head>`; novas seções "Histórico da semana" (tabela), "Resumo em vídeo e áudio" e "Conversor rápido R$ → US$". |
| `contato.html` | Bootstrap local adicionado; link externo "B3" no menu; campos do formulário ganharam `id`, `minlength`, `pattern` e classes Bootstrap; mensagem de feedback ganhou classes de alerta. |
| `css/style.css` | Comentário solto movido para o cabeçalho do arquivo (regra de "comentários só no cabeçalho"); adicionadas regras `:focus`, `:invalid` e dois seletores por ID. |
| `js/script.js` | Comentário solto movido para o cabeçalho do arquivo; adicionada persistência do formulário em `localStorage`; adicionado o conversor de câmbio. Funções originais (`searchSite`, filtro do glossário) preservadas; `contactDemo` manteve o comportamento original e ganhou a limpeza do rascunho salvo. |
| `README.txt` | Atualizado para refletir a nova estrutura de pastas e o funcionamento 100% offline. |

## Arquivos novos

| Arquivo | Origem |
|---|---|
| `img/bolsa.jpg`, `img/economia.jpg`, `img/exterior.jpg`, `img/investimentos.jpg`, `img/mercados-destaque.jpg` | As mesmas 5 fotos do Unsplash já usadas no site original, baixadas e hospedadas localmente (mesmo conteúdo visual, agora offline). |
| `css/bootstrap.min.css`, `js/bootstrap.bundle.min.js` | Bootstrap 5.3.3 oficial, hospedado localmente (sem dependência de CDN). |
| `video/resumo-mercado-video.mp4` | Vídeo original gerado para este projeto (resumo animado do fechamento do mercado). |
| `audio/resumo-mercado.mp3` | Áudio original gerado para este projeto (narração do mesmo resumo). |
| `doc/documentacao.docx` | Documentação acadêmica do projeto (tema, ferramentas, UX/UI, paleta, tipografia, sitemap, telas, uso de JavaScript, etc.). |
| `doc/relatorio-requisitos.md` | Este relatório. |

## Verificações realizadas

- As 10 páginas abrem corretamente a partir de `index.html`, sem servidor e sem internet.
- Todos os 10 links internos do menu/rodapé apontam para arquivos existentes.
- Busca (`searchSite`) e filtro do glossário continuam funcionando como antes.
- Vídeo e áudio carregam metadados corretamente (16s e ~30s) e têm controles nativos.
- Formulário de contato: validação nativa funcional; rascunho salvo e restaurado via `localStorage`; envio simulado limpa o rascunho e exibe alerta de sucesso.
- Conversor de câmbio calcula corretamente e atualiza a lista de múltiplos dinamicamente.
- Responsividade testada em 375px (smartphone) e 1280px (desktop).
- Comparação visual das páginas antes/depois: nenhuma mudança de cor, fonte, espaçamento ou estrutura fora do planejado — apenas as adições descritas acima.
