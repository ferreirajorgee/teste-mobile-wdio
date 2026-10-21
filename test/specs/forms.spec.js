import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Tela de formulário', () => {

    beforeEach(async () => {
        await formPage.abrirMenuForm()
    })

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        await expect(formPage.labelResultado).toHaveText('Teste Appium')
    })

    it('Deve exibir a opção selecionada no dropdown', async () => {
        await formPage.selecionarOpcao('Appium is awesome')
        await expect(formPage.dropdown).toHaveText('Appium is awesome')
    })

    it('Deve alternar o switch e voltar ao estado inicial', async () => {
        const estadoInicial = await formPage.switchBotao.getAttribute('checked')
        const estadoAlternado = estadoInicial === 'true' ? 'false' : 'true'

        await formPage.alternarSwitch()
        await expect(formPage.switchBotao).toHaveAttribute('checked', estadoAlternado)

        await formPage.alternarSwitch()
        await expect(formPage.switchBotao).toHaveAttribute('checked', estadoInicial)
    })
})
