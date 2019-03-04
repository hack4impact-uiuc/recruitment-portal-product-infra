import Link from "next/link";
import Header from "../components/header";
import PeachContainer from "../containers/peachContainer"

export default () => (
  <main>
    <Header />
    <PeachContainer />
    <section>
      <Link href="/examples">
        <a>API examples page</a>
      </Link>
    </section>
  </main>
);
