// 'use client';
// import React from 'react';
// import { Card, Row, Col } from 'antd';
// import {
//   BarChartOutlined,
//   BookOutlined,
//   BankOutlined,
//   TransactionOutlined,
// } from '@ant-design/icons';
// import { useRouter } from 'next/navigation';
// import WebConfig from '../webConfig';

// const AdminHomePage = () => {
//   const router = useRouter();

//   const navigateToPage = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="mb-5 text-center text-2xl font-bold">
//         Quản lý Thư viện Online
//       </h1>
//       <Row gutter={[16, 24]} justify="center">
//         <Col xs={24} md={6}>
//           <Card
//             className="cursor-pointer transition-transform hover:scale-105 md:transform-none md:hover:scale-105"
//             onClick={() => {
//               navigateToPage('/overview');
//             }}
//             hoverable
//             title="Thống kê thư viện"
//             extra={<BarChartOutlined />}
//           >
//             <p className="text-gray-600">Thống kê doanh thu</p>
//           </Card>
//         </Col>

//         <Col xs={24} md={6}>
//           <Card
//             className="cursor-pointer transition-transform hover:scale-105 md:transform-none md:hover:scale-105"
//             onClick={() => navigateToPage('/bookManager')}
//             hoverable
//             title="Quản lý Sách"
//             extra={<BookOutlined />}
//           >
//             <p className="text-gray-600">Thêm, sửa, xóa sách trong hệ thống.</p>
//           </Card>
//         </Col>

//         <Col xs={24} md={6}>
//           <Card
//             className="cursor-pointer transition-transform hover:scale-105 md:transform-none md:hover:scale-105"
//             onClick={() => navigateToPage('/bank')}
//             hoverable
//             title="Cấu hình tài khoản ngân hàng"
//             extra={<BankOutlined />}
//           >
//             <p className="text-gray-600">Quản lý thông tin ngân hàng.</p>
//           </Card>
//         </Col>

//         <Col xs={24} md={6}>
//           <Card
//             className="cursor-pointer transition-transform hover:scale-105 md:transform-none md:hover:scale-105"
//             onClick={() => navigateToPage('/requestManager')}
//             hoverable
//             title="Xử lý yêu cầu nạp tiền"
//             extra={<TransactionOutlined />}
//           >
//             <p className="text-gray-600">Quản lý các yêu cầu trong hệ thống.</p>
//           </Card>
//         </Col>
//       </Row>

//       <Row gutter={16} justify="center" className="mt-5">
//         <Col span={24}>
//           {' '}
//           <Card className="cursor-pointer" hoverable title="Cấu hình Web">
//             <WebConfig />
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default AdminHomePage;
'use client';
import React from 'react';
import { Card } from 'antd';


import { useRouter } from 'next/navigation';
import WebConfig from '../webConfig';

const AdminHomePage = () => {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <Card className="cursor-pointer" hoverable title="Cấu hình Web">
      <WebConfig />
    </Card>
  );
};

export default AdminHomePage;
