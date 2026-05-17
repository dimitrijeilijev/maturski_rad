

import { getTodos, getCategories } from "@/lib/data-service";
import TodosClient from "@/components/todos/TodosClient";

export default async function TodosPage() {
  const todos = await getTodos();
  const categories = await getCategories();

  return  <TodosClient todos={todos} categories={categories}/>;
}