// TODO: Component for declare all app routes

import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import PageWrapper from "@/components/page-wrapper";
import Appbar from "@/components/appbar";

const HomePage = lazy(() => import("../pages/home"));
const DetailActivityGroup = lazy(() => import("../pages/detail-activity-group"));
const CreateActivity = lazy(() => import("../pages/create-activity"));
const EditActivity = lazy(() => import("../pages/edit-activity"));

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location.state?.backgroundLocation || location}>
        <Route path="/" element={<Appbar />}>
          <Route
            index
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />

          <Route
            path="/detail/:id"
            element={
              <PageWrapper>
                <DetailActivityGroup />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>

      {location.state?.backgroundLocation && (
        <Routes>
          <Route
            path="/create-activity/:id"
            element={
              <PageWrapper>
                <CreateActivity />
              </PageWrapper>
            }
          />

          <Route
            path="/edit-activity/:idGroup/:idActivity"
            element={
              <PageWrapper>
                <EditActivity />
              </PageWrapper>
            }
          />
        </Routes>
      )}
    </>
  );
};
