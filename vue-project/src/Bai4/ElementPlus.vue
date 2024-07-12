<template>
  <div>
    <el-table
      :data="tableData"
      height="500px"
      style="width: 100%"
      :header-cell-style="{ background: '#f5f7fa' }"
    >
      <!-- Cột đầu tiên cố định -->

      <el-table-column prop="name" label="Name" width="120"></el-table-column>
      <el-table-column
        prop="address"
        label="Address"
        width="250"
      ></el-table-column>
      <el-table-column prop="state" label="State" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Dữ liệu mẫu cho bảng
const tableData = ref([
  {
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },
  {
    name: "Alice Brown",
    address: "101 Maple Rd",
    state: "WA",
  },

  {
    name: "Tom White",
    address: "202 Elm St",
    state: "NV",
  },
  {
    name: "Lisa Black",
    address: "303 Cedar Ln",
    state: "FL",
  },
  {
    name: "Sam Green",
    address: "404 Birch Ct",
    state: "AZ",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },
  {
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },
  {
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },{
    name: "John Doe",
    address: "123 Main St",
    state: "CA",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave",
    state: "NY",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Dr",
    state: "TX",
  },
]);
</script>
