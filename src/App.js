// src/App.js
import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import Pagination from "./components/Pagination";
//import CreateUser from "./components/CreateUser";
import { customers as mockData } from "./mockData";

function App() {
  const [customers, setCustomers] = useState(mockData);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSave = (customer) => {
    if (customer.id) {
      setCustomers((prev) =>
        prev.map((item) => (item.id === customer.id ? { ...customer } : item))
      );
    } else {
      setCustomers((prev) => [
        ...prev,
        { ...customer, id: Date.now(), createdAt: new Date().toLocaleDateString() },
      ]);
    }
    setEditingCustomer(null);
  };

  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setEditingCustomer({}); // Hiển thị form với dữ liệu trống
  };

  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {editingCustomer ? (
        <CustomerForm
          initialData={editingCustomer}
          onSave={handleSave}
          onCancel={() => setEditingCustomer(null)}
        />
      ) : (
        <>
          <CustomerList
            data={paginatedCustomers}
            onEdit={setEditingCustomer}
            onDelete={handleDelete}
            onAdd={handleAdd} // Truyền hàm thêm khách hàng
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(customers.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
