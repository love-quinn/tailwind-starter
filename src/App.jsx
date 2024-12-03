import Header from "./components/header";
import Card from "./components/card";

function App() {
  return (
    <div className="w-full px-10">
      <Header/>

      <div className="w-full lg:px-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-center gap-4">
      <Card 
        title="Nike Aerial"
        description="Your all in one shoes"
        imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Card 
        title="Nike Aerial"
        description="Your all in one shoes"
        imageUrl="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
