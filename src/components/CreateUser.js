import React, { useState } from "react";
import ".//CreateUser.css"; // File CSS riêng

function CreateUser({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    full_name: "",
    gender: "Nam",
    date_of_birth: "",
    phone_number: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    detailed_info: "",
    notes: "",
    service: [],
    comments: [{ title: "", time: "", status_id: 1 }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddComment = () => {
    setFormData({
      ...formData,
      comments: [...formData.comments, { title: "", time: "", status_id: 1 }],
    });
  };

  const handleCommentChange = (index, field, value) => {
    const updatedComments = formData.comments.map((comment, i) =>
      i === index ? { ...comment, [field]: value } : comment
    );
    setFormData({ ...formData, comments: updatedComments });
  };

  const handleServiceToggle = (serviceId) => {
    const updatedServices = formData.service.includes(serviceId)
      ? formData.service.filter((id) => id !== serviceId)
      : [...formData.service, serviceId];
    setFormData({ ...formData, service: updatedServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Tạo khách hàng</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Họ tên khách hàng *</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Giới tính *</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={formData.gender === "Nam"}
                onChange={handleChange}
              />
              Nam
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={formData.gender === "Nữ"}
                onChange={handleChange}
              />
              Nữ
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={formData.gender === "Khác"}
                onChange={handleChange}
              />
              Khác
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Ngày sinh</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại *</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Thành phố</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Huyện</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phường</label>
          <input
            type="text"
            name="ward"
            value={formData.ward}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ghi chú</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Sản phẩm quan tâm</label>
          <div>
            <label>
              <input
                type="checkbox"
                checked={formData.service.includes(1)}
                onChange={() => handleServiceToggle(1)}
              />
              Trị liệu dưỡng sinh
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.service.includes(2)}
                onChange={() => handleServiceToggle(2)}
              />
              Xoa bóp cơ vai gáy
            </label>
          </div>
        </div>
        <div className="form-group">
          <h3>Thông tin chăm sóc khách hàng</h3>
          {formData.comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <input
                type="text"
                placeholder="Kết quả chăm sóc"
                value={comment.title}
                onChange={(e) =>
                  handleCommentChange(index, "title", e.target.value)
                }
              />
              <input
                type="datetime-local"
                value={comment.time}
                onChange={(e) =>
                  handleCommentChange(index, "time", e.target.value)
                }
              />
              <select
                value={comment.status_id}
                onChange={(e) =>
                  handleCommentChange(index, "status_id", e.target.value)
                }
              >
                <option value={1}>Trạng thái 1</option>
                <option value={2}>Trạng thái 2</option>
              </select>
            </div>
          ))}
          <button type="button" onClick={handleAddComment}>
            + Thêm thông tin chăm sóc
          </button>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Xác nhận
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
