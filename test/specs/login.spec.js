import loginPage from '../pageobjects/login.page'

describe('Funcionalidade login', () => {

    beforeEach(async () => {
        await loginPage.abrirMenuLogin()
    })

    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencherLogin('teste@teste.com', 'senha@123')
        await expect(loginPage.mensagem).toHaveText('You are logged in!')
    });

    it('Deve falhar ao fazer login com email inválido', async () => {
        await loginPage.preencherLogin('teste@teste', 'senha@123')
        await expect(loginPage.mensagemErro('Please enter a valid email address')).toBeDisplayed()
    });

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await loginPage.preencherLogin('teste@teste.com', '12345')
        await expect(loginPage.mensagemErro('Please enter at least 8 characters')).toBeDisplayed()
    });
})
