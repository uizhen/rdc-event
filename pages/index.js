import Layout from "../components/index/layout";
import HeroBar from "../components/index/herobar";
import Sponsor from "../components/index/sponsor";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroBar />
        <Sponsor />
      </Layout>
    </>
  );
}
