import { getGreeting } from '../support/app.po';

describe('demo', () => {
  beforeEach(() => cy.visit('/'));

  it('display users list', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Users');
  });
});
