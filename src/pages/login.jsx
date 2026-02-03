import React, { useEffect } from "react";
import keycloak from "../keycloak/provider";

export default function Login() {
  useEffect(() => {
    keycloak.init({ onLoad: "login-required" });
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao SIGQSP</h1>
      <button onClick={() => keycloak.login()}>Entrar</button>
    </div>
  );
}
