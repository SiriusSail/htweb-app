import { createContainer } from 'unstated-next';

export type ProductListType = {
  id: string;
  name: string;
};

export default createContainer(() => {
  const productList: ProductListType[] = [
    {
      id: '1',
      name: 'unstated-next',
    },
    {
      id: '2',
      name: 'antd',
    },
  ];
  return {
    productList,
  };
});
