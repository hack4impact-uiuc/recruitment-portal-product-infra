import Link from "next/link";
import Header from "../components/header";
import Peach from "../components/Peach"

export default () => (
  <main>
    <Header />
    <Peach />
    <section>
      <Link href="/examples">
        <a>API examples page</a>
      </Link>
    </section>
  </main>
);
