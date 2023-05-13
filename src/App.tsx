import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider } from "react-query";

import { AppRoutes } from "@/routes";
import { theme } from "@/styles";
import { queryClient } from "@/utils";
import DeleteAlert from "@/components/delete-alert";
import Notification from "@/components/notification";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <DeleteAlert />
        <Notification />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
