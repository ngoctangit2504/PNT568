import CustomerList from '../components/CustomerList';
import CustomerForm from '../components/CustomerForm';
import CustomerDetails from '../components/CustomerDetails';

const routes = [
  {
    path: '/',
    component: CustomerList,
    exact: true
  },
  {
    path: '/add',
    component: CustomerForm,
    exact: true
  },
  {
    path: '/edit/:id',
    component: CustomerForm,
    exact: true
  },
  {
    path: '/details/:id',
    component: CustomerDetails,
    exact: true
  }
];

export default routes;