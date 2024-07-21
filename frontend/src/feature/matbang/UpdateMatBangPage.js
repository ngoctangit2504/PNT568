import React, { useState, useEffect } from 'react';
import { updateMatBang, getMatBangById } from '../../services/matBangService';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const UpdateMatBangPage = ({ onSubmitSuccess }) => {
    const { matBangId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tang: '',
        hinhAnh: '',
        dienTich: '',
        trangThai: 'Còn trống',
        congTyThue: '',
        nhanVienQuanLy: '',
    });

    useEffect(() => {
        const fetchMatBang = async () => {
            try {
                const response = await getMatBangById(matBangId);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching mat bang:', error);
            }
        };

        fetchMatBang();
    }, [matBangId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateMatBang(matBangId, formData);
            notify(true);
            if (onSubmitSuccess) {
                onSubmitSuccess();
            }
            navigate('/matbang'); // Navigate back to the list page
        } catch (error) {
            console.error('Error submitting form:', error);
            notify(false);
        }
    };

    const notify = (success) => {
        if (success) {
            toast.success("Cập nhật mặt bằng thành công");
        } else {
            toast.warning("Cập nhật thất bại");
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <label class="form-label">Mã mặt bằng</label>
            <input class="form-control" name="maMatBang" value={formData.maMatBang} onChange={handleChange} required />

            <label class="form-label">Tầng</label>
            <input class="form-control" name="tang" value={formData.tang} onChange={handleChange} required />

            <label  class="form-label">Url hình ảnh</label>
            <input class="form-control" name="hinhAnh" value={formData.hinhAnh} onChange={handleChange} required />

            <label  class="form-label">Diện tích</label>
            <input class="form-control" name="dienTich" value={formData.dienTich} onChange={handleChange} required />

            <label  class="form-label">Trang thái</label>
            <select class="form-control" name="trangThai" value={formData.trangThai} onChange={handleChange} required>
                <option value="Còn trống">Còn trống</option>
                <option value="Đang sửa chữa">Đang sửa chữa</option>
                <option value="Đã sử dụng">Đã sử dụng</option>
            </select>

            <label  class="form-label">Công ty thuê</label>
            <input class="form-control" name="congTyThue" value={formData.congTyThue} onChange={handleChange} />

            <label  class="form-label">Nhân viên quản lí</label>
            <input class="form-control" name="nhanVienQuanLy" value={formData.nhanVienQuanLy} onChange={handleChange} required />
            <button type="submit" class="btn btn-warning">Cập nhật</button>
        </form>
        </div>
        
    );
};

export default UpdateMatBangPage;