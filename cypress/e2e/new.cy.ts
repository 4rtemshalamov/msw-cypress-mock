describe('Intercepting Network Requests', () => {
  it('should intercept a GET request', () => {

    cy.intercept('GET', 'https://swapi.dev/api/people/', (req: { reply: (arg0: (res: any) => void) => void; }) => {
      req.reply((res) => {
        const data = res.body;
        // вот тут я не смог взять моки из msw
        console.log(data)
      });
    }).as('getPosts');

    // Visit the page that triggers the GET request
    cy.visit('/');

    //
    cy.get('button').click()
    // // Perform actions that trigger the GET request, e.g., click a button
    //
    // // Wait for the intercepted request to complete
    // cy.wait('@getPosts').then((interception: { response: { statusCode: any; body: any; }; }) => {
    //   console.log(interception.response.body)
    // // Verify the response or perform assertions
    //   expect(interception.response.body).to.have.property('data')
    //   expect(interception.response.statusCode).to.equal(200);
    // });
  });
});