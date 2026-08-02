import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="pt-16">
      <SectionTitle>
        <h2 className="text-[28px] md:text-[50px] font-bold tracking-tight text-ink dark:text-snow leading-[1.07]">
          Experiencia.
        </h2>
      </SectionTitle>

      <VerticalTimeline lineColor="var(--color-silver-mist)" animate>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="apple-timeline"
            contentStyle={{
              background: "var(--color-card)",
              color: "var(--color-text-main)",
              borderRadius: "28px",
              boxShadow: "none",
              padding: "32px 28px",
            }}
            contentArrowStyle={{ borderRight: "7px solid var(--color-card)" }}
            date={exp.date}
            iconStyle={{
              background: "var(--color-card)",
              width: "44px",
              height: "44px",
              boxShadow: "none",
              marginLeft: "-22px",
            }}
            icon={<img src={exp.icon} alt={exp.company_name} className="w-full h-full object-contain rounded-full p-1.5" />}
          >
            <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight text-ink dark:text-snow leading-tight mb-1">
              {exp.title}
            </h3>
            <p className="text-[14px] font-medium text-graphite dark:text-[#a1a1a6] mb-6">
              {exp.company_name}
            </p>

            <ul className="space-y-4">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="text-[15px] md:text-[17px] font-normal tracking-tight text-ink dark:text-snow leading-relaxed pl-6 relative"
                >
                  <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-[rgb(65,89,118)]"></span>
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
