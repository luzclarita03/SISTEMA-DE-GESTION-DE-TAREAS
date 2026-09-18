# Sistema de Gestión de Tareas

Sistema web para la gestión y organización de tareas desarrollado como proyecto práctico para la materia **Sistemas Paralelos**.

## Descripción

El proyecto permite a los usuarios gestionar sus tareas mediante una aplicación web compuesta por un frontend, un backend y una base de datos PostgreSQL.

La aplicación utiliza una arquitectura multi-contenedor mediante Docker Compose y Prisma ORM para la gestión de persistencia.

## Tecnologías utilizadas

* Node.js
* Express
* React
* Vite
* PostgreSQL
* Prisma ORM
* Docker
* Docker Compose
* Git y GitHub

## Arquitectura

El sistema está compuesto por los siguientes servicios:

* **Frontend:** interfaz web desarrollada con React y Vite.
* **Backend:** API REST desarrollada con Node.js y Express.
* **Base de datos:** PostgreSQL gestionado mediante Prisma ORM.
* **Agente de IA:** conjunto de reglas y skills para apoyar la gestión de tareas.

## Estructura del proyecto

```text
SISTEMA-DE-GESTION-DE-TAREAS/
├── agente/
│   ├── rules.md
│   └── skills/
│       ├── actualizar-tarea/
│       ├── base/
│       ├── crear-tarea/
│       └── listar-tareas/
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.js
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.mjs
└── docker-compose.yml
```

## Ejecución del proyecto

Para levantar los servicios mediante Docker Compose:

```bash
docker compose up --build -d
```

Para verificar el estado de los contenedores:

```bash
docker compose ps
```

## Servicios

| Servicio   | Puerto |
| ---------- | -----: |
| Backend    |   3000 |
| Frontend   |   5173 |
| PostgreSQL |   5434 |

## Prisma y base de datos

Para verificar el estado de las migraciones:

```bash
docker compose exec backend npx prisma migrate status
```

Para generar Prisma Client:

```bash
docker compose exec backend npx prisma generate
```

Para ejecutar los datos iniciales:

```bash
docker compose exec backend npx prisma db seed
```

## Agente de IA

El proyecto incorpora reglas y skills para apoyar la gestión de tareas.

Las reglas principales se encuentran en:

```text
agente/rules.md
```

Las skills implementadas incluyen:

* Crear tareas.
* Listar tareas.
* Actualizar tareas.
* Funcionalidades base del agente.

## Control de versiones

El proyecto utiliza Git y la convención **Conventional Commits** para registrar los cambios realizados durante el desarrollo.

Ejemplos:

```text
feat(backend): definir modelo de tareas con prisma
chore(agente): agregar skills y reglas del agente
feat(db): agregar migracion inicial y datos de prueba
feat(docker): configurar entorno multi-contenedor
```

## Repositorio

Repositorio público:

**https://github.com/luzclarita03/SISTEMA-DE-GESTION-DE-TAREAS**

## Materia

**Sistemas Paralelos**

**Docente:** Ing. Elias Cassal Baldiviezo
