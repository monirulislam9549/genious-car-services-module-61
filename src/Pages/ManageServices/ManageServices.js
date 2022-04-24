import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(s => s._id !== id);
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h1>this is manage service</h1>
            {
                services.map(s =>
                    <div
                        key={s._id}
                    ><h4>{s.name} <button onClick={() => handleDelete(s._id)}>X</button></h4>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;