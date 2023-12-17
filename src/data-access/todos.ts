import { db } from '@/db';

export async function getAllTodos() {
  return db.query.todos.findMany();
}
