import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserList />,
    },
    {
        path: "add",
        element: <AddUser />,
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}
