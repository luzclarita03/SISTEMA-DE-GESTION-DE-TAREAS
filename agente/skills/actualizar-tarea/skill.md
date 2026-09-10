# Skill: Actualizar Tarea

## Objetivo

Permitir al agente modificar los datos de una tarea existente.

## Datos que pueden modificarse

- Título.
- Descripción.
- Estado.
- Prioridad.
- Fecha límite.
- Categoría.

## Validaciones

1. La tarea debe existir.
2. La tarea debe pertenecer al usuario.
3. El nuevo estado debe ser válido.
4. La nueva prioridad debe ser válida.
5. No modificar datos que el usuario no haya solicitado cambiar.

## Comportamiento

El agente identifica la tarea, valida los cambios solicitados y solicita al backend la actualización.

Después informa al usuario del resultado de la operación.

## Restricciones

No actualizar una tarea inexistente o perteneciente a otro usuario.
