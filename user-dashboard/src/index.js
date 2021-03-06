import dva from 'dva';
import {useRouterHistory} from 'dva/router';
import {createHashHistory} from 'history';

import './index.css';
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({queryKey: false})
});

app.model(require('./models/app'));
app.model(require("./models/users"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
