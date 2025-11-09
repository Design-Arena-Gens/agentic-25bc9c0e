import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CircuitBoard,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
};

type Showcase = {
  title: string;
  description: string;
  metrics: string[];
  tag: string;
};

const services: Service[] = [
  {
    title: "AI Automation Systems",
    description:
      "Streamline operations with intelligent workflows, RPA integrations, and custom AI assistants built for your unique processes.",
    icon: <Workflow className="h-7 w-7 text-nexia-accent" />,
    highlights: [
      "Automated workflows & process orchestration",
      "CRM, ERP, and productivity tool integrations",
      "Proactive monitoring and continual optimization"
    ]
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Deploy predictive models that deliver insight, personalization, and decision-support tuned to your data.",
    icon: <BrainCircuit className="h-7 w-7 text-nexia-accent" />,
    highlights: [
      "Model discovery, training, and evaluation",
      "Data infrastructure, pipelines, and MLOps",
      "Responsible AI monitoring and governance"
    ]
  },
  {
    title: "AI Callers & Messaging",
    description:
      "Voice and chat agents that convert, qualify leads, and support customers with natural, human-like conversations.",
    icon: <PhoneCall className="h-7 w-7 text-nexia-accent" />,
    highlights: [
      "Multilingual inbound and outbound AI callers",
      "24/7 smart chat, SMS, and omni-channel messaging",
      "Live agent handoff with full context transfer"
    ]
  },
  {
    title: "High-Converting Websites",
    description:
      "Design-led websites tailored to your brand with conversion-focused funnels, analytics, and maintenance.",
    icon: <LayoutDashboard className="h-7 w-7 text-nexia-accent" />,
    highlights: [
      "UX research, brand systems, and responsive UI",
      "SEO, analytics, and performance optimization",
      "Ongoing iterations backed by real-time insights"
    ]
  },
  {
    title: "AI-Driven Dashboards",
    description:
      "Unified performance dashboards that surface actionable insights in real time, built around your KPIs.",
    icon: <CircuitBoard className="h-7 w-7 text-nexia-accent" />,
    highlights: [
      "Data blending from internal and external sources",
      "Predictive insights with self-serve intelligence",
      "Custom alerts, reporting, and executive summaries"
    ]
  },
  {
    title: "Full-Funnel Growth",
    description:
      "From social media to paid performance, reimagine growth with creative automation and market intelligence.",
    icon: <Megaphone className="h-7 w-7 text-nexia-accent" />,
    highlights: [
      "Social media and community management",
      "Paid campaigns powered by adaptive AI testing",
      "Content automation with human creative oversight"
    ]
  }
];

const showcases: Showcase[] = [
  {
    title: "Automated Client Onboarding",
    description:
      "Custom AI workflows replaced manual data entry, cutting onboarding time from days to minutes.",
    metrics: ["-87% onboarding time", "+3x customer satisfaction", "10k+ tasks automated"],
    tag: "Professional Services"
  },
  {
    title: "Predictive Demand Signals",
    description:
      "Machine learning forecasts aligned production with realtime market shifts for a global retailer.",
    metrics: ["+22% sales accuracy", "-30% stockouts", "+18% working capital"],
    tag: "Retail & eCommerce"
  },
  {
    title: "AI-Powered Growth Engine",
    description:
      "Multichannel campaign intelligence and AI content doubled conversions for a D2C challenger brand.",
    metrics: ["+2.4x ROAS", "+60% lead velocity", "Always-on AI content lab"],
    tag: "Growth Marketing"
  }
];

