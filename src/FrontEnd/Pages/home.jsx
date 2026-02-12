import { useState } from "react";
import fachada from "../Assets/fachada.jpeg"
import logo from "../Assets/Logo_Com_Nome.png"
import { useNavigate } from "react-router-dom";
import { getData, getDataByCod, patchData, postData } from "../Service/request";
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

  const handleUpload = async (file) => {
    if (!file) {
      alert("Selecione um arquivo");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file); // 🔥 arquivo real
  
    const response = await fetch("http://localhost:3004/upload", {
      method: "POST",
      body: formData // ❌ sem headers
    });
  
    const {data, error} = await response.json();
  
    console.log(data, Array.isArray(data));
  
    if (!response.ok) {
      console.error(error);
      return;
    }

    const dbProducts = await getData('products')
    console.log(dbProducts.length, data.length);

    if(dbProducts.length < data.length) {
      await data.map(async (product) => {
          const newProduct = await getDataByCod("/product", product)
          if (newProduct) {
            return true
          } else {
            await postData("/products", product)
          }
      })
    }
  
      await data.map(async (products) => {
        const productbyCod = await getDataByCod("/product", products)
      if (products.quantidade !== productbyCod.quantidade) {
        const data = await patchData('/product', products)
        return data
      } else {
        return products
      }
    })

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
