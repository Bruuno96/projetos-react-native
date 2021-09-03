import React, { useEffect, useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';

import { getUsers, setUsers } from '../util/storage';
import { Alert } from 'react-native';

export default function MainScreen() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [user, setUser] = useState(null);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const list = await getUsers();
      if (list !== null && list.length > 0) {
        setListUser(list);
      }
    }
    fetchData();
  }, []);

  const handleEnter = (email, password) => {
    // verifica se o email e senha sao válidos
    const usr = listUser.find(e => {
      return e.email === email
    })
    if (!usr) {
      Alert.alert("Erro", "Usuário não encontado.");
      return;
    }
    if (password !== usr.password) {
      Alert.alert("Erro", "Email e/ou Senha Inválidos.");
      return;
    }
    setUser(usr);
  }

  const handleRegister = (name, email, password) => {
    // verifica se já existe um email igual na lista
    if (listUser.filter(e => e.email === email).length > 0) {
      Alert.alert("Erro", "Este email já está cadastrado!");
      return;
    }
    let users = [...listUser];
    const usr = {name, email, password};
    users.push(usr);
    setUsers(users);
    setListUser(users);
    setUser(usr);
    setIsSigningUp(false);
  }

  if (user === null) {
    if (isSigningUp) {
      return (<SignUp onRegister={handleRegister} />);
    }
    else {
      return (
        <SignIn onEnter={handleEnter} onSignUp={setIsSigningUp} />);
    }
  }
  else {
    return <Welcome user={user} onLogout={() => setUser(null)} />
  }
}