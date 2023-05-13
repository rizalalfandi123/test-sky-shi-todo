import type { PropsWithChildren } from "react";

import { Suspense } from "react";
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Suspense
      // fallback={
      //   <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      //     <CircularProgress color="inherit" />
      //   </Backdrop>
      // }
    >
      {children}
    </Suspense>
  );
};
