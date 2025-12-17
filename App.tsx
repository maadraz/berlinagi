import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { ProblemStatement } from './components/sections/ProblemStatement';
import { Approach } from './components/sections/Approach';
import { WhyEurope } from './components/sections/WhyEurope';
import { Team } from './components/sections/Team';
import { Thinking } from './components/sections/Thinking';
import { Contact } from './components/sections/Contact';
import { FadeIn } from './components/ui/FadeIn';
import { Article } from './components/pages/Article';
import { ThinkingIndex } from './components/pages/ThinkingIndex';

function LandingPage() {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>
      
      <FadeIn delay={100}>
        <ProblemStatement />
      </FadeIn>
      
      <FadeIn>
        <Approach />
      </FadeIn>
      
      <FadeIn delay={100}>
        <WhyEurope />
      </FadeIn>
      
      <FadeIn>
        <Team />
      </FadeIn>
      
      <FadeIn>
        <Thinking />
      </FadeIn>
      
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thinking" element={<ThinkingIndex />} />
          <Route path="/thinking/:slug" element={<Article />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;