import usuarios from "./moduloDados.js";

const btnEntrar = document.getElementById('btnEntrar')
const alertaLogin = new bootstrap.Modal("#alertaLogin")

btnEntrar.addEventListener('click', () => {
    const inputLogin = document.getElementById('login').value
    const inputSenha = document.getElementById('senha').value

    console.log(inputLogin, "\n", inputSenha)

    let usuarioValido

    for (let usuario of usuarios) {
        if(usuario.nomeUsuario == inputLogin){
            usuarioValido = usuario
            break
        }
    }

    if(inputSenha == usuarioValido.senha){
        //redireciona o usuario para outra pagina HTML
        window.location.pathname = '/app.html' 
    } else {
        alertaLogin.show()
    }
})