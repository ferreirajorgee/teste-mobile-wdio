class FormPage {
    //Seletores
    get menuForm () { return $('~Forms') }
    get campoTexto () { return $('~text-input') }
    get labelResultado () { return $('~input-text-result') }
    get dropdown () { return $('-android uiautomator:new UiSelector().resourceId("text_input")') }
    get switchBotao () { return $('~switch') }

    // Métodos

    async abrirMenuForm () {
        await this.menuForm.click()
    }

    async preencherTexto (texto) {
        await this.campoTexto.setValue(texto)
    }

    async selecionarOpcao (txtOpcao) {
        await this.dropdown.click()
        const opcao = $(`-android uiautomator:new UiSelector().text("${txtOpcao}")`)
        await opcao.click()
    }

    async alternarSwitch () {
        await this.switchBotao.click()
    }
}

export default new FormPage()
