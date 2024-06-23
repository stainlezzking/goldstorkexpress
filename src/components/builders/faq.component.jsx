import Section from "./section.component";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SubTitle from "./title.component";

export default function FAQ() {
  return (
    <Section>
      <div className={"mx-auto max-w-[800px]"}>
        <SubTitle color="bg-[#E8E8E8]/50 text-secondary">FAQ</SubTitle>
        <h1 className="text-4xl font-bold text-secondary mt-2">Frequently Asked Questions</h1>
        <div className="mt-5">
          <Accordion type="single" collapsible className="text-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-lg">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-lg">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-lg">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
