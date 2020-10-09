import React from 'react'

const Employees = ({ employees }) => {
    return (
        <div>
            <center><h1>Employees List</h1></center>
            {employees.map((employee) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{employee.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{employee.job}</h6>
                        <p class="card-text">{employee.salary}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Employees
