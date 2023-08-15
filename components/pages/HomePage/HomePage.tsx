
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Socials from "./Socials";
import MoreLink from "./MoreLink";
import User from "./User";
import CertificationList from "./CertificationList";
import EmailButton from "./EmailButton";
import SkillList from "./SkillList";
import ExperienceTimeline from "./ExperienceTimeline";
import WorkList from "./WorkList";
import Section from "../util/Section";
import { config } from "../../../config";
import { Box, Divider, Stack, Tabs, Title } from "@mantine/core";

const HomePage: NextPage = () => {
  const router = useRouter();

  const activeTab = useMemo(() => {
    const tab = router.query.tab;
    switch (tab) {
      case "about":
      case "works":
        return tab;
      default:
        return "about";
    }
  }, [router.query.tab]);

  const handleChangeTab = useCallback(
    (tab: string) => {
      router.replace({ query: { tab } }, undefined, { scroll: false });
    },
    [router]
  );

  return (
    <Box>
      <Stack spacing="lg" mb="md">
        <User user={config.user} />
        <Socials socials={config.socials} />
      </Stack>
      <Tabs value={activeTab} onTabChange={handleChangeTab}>
        <Tabs.List
          position="center"
          sx={(theme) => ({ marginBottom: theme.spacing.sm })}
        >
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="works">Works</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="about">
          <Section title="Skill">
            <Stack>
              {config.skillGroups.map((skillGroup) => (
                <Box key={skillGroup.name}>
                  <Title order={3} mb="sm" sx={{ textAlign: "center" }}>
                    {skillGroup.name}
                  </Title>
                  <SkillList skills={skillGroup.skills} />
                </Box>
              ))}
            </Stack>
          </Section>

          <Divider />

          <Section title="Certification">
            <CertificationList certifications={config.certifications} />
          </Section>

          <Divider />

          <Section title="Experience" sx={{ display: "flex", justifyContent: "center" }}>
            <ExperienceTimeline experiences={config.experiences} />
          </Section>

        </Tabs.Panel>

        <Tabs.Panel value="works">
          <Section title="Works">
            <Stack>
              {config.workGroups.map((workGroup) => (
                <Box key={workGroup.name}>
                  <Title
                    order={3}
                    sx={(theme) => ({
                      textAlign: "center",
                      marginBottom: theme.spacing.sm,
                    })}
                  >
                    {workGroup.name}
                  </Title>
                  <WorkList works={workGroup.works} />
                </Box>
              ))}

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MoreLink
                  href={`${config.socials.github.url}?tab=repositories&type=source`}
                />
              </Box>
            </Stack>
          </Section>
        </Tabs.Panel>
      </Tabs>
      <Divider />
      <Section title="Contact">
        <Stack>
          <Socials socials={config.socials} />
          <EmailButton email={config.user.email} />
        </Stack>
      </Section>
    </Box>
  );
};

export default HomePage;
