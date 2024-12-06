import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CreateUser from "./CreateUser";

function CustomerList({ data = [], onEdit, onDelete, onAdd }) {
 // const [] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const filteredData = data.filter((customer) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      customer.name.toLowerCase().includes(lowerCaseQuery) ||
      customer.phone.includes(lowerCaseQuery) ||
      customer.email.toLowerCase().includes(lowerCaseQuery)
    );
  });

  const [customers, setCustomers] = useState([
    {
      id: 1,
      code: "KH001",
      name: "Nguyễn Văn A",
      phone: "0123456789",
      email: "a@gmail.com",
      marketer: "Mr. John",
      source: "Facebook",
      notes: "Khách VIP",
      createdAt: "2023-01-01",
    },
  ]);

  const handleCreateCustomer = (newCustomer) => {
    const id = customers.length ? customers[customers.length - 1].id + 1 : 1;
    const customerWithId = { id, ...newCustomer };
    setCustomers([...customers, customerWithId]);
    setShowCreateForm(false);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faUser}
            style={{ marginRight: "10px", fontSize: "24px", color: "#555" }}
          />
          <h1 style={{ margin: 0, cursor: "auto" }}>Quản lý khách hàng</h1>
        </div>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Tên, SĐT, Email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "25%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={onAdd}
          style={{
            padding: "10px 20px",
            backgroundColor: "#F29F58",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          + Thêm khách hàng
        </button>
        <button
          onClick={() => setShowCreateForm(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#F29F58",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tạo khách hàng
        </button>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          textAlign: "left",
          marginBottom: "20px",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead style={{ borderBottom: "2px solid #ddd" }}>
          <tr>
            <th style={{ padding: "10px" }}>#</th>
            <th style={{ padding: "10px" }}>Mã KH</th>
            <th style={{ padding: "10px" }}>Họ và tên</th>
            <th style={{ padding: "10px" }}>SĐT</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Người tiếp thị</th>
            <th style={{ padding: "10px" }}>Nguồn</th>
            <th style={{ padding: "10px" }}>Ghi chú</th>
            <th style={{ padding: "10px" }}>Ngày tạo</th>
            <th style={{ padding: "10px" }}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((customer, index) => (
              <tr key={customer.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td>{index + 1}</td>
                <td>{customer.code}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.marketer}</td>
                <td>{customer.source}</td>
                <td>{customer.notes}</td>
                <td>{customer.createdAt}</td>
                <td>
                  <button onClick={() => onEdit(customer)}>Sửa</button>
                  <button
                    onClick={() => onDelete(customer.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="10"
                style={{ textAlign: "center", padding: "20px" }}
              >
                Không tìm thấy khách hàng phù hợp.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showCreateForm && (
        <div>
          {/* Overlay */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
            }}
          ></div>

          {/* Form Container */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              zIndex: 1001,
              width: "1298px", // Thiết lập chiều rộng cụ thể
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              maxHeight: "90vh", // Đảm bảo không bị tràn màn hình
              overflowY: "auto", // Cuộn nội dung nếu quá dài
            }}
          >
            <CreateUser
              onSubmit={handleCreateCustomer}
              onCancel={handleCancelCreate}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
