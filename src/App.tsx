import "./App.css";

interface ProjectLink {
  name: string;
  description: string;
  url?: string;
}

interface SectionData {
  title: string;
  items: ProjectLink[];
}

const portfolioData: SectionData[] = [
  {
    title: "Focus",
    items: [
      {
        name: "Artificial Intelligence / Machine Learning",
        description:
          "Focused on AIML. Building real projects, not just theory.",
      },
      {
        name: "Game Development",
        description: "Developing gameplay systems in Unity. Mechanics first.",
      },
      {
        name: "2D / 3D Art",
        description: "Used for prototyping, game assets, and visual clarity.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        name: "Offline AI Companion",
        description:
          "Local AI app. Privacy-first. Runs without cloud dependency.",
        url: "#",
      },
      {
        name: "Unity Gameplay & Cinematic Prototypes",
        description:
          "Short playable systems focused on control, timing, and feel.",
        url: "#",
      },
      {
        name: "Kanji Learning System",
        description:
          "Structured JLPT N5–N1 learning app with progression logic.",
        url: "#",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        name: "Applied Machine Learning",
        description: "Core ML concepts implemented through practical projects.",
      },
      {
        name: "Unity Essentials",
        description: "Physics, input systems, and gameplay architecture.",
      },
      {
        name: "Computer Science Foundations",
        description: "Data structures, algorithms, and system-level thinking.",
      },
    ],
  },
];
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 pt-48 pb-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl heading-font text-primary mb-5">
            Rupen Parthu
          </h1>
          <div className="text-secondary body-font text-base leading-relaxed space-y-3 text-justify">
            <p>
              <em className="text-accent">Building in AI / ML.</em> Designing
              interactive systems and games to test ideas in practice.
              Working in 2D and 3D when needed. Visuals are tools for movement,
              clarity, and control.
              Computer Science student focused on AI/ML and interactive
              software. Strong on fundamentals. I build systems that behave
              correctly and feel deliberate.
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 ">
          {portfolioData.map((section, sectionIndex) => (
            <section key={section.title}>
              <h2 className="text-tertiary heading-font text-sm font-medium mb-6 tracking-wide">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.url ? (
                      <a
                        href={item.url}
                        className="text-accent text-accent-hover body-font-medium text-base focus-ring"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="text-accent body-font-medium text-base">
                        {item.name}
                      </span>
                    )}
                    <p className="text-secondary body-font mt-1 text-xs leading-relaxed ">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Languages Section */}
        {/* Tech Stack Section */}
        <section className="mt-10 pt-10">
          <h2 className="text-tertiary heading-font text-lg font-medium mb-6 tracking-wide text-center">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-7 max-w-3xl mx-auto ">
            {[
              { name: "Python" },
              { name: "C++" },
              { name: "C#" },
              { name: "PyTorch" },
              { name: "FastAPI" },
              { name: "Docker" },
              { name: "Linux" },
              { name: "Unity" },
              { name: "Blender" },
              { name: "Git" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <span className="text-accent body-font text-s tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Now Section */}
        <section className="mt-15 pt-12">
          <h2 className="text-tertiary heading-font text-sm font-medium mb-6 tracking-wide">
            Now
          </h2>

          <div className="max-w-3xl text-secondary body-font text-base leading-relaxed text-justify">
            <p>
              <em className="text-accent">
                Focused on AI / ML through real projects.
              </em>{" "}
              Building depth for advanced study and research.
              Game development stays as a technical playground — mechanics,
              experimentation, iteration.
              Art is a tool. Used for prototyping, clarity, and refining ideas.
            </p>
          </div>
        </section>

        {/* Connect Section */}
        <section className="mt-12">
          <h2 className="text-tertiary heading-font text-sm font-medium mb-6 tracking-wide">
            Connect
          </h2>

          <p className="text-secondary body-font text-base">
            Reach me at{" "}
            <a
              href="https://www.linkedin.com/in/rupenparthu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-accent-hover focus-ring"
            >
              @rupenpar
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-6 flex justify-between items-center text-tertiary">
          <span className="body-font text-s">ルペン</span>
          <div className="flex items-center space-x-2">
            <span className="body-font text-xs">2026</span>
            <div className="w-4 h-4 text-tertiary">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
