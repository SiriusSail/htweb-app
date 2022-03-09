import { createContainer } from 'unstated-next';

export default createContainer(() => {
  const productList = [
    {
      id: 1,
      name: 'unstated-next',
    },
    {
      id: 2,
      name: 'antd',
    },
  ];
  return {
    productList,
  };
});
