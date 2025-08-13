import React from "react";
import './App.css'
import { Button } from "@/components/ui/button"

// function App() {

//   return (
//     <>
//     <h1 className="container text-3xl font-bold text-center">
//     Hello world!
//   </h1>
//   <Button variant="default">Button</Button>
//   </>
//   )
// }

// export default App










// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import AuthPage from "./pages/AuthPage";
// import FamilyTreeApp from "./pages/FamilyTreeApp";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/auth" element={<AuthPage />} />
//           <Route path="/family-tree" element={<FamilyTreeApp />} />
//           <Route path="/demo" element={<FamilyTreeApp />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;






import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">Hello, Lineage Canvas!</h1>
        <button
          onClick={() => setDark(!dark)}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;
