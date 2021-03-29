import React, { useEffect, useState } from 'react';
import { store } from '../../firebaseconf';

const CadastroMembros = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dtnascimento, setDtnascimento] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [complemento, setComplemento] = useState('');
  // const [idmembro, setIdmembro] = useState('');
  // const [modoedicao, setModoedicao] = useState(null);
  // const [error, setError] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getLista = async () => {
      const { docs } = await store.collection('membros').get() || [];
      const listagem = docs.map(membro => ({ id: membro.id, ...membro.data() }));
      setLista(listagem);
    }
    getLista();
  }, []);

  // const getLista = async () => {
  //   const { docs } = await store.collection('membros').get() || [];
  //   const listagem = docs.map(membro => ({ id: membro.id, ...membro.data() }));
  //   setLista(listagem);
  // }

  // useEffect(() => {
  //   getLista();
  // }, []);

  const cadastrarMembro = async (e) => {
    e.preventDefault();

    const membro = {
      nome,
      email,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      telefone,
      dtnascimento,
      facebook,
      instagram,
      linkedin,
      complemento
    }

    try {
      await store.collection('membros').add(membro);
      const { docs } = await store.collection('membros').get() || [];
      const listagem = docs.map(membro => ({ id: membro.id, ...membro.data() }));
      setLista(listagem);
      //alert("Membro adicionado!");
      //console.log(data);
    } catch (e) {
      console.log(e);
    }

    setNome('');
    setEmail('');
    setCep('');
    setEndereco('');
    setBairro('');
    setCidade('');
    setEstado('');
    setTelefone('');
    setDtnascimento('');
    setFacebook('');
    setInstagram('');
    setLinkedin('');
    setComplemento('');

  }

  return (
    <div>
      <h1>Cadastro de membros</h1>

      <form onSubmit={cadastrarMembro}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => { setNome(e.target.value) }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          name="cep"
          value={cep}
          onChange={(e) => { setCep(e.target.value) }}
        />

        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          name="rua"
          value={endereco}
          onChange={(e) => { setEndereco(e.target.value) }}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          value={bairro}
          onChange={(e) => { setBairro(e.target.value) }}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          name="cidade"
          value={cidade}
          onChange={(e) => { setCidade(e.target.value) }}
        />

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          name="estado"
          value={estado}
          onChange={(e) => { setEstado(e.target.value) }}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          name="telefone"
          value={telefone}
          onChange={(e) => { setTelefone(e.target.value) }}
        />

        <label htmlFor="dtnascimento">Data de Nascimento</label>
        <input
          type="text"
          name="dtnascimento"
          value={dtnascimento}
          onChange={(e) => { setDtnascimento(e.target.value) }}
        />

        <label htmlFor="facebook">Facebook</label>
        <input
          type="text"
          name="facebook"
          value={facebook}
          onChange={(e) => { setFacebook(e.target.value) }}
        />

        <label htmlFor="instagram">Instagram</label>
        <input
          type="text"
          name="instagram"
          value={instagram}
          onChange={(e) => { setInstagram(e.target.value) }}
        />

        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={linkedin}
          onChange={(e) => { setLinkedin(e.target.value) }}
        />

        <label htmlFor="complemento">Complemento</label>
        <textarea
          type="text"
          name="complemento"
          value={complemento}
          onChange={(e) => { setComplemento(e.target.value) }}
        >
        </textarea>

        <input type="submit" value="Cadastrar" />

      </form>

      <hr />

      <h2>Lista de membros</h2>

      <ul>
        {
          lista.length !== 0 ?
            (
              lista.map(membro => (
                <li key={membro.id}>{membro.nome}</li>
              ))
            )
            :
            (
              <span>
                Não há usuários cadastrados
              </span>
            )
        }
      </ul>

    </div >
  )
}

export default CadastroMembros
