class LoginPage {
    //Seletores

    get menuLogin() {
        return $('~Login');
    }

    get campoEmail() {
        return $('~input-email');
    }

    get campoSenha() {
        return $('~input-password');
    }

    get botaoLogin() {
        return $('~button-LOGIN');
    }

    get mensagem() {
        return $('id=android:id/message');
    }

    mensagemErro(texto) {
        return $(`android=new UiSelector().text("${texto}")`);
    }

    //Métodos // Ações

    async abrirMenuLogin() {
        await this.menuLogin.click();
    }

    async preencherLogin(email, senha) {
        await this.campoEmail.clearValue();
        await this.campoEmail.setValue(email);
        await this.campoSenha.clearValue();
        await this.campoSenha.setValue(senha);
        await this.botaoLogin.click();
    }
}

export default new LoginPage();
