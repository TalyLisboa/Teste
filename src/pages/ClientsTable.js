// ClientsTable.js

import React from 'react';
import DynamicTable from './DynamicTable';

const ClientsTable = ({ clients }) => {
  const columns = ['name', 'birth_date', 'cpf', 'address', 'status'];

  return <DynamicTable data={clients} columns={columns} />;
};

export default ClientsTable;
