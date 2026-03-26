# Histórico de Configuração - Laptop Windows 11

Registro das execuções do Ansible Playbook para configuração e implantação do projeto **React Trilha DevOps** no laptop Windows 11.

---

## Configuração Inicial

### Pré-requisitos do Laptop Windows 11

| Componente              | Versão Mínima | Observação                              |
|-------------------------|---------------|-----------------------------------------|
| Windows 11              | 22H2          | Sistema operacional do laptop           |
| Chocolatey              | 2.x           | Gerenciador de pacotes Windows          |
| Node.js                 | 20.x LTS      | Runtime JavaScript                      |
| Git                     | 2.x           | Controle de versão                      |
| GitHub Actions Runner   | latest        | Runner self-hosted com label `Ansible`  |
| Ansible (via WSL/Linux) | 2.14+         | Gerenciamento de configuração           |

### Configuração do Runner Self-Hosted

O runner self-hosted deve ser registrado no repositório com a label `Ansible`:

```powershell
# No Windows 11, via PowerShell (como Administrador)
# 1. Baixar e instalar o runner
mkdir C:\actions-runner
cd C:\actions-runner
Invoke-WebRequest -Uri https://github.com/actions/runner/releases/latest/download/actions-runner-win-x64-latest.zip -OutFile actions-runner-win-x64.zip
Expand-Archive -Path actions-runner-win-x64.zip -DestinationPath .

# 2. Configurar o runner com a label Ansible
.\config.cmd --url https://github.com/devmlev/ReactTrilhaDevops --token <TOKEN> --labels Ansible

# 3. Instalar como serviço do Windows
.\svc.cmd install
.\svc.cmd start
```

---

## Execuções do Playbook

<!-- As novas execuções são adicionadas automaticamente pelo workflow ansible-playbook.yml -->

---

## Changelog Manual

### v1.0.0 - 2026-03-26
- Criação do Ansible Playbook para Windows 11 (`ansible/playbook.yml`)
- Criação do workflow GitHub Actions (`ansible-playbook.yml`) para chamar o playbook
- Criação do arquivo de histórico (`HISTORY.md`)
- Automação: instalação de Node.js, Git, clone/pull do repositório, `npm install` e `npm run build`
## Execução: 2026-03-26 20:03:51 UTC
- **Workflow:** Ansible Playbook - Windows 11 Laptop
- **Run ID:** 23615355595
- **Commit:** aa7efdb41e13e04f5746b9969702cd1abc7cd7eb
- **Autor:** devmlev
- **Status:** failure

## Execução: 2026-03-26 21:08:08 UTC
- **Workflow:** Ansible Playbook - Windows 11 Laptop
- **Run ID:** 23618070505
- **Commit:** 778d73ce6006d69ce1f371f7bcfacbbc7e1217e9
- **Autor:** devmlev
- **Status:** failure

## Execução: 2026-03-26 21:28:51 UTC
- **Workflow:** Ansible Playbook - Windows 11 Laptop
- **Run ID:** 23618910316
- **Commit:** 29f4aabdeb0d13d2c8d9aef0377b1ca545f0d0a8
- **Autor:** devmlev
- **Status:** failure

## Execução: 2026-03-26 21:34:10 UTC
- **Workflow:** Ansible Playbook - Windows 11 Laptop
- **Run ID:** 23619123714
- **Commit:** f4cf4eb9e6736dcb571ace10c8d8b4bbce55d191
- **Autor:** devmlev
- **Status:** failure

## Execução: 2026-03-26 21:44:23 UTC
- **Workflow:** Ansible Playbook - Windows 11 Laptop
- **Run ID:** 23619536661
- **Commit:** 434400a119003fb274ad13c2c38fff5338caef98
- **Autor:** devmlev
- **Status:** failure

