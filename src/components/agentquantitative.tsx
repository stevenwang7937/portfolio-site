"use client";

import "@/styles/agent_quantitative.css";
import { SectionHeader } from "@/components/globalcomponents";

export default function AgentQuantitative() {
  return (
    <section className="agent__quantitative">
      <div className="content-container">
        <div className="agent__quantitative-header">
          <SectionHeader
            topText="Move 2"
            bottomText="Quantitative View"
            description="First we focus on how our scoped product are doing on a number basis."
          />
        </div>
        <div className="agent__quantitative-table-wrapper">
          <table className="agent__quantitative-table">
            <thead>
              <tr>
                <th className="text-description"></th>
                <th className="text-description">Twitter</th>
                <th className="text-description">Youtube</th>
                <th className="text-description">LinkedIn</th>
                <th className="text-description">Instagram</th>
                <th className="text-description">Facebook</th>
                <th className="text-description">Invest (in USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-description">Relevance AI</td>
                <td className="text-description">3424 followers, around 3k views per post recently.</td>
                <td className="text-description">9.15k subs.</td>
                <td className="text-description">29K followers, 11-50 employees.</td>
                <td className="text-description">N/A</td>
                <td className="text-description">93 followers.</td>
                <td className="text-description">24M in series B, Total: 37M.</td>
              </tr>
              <tr>
                <td className="text-description">Sintra AI</td>
                <td className="text-description">413 followers, around 300 views per post.</td>
                <td className="text-description">N/A</td>
                <td className="text-description">8K followers, 11-50 employees.</td>
                <td className="text-description">153K followers.</td>
                <td className="text-description">172K followers.</td>
                <td className="text-description">17M Seed.</td>
              </tr>
              <tr>
                <td className="text-description">Motion AI</td>
                <td className="text-description">3774 followers, around 400 views per post.</td>
                <td className="text-description">3.71k subs.</td>
                <td className="text-description">N/A</td>
                <td className="text-description">310K followers.</td>
                <td className="text-description">46K followers.</td>
                <td className="text-description">13M in 2022.</td>
              </tr>
              <tr>
                <td className="text-description">Marblism AI</td>
                <td className="text-description">1471 followers, not a lot of posts.</td>
                <td className="text-description">99 subs.</td>
                <td className="text-description">2K followers, 2-10 employees.</td>
                <td className="text-description">1692 followers.</td>
                <td className="text-description">517 followers.</td>
                <td className="text-description">Preseed: 500K in 2024.</td>
              </tr>
              <tr>
                <td className="text-description">UiPath</td>
                <td className="text-description">105.2k followers, 1k views per post.</td>
                <td className="text-description">66.2k subs.</td>
                <td className="text-description">469K followers, 1k-5k employees.</td>
                <td className="text-description">18.6k followers.</td>
                <td className="text-description">50k followers.</td>
                <td className="text-description">On NYSE now.</td>
              </tr>
              <tr>
                <td className="text-description">Relay.app</td>
                <td className="text-description">1170 followers, around 300 views per post.</td>
                <td className="text-description">8.42k subs.</td>
                <td className="text-description">6K followers, 2-10 employees.</td>
                <td className="text-description">84 followers.</td>
                <td className="text-description">N/A</td>
                <td className="text-description">3.1M Seed in 2023, Total: 8.1M.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-body agent__quantitative-description">
          This would help us understand which tools are more similar to us and how we can relate to them. This could also make us know who is big in the market, our difference could lead to niche discovery.
        </p>
      </div>
    </section>
  );
}

