import React, { useState } from "react";
import Modal from "react-modal";
import ".//CreateUser.css"; // File CSS riêng

function CreateUser({ onSubmit, onCancel }) {
  const [formData, setFormData, setModalService, modalService] = useState({
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

  // const openModal = (serviceName) => {
  //   setModalService(serviceName);
  // };

  const closeModal = () => {
    setModalService(null);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Tạo khách hàng</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
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
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Nguồn khách hàng *</label>
            <select class="form-select form-select-sm" aria-label="Small select example">
              <option selected>Website</option>
              <option value="1">Facebook Ads</option>
              <option value="2">Trực tiếp</option>
              <option value="3">Khác</option>
            </select>
          </div>

          <div className="form-group">
            <label>Trạng thái *</label>
            <select class="form-select form-select-sm" aria-label="Small select example">
              <option selected>Yêu cầu trải nghiệm</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <h4>Thông tin liên hệ</h4>
        <div className="form-row">
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
            <label>Email</label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mạng xã hội</label>
            <select class="form-select form-select-sm" aria-label="Small select example">
              <option selected>Facebook</option>
              <option value="1">Zalo</option>
              <option value="2">Tiktok</option>
              <option value="3">Instagram</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <h4>Thông tin chi tiết</h4>
        <div className="form-row-horizontal">
          <div className="form-group">
            <label>Sản phẩm quan tâm *</label>
            <div>
              <label>
                Trị liệu dưỡng sinh
              </label>
              <label>
                Xoa bóp cổ vai gáy
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Địa chỉ liên hệ </label>
            <select class="form-select form-select-sm" aria-label="Small select example">
              <option selected>Tỉnh/thành phố</option>
              <option value="1">Hà Nội</option>
              <option value="2">Đà Nẵng</option>
              <option value="3">TP Hồ Chí Minh</option>
            </select>

            <select class="form-select form-select-sm" aria-label="Small select example">
              <option selected>Quận/Huyện</option>
              <option value="1">Thanh Xuân</option>
              <option value="2">Hai Bà Trưng</option>
            </select>
            <select class="form-select form-select-sm" aria-label="Small select example">
              <option selected>Xã/Phường</option>
              <option value="1">Quan Nhân</option>
              <option value="2">Tam Trinh</option>
            </select>
            <input
              type="text"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Chọn khung giờ *</label>
            <input
              type="time"
              name="time_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
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
      <Modal
        isOpen={!!modalService}
        onRequestClose={closeModal}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <h2>Chi tiết dịch vụ</h2>
        <p>
          {modalService === "Trị liệu dưỡng sinh"
            ? "Dịch vụ Trị liệu dưỡng sinh là liệu pháp giúp bạn thư giãn và cải thiện sức khỏe."
            : "Dịch vụ Xoa bóp cổ vai gáy là giải pháp giảm căng thẳng và đau nhức ở vùng cổ vai gáy."}
        </p>
        <button onClick={closeModal}>Đóng</button>
      </Modal>
    </div>
  );
}

export default CreateUser;