const faqs = [
  {
    question: "How does Nexia approach new projects?",
    answer:
      "We run rapid discovery to map your systems, data, and goals, then deliver a custom roadmap covering AI, digital experience, and growth priorities. Execution happens in agile sprints with transparent metrics."
  },
  {
    question: "Can you integrate with our existing stack?",
    answer:
      "Absolutely. We work with CRMs, ERPs, collaboration tools, data warehouses, and contact center platforms. Our engineers architect secure integrations that respect your compliance requirements."
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Every engagement includes optimization cycles, performance reviews, and optional 24/7 managed services. We can embed with your team or run the program end-to-end."
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We support B2B and B2C teams across SaaS, professional services, healthcare, finance, retail, manufacturing, and more. Each solution is tailored to the realities of your market."
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-nexia-secondary via-slate-950 to-black" />
      <div className="absolute inset-0 bg-grid-light [background-size:32px_32px] opacity-30" />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10">
          <div className="flex items-center gap-3">
            <div className="gradient-border rounded-lg p-[1px]">
              <div className="rounded-lg bg-slate-950/80 p-2">
                <Sparkles className="h-5 w-5 text-nexia-accent" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Nexia Agency
              </p>
              <p className="text-lg font-semibold text-white">Intelligence. Engineered.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#process" className="transition hover:text-white">
              Process
            </Link>
            <Link href="#work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="#faq" className="transition hover:text-white">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
            >
              Start a project
            </Link>
          </nav>
        </header>

        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-nexia-accent" />
              Enterprise-grade AI strategy & delivery
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nexia builds intelligent experiences that transform how businesses operate, grow, and engage.
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              From automation blueprints and bespoke machine learning to conversion-boosting digital products,
              we orchestrate AI, design, and growth into one cohesive delivery partner.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-nexia-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-nexia-primary/40 transition hover:bg-nexia-primary/80"
              >
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-base font-medium text-slate-200 transition hover:text-white"
              >
                Explore capabilities
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Average ROI unlocked", value: "5.2x" },
                { label: "Markets we operate in", value: "32+" },
                { label: "Experiments shipped each quarter", value: "120+" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/5 px-6 py-5 backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-8 py-10 text-slate-200 shadow-2xl backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nexia-primary via-nexia-accent to-purple-400" />
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-nexia-accent" />
              <p className="text-sm font-semibold text-white">AI Transformation Blueprint</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A personalized roadmap mapping quick-win automations, high-impact ML opportunities, and digital improvements. Delivered within 14 days with implementation options.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nexia-primary/20 text-xs font-semibold text-nexia-accent">
                  01
                </span>
                Discovery deep-dive & systems audit
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nexia-primary/20 text-xs font-semibold text-nexia-accent">
                  02
                </span>
                AI opportunity map & data readiness
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nexia-primary/20 text-xs font-semibold text-nexia-accent">
                  03
                </span>
                Prioritized rollout plan & ROI forecast
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-950/60 p-4 text-sm text-slate-300 ring-1 ring-white/10">
              <p className="font-medium text-white">Next intake opens in 7 days.</p>
              <p className="mt-1 text-xs text-slate-400">Secure your slot now to fast-track delivery.</p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nexia-accent">
                Services
              </p>
              <h2 className="section-heading">
                Full-stack intelligence for every stage of your growth journey.
              </h2>
              <p className="section-subtitle">
                We architect bespoke AI automations, machine learning products, websites, and
                marketing engines that align to your KPIs and scale with your teams.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-nexia-accent" />
                  Compliance-aligned, robust security foundations
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-nexia-accent" />
                  Modular delivery with measurable outcomes every sprint
                </div>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5 text-nexia-accent" />
                  Embedded strategy, engineering, and growth squads
                </div>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="gradient-border flex flex-col rounded-3xl border border-white/5 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-nexia-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nexia-accent">
                Process
              </p>
              <h2 className="section-heading">
                A to Z partnership—from discovery to ongoing optimization.
              </h2>
              <p className="section-subtitle">
                We blend strategic guidance with hands-on delivery. Nexia&apos;s teams embed in your
                workflow, manage change, and orchestrate every launch with precision.
              </p>
              <div className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Discovery & Opportunity Mapping",
                    copy:
                      "We analyze your ops, data, and market to surface the highest-impact automation, ML, and digital plays."
                  },
                  {
                    step: "02",
                    title: "Design & Build Sprints",
                    copy:
                      "Collaborative sprints deliver prototypes, AI workflows, and experience design with stakeholders looped in."
                  },
                  {
                    step: "03",
                    title: "Launch & Change Enablement",
                    copy:
                      "We deploy, integrate, and train your teams while monitoring adoption and performance in real time."
                  },
                  {
                    step: "04",
                    title: "Scale & Continuous Evolution",
                    copy:
                      "Ongoing insights, experiments, and governance ensure your AI and digital systems keep exceeding targets."
                  }
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                      {item.step}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <ArrowRight className="h-5 w-5 text-nexia-accent" />
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-nexia-primary/10 blur-3xl" />
                <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-nexia-accent/10 blur-3xl" />
                <div className="relative z-10 space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-nexia-accent">
                      Operating System
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Nexia Command Center
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">
                      Access real-time delivery dashboards, experiment backlogs, documentation,
                      and governance artifacts through a secure, branded portal.
                    </p>
                  </div>
                  <ul className="space-y-4 text-sm text-slate-300">
                    {[
                      "AI experiment lab with scored backlog",
                      "Unified KPI tracking and ROI reporting",
                      "Change management playbooks and artifacts",
                      "Stakeholder collaboration and approvals"
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <Sparkles className="mt-0.5 h-4 w-4 text-nexia-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-2xl bg-slate-950/80 p-6 text-sm text-slate-200 ring-1 ring-white/5">
                    <p className="font-medium text-white">“Nexia integrated with our systems faster than any partner we&apos;ve engaged. Within four weeks, we had AI automation live delivering measurable ROI.”</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                      COO, Global Logistics Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-nexia-accent">
                Impact
              </p>
              <h2 className="section-heading">
                Custom-built programs delivering compounding results.
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Request full case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {showcases.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-nexia-accent">{project.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-200">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-nexia-accent" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-nexia-accent">Differentiators</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Why leaders partner with Nexia.
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Embedded squads",
                    copy:
                      "Strategy, design, engineering, and growth talent integrated with your stakeholders."
                  },
                  {
                    title: "Responsible AI, by design",
                    copy:
                      "Ethical guardrails, audit trails, and bias checks included in every machine learning engagement."
                  },
                  {
                    title: "Outcome-obsessed",
                    copy:
                      "Quarterly OKRs and KPIs aligned to your goals so progress is transparent and measurable."
                  },
                  {
                    title: "Global expertise",
                    copy:
                      "Experience across startup, scaleup, and enterprise programs in 32+ markets."
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-950/60 p-6 ring-1 ring-white/10">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-nexia-accent">
                Testimonials
              </p>
              <div className="mt-6 space-y-8">
                {[
                  {
                    quote:
                      "Nexia is the first partner that understood our complexity and shipped production-ready automations inside six weeks. The cost savings paid for the engagement twice over.",
                    author: "Head of Operations, Fintech Scaleup"
                  },
                  {
                    quote:
                      "Their AI callers advanced more qualified leads in a month than our team managed in a quarter. It feels like we expanded our sales force overnight.",
                    author: "VP Revenue, B2B SaaS"
                  }
                ].map((testimonial) => (
                  <div key={testimonial.author} className="rounded-2xl bg-slate-950/70 p-6 ring-1 ring-white/10">
                    <MessageCircle className="h-6 w-6 text-nexia-accent" />
                    <p className="mt-4 text-sm text-slate-200">{testimonial.quote}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                      {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-nexia-accent">FAQ</p>
                <h2 className="section-heading">
                  Everything you need to know about working with Nexia.
                </h2>
                <p className="section-subtitle">
                  We tailor every program to the outcomes you care about most, whether that&apos;s
                  automations, ML, digital experiences, or go-to-market acceleration.
                </p>
              </div>
              <div className="flex-1 space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-slate-950/60 p-6 ring-1 ring-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <BrainCircuit className="h-5 w-5 text-nexia-accent" />
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-nexia-secondary via-slate-950 to-black p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(95,91,255,0.2),transparent)]" />
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-nexia-accent">
                  Partner with Nexia
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Let&apos;s architect the future of your operations—together.
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  Tell us about your goals and we&apos;ll assemble a custom roadmap that aligns the
                  right AI automations, ML models, experience design, and growth plays.
                </p>
                <div className="mt-8 grid gap-6 text-sm text-slate-200 md:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                    <p className="font-semibold text-white">Strategic Partners</p>
                    <p className="mt-2 text-sm text-slate-300">
                      OpenAI · Anthropic · HubSpot · Salesforce · Segment · Shopify · Snowflake
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                    <p className="font-semibold text-white">Delivery Models</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Project-based, embedded squads, venture acceleration, GTM retainers
                    </p>
                  </div>
                </div>
              </div>
              <form className="space-y-5 rounded-3xl bg-slate-950/80 p-8 ring-1 ring-white/10">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Morgan"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-nexia-accent focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@nexia.ai"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-nexia-accent focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-slate-200">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-nexia-accent focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="focus" className="text-sm font-medium text-slate-200">
                    Primary focus
                  </label>
                  <select
                    id="focus"
                    name="focus"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-nexia-accent focus:outline-none"
                  >
                    <option value="automation">AI Automations</option>
                    <option value="ml">Machine Learning</option>
                    <option value="web">Web & Experience</option>
                    <option value="growth">Growth & Marketing</option>
                    <option value="full">Full transformation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">
                    Project vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Share your goals, timelines, and the outcomes you want to unlock."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-nexia-accent focus:outline-none"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-nexia-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-nexia-primary/80"
                >
                  Submit inquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to our privacy practices. We respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-nexia-accent">Nexia</p>
              <p className="mt-2 text-sm text-slate-400">
                AI Automations · Machine Learning · Web Experiences · Growth & Operations
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <Link href="mailto:hello@nexia.agency" className="transition hover:text-white">
                hello@nexia.agency
              </Link>
              <Link href="https://cal.com/nexia/consult" className="transition hover:text-white">
                Book a consult
              </Link>
              <Link href="https://www.linkedin.com" className="transition hover:text-white">
                LinkedIn
              </Link>
              <Link href="https://x.com" className="transition hover:text-white">
                X (Twitter)
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Nexia Agency. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
