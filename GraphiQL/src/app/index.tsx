import { withRouter } from './providers/withRouter';
import './index.scss';
import Routing from 'pages';

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default withRouter(App);
