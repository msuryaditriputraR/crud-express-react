import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    const [inputs, setInputs] = useState({ name: "", email: "", gender: "" });
    const navigate = useNavigate();

    const changeInputs = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setInputs({
            ...inputs,
            [id]: value,
        });
    };

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(import.meta.env.VITE_SERVER + "/users", inputs);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <form onSubmit={saveUser}>
                        <div className="field">
                            <label htmlFor="name" className="label">
                                Name
                            </label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    id="name"
                                    onChange={changeInputs}
                                    value={inputs.name}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <div className="control">
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    id="email"
                                    value={inputs.email}
                                    onChange={changeInputs}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="gender" className="label">
                                Gender
                            </label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select
                                        id="gender"
                                        onChange={changeInputs}
                                        value={inputs.gender}
                                    >
                                        <option value="" hidden>
                                            Select Gender
                                        </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field is-grouped is-grouped-centered mt-5">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-success"
                                >
                                    Save
                                </button>
                            </div>
                            <div className="control">
                                <Link to={"/"} replace>
                                    <button className="button ">Cancel</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
