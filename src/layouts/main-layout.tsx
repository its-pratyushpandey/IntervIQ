import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </div>
  );
};
