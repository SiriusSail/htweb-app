import styles from './index.less';
import { history } from 'umi'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1 onClick={() => {
        history.push('./products')
      }}>列表</h1>
      <h1 onClick={() => {
        history.push('./login')
      }}>登录</h1>
    </div>
  );
}
