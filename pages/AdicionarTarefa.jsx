import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

export default function AdicionarTarefa() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Evita salvar tarefas sem título
        if (!title.trim()) return;

        const newTask = {
            id: Date.now().toString(), // Gera um ID único baseado no tempo
            title,
            description
        };

        addTask(newTask);
        navigate('/'); // Redireciona de volta para a Home
    };

    return (
        <div>
            <h2>Adicionar Nova Tarefa</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
                <input
                    type="text"
                    placeholder="Título da tarefa"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Descrição da tarefa"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                ></textarea>
                <button type="submit">Salvar Tarefa</button>
            </form>
        </div>
    );
}