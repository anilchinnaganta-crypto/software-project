import { QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { getRouter } from "./router";

const queryClient = new QueryClient();
const router = getRouter(queryClient);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Missing #root element.");
}

createRoot(rootElement).render(<RouterProvider router={router} />);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
