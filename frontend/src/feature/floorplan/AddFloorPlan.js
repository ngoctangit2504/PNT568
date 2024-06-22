import React, { useState } from "react";
import floorPlanService from "../../services/floorPlanService";

const AddFloorPlan = () => {
  const [formData, setFormData] = useState({
    image: null,
    floor: "",
    area: "",
    status: "available",
    description: "",
    company: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("image", formData.image);
      formDataToSubmit.append("floor", formData.floor);
      formDataToSubmit.append("area", formData.area);
      formDataToSubmit.append("status", formData.status);
      formDataToSubmit.append("description", formData.description);
      formDataToSubmit.append("company", formData.company);

      await floorPlanService.createFloorPlan(formDataToSubmit);
      // Handle success, e.g., close modal, reset form, etc.
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        
          <h2>Tạo mặt bằng</h2>
          <div class="mb-3">
            <label for="image" class="form-label">
              Hình ảnh
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
            <label for="floor" class="form-label">
              Tầng
            </label>
            <input
              type="text"
              name="floor"
              className="form-control"
              value={formData.floor}
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
            <label for="area" class="form-label">
              Diện tích
            </label>
            <input
              type="text"
              name="area"
              className="form-control"
              value={formData.area}
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
            <label for="statusSelect" class="form-label">
              Trạng thái
            </label>
            <select
              id="statusSelect"
              class="form-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Chọn trạng thái</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">
              Chi tiết thông tin
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
            <label for="company" class="form-label">
              Công ty
            </label>
            <input
              type="text"
              name="company"
              className="form-control"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Tạo
          </button>
       
      </form>
    </div>
  );
};

export default AddFloorPlan;
