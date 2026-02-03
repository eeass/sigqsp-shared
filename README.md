# Módulo Inicial (SIGQSP-Shared)

Este repositório contém o PROTOTIPO do módulo inicial do Sistema Informatizado de Gestão da Qualificação Social e Profissional (SIGQSP), chamado Shared.

Ele concentra os elementos comuns a todos os módulos do sistema, garantindo padronização e integração centralizada.

## 📌 Objetivos do módulo Shared

- Centralizar o Design System GOV.BR (DS 3.7.0) para padronização visual.

- Disponibilizar telas básicas de autenticação (Login, Registro, Recuperação de Senha, Reset de Credenciais, Required Actions, Account/Profile).

- Fornecer integração com o Keycloak (Cloud-IAM) para autenticação e autorização.

- Servir como pacote compartilhado para os demais módulos do SIGQSP (Pactuação, Execução, Monitoramento, Fiscalização).

## 🗂️ Estrutura do projeto

```
sigqsp-shared/
 ├── src/
 │    ├── components/        # Web Components do DS GOV.BR
 │    ├── pages/             # Telas básicas de autenticação
 │    ├── keycloak/          # Provider e utilitários de integração
 ├── public/                 # Assets estáticos
 ├── package.json
 └── vercel.json             # Configuração de deploy
```

## ⚙️ Configuração de ambiente

Este módulo depende das seguintes variáveis de ambiente (configuradas na Vercel):


- `NEXT_PUBLIC_KEYCLOAK_URL` → URL do Cloud-IAM (ex.: `https://org.cloud-iam.com`)

- `NEXT_PUBLIC_KEYCLOAK_REALM` → nome do realm (ex.: `sigqsp`)

- `NEXT_PUBLIC_KEYCLOAK_CLIENT_ID` → client configurado no Keycloak (ex.: `frontend-shared`)


## 🚀 Deploy

O deploy é feito via Vercel, conectado diretamente ao GitHub.
Cada push na branch principal gera automaticamente uma nova versão.
🔗 Consumo pelos outros módulos

Os demais frontends (sigqsp-frontend-pactuacao, sigqsp-frontend-execucao, etc.) devem importar este pacote para reutilizar:

- Web Components do DS GOV.BR.

- Telas básicas de autenticação.

- Provider e utilitários de Keycloak.

## 📖 Próximos passos

- Implementar telas de autenticação com DS GOV.BR.

- Publicar o pacote sigqsp-shared como dependência interna (via GitHub Packages).

- Integrar os módulos Pactuação, Execução, Monitoramento e Fiscalização.
