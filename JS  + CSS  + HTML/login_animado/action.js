 var i = 1;
        function verificarLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var esquerda = document.querySelector(".esquerda");
            var centro = document.querySelector(".centro");
            var direita = document.querySelector(".direita");
            var loginMessage = document.getElementById("loginMessage");

            function esquerda_a() {
                esquerda.style.display = "none";
                centro.style.display = "block";

                if (i == 1) {
                    esquerda.removeEventListener("mousemove", esquerda_a)
                    esquerda.style.display = "none";
                    direita.style.display = "none";
                    centro.style.display = "block";
                }
            }
            function centro_o() {
                centro.style.display = "none";
                direita.style.display = "block";
                if (i == 1) {
                    centro.removeEventListener("mousemove", centro_o)
                    esquerda.style.display = "none";
                    direita.style.display = "none";
                    centro.style.display = "block";}}
            function direita_a() {
                direita.style.display = "none";
                esquerda.style.display = "block";
                
                if (i == 1) {
                    direita.removeEventListener("mousemove", direita_a)
                    esquerda.style.display = "none";
                    direita.style.display = "none";
                    centro.style.display = "block";}}
            // Verificar se o nome de usuário e senha estão corretos
            if (username === "usuario" && password === "senha") {
                loginMessage.textContent = "Login bem-sucedido!";
                loginMessage.style.color = "green";
                centro.textContent = "Entrar"
                centro.style.background = "green";
                console.log("passou " + i)
                esquerda.style.display = "none";
                direita.style.display = "none";
                centro.style.display = "block";
                i = +1;} else {
                loginMessage.textContent = "Nome de usuário ou senha incorretos.";
                loginMessage.style.color = "red";
                esquerda.style.background = "red"
                centro.style.background = "red"
                direita.style.background = "red"
                esquerda.textContent = "Erro"
                centro.textContent = "Erro"
                direita.textContent = "Erro"
                esquerda.addEventListener("mousemove", esquerda_a)
                centro.addEventListener("mousemove", centro_o)
                direita.addEventListener("mousemove", direita_a)
                i = - 1;
                console.log("passou" + i)
            }
        }

