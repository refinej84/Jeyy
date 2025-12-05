describe("Homepage", () => {
 
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/jez%20(1).html');
  });

describe('Menu', () => {  
  it("Leva para a página inicial", () => {
    cy.get("nav.menu-nav")
      .contains("Início")
      .should("have.attr", "href", "#")
  });

  it('Leva para a página de denúncia', () => {
    cy.get('nav.menu-nav')
      .contains('Denunciar') 
      .should('have.attr', 'href', 'Denúncia.html.html') 
  });

  it('Leva para o site da globo', () => {
    cy.get('nav.menu-nav')
      .contains('Notícias')
      .should('have.attr', 'href', 'https://g1.globo.com/jornal-nacional/noticia/2025/01/22/area-devastada-por-queimadas-aumenta-quase-80percent-no-brasil-em-2024-amazonia-foi-bioma-mais-afetado.ghtml') // Valida o caminho
  });

  it('Leva para a página home', () => {
    cy.get('nav.menu-nav')
      .contains('Informações')
      .should('have.attr', 'href', 'HOME.html')
  });
})

describe('Main', () => {  

  it('Leva para a API dos pokemons', () => {
    cy.get('.pokedex-section')
      .contains('Ver Pokédex')
      .should('have.attr', 'href', 'Jeny.html')
  });

  it("Mostra o alerta quando clicar no botão Saiba mais", () => {
    cy.get('.btn-saiba')
      .should('have.attr', 'href', 'https://www.gov.br/pt-br/servicos/obter-dados-de-queimadas')
  });
  });

describe('Footer', () => {  

  it('Leva para o email', () => {
    cy.get('footer.rodape')
      .contains('projetoace@fireleaf.com')
      .should('have.attr', 'href', 'mailto:projetoace@fireleaf.com')
  });

  it('Leva para o instagram', () => {
    cy.get('nav.contatos')
      .contains('@fireleaf.oficial')
      .should('have.attr', 'href', 'https://instagram.com/fireleaf.oficial')
  });

  it('Leva para o site do fire leaf', () => {
    cy.get('nav.contatos')
      .contains('www.fireleafsite.com')
      .should('have.attr', 'href', 'https://www.fireleafsite.com')
  });


  });
})
