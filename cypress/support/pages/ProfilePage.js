class ProfilePage {
    visit() {
      cy.visit('https://my.mystnodes.com/login');
    }
  
    login(email, password) {
      cy.get('[name="email"]').type(email);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
    }
  
    openUserMenu() {
      cy.get('[data-icon="user"]').click({ force: true });
    }
  
    openUpdateWallet() {
      cy.contains('Update Wallet').click();
    }
  
    updateWalletAddress(address) {
      cy.get('input[placeholder="Wallet Address"]').type(address);
    }
  
    save() {
      cy.contains('Save').click();
    }
  
    interceptWalletUpdateRequest() {
      cy.intercept('PUT', '/api/v2/me/wallet-address').as('updateWallet');
    }
  
    waitForWalletUpdate() {
      cy.wait('@updateWallet').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });
    }
  }
  
  export default ProfilePage;
  