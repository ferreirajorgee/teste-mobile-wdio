const PECAS = ['l1', 'c1', 'r1', 'l2', 'c2', 'r2', 'l3', 'c3', 'r3']

class DragPage {
    //Seletores
    get menuDrag () { return $('~Drag') }
    get mensagemSucesso () { return $('-android uiautomator:new UiSelector().text("Congratulations")') }
    get botaoTentarNovamente () { return $('~button-Retry') }

    peca (id) { return $(`~drag-${id}`) }
    destino (id) { return $(`~drop-${id}`) }

    // Métodos

    async abrirMenuDrag () {
        await this.menuDrag.click()
    }

    async encaixarPeca (id) {
        const origem = await this.centro(this.peca(id))
        const destino = await this.centro(this.destino(id))

        // sem a pausa o app não reconhece o arraste
        await driver.action('pointer', { parameters: { pointerType: 'touch' } })
            .move(origem)
            .down()
            .pause(300)
            .move({ ...destino, duration: 600 })
            .up()
            .perform()
    }

    async montarQuebraCabeca () {
        for (const id of PECAS) {
            await this.encaixarPeca(id)
        }
    }

    async centro (elemento) {
        const { x, y } = await elemento.getLocation()
        const { width, height } = await elemento.getSize()
        return { x: Math.round(x + width / 2), y: Math.round(y + height / 2) }
    }
}

export default new DragPage()
