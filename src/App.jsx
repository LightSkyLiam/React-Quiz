import { GlobalStyles } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./General Components/AppLayout";
import StartingPage from "./Starting Page/StartingPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      html: { height: "100%", fontSize: "62.5%" },
      body: { margin: 0, minHeight: "100vh" },
    }}
  />
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {globalStyles}
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="start-quiz" />} />
            <Route path="start-quiz" element={<StartingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
