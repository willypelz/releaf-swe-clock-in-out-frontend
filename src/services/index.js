import UserProvider from "./providers/user";
import StaffProvider from "./providers/staff";
import ClockInOutProvider from "./providers/clockinout";

export const UserService = new UserProvider();
export const StaffService = new StaffProvider();
export const ClockInOutService  = new ClockInOutProvider();
