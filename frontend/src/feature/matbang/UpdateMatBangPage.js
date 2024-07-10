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
        <form onSubmit={handleSubmit}>
            <input name="maMatBang" value={formData.maMatBang} onChange={handleChange} required />
            <input name="tang" value={formData.tang} onChange={handleChange} required />
            <input name="hinhAnh" value={formData.hinhAnh} onChange={handleChange} required />
            <input name="dienTich" value={formData.dienTich} onChange={handleChange} required />
            <select name="trangThai" value={formData.trangThai} onChange={handleChange} required>
                <option value="Còn trống">Còn trống</option>
                <option value="Đang sửa chữa">Đang sửa chữa</option>
                <option value="Đã sử dụng">Đã sử dụng</option>
            </select>
            <input name="congTyThue" value={formData.congTyThue} onChange={handleChange} />
            <input name="nhanVienQuanLy" value={formData.nhanVienQuanLy} onChange={handleChange} required />
            <button type="submit">Cập nhật</button>
        </form>
    );
};

export default UpdateMatBangPage;