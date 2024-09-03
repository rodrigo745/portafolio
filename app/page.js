// Componentes
import Dash from "@/components/dash/Dash";
import Container from "@/components/container/Container";

export default function Home() {
  return (
    <main className="flex items-center md:items-stretch md:min-h-screen flex-col md:flex-row pt-12 justify-between px-7 md:px-[10%]">
      <Dash/>
      <Container/>
    </main>
  );
}
