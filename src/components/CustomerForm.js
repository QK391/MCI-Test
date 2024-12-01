import React, { useState } from "react";
import axios from "axios";

function CustomerForm({ customer, onSave, onCancel }) {
  const [formData, setFormData] = useState({ full_name: "",
    gender: "Nam",
    date_of_birth: "",
    phone_number: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    detailed_info: "",
    notes: "",
    status: 0,
    source: 0,
    social_media: 0,
    service: [],
    follow_up_date: "",
    follow_down_date: "",
    comments: [{ title: "", time: "", status_id: 0 }]
   });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dev.thabicare.zenix.com.vn/api/v1/customers",
        formData
      );
      alert("Khách hàng được thêm thành công!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi khi thêm khách hàng!");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        zIndex: 1000,
      }}
    >
      <h3>Sửa thông tin khách hàng</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Mã khách hàng: </label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Họ và tên: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Số điện thoại: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Người tiếp thị: </label>
          <input
            type="text"
            name="marketer"
            value={formData.marketer}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Nguồn: </label>
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Ghi chú: </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={onCancel}
            style={{
              padding: "8px 20px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Hủy
          </button>
          <button
            type="submit"
            style={{
              padding: "8px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}
export default CustomerForm;