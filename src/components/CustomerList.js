import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CreateUser from "./CreateUser";

function CustomerList({ data = [], onEdit, onDelete, onAdd }) {
  const [editingCustomer, setEditingCustomer] = useState(null);
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

  const handleEditCustomer = (updatedCustomer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  const handleCreateCustomer = (newCustomer) => {
    const id = customers.length ? customers[customers.length - 1].id + 1 : 1; // Tạo ID mới
    const customerWithId = { id, ...newCustomer }; // Gán ID cho khách hàng mới
    setCustomers([...customers, customerWithId]);
    setCustomers([...customers, newCustomer]);
    setShowCreateForm(false);
  };
  const handleCancelCreate = () => {
    setShowCreateForm(false); // Ẩn form khi hủy
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px", fontSize: "24px", color: "#555" }} />
          <h1 style={{ margin: 0, cursor: "auto" }}>Quản lý khách hàng</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px", fontSize: "16px", color: "#555" }}>Mrs Conan</span>
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "24px", color: "#555" }} />
        </div>
      </div>
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
      <table style={{ width: "100%", textAlign: "left", marginBottom: "20px", borderCollapse: "collapse", border: "1px solid #ddd" }}>
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
                  <button onClick={() => onDelete(customer.id)} style={{ marginLeft: "10px" }}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center", padding: "20px" }}>
                Không tìm thấy khách hàng phù hợp.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showCreateForm && (
        <div style={{ marginTop: "20px" }}>
          <CreateUser onSubmit={handleCreateCustomer} onCancel={handleCancelCreate} />
        </div>
      )}
      <button
        onClick={onAdd}
        style={{
          position: "absolute",
          top: "70px",
          right: "10px",
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
        onClick={() => setShowCreateForm(true)} // Hiển thị form khi nhấn nút
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
  );
}

export default CustomerList;



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import CreateUser from "./CreateUser"; // Import form CreateUser

// function CustomerList({ data = [], onEdit, onDelete }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showCreateForm, setShowCreateForm] = useState(false); // Trạng thái hiển thị form
//   const [customers, setCustomers] = useState(data); // Quản lý danh sách khách hàng

//   const handleCreateCustomer = (newCustomer) => {
//     const id = customers.length ? customers[customers.length - 1].id + 1 : 1; // Tạo ID mới
//     const customerWithId = { id, ...newCustomer }; // Gán ID cho khách hàng mới
//     setCustomers([...customers, customerWithId]); // Cập nhật danh sách
//     setShowCreateForm(false); // Ẩn form
//   };

//   const handleCancelCreate = () => {
//     setShowCreateForm(false); // Ẩn form khi hủy
//   };

//   const filteredData = customers.filter((customer) => {
//     const lowerCaseQuery = searchQuery.toLowerCase();
//     return (
//       customer.name?.toLowerCase().includes(lowerCaseQuery) ||
//       customer.phone?.includes(lowerCaseQuery) ||
//       customer.email?.toLowerCase().includes(lowerCaseQuery)
//     );
//   });

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px", fontSize: "24px", color: "#555" }} />
//           <h1 style={{ margin: 0, cursor: "auto" }}>Quản lý khách hàng</h1>
//         </div>
//         <button
//           onClick={() => setShowCreateForm(true)} // Hiển thị form khi nhấn nút
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#F29F58",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Tạo khách hàng
//         </button>
//       </div>

//       {/* Input tìm kiếm */}
//       <input
//         type="text"
//         placeholder="Tìm kiếm theo tên, SĐT, email..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={{
//           marginBottom: "20px",
//           padding: "10px",
//           width: "25%",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />

//       {/* Hiển thị danh sách khách hàng */}
//       <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse", border: "1px solid #ddd" }}>
//         <thead style={{ borderBottom: "2px solid #ddd" }}>
//           <tr>
//             <th>#</th>
//             <th>Mã KH</th>
//             <th>Họ và tên</th>
//             <th>SĐT</th>
//             <th>Email</th>
//             <th>Hành động</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map((customer, index) => (
//               <tr key={customer.id} style={{ borderBottom: "1px solid #ddd" }}>
//                 <td>{index + 1}</td>
//                 <td>{customer.code}</td>
//                 <td>{customer.name}</td>
//                 <td>{customer.phone}</td>
//                 <td>{customer.email}</td>
//                 <td>
//                   <button onClick={() => onEdit(customer)}>Sửa</button>
//                   <button onClick={() => onDelete(customer.id)} style={{ marginLeft: "10px" }}>
//                     Xóa
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
//                 Không tìm thấy khách hàng phù hợp.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Hiển thị form CreateUser */}
//       {showCreateForm && (
//         <div style={{ marginTop: "20px" }}>
//           <CreateUser onSubmit={handleCreateCustomer} onCancel={handleCancelCreate} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CustomerList;
