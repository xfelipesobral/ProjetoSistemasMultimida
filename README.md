# Agulhão SOFTROS

### Instalação do projeto

É necessário ter instalado o [Node.js v12](https://nodejs.org/) com o [NPM](https://www.npmjs.com/). É recomendado instalar o [Git](https://git-scm.com/downloads) para realizar a manipulação do repositório.

Após a instalação (Usar terminal como administrador), rodar os comandos:
```sh
git clone https://github.com/SOFTROS-SISTEMAS/agulhao # Faz commit do projeto, será solicitado seu usuário e senha do Github
npm install -g expo-cli # Instala o Expo (V 3.18)
```

Dentro da pasta do projeto, rodar os comandos:
```sh
npm install # Instala os pacotes do projeto
expo start # Inicia o Expo 
```
### Comandos para manipular o repositório

```sh
# Sincronizar o repositório. 
git pull origin master # No lugar do <master> pode ser algum outro branch
```
```sh
# Subir alterações
git add * # Confirma alterações
git commit -m 'Descrição do Commit' # Cria pacotinho com as alterações
git push origin master # Envia o pacotinho. Pode enviar para branches específicos alterando o <master>
```
```sh
# Criar um novo branch
git checkout -b VendaBalcao # Cria um novo branch, basta substituir <VendaBalcao> pelo nome desejado
```
Obs: Caso preferir, o VSCode tem um gerenciador de [GIT integrado](https://imasters.com.br/desenvolvimento/use-git-com-interface-grafica-visual-studio-code-e-aumente-sua-produtividade).

### Comandos úteis do Expo
```sh
$ expo build:<android/ios> # Gerar arquivos para publicar na GooglePlay ou AppleStore
```
```sh
$ expo build:android -t apk # Gerar apenas o APK para testar
```
### Links úteis 
- [Biblioteca de ícones](https://expo.github.io/vector-icons/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)
- Configurando o [App.json](https://docs.expo.io/workflow/configuration/).
- Sobre [OTA | Over-The-Air](https://docs.expo.io/guides/configuring-ota-updates/); Updates automáticos ao abrir o aplicativo.
- [Atualizações do Expo](https://expo.canny.io/)
