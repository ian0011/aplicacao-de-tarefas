import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

export default function Home() {
    const { tasks, removeTask } = useContext(TaskContext);

    return (
        <div>
            <h2>Minhas Tarefas</h2>

            {tasks.length === 0 ? (
                <p>Você não tem nenhuma tarefa pendente.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tasks.map(task => (
                        <li key={task.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>

                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <Link to={`/editar/${task.id}`}>
                                    <button>Editar</button>
                                </Link>
                                <button onClick={() => removeTask(task.id)}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}