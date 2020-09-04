import React from 'react';
import { DashboardCard } from './DashboardCard';

export const DashboardPage = () => {
  const totales = [
    {
      titleName: 'Por Aprobar',
      totalNumber: 56,
      colorBorde: 'border-secondary',
    },
    {
      titleName: 'Aprobadas',
      totalNumber: 160,
      colorBorde: 'border-success',
    },
    {
      titleName: 'Rechazadas',
      totalNumber: 12,
      colorBorde: 'border-danger',
    },
    {
      titleName: 'Tot. Salidas',
      totalNumber: 228,
      colorBorde: 'border-primary',
    },
    {
      titleName: 'Por Retornar',
      totalNumber: 48,
      colorBorde: 'border-warning',
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-between mt-5">
        {totales.map((totalItem, indice) => (
          <DashboardCard key={indice} {...totalItem} />
        ))}
      </div>
    </div>
  );
};
