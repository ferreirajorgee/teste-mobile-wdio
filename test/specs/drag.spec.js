import dragPage from '../pageobjects/drag.page'

describe('Funcionalidade: Tela de drag and drop', () => {

    beforeEach(async () => {
        await dragPage.abrirMenuDrag()
    })

    it('Deve encaixar uma peça no lugar certo', async () => {
        await dragPage.encaixarPeca('l1')
        await expect(dragPage.peca('l1')).not.toBeExisting()
    })

    it('Deve montar o quebra-cabeça completo', async () => {
        await dragPage.montarQuebraCabeca()
        await expect(dragPage.mensagemSucesso).toBeDisplayed()
        await expect(dragPage.botaoTentarNovamente).toBeDisplayed()
    })
})
