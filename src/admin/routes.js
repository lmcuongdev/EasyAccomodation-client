import Index from "./views/Index";
import Profile from "./views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// eslint-disable-next-line
import Register from "./views/examples/Register.js";
// eslint-disable-next-line
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";
import Reviews from "./views/examples/Reviews";
import Accommodation from "./views/examples/Accommodation";

var routes = [
	{
		path: "/index",
		name: "Trang chủ",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/icons",
		name: "Chủ trọ",
		icon: "ni ni-planet text-blue",
		component: Icons,
		layout: "/admin",
	},
	// {
	//   path: "/maps",
	//   name: "Maps",
	//   icon: "ni ni-pin-3 text-orange",
	//   component: Maps,
	//   layout: "/admin",
	// },
	// {
	// 	path: "/user-profile",
	// 	name: "Trang cá nhân",
	// 	icon: "ni ni-single-02 text-yellow",
	// 	component: Profile,
	// 	layout: "/admin",
	// },
	// {
	// 	path: "/accommodation",
	// 	name: "Thông tin trọ",
	// 	icon: "ni ni-building text-yellow",
	// 	component: Accommodation,
	// 	layout: "/admin",
	// },
	{
		path: "/accommodations",
		name: "Bài đăng",
		icon: "ni ni-bullet-list-67 text-red",
		component: Tables,
		layout: "/admin",
	},
	{
		path: "/reviews",
		name: "Review",
		icon: "ni ni-notification-70 text-red",
		component: Reviews,
		layout: "/admin",
	},
	// {
	// 	path: "/login",
	// 	name: "Đăng nhập",
	// 	icon: "ni ni-key-25 text-info",
	// 	component: Login,
	// 	layout: "/auth",
	// },
	// {
	// 	path: "/register",
	// 	name: "Đăng kí",
	// 	icon: "ni ni-circle-08 text-pink",
	// 	component: Register,
	// 	layout: "/auth",
	// },
];
export default routes;
