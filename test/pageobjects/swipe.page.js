class SwipePage {
    //Seletores
    get menuSwipe () { return $('~Swipe') }
    get carrossel () { return $('-android uiautomator:new UiSelector().resourceId("Carousel")') }
    get textoEscondido () { return $('-android uiautomator:new UiSelector().text("You found me!!!")') }

    card (titulo) {
        return $(`-android uiautomator:new UiSelector().text("${titulo}")`)
    }

    // Métodos

    async posicaoCard (titulo) {
        return this.card(titulo).getLocation('x')
    }

    async abrirMenuSwipe () {
        await this.menuSwipe.click()
    }

    async deslizarCarrossel (direcao) {
        await browser.swipe({ direction: direcao, scrollableElement: this.carrossel, percent: 0.5 })
    }

    async rolarAteTextoEscondido () {
        await $('-android uiautomator:new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("You found me!!!"))')
    }
}

export default new SwipePage()
