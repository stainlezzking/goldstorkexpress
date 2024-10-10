import Section from "./section.component";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SubTitle from "./title.component";

export default function FAQ({ faq }) {
  return (
    <Section>
      <div className={"mx-auto max-w-[800px]"}>
        <SubTitle color="bg-[#E8E8E8]/50 text-secondary">FAQ</SubTitle>
        <h1 className="text-4xl font-bold text-secondary mt-2">Frequently Asked Questions</h1>
        <div className="mt-5">
          <Accordion type="single" collapsible className="text-lg">
            {faq.map((faq, i) => (
              <AccordionItem value={"item-" + i} key={i}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
