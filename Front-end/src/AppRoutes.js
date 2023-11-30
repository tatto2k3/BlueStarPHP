import SearchPage from "./Components/Layouts/BookingMain/SearchPage";
import DefaultLayOut from "./Components/Layouts/DeafaultLayout/DefaultLayout";
import MainLayOut from "./Components/Layouts/MainLayout/MainLayOut";
import LayoutTicketReview from "./Components/Layouts/LayoutTicketReview/LayoutTicketReview";
import Luggage from "./Components/Pages/Lugage/Lugage";
import SeatBooking from "./Components/Pages/Seat/SeatBooking";
import TicketPage from "./Components/Pages/Ticket/TicketPage";
import TicketReview from "./Components/Pages/TicketReview/TicketReview";
import TicketInfo from "./Components/Pages/TicketInfo/TicketInfo";
import Login from "./Components/Pages/Login/Login";
import CancelPage from "./Components/Pages/CancelPage/CancelPage";
import MainLayoutLogin from "./Components/Layouts/MainLayoutLogin/MainLayoutLogin";
import SignUp from "./Components/Pages/SignUp/SignUp";
import SearchTicket from "./Components/Pages/SearchTicket/SearchTicket";
import TicketSeeMore from "./Components/Pages/TicketSeeMore/TicketSeeMore";
import Food from "./Components/Pages/Food/Food";
import Seat from "./Components/Pages/Seat/SeatBooking";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import LayoutAboutUs from "./Components/Layouts/LayoutAboutUs/LayoutAboutUs";
import Payment from "./Components/Pages/Payment/Payment";
import Explore from "./Components/Pages/Explore/explore";
import Personal from "./Components/Pages/Personal/Personal";
import Refund from "./Components/Pages/Refund/Refund";
import KhachHang from "./Components/Pages/Admin/KhachHang/KhachHang";
import ChuyenBay from "./Components/Pages/Admin/ChuyenBay/ChuyenBay";
import SanBay from "./Components/Pages/Admin/SanBay/SanBay";
import Sidebar from "./Components/Layouts/Sidebar/Sidebar";
import MatKhau from "./Components/Pages/Admin/MatKhau/MatKhau";
import NhanVien from "./Components/Pages/Admin/NhanVien/NhanVien";
import CaNhan from "./Components/Pages/Admin/CaNhan/CaNhan";
import DoanhSo from "./Components/Pages/Admin/DoanhSo/DoanhSo";
import MayBay from "./Components/Pages/Admin/MayBay/MayBay";
import ThemMayBay from "./Components/Pages/Admin/MayBay_Them/ThemMayBay";
import SuaMayBay from "./Components/Pages/Admin/MayBay_Sua/SuaMayBay";
import HanhLy from "./Components/Pages/Admin/HanhLy/HanhLy";
import Ve from "./Components/Pages/Admin/Ve/Ve";
import ThemKhachHang from "./Components/Pages/Admin/KhachHang_Them/ThemKhachHang";
import SuaKhachHang from "./Components/Pages/Admin/KhachHang_Sua/SuaKhachHang";
import ThemChuyenBay from "./Components/Pages/Admin/ChuyenBay_Them/ThemChuyenBay";
import SuaChuyenBay from "./Components/Pages/Admin/ChuyenBay_Sua/SuaChuyenBay";
import AdminLayout from "./Components/Layouts/AdminLayout/AdminLayout";

const AppRoutes = [
  
  {
        path: '/',
        element: SearchPage,
        layout: DefaultLayOut
    },
    {
        path: '/ticket',
        element: TicketPage,
        layout: MainLayOut
    },
    {
        path: '/seat',
        element: Seat,
        layout: MainLayOut
    },
    {
        path: '/Food',
        element: Food,
        layout: MainLayOut
    },
    {
        path: '/luggage',
        element: Luggage,
        layout: MainLayOut
    },
    {
        path: '/seat',
        element: SeatBooking,
        layout: MainLayOut
    },
    {
        path: '/ticket-review',
        element: TicketReview,
        layout: LayoutTicketReview
    },
    {
        path: '/sign-up',
        element: SignUp,
        layout: MainLayoutLogin
    },
    {
        path: '/sign-in',
        element: Login,
        layout: MainLayoutLogin
    },
    {
        path: '/search-ticket',
        element: SearchTicket,
        layout: MainLayoutLogin
    },
    {
        path: '/ticket-info',
        element: TicketInfo,
        layout: LayoutTicketReview
    },
    {
        path: '/cancel-ticket',
        element: CancelPage,
        layout: MainLayoutLogin
    },
    {
        path: '/ticket-see-more',
        element: TicketSeeMore,
        layout: LayoutTicketReview
    },
    {
        path: '/about-us',
        element: AboutUs,
        layout: LayoutAboutUs
    },
    {
        path: '/payment',
        element: Payment,
        layout: MainLayOut
    },
    {
        path: '/explore',
        element: Explore,
        layout: LayoutTicketReview
    },
    {
        path: '/personal',
        element: Personal,
        layout: LayoutTicketReview
    },
    {
        path: '/Refund',
        element: Refund,
        layout: MainLayoutLogin
    },
    {
        path: '/KhachHang',
        element: KhachHang,
        layout: Sidebar
    },
    {
        path: '/ChuyenBay',
        element: ChuyenBay,
        layout: Sidebar
    },
    {
        path: '/SanBay',
        element: SanBay,
        layout: Sidebar
    },

    {
        path: '/MatKhau',
        element: MatKhau,
        layout: AdminLayout
    },
    {
        path: '/NhanVien',
        element: NhanVien,
        layout: AdminLayout
    },
    {
        path: '/CaNhan',
        element: CaNhan,
        layout: AdminLayout
    },
    {
        path: '/DoanhSo',
        element: DoanhSo,
        layout: Sidebar
    },
    {
        path: '/Ve',
        element: Ve,
        layout: Sidebar
    },
    {
        path: '/MayBay',
        element: MayBay,
        layout: Sidebar
    },
    {
        path: '/HanhLy',
        element: HanhLy,
        layout: Sidebar
    },
    {
        path: '/KhachHang_Them',
        element: ThemKhachHang,
        layout: AdminLayout
    },
    {
        path: '/KhachHang_Sua',
        element: SuaKhachHang,
        layout: AdminLayout
    },
    {
        path: '/ChuyenBay_Them',
        element: ThemChuyenBay,
        layout: AdminLayout
    },
    {
        path: '/ChuyenBay_Sua',
        element: SuaChuyenBay,
        layout: AdminLayout
    },
    {
        path: '/MayBay_Them',
        element: ThemMayBay,
        layout: AdminLayout
    },
    {
        path: '/MayBay_Sua',
        element: SuaMayBay,
        layout: AdminLayout
    },

];

export default AppRoutes;
