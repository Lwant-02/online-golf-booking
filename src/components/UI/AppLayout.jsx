import React, { useEffect } from "react";
import {
  matchPath,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { Navbar } from "./Navbar";
import { BookingPage } from "../../pages/BookingPage";
import { BookingDetailPage } from "../../pages/BookingDetailPage";
import { SignUpPage } from "../../pages/SignUpPage";
import { FallbackPage } from "../../pages/FallbackPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { SingInPage } from "../../pages/SingInPage";
import { AboutPage } from "../../pages/AboutPage";
import { AccountPage } from "../../pages/AccountPage";
import { ReservationPage } from "../../pages/ReservationPage";
import { SearchPage } from "../../pages/SearchPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";
import { Spinner } from "./Spinner";

export const AppLayout = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-primary-color flex justify-center items-center">
        <Spinner size="size-10" />
      </div>
    );
  }

  // Define paths where the Navbar should NOT appear
  const hideNavbarRoutes = ["/signup", "/signin"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <div className="min-h-screen bg-primary-color" data-theme="emerald">
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-detail" element={<BookingDetailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SingInPage />} />
        <Route
          path="/booking/check-out"
          element={authUser ? <PaymentPage /> : <Navigate to="/" />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/profile/:name"
          element={authUser ? <AccountPage /> : <Navigate to="/" />}
        />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
      <Toaster toastOptions={{ style: { fontSize: "15px" } }} />
    </div>
  );
};
