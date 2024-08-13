import { ElementType, FC } from "react";
import { Link } from "react-router-dom";

import SectionTitle from "@app/components/SectionTitle/SectionTitle";

import { ListSkills, WrapSkills } from "./Skills.styles";
import { SKILLS } from "@app/features/dashboard/constants/dashboard.constants";

const Skills: FC = () => {
  return (
    <WrapSkills>
      <SectionTitle title="Skills" />

      <ListSkills>
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon as ElementType;
          return (
            <Link to={skill.path} className="skill" key={`skill-${index}`}>
              <div className="icon-skill">
                <Icon />
              </div>
              {skill.title}
            </Link>
          );
        })}
      </ListSkills>
    </WrapSkills>
  );
};

export default Skills;
