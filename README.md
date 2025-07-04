# Guía de Instalación

Esta guía te ayudará a configurar el entorno de desarrollo y a instalar las dependencias necesarias para ejecutar el proyecto.

## Prerrequisitos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- **Node Version Manager (nvm)**: Herramienta para gestionar múltiples versiones de Node.js.
  - [Instalación de nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **Node.js**: Entorno de ejecución de JavaScript.
- **npm** (Node Package Manager) o **Yarn**: Gestor de paquetes para Node.js (generalmente viene con Node.js).

## Pasos de Instalación

Sigue estos pasos para poner en marcha el proyecto:

### 1. Configurar Node.js con nvm

Este proyecto requiere Node.js en su versión `22.14.0`. Si ya tienes `nvm` instalado, puedes configurar la versión de Node.js de la siguiente manera:

1.  **Instalar la versión específica de Node.js (si no la tienes):**
    `bash
nvm install 22.14.0
    `

2.  **Usar la versión específica de Node.js para este proyecto:**
    `bash
nvm use 22.14.0
    `

        *Opcional: Para asegurarte de que esta versión se use automáticamente cada vez que entres al directorio del proyecto, puedes crear un archivo `.nvmrc` en la raíz del proyecto con el contenido `22.14.0`.*

### 2. Instalar Dependencias

Una vez que tengas la versión correcta de Node.js configurada, navega hasta el directorio raíz del proyecto en tu terminal e instala las dependencias. Puedes usar `npm` o `yarn`:

**Usando npm:**

```bash
npm install
```

**Usando Yarn:**

```bash
yarn install
```

### 3. Ejecutar el Proyecto

Después de instalar todas las dependencias, puedes iniciar el proyecto. Los comandos pueden variar dependiendo de la configuración del proyecto (por ejemplo, `npm start`, `npm run dev`, `yarn start`, `yarn dev`). Consulta la documentación específica del proyecto o el archivo `package.json` para los scripts disponibles.

**Ejemplo (usando npm):**

```bash
npm start
```

**Ejemplo (usando Yarn):**

```bash
yarn start
```

---

¡Listo! Con estos pasos deberías tener el proyecto configurado y funcionando en tu máquina local.
