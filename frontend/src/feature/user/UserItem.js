import React from 'react';

const UserItem = ({ user, onDelete ,stt}) => {
  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa người dùng ${user.name} không?`)) {
      onDelete(user._id);
    }
  };

  return (
  
          <tr>
          <td>{stt}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>******</td>
          <td>{user.isAdmin ? 'Yes' : 'No'}</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>
          {/* <button class="btn btn-warning" onClick={handleDelete}>Cập Nhật</button> */}
          <button class="btn btn-danger" onClick={handleDelete}>Xóa</button>
          </td>
          </tr>

  );
};

export default UserItem;