import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useCallback } from 'react'
import { PATH } from '../constants/path'
import Loading from '../components/Loading'

// Phần Main
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'))
const Main = lazy(() => import('../page/Main'))
const DetailBook = lazy(() => import('../layout/DetailBookLayout'))
const NotFound = lazy(() => import('../page/NotFound'))
const ProfileLayout = lazy(() => import('../layout/ProfileLayout'))
const PersonInfo = lazy(() => import('../page/Profile/PersonInfo'))

const UserOrderManagement = lazy(() => import('../page/Profile/UserOrderManagement'))
const UserReview = lazy(() => import('../page/Profile/UserReview'))
const UserChangePassword = lazy(() => import('../page/Profile/UserChangePassword'))

const UserOrderDetail = lazy(() => import('../page/Profile/UserOrderDetail'))
const Cart = lazy(() => import('../page/Cart'))
const Payment = lazy(() => import('../page/Payment'))
const CategoryLayout = lazy(() => import('../layout/CategoryLayout'))
const Category = lazy(() => import('../page/Category'))
const TermsLayout = lazy(() => import('../layout/TermsLayout'))
const TermsOfUsing = lazy(() => import('../page/Terms/Using'))
const TransportTerms = lazy(() => import('../page/Terms/Transport'))

const TermsOfUserInforPrivacy = lazy(() => import('../page/Terms/UserInforPrivacy'))
const PaymentPrivacy = lazy(() => import('../page/Terms/PaymentPrivacy'))
const WholesaleCustomerPolicy = lazy(() => import('../page/Terms/WholesaleCustomerPolicy'))
const SearchLayout = lazy(() => import('../layout/SearchLayout'))
const Search = lazy(() => import('../page/Search'))


// Phần Auth
const AuthLayout = lazy(() => import('../layout/AuthLayout'))
const Login = lazy(() => import('../page/Login'))
const Register = lazy(() => import('../page/Register'))
const ForgotPassword = lazy(() => import('../page/Forgotpassword'))
const ChangePassword = lazy(() => import('../page/ChangePassword'))
const VerifyEmail = lazy(() => import('../page/VerifyEmail'))
const CheckVerifyEmail = lazy(() => import('../page/VerifyEmail/check'))
const AccuracyGoogle = lazy(() => import('../page/Login/authGoogle'))
const AccuracyFaceBook = lazy(() => import('../page/Login/authFaceBook'))

// Phần Admin
const AdminLayout = lazy(() => import('../layout/AdminLayout'))
const Dashboard = lazy(() => import('../page/Admin/Dashboard'))
const ProductManagement = lazy(() => import('../page/Admin/ProductManagement'))
const AddProduct = lazy(() => import('../page/Admin/AddProduct'))
const UserManagement = lazy(() => import('../page/Admin/UserManagement'))
const OrderManagement = lazy(() => import('../page/Admin/OrderManagement'))
const CategoryAdmin = lazy(() => import('../page/Admin/Category'))
const TypeOf = lazy(() => import('../page/Admin/TypeOf'))
const ProductStatistics = lazy(() => import('../page/Admin/ProductStatistics'))
const OrderStatistics = lazy(() => import('../page/Admin/OrderStatistics'))
const RevenueStatistics = lazy(() => import('../page/Admin/RevenueStatistics'))
const UpdateProduct = lazy(() => import('../page/Admin/UpdateProduct'))
const OrderDetail = lazy(() => import('../page/Admin/OrderDetail'))
const AuthorManagement = lazy(() => import('../page/Admin/AuthorManagement'))

