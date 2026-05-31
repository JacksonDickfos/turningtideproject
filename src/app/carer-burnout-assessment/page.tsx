import CarerBurnoutQuiz from "@/components/carer_burnout_quiz";
import { site } from "@/content/site";

export const metadata = {
  title: `Carer Burnout Assessment | ${site.name}`,
  description:
    "A short assessment to reflect on carer stress and burnout — from The Turning Tides Project.",
};

export default function CarerBurnoutAssessmentPage() {
  return (
    <section className="section carerBurnoutSection">
      <CarerBurnoutQuiz />
    </section>
  );
}
