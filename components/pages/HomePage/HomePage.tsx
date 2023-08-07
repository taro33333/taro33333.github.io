
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Socials from "./Socials";
import MoreLink from "./MoreLink";
import User from "./User";
import EmailButton from "./EmailButton";
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
      case "notes":
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MoreLink href={config.socials.zenn.url} />
      </Box>
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
