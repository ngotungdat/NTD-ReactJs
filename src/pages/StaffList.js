import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StaffList.css';

const StaffList = () => {
    const [staff, setStaff] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        try {
            let url = `https://localhost:7130/staff`
            if(searchTerm.length > 0){
                url = url + `?search=${searchTerm}`;
            }
            const response = await axios.get(url);
            console.log('After call api:', response.data);
            setStaff(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this effect will run once after the initial render

    const handleSearch = async () => {
        fetchData();
    };

    return (
        <div>
            <h1>Danh sách nhân sự</h1>
            <input
                type='search'
                placeholder='Nhập từ khóa...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Chức vụ</th>
                        <th>Email</th>
                        <th>Phòng ban</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.email}</td>
                            <td>{item.department}</td>
                            <td>{item.status}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffList;
