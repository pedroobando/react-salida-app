import React from 'react';

export const DashboardCard = ({ titleName, totalNumber, colorBorde }) => {
  return (
    <>
      <div className={`card mb-3 ${colorBorde}`} style={{ maxWidth: 150 }}>
        <div className="card-header">{titleName}</div>
        <div className="card-body">
          <h4 className="card-title">{totalNumber}</h4>
        </div>
      </div>
    </>
  );
};
