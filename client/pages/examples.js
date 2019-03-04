import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

import { helloWorld } from "../utils/api";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  async apiFetchExample() {
    const result = await helloWorld();
    const parsed = await result.json();
    console.log(parsed);
  }

  componentDidMount() {
    this.apiFetchExample();
  }

  handleClick = async e => {
    console.log("clicked");
    this.apiFetchExample();
  };

  render() {
    return (
      <main>
        <Header />
        <section>
          <button onClick={this.handleClick}>Activate Lasers</button>
          <p>
            This is another page of the SSR example, you accessed it{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>You can reload to see how the page change.</p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;
