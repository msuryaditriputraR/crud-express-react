import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get(
            import.meta.env.VITE_SERVER + "/users"
        );
        setUsers(response.data);
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(import.meta.env.VITE_SERVER + "/users/" + id);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <Link to="add">
                        <button className="button is-success mb-4">ADD</button>
                    </Link>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <Link to={"edit/" + user.id}>
                                            <button className="button is-small mr-2 is-info">
                                                Edit
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                if (confirm("Are you sure?"))
                                                    deleteUser(user.id);
                                            }}
                                            className="button is-small  is-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
