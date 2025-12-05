describe("Página de Cadastro - Fireleaf", () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/Untitled-1%20(1).html');
  });


  it("Carrega todos os campos do formulário", () => {

    cy.get("#nome").should("exist")
      .and('be.visible');
    cy.get("#email").should("exist")
      .and('be.visible');
    cy.get("#data-nascimento").should("exist")
      .and('be.visible');
    cy.get("#senha").should("exist")
      .and('be.visible');
    cy.get("#confirmar").should("exist")
      .and('be.visible');
    cy.contains('a', 'Já tem conta? Faça login').should('exist')
      .and('be.visible');
    cy.contains("button", "Cadastrar").should("exist")
      .and('be.visible');
  });

  it("Não permite enviar o formulário com campos vazios", () => {


    cy.get("button[type='submit']").click();

    cy.get("#nome:invalid").should("exist");
    cy.get("#email:invalid").should("exist");
    cy.get("#data-nascimento:invalid").should("exist");
    cy.get("#senha:invalid").should("exist");
    cy.get("#confirmar:invalid").should("exist");
  });

  it("Preenche o formulário corretamente", () => {


    cy.get("#nome").type("Jenifer Santos");
    cy.get("#email").type("jeysant@gmail.com");
    cy.get("#data-nascimento").type("2008-10-30");
    cy.get("#senha").type("jeysants");
    cy.get("#confirmar").type("jeysants");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (msg) => {
       expect(msg).to.contains("Cadastro realizado com sucesso");
    });
  });

  it("Mostra uma falha se as senhas forem diferentes", () => {

    cy.get("#nome").type("Jenifer Santos");
    cy.get("#email").type("jeysant@gmail.com");
    cy.get("#data-nascimento").type("2008-10-30");
    cy.get("#senha").type("jeysants");
    cy.get("#confirmar").type("senhaerrada");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.contains("As senhas não coincidem");
    });
  });

  it('Leva para página de cadastro', () => {

        cy.contains('a', 'Já tem conta? Faça login')
          .should('have.attr', 'href', 'login1.html')
      });

});
