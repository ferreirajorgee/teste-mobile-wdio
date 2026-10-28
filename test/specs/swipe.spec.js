import swipePage from '../pageobjects/swipe.page'

describe('Funcionalidade: Tela de swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirMenuSwipe()
    })

    it('Deve exibir o próximo card ao deslizar o carrossel para a esquerda', async () => {
        const posicaoInicial = await swipePage.posicaoCard('GREAT COMMUNITY')

        await swipePage.deslizarCarrossel('left')

        await browser.waitUntil(
            async () => await swipePage.posicaoCard('GREAT COMMUNITY') < posicaoInicial / 2,
            { timeoutMsg: 'O card "GREAT COMMUNITY" não se deslocou após o swipe' }
        )
        await expect(swipePage.card('GREAT COMMUNITY')).toBeDisplayed()
    })

    it('Deve encontrar o texto escondido ao rolar a tela para baixo', async () => {
        await expect(swipePage.textoEscondido).not.toBeDisplayed()

        await swipePage.rolarAteTextoEscondido()
        await expect(swipePage.textoEscondido).toBeDisplayed()
    })
})
