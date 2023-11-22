import { http, HttpResponse } from "msw";

// Mocka en "enkel databas" för att använda i våra tester
const todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    }
];


export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/todos', () => {
        return HttpResponse.json(todos);
    }),
    http.post('https://jsonplaceholder.typicode.com/todos', async ({ request }) => {
        // Hämta vår body som JSON
        const { todo } = await request.json();

        const newTodo = {
            id: todos.length,
            title: todo,
            completed: false
        }

        todos.push(newTodo);

        return HttpResponse.json({ success: true, todos: todos });
    }),
    http.delete('https://jsonplaceholder.typicode.com/todos/:id', ({ params }) => {
        // Plocka ut id från params
        const { id } = params;

        todos = todos.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
        });

        return HttpResponse.json({ success: true, todos: todos });
    })
]