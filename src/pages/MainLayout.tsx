import { BsWhatsapp } from "react-icons/bs";
import { Footer, Header } from "../components/common";
import { Outlet, useNavigation } from "react-router-dom";

function MainLayout() {
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "loading" || navigation.state === "submitting";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-50">
            <div className="w-12 h-12 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
      <a
        href={`https://wa.me/201019631989?text=${encodeURIComponent(
          `Hello, I would like to inquire about your trips.`,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <BsWhatsapp className="w-11 h-11" />
      </a>
    </div>
  );
}

export default MainLayout;
