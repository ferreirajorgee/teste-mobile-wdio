import loginPage from '../pageobjects/login.page'

describe('Funcionalidade login', () => {

    beforeEach(async () => {
        await loginPage.abrirMenuLogin()
    })
    
    it('Deve fazer login com sucesso', async () => { 
        await loginPage.preencherLogin('teste@teste.com', 'senha@123')
        expect(await loginPage.alertaSucesso()).toEqual('You are logged in!')
        await driver.acceptAlert()
    });

    it('Deve falhar ao fazer login com email inválido', async () => {
        await loginPage.preencherLogin('teste@teste', 'senha@123')
        await loginPage.alertaErro('Please enter a valid email address')
    });

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await loginPage.preencherLogin('teste@teste.com', '12345')
        await loginPage.alertaErro('Please enter at least 8 characters')
    });
})