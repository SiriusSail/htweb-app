import { Table, Popconfirm, Button, message } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import ProductsStore from '@/store/productsStore';

const ProductList: React.FC<{
  products: { name: string }[];
  onDelete: (id: string) => void;
}> = ({ onDelete, products }) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

const Index = () => {
  const { productList } = ProductsStore.useContainer();
  return (
    <div>
      <ProductList
        products={productList}
        onDelete={() => {
          message.error('删除测试');
        }}
      />
    </div>
  );
};

export default () => {
  return (
    <ProductsStore.Provider>
      <Index />
    </ProductsStore.Provider>
  );
};
