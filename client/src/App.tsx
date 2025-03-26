import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "./contexts/AuthContext";
import { LearningProvider } from "./contexts/LearningContext";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AchievementNotification from "./components/elements/AchievementNotification";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareerPathsPage from "./pages/CareerPathsPage";
import ResourcesPage from "./pages/ResourcesPage";
import PublicationsPage from "./pages/PublicationsPage";
import LearningPage from "./pages/LearningPage";
import NotFound from "./pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <LearningProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-20 pb-12">
                <Switch>
                  <Route path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/careers" component={CareerPathsPage} />
                  <Route path="/resources" component={ResourcesPage} />
                  <Route path="/publications" component={PublicationsPage} />
                  <Route path="/learning" component={LearningPage} />
                  <Route path="/learning/:moduleId" component={LearningPage} />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <Footer />
              <AchievementNotification />
            </div>
          </LearningProvider>
        </AuthProvider>
      </ThemeProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
