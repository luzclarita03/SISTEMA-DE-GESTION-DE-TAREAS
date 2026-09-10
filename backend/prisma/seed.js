const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const usuario = await prisma.usuario.upsert({
    where: {
      email: "demo@tareas.com",
    },
    update: {},
    create: {
      nombre: "Usuario Demo",
      email: "demo@tareas.com",
      passwordHash: "demo123",
    },
  });

  const categoria = await prisma.categoria.upsert({
    where: {
      usuarioId_nombre: {
        usuarioId: usuario.id,
        nombre: "Trabajo",
      },
    },
    update: {},
    create: {
      nombre: "Trabajo",
      color: "#3B82F6",
      usuarioId: usuario.id,
    },
  });

  await prisma.tarea.createMany({
    data: [
      {
        titulo: "Configurar proyecto",
        descripcion: "Configurar Backend, Frontend y PostgreSQL",
        estado: "pendiente",
        prioridad: "alta",
        usuarioId: usuario.id,
        categoriaId: categoria.id,
      },
      {
        titulo: "Configurar Prisma",
        descripcion: "Crear y validar el esquema de base de datos",
        estado: "en_progreso",
        prioridad: "alta",
        usuarioId: usuario.id,
        categoriaId: categoria.id,
      },
      {
        titulo: "Crear documentación",
        descripcion: "Preparar README y documentación del proyecto",
        estado: "pendiente",
        prioridad: "media",
        usuarioId: usuario.id,
        categoriaId: categoria.id,
      },
    ],
  });

  console.log("Seed ejecutado correctamente.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
