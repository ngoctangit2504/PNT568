import React, { useState, useEffect } from "react";
import { getAllUser, deleteUser } from "../../services/userService";
import UserItem from "../../feature/user/UserItem";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getAllUser();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <table>
        <tr>
          <td>
            <Link to="/admin">
              <button type="button" class="btn btn-primary">
                Trang chủ ADMIN
              </button>
            </Link>
          </td>
        </tr>
      </table>

      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Là Admin</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Tác vụ</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <UserItem
              key={user._id}
              user={user}
              onDelete={handleDelete}
              stt={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListPage;
