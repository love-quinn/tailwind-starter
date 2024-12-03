import Header from "./components/header";
import Card from "./components/card";
import { StretchHorizontal } from "lucide-react";

function App() {
  return (
    <div className="w-full px-10">
      <Header />

      <div className="mt-16 w-full text-white lg:px-48">
        <span className="flex gap-2 items-center w-fit rounded-lg border-[1px] border-neutral-800 p-2">
          <StretchHorizontal size={18}/>
          Todos os itens
        </span>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:justify-center lg:px-48">
        <Card
          title="Nike Aerial"
          description="Your all in one shoes"
          imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Card
          title="NB"
          description="Your all in one shoes"
          imageUrl="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Card
          title="Nike Aerial"
          description="Your all in one shoes"
          imageUrl="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default App;
