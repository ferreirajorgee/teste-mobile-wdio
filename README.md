# teste-mobile-wdio

Testes automatizados de um app Android usando WebdriverIO, Appium (UiAutomator2) e Mocha, com Page Objects.

## Pré-requisitos

- Node.js 18+
- Android SDK com `adb` e emulador configurados (`ANDROID_HOME`)
- Java JDK 17+
- Emulador ou celular conectado (por padrão: `Medium Phone`, Android `17.0`)
- APK do app em `app/app-wdio.apk` (não está no repositório)

## Instalação

```bash
npm install
```

## Rodando os testes

Com o emulador aberto:

```bash
npm test
```

Para rodar só uma spec:

```bash
npm test -- --spec test/specs/login.spec.js
```

O Appium é iniciado automaticamente pelo `@wdio/appium-service`.

Dá pra trocar o dispositivo ou o APK por variável de ambiente:

- `ANDROID_DEVICE_NAME`
- `ANDROID_PLATFORM_VERSION`
- `ANDROID_APP_PATH`

```bash
ANDROID_PLATFORM_VERSION=14.0 npm test
```

## Cenários

- **Login**: login com sucesso, e-mail inválido e senha curta
- **Formulário**: campo de texto, dropdown e switch
- **Swipe**: carrossel e rolagem até o texto escondido
- **Drag and drop**: encaixar uma peça e montar o quebra-cabeça

Quando um teste falha, o screenshot fica salvo na pasta `screenshots/`.