function MainRoutes() {
  const DefaultLayoutAuth = useCallback(
    (Container) => (
      <Suspense fallback={<Loading center={true} />}>
        <AuthLayout>
          <Container />
        </AuthLayout>
      </Suspense>
    ),
    []
  )
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Loading center={true} />}>
            <DefaultLayout />
          </Suspense>
        }
      >
        <Route path={PATH.main} element={<Main />}></Route>
        <Route path={PATH.detail_book} element={<DetailBook />}></Route>
        <Route path={PATH.cart} element={<Cart />}></Route>
        <Route path={PATH.notfound} element={<NotFound />}></Route>
        <Route path={PATH.profile.dashboard} element={<ProfileLayout />}>
          <Route index element={<PersonInfo />}></Route>
          <Route
            path={PATH.profile.user_order_management}
            element={<UserOrderManagement />}
          ></Route>

          <Route path={PATH.profile.user_review} element={<UserReview />}></Route>
          <Route path={PATH.profile.user_change_password} element={<UserChangePassword />}></Route>
          <Route path={PATH.profile.user_order_detail} element={<UserOrderDetail />}></Route>

        </Route>
        <Route
          element={
            <Suspense fallback={<Loading center={true} />}>
              <TermsLayout />
            </Suspense>
          }
        >
          <Route path={PATH.terms.using} element={<TermsOfUsing />}></Route>

          <Route path={PATH.terms.transport} element={<TransportTerms />}></Route>
          <Route path={PATH.terms.user_infor_privacy} element={<TermsOfUserInforPrivacy />}></Route>
          <Route path={PATH.terms.payment_privacy} element={<PaymentPrivacy />}></Route>
          <Route
            path={PATH.terms.wholesale_customer_policy}
            element={<WholesaleCustomerPolicy />}
          ></Route>
        </Route>
        <Route path={PATH.payment} element={<Payment />}></Route>
        <Route path={PATH.category.dashboard} element={<CategoryLayout />}>
          <Route index element={<Category />}></Route>
        </Route>

        <Route path={PATH.search} element={<SearchLayout />}>
          <Route index element={<Search />}></Route>
        </Route>

      </Route>

      <Route path={PATH.login} element={DefaultLayoutAuth(Login)}></Route>
      <Route path={PATH.register} element={DefaultLayoutAuth(Register)}></Route>

      <Route path={PATH.forgotpassword} element={DefaultLayoutAuth(ForgotPassword)}></Route>
      <Route path={PATH.changepassword} element={DefaultLayoutAuth(ChangePassword)}></Route>
      <Route path={PATH.verifyemail} element={DefaultLayoutAuth(VerifyEmail)}></Route>
      <Route path={PATH.verifyemail_checked} element={DefaultLayoutAuth(CheckVerifyEmail)}></Route>

      <Route
        path={PATH.login_google}
        element={
          <Suspense fallback={<Loading center={true} />}>
            <AccuracyGoogle />
          </Suspense>
        }
      />
      <Route
        path={PATH.login_facebook}
        element={
          <Suspense fallback={<Loading center={true} />}>
            <AccuracyFaceBook />
          </Suspense>
        }
      />

      <Route
        element={
          <Suspense fallback={<Loading center={true} />}>
            <AdminLayout />
          </Suspense>
        }
      >
        <Route path={PATH.admin.dashboard} element={<Dashboard />} />

        <Route path={PATH.admin.product_management} element={<ProductManagement />} />
        <Route path={PATH.admin.add_product} element={<AddProduct />} />
        <Route path={PATH.admin.update_product} element={<UpdateProduct />} />
        <Route path={PATH.admin.user_management} element={<UserManagement />} />
        <Route path={PATH.admin.order_management} element={<OrderManagement />} />
        <Route path={PATH.admin.order_statistics} element={<OrderStatistics />} />
        <Route path={PATH.admin.order_detail} element={<OrderDetail />} />
        <Route path={PATH.admin.category} element={<CategoryAdmin />} />
        <Route path={PATH.admin.typeof} element={<TypeOf />} />
        <Route path={PATH.admin.author_management} element={<AuthorManagement />} />
        <Route path={PATH.admin.product_statistics} element={<ProductStatistics />} />
        <Route path={PATH.admin.revenue_statistics} element={<RevenueStatistics />} />

      </Route>
    </Routes>
  )
}

export default MainRoutes
