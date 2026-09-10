# Skill Base - Sistema de Gestión de Tareas

## Objetivo

Esta skill define las reglas generales que debe seguir el agente de IA para trabajar con el Sistema de Gestión de Tareas.

## Contexto

El sistema permite gestionar tareas de usuarios mediante:

- Creación de tareas.
- Consulta de tareas.
- Actualización de tareas.
- Organización por categorías.
- Estados y prioridades.

## Reglas generales

1. Respetar siempre los datos proporcionados por el usuario.
2. No modificar una tarea sin identificarla correctamente.
3. Validar los datos antes de ejecutar una operación.
4. Informar claramente el resultado de cada operación.
5. No inventar tareas, usuarios o categorías.
6. Mantener las operaciones coherentes con el modelo de datos definido en Prisma.

## Estados permitidos

- pendiente
- en_progreso
- completada

## Prioridades permitidas

- baja
- media
- alta
