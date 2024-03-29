import { useState } from "react";
import { BsPlusCircleFill, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
import { addTodo, updateSearchTerm } from "../redux/actions";


const Todo = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setsearchTerm] = useState("");
    console.log(newTodoText);

    const handleAddToDo = (text) => {
        dispatch(addTodo(text))

    }

    const handleAddToDoClick = () => {
        if (newTodoText.trim !== "") {
            handleAddToDo(newTodoText.trim());
            setNewTodoText("");
        }
    }
    const handleSearchChange = (value) => {
        setsearchTerm(value);
        dispatch(updateSearchTerm(value));
    }
    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal TODO APP</h2>
            <div className="flex items-center mb-4">
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" id="addTodoInput" placeholder="Add todo"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button onClick={handleAddToDoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"><BsPlusCircleFill /></button>
            </div>

            <div className="flex items-center justify-between">
                <FilterButton />
                <div className="flex items-center mb-4">
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text"
                        id="addTodoInput" placeholder="Search Todo" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none
                focus:border-red-400" />
                 <button onClick={handleAddToDoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <BsSearch />
                </button>
                </div>
            </div>

            <TodoList></TodoList>
        </div>
    )
}

export default Todo
