import React, { useEffect, useState } from 'react';
import { store } from '../../firebaseconf';
import './styles.css';

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
  const [idmembro, setIdmembro] = useState('');
  const [modoedicao, setModoedicao] = useState(null);
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
      //console.log("Membro adicionado!");
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

  const atualizarMembro = async (e) => {
    e.preventDefault();

    const membroAtualizado = {
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
      await store.collection('membros').doc(idmembro).set(membroAtualizado);
      const { docs } = await store.collection('membros').get();
      const listagem = docs.map(membro => ({ id: membro.id, ...membro.data() }));
      setLista(listagem);
      console.log("Membro editado!");
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
    setIdmembro('');
    setModoedicao(false);

  }

  const setUpdate = async (id) => {
    try {
      const data = await store.collection('membros').doc(id).get();
      const { nome, email, cep, endereco, bairro, cidade, estado, telefone, dtnascimento, facebook, instagram, linkedin, complemento } = data.data();
      setNome(nome);
      setEmail(email);
      setCep(cep);
      setEndereco(endereco);
      setBairro(bairro);
      setCidade(cidade);
      setEstado(estado);
      setTelefone(telefone);
      setDtnascimento(dtnascimento);
      setFacebook(facebook);
      setInstagram(instagram);
      setLinkedin(linkedin);
      setComplemento(complemento);
      setIdmembro(id);
      setModoedicao(true);
    } catch (e) {
      console.log(e);
    }
  }

  const deletarMembro = async (id) => {
    try {
      await store.collection('membros').doc(id).delete();
      const { docs } = await store.collection('membros').get();
      const listagem = docs.map(membro => ({ id: membro.id, ...membro.data() }));
      setLista(listagem);
      console.log("Membro deletado!")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container horizontal">
      <h1>Cadastro de membros</h1>

      <form className="form-group mt-2" onSubmit={modoedicao ? atualizarMembro : cadastrarMembro}>

        <div className="row">
          <div className="col">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              className="form-control"
              value={nome}
              onChange={(e) => { setNome(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              name="cep"
              className="form-control"
              value={cep}
              onChange={(e) => { setCep(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              name="rua"
              className="form-control"
              value={endereco}
              onChange={(e) => { setEndereco(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              name="bairro"
              className="form-control"
              value={bairro}
              onChange={(e) => { setBairro(e.target.value) }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              name="cidade"
              className="form-control"
              value={cidade}
              onChange={(e) => { setCidade(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              name="estado"
              className="form-control"
              value={estado}
              onChange={(e) => { setEstado(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              name="telefone"
              className="form-control"
              value={telefone}
              onChange={(e) => { setTelefone(e.target.value) }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="dtnascimento">Data de Nascimento</label>
            <input
              type="text"
              name="dtnascimento"
              className="form-control"
              value={dtnascimento}
              onChange={(e) => { setDtnascimento(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              name="facebook"
              className="form-control"
              value={facebook}
              onChange={(e) => { setFacebook(e.target.value) }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              name="instagram"
              className="form-control"
              value={instagram}
              onChange={(e) => { setInstagram(e.target.value) }}
            />
          </div>
          <div className="col">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              className="form-control"
              value={linkedin}
              onChange={(e) => { setLinkedin(e.target.value) }}
            />
          </div>
        </div>

        <label htmlFor="complemento">Complemento</label>
        <textarea
          type="text"
          name="complemento"
          className="form-control"
          value={complemento}
          onChange={(e) => { setComplemento(e.target.value) }}
        >
        </textarea>

        <input
          type="submit"
          className="btn btn-info form-control mt-2"
          value={modoedicao ? "Editar membro" : "Cadastrar membro"}
        />

      </form>

      <hr />

      <h2>Lista de membros</h2>

      <ul>
        {
          lista.length !== 0 ?
            (
              lista.map(membro => (
                <li key={membro.id}>
                  {membro.nome}
                  <button onClick={(id) => { setUpdate(membro.id) }}>Atualizar</button>
                  <button onClick={(id) => { deletarMembro(membro.id) }}>Deletar</button>
                </li>
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
