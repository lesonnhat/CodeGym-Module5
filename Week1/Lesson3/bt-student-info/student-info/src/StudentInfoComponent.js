import './StudentInfoComponent.css';

function StudentInfoComponent() {
    const students = [
        {
            id: 1,
            name: 'Hoàng Thu Trang',
            age: 25,
            address: 'Hà Nội'
        },
        {
            id: 2,
            name: 'Lê Sơn Nhất',
            age: 26,
            address: 'Hải Dương'
        },
        {
            id: 3,
            name: 'Vũ Thu Hà',
            age: 34,
            address: 'Hải Phòng'
        }
    ];

    return (
        <>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            {students.map(student => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))
            }
        </>
    )
}

export default StudentInfoComponent;