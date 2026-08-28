import { Header } from "@/components/sites/alpaca-tech/shared/Header";
import { Footer } from "@/components/sites/alpaca-tech/shared/Footer";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-at-primary min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
