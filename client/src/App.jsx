import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
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
    {
        path: "edit/:id",
        element: <EditUser />,
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}
