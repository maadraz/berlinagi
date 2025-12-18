import { FadeIn } from '@/components/ui/FadeIn';
import { Hero } from '@/components/sections/Hero';
import { ProblemStatement } from '@/components/sections/ProblemStatement';
import { Approach } from '@/components/sections/Approach';
import { WhyEurope } from '@/components/sections/WhyEurope';
import { Team } from '@/components/sections/Team';
import { Thinking } from '@/components/sections/Thinking';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
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
