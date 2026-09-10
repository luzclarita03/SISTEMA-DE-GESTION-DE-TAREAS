# Skill: Crear Tarea

## Objetivo

Permitir al agente crear una nueva tarea para el usuario.

## Datos requeridos

- Título.
- Usuario asociado.

## Datos opcionales

- Descripción.
- Estado.
- Prioridad.
- Fecha límite.
- Categoría.

## Validaciones

1. El título no puede estar vacío.
2. El usuario debe estar identificado.
3. El estado debe ser uno de:
   - pendiente
   - en_progreso
   - completada
4. La prioridad debe ser:
   - baja
   - media
   - alta

## Comportamiento

Si los datos son válidos, el agente solicita al backend la creación de la tarea.

Después debe informar al usuario si la tarea fue creada correctamente.

## Restricciones

No crear tareas con datos incompletos o inválidos.
