
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Socials from "./Socials";
import { config } from "../../../config";

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
    <div><Socials socials={config.socials} /></div>
  );
};

export default HomePage;
