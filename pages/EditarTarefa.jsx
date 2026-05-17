import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

export default function EditarTarefa() {
    const { id } = useParams();
    const { tasks, editTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Busca a tarefa correta no contexto assim que a página carrega
    useEffect(() => {
        const taskToEdit = tasks.find((t) => t.id === id);
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        } else {
            navigate('/'); // Se tentar acessar um ID que não existe, volta para a home
        }
    }, [id, tasks, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        editTask({ id, title, description });
        navigate('/');
    };

    return (
        <div>
            <h2>Editar Tarefa</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                ></textarea>
                <button type="submit">Atualizar Tarefa</button>
            </form>
        </div>
    );
}