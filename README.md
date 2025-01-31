# 🌦 Weather App - Previsão do Tempo

Este é um **aplicativo de previsão do tempo** desenvolvido com **React** que utiliza a **API do OpenWeatherMap** para fornecer informações detalhadas sobre o clima atual e a previsão para os próximos dias. O app também oferece funcionalidade de **modo escuro** e **armazenamento local** para salvar a última cidade pesquisada.

---

## 🚀 Funcionalidades

- **Exibição do clima atual:** Mostra a temperatura, umidade, vento e descrição do clima em tempo real.
- **Previsão para os próximos dias:** Exibe a previsão do tempo para os próximos três dias.
- **Modo Claro e Modo Escuro:** Permite alternar entre modos de tema claro e escuro, com a preferência sendo salva no armazenamento local.
- **Armazenamento da última cidade:** A última cidade pesquisada é armazenada no **LocalStorage** para facilitar o uso repetido.
- **Design Responsivo:** O layout adapta-se a diferentes tamanhos de tela, funcionando bem em dispositivos móveis e desktop.

---

## 🛠 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **React.js**: Biblioteca para construção de interfaces de usuário dinâmicas.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **OpenWeatherMap API**: API para obter dados meteorológicos (clima atual e previsão do tempo).
- **CSS (com animações e responsividade)**: Estilização do aplicativo.
- **LocalStorage**: Para armazenar dados como a última cidade pesquisada e preferências de tema.

---

## 📦 Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos abaixo.

### 1️⃣ Clonar o repositório
Primeiro, faça o clone do repositório para sua máquina local.

```bash
git clone https://github.com/alexsantos-djesus/clima-e-tempo
cd weather-app
```

### 2️⃣ Instalar as dependências
Com o repositório clonado, instale todas as dependências do projeto utilizando o npm:

```bash
npm install
```

### 3️⃣ Configurar as chaves de API
Para que o aplicativo funcione corretamente, você precisa obter as chaves da API do **OpenWeatherMap**. Crie uma conta em [OpenWeatherMap](https://openweathermap.org/api) e obtenha suas chaves de API para o clima.

1. Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis de ambiente para as chaves da API:

```env
REACT_APP_WEATHER_API_KEY=SUA_CHAVE_OPENWEATHER
```

### 4️⃣ Iniciar o projeto
Agora, basta rodar o aplicativo em modo de desenvolvimento:

```bash
npm start
```

Abra o navegador e acesse **http://localhost:3000/** para ver o aplicativo em funcionamento.

---

## 🌍 Deploy

O projeto está hospedado no **Vercel** e pode ser acessado através do seguinte link:

[**Weather App - Vercel**](https://vercel.com/alex-santos-projects-2fab6ac4/weather-app)

Se desejar hospedar o projeto em sua própria conta de Vercel, basta seguir as instruções na [documentação oficial do Vercel](https://vercel.com/docs).

---

## 📚 Como Usar

1. **Pesquisar uma cidade**: Digite o nome de uma cidade no campo de texto e o aplicativo mostrará a previsão do tempo atual e para os próximos dias.
2. **Alternar entre modos claro e escuro**: Clique no botão de alternância para mudar entre o modo claro e o modo escuro. Sua preferência será salva.
3. **Consultar dados**: O aplicativo exibe informações como a temperatura atual, umidade, velocidade do vento e uma descrição geral do clima.

---

## 🔧 Contribuindo para o Projeto

Contribuições são bem-vindas! Siga os passos abaixo para contribuir para este projeto:

1. **Fork o repositório**: Clique no botão "Fork" no canto superior direito do repositório.
2. **Clone o seu fork**: Clone o repositório forkado para sua máquina local.

```bash
git clone https://github.com/alexsantos-djesus/clima-e-tempo
```

3. **Crie uma nova branch**: Crie uma branch para sua funcionalidade ou correção.

```bash
git checkout -b minha-nova-feature
```

4. **Faça alterações e commit**: Faça as modificações necessárias no código e commit suas mudanças.

```bash
git add .
git commit -m "Descrição das alterações"
```

5. **Envie as mudanças para o seu fork**:

```bash
git push origin minha-nova-feature
```

6. **Abra um Pull Request**: Vá até o repositório original e abra um Pull Request explicando suas alterações.

---

## 📜 Licença

Este projeto é **open-source** e está licenciado sob a **MIT License**.

---

## 🎨 Screenshots

Aqui estão algumas capturas de tela para dar uma ideia do design:

1. **Tela inicial com clima atual e pesquisa de cidade:**
![Screenshot 1](https://via.placeholder.com/600x400.png)

2. **Tela com previsão para os próximos dias:**
![Screenshot 2](https://via.placeholder.com/600x400.png)

---

## 👨‍💻 Autor

Este projeto foi desenvolvido por **Alex Santos**. Para mais informações, confira meu perfil no GitHub: [**Alex Santos GitHub**](https://github.com/alexsantos-djesus).

---

## 📬 Contato

Se você tiver alguma dúvida ou sugestão, não hesite em me contatar por e-mail: **alexsantos.djesus@gmail.com**.

---

## 🛠 Agradecimentos

- Agradeço à comunidade de desenvolvedores do GitHub, onde aprendi muito e continuei aprimorando meus conhecimentos em React!
- Obrigado à equipe do OpenWeatherMap pela API maravilhosa de previsão do tempo.
