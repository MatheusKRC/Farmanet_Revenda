import { useState } from "react";
import fachada from "../Assets/fachada.jpeg"
import logo from "../Assets/Logo_Com_Nome.png"
import { useNavigate } from "react-router-dom";
import { postData, deleteData } from "../Service/request";
import '../Style/home.css'

function Home() {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');
  const objLogin = {user_email, user_password}

  const disabledLoginBttn = () => {
    const minPassword = 6;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!(emailRegex.test(user_email) && user_password.length >= minPassword)) {
      return true;
    }
  };

  const handleClick = async () => {
    try {
      console.log(objLogin);
      const infoLogin = await postData('login', objLogin);
      setLogin(false);
      console.log(infoLogin); 
      localStorage.setItem('user', JSON.stringify(infoLogin));
      navigate('/terminal')
    } catch (error) {
      setLogin(true);
      console.log('erro', error);
    }
  }

  function chunkArray(arr, size) {
    console.log('Chunks');

    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }  

  async function postInChunks(route, items, chunkSize = 500) {
    console.log('postInChunks');
    const chunks = chunkArray(items, chunkSize);
  
    for (let i = 0; i < chunks.length; i++) {
      await postData(route, chunks[i]); // envia só um pedaço por vez
      console.log(`POST ${route}: lote ${i + 1}/${chunks.length} (${chunks[i].length} itens)`);
    }
  }

  const handleUpload = async (file) => {
    if (!file) {
      alert("Selecione um arquivo");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file); // 🔥 arquivo real
  
    const response = await fetch('https://farmanetrevenda-production-63b5.up.railway.app/upload', {
      method: "POST",
      body: formData// ❌ sem headers
    });
  
    const {data, error} = await response.json();
  
    console.log(data, Array.isArray(data));
    await deleteData('products')
        console.log(data);
        const estoqueData = await postInChunks('products', data, 500)
        console.log(estoqueData);
        alert('Estoque Atualizado')
  
    if (!response.ok) {
      console.error(error);
      return;
    }

  }


  return (
    <div className="home">
      <div className="login">
        <div className="login_inputs">
          <img alt="Logo da farmanet" src={logo}></img>
          Email
          <input 
          type="email"
          name="email"
          value={ user_email }
          data-testid="common_login__input-email"
          placeholder="Digite seu Email"
          onChange={ ({ target }) => setEmail(target.value) }
          />
          Senha
          <input
            type="password"
            name="password"
            value={ user_password }
            data-testid="common_login__input-password"
            placeholder="Digite sua Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
           <button
          className="Bttn-LoginRegister"
          id="button"
          type="button"
          value="Login"
          data-testid="common_login__button-login"
          disabled={ disabledLoginBttn() }
          onClick={ handleClick }
        >
          Login
        </button>

          Relatorio de Produtos
          <input 
          type="file" 
          onChange={(e) => handleUpload(e.target.files[0])}

          ></input>

          { login
       && <p data-testid="common_login__element-invalid-email">Usuário Inexistente! </p>}
        </div>
        <div className="photo">
          <div className="photo-frame">
          <img alt="imagem da frente da farmanet" src={fachada}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
