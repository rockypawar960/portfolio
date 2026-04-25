import { useState } from "react";
import javaCert from "../components/certs/java fundamental.png";
import springCert from "../components/certs/Springboot.png";
import hacksagonCert from "../components/certs/hecksagon.png" ;
import awsCert from "../components/certs/aws.png";
import {
  Menu,
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Play,
  Database,
  Server,
  Wrench,
  Award,
  Trophy,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink,
  Send,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useReveal, useCountUp } from "@/hooks/use-reveal";

import heroPhoto from "@/assets/rocky-hero.png";
import chanakyaShot from "@/assets/chanakya-screenshot.png";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav onWatchDemo={() => setDemoOpen(true)} />
      <Hero onWatchDemo={() => setDemoOpen(true)} />
      <About />
      <Stats />
      <Skills />
      <FeaturedProject onWatchDemo={() => setDemoOpen(true)} />
      <OtherProjects />
      <Experience />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="max-w-4xl border-border bg-popover p-0 sm:p-0">
          <DialogTitle className="sr-only">Chanakya: The Mentor — Demo</DialogTitle>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            {demoOpen && (
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/nLtgsIYQGts?autoplay=1"
                title="Chanakya: The Mentor — Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav({ onWatchDemo }: { onWatchDemo: () => void }) {
  void onWatchDemo;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary transition group-hover:glow-sm">
            RP
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            rocky.pawar
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-primary-foreground shadow-[0_0_20px_-4px] shadow-primary/60 hover:bg-primary-glow"
          >
            <a href="/rocky-pawar-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-border bg-popover">
            <div className="mt-8 flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary-glow"
              >
                <a href="/rocky-pawar-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero({ onWatchDemo }: { onWatchDemo: () => void }) {
  void onWatchDemo;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate flex min-h-screen items-center pt-24"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left */}
        <div className="reveal lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px] shadow-primary" />
            Available for opportunities
          </div>

          <p className="mb-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"//"}</span> Hi, I'm
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Rocky <span className="text-gradient">Pawar</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Badge className="border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary hover:bg-primary/20">
              Java Backend Developer
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              JAVA · Spring Boot · REST APIs · MySQL · MVC · Microservices
            </span>
          </div>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Building{" "}
            <span className="text-foreground">scalable backend systems</span> and{" "}
            <span className="text-foreground">AI-powered applications</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow glow-sm"
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <a href="/rocky-pawar-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-muted-foreground hover:bg-primary/5 hover:text-primary"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Right — photo */}
        <div className="reveal lg:col-span-5">
          <div className="relative mx-auto aspect-square w-[280px] sm:w-[360px] lg:w-[420px]">
            {/* Glow rings */}
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_60%)] opacity-50 blur-2xl" />
            <div className="absolute inset-4 rounded-full border border-primary/30" />
            <div className="absolute inset-8 rounded-full border border-primary/20" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_color-mix(in_oklab,var(--primary)_35%,transparent),_transparent_70%)]" />
            {/* Photo */}
            <img
              src={heroPhoto}
              alt="Rocky Pawar — Java Backend Developer"
              className="animate-float relative z-10 h-full w-full select-none object-contain drop-shadow-[0_20px_40px_color-mix(in_oklab,var(--primary)_35%,transparent)]"
              draggable={false}
            />
            {/* Floating chips */}
            <div className="absolute -left-2 top-10 z-20 hidden rounded-lg border border-border bg-surface/80 px-3 py-2 font-mono text-xs text-primary shadow-xl backdrop-blur sm:block">
              {"{ spring-boot }"}
            </div>
            <div className="absolute -right-2 bottom-12 z-20 hidden rounded-lg border border-border bg-surface/80 px-3 py-2 font-mono text-xs text-primary shadow-xl backdrop-blur sm:block">
              {"@RestController"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel num="01" title="About" />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="reveal lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Backend engineer with a builder's mindset.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Java Backend Developer with strong knowledge of{" "}
              <span className="text-foreground">Spring Boot</span>,{" "}
              <span className="text-foreground">REST APIs</span>, and{" "}
              <span className="text-foreground">MySQL</span>. Currently pursuing MCA
              with a CGPA of 8.47, and ranked among the top 5% during BCA.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I'm passionate about building real-world applications that solve real
              problems — from secure authentication flows to AI-powered career
              guidance platforms.
            </p>
          </div>

          <div className="reveal lg:col-span-2">
            <Card className="glass hover-lift rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                Quick Facts
              </h3>
              <ul className="mt-5 space-y-4">
                <FactRow icon={GraduationCap} label="MCA" value="CGPA 8.47" />
                <FactRow icon={Award} label="BCA" value="Top 5% of cohort" />
                <FactRow
                  icon={Trophy}
                  label="IEEE HACKSAGON"
                  value="Finalist · IIIT Gwalior"
                />
                <FactRow icon={Briefcase} label="Role" value="Backend Developer Trainee" />
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof GraduationCap;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </li>
  );
}

/* -------------------- STATS -------------------- */
function Stats() {
  const ref = useReveal<HTMLDivElement>();
  const stats = [
    { value: 2, suffix: "+", label: "Projects Shipped", decimals: 0 },
    { value: 8.47, suffix: "", label: "MCA CGPA", decimals: 2 },
    { value: 3, suffix: "", label: "Certifications", decimals: 0 },
    { value: 1, suffix: "", label: "Hackathon Final", decimals: 0 },
  ];
  return (
    <section ref={ref} className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="glass reveal grid grid-cols-2 gap-6 rounded-2xl border-primary/20 p-8 sm:grid-cols-4 sm:p-10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </Card>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
}) {
  const ref = useCountUp(value, 1800, decimals);
  return (
    <div className="text-center sm:text-left">
      <p className="font-bold text-4xl text-gradient sm:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/* -------------------- SKILLS -------------------- */
function Skills() {
  const ref = useReveal<HTMLDivElement>();
  const groups = [
    {
      icon: Server,
      title: "Backend",
      tags: ["Java", "Spring Boot", "REST APIs", "JDBC", "Spring Security", "JWT"],
    },
    {
      icon: Database,
      title: "Database",
      tags: ["MySQL", "SQL", "Schema Design", "Query Optimization"],
    },
    {
      icon: Wrench,
      title: "Tools & Cloud",
      tags: ["AWS S3", "AWS EC2", "AWS Athena", "Docker", "Git", "Postman"],
    },
  ];
  return (
    <section id="skills" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel num="02" title="Skills" />
        <h2 className="reveal mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I use to ship reliable backends.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map(({ icon: Icon, title, tags }) => (
            <Card
              key={title}
              className="glass hover-lift reveal rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface-elevated/60 px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURED PROJECT -------------------- */
function FeaturedProject({ onWatchDemo }: { onWatchDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel num="03" title="Featured Project" />

        <Card className="glass reveal mt-10 overflow-hidden rounded-3xl border-primary/20 p-0">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative bg-gradient-to-br from-primary/10 via-transparent to-transparent p-6 sm:p-10">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl">
                <img
                  src={chanakyaShot}
                  alt="Chanakya: The Mentor dashboard"
                  className="w-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  Featured · AI Platform
                </span>
              </div>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                Chanakya: The Mentor
              </h3>
              <p className="mt-3 text-muted-foreground">
                AI-based career guidance platform with assessment, recommendation,
                roadmap, and tracking — designed to bring clarity to students lost
                between career paths.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <PSI title="Problem" body="Students lack career clarity." />
                <PSI title="Solution" body="AI-based recommendation system." />
                <PSI title="Impact" body="Helps users choose structured paths." />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Artificial Intelligence", "React", "Spring Boot", "MySQL", "REST APIs", "JWT"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={onWatchDemo}
                  className="bg-primary text-primary-foreground hover:bg-primary-glow glow-sm"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <a
                    href="https://www.youtube.com/watch?v=nLtgsIYQGts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function PSI({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface/50 p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <p className="mt-2 text-sm text-foreground">{body}</p>
    </div>
  );
}

/* -------------------- OTHER PROJECTS -------------------- */
function OtherProjects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-2xl font-bold tracking-tight sm:text-3xl">
          Other Projects
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="glass hover-lift reveal rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Code2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Student Management System</h3>
                <p className="font-mono text-xs text-muted-foreground">
                  Spring Boot · MySQL · JWT
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <FeatureBullet>
                Full CRUD operations with pagination & sorting
              </FeatureBullet>
              <FeatureBullet>JWT-based authentication & authorization</FeatureBullet>
              <FeatureBullet>Layered architecture (Controller → Service → Repository)</FeatureBullet>
              <FeatureBullet>Validated REST endpoints, tested with Postman</FeatureBullet>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Spring Boot", "MySQL", "JWT", "REST"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface-elevated/60 px-2.5 py-1 font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          <Card className="glass hover-lift reveal flex flex-col justify-between rounded-2xl border-dashed border-primary/30 p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                More on the way
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Always shipping something new.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Currently exploring microservices, message queues, and deeper AWS
                integrations. Want to collaborate? Let's talk.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-6 self-start border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FeatureBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
      <span>{children}</span>
    </li>
  );
}

/* -------------------- EXPERIENCE -------------------- */
function Experience() {
  const ref = useReveal<HTMLDivElement>();
  const bullets = [
    "Built REST APIs using Spring Boot with layered architecture",
    "Implemented JWT-based authentication & secure endpoints",
    "Designed normalized MySQL schemas and wrote performant queries",
    "Tested and documented APIs end-to-end using Postman",
  ];
  return (
    <section id="experience" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel num="04" title="Experience" />

        <div className="mt-10">
          <Card className="glass hover-lift reveal rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">
                    Java Backend Developer Trainee
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    Backend Engineering
                  </p>
                </div>
              </div>
              <Badge className="self-start border-primary/40 bg-primary/10 font-mono text-xs text-primary sm:self-auto">
                2024 — Present
              </Badge>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground sm:text-base">
              {bullets.map((b) => (
                <FeatureBullet key={b}>{b}</FeatureBullet>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CERTIFICATES -------------------- */
function Certificates() {
  const ref = useReveal<HTMLDivElement>();
  const certs = [
    { 
    title: "Java Fundamentals", 
    issuer: "Scaler", 
    icon: Code2,
    link: "https://moonshot.scaler.com/s/li/S3raExQD-R", // Official link
    image: javaCert // Certificate ki image
  },
  { 
    title: "REST API with Spring Boot", 
    issuer: "Infosys", 
    icon: Server,
    link: "https://www.linkedin.com/posts/rocky-pawar-10952a324_rest-api-with-java-spring-boot-with-java-activity-7326289263132602368-OOwb/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHyohkB7KuZF22DqFJvKcuNB9L3sE7Tpn4",
    image: springCert
  },
  { 
    title: "Aws Cloud Fundamentals", 
    issuer: "AWS", 
    icon: Server,
    link: "https://www.credly.com/badges/13693c36-6296-46ab-968f-c3debaf41f8f/public_url",
    image: awsCert
  }
  ];
  

return (
  <section ref={ref} className="relative py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionLabel num="05" title="Certificates" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {certs.map(({ title, issuer, icon: Icon, link, image }) => (
          <Card
            key={title}
            className="group glass hover-lift reveal overflow-hidden rounded-2xl p-0"
          >
            {/* Certificate Preview Image */}
            <div className="relative h-40 w-full overflow-hidden bg-muted">
              <img 
                src={image} 
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-black shadow-lg"
                >
                  VIEW CREDENTIAL
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-md font-semibold leading-tight">{title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {issuer}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
}

/* -------------------- ACHIEVEMENTS -------------------- */
function Achievements() {
  const ref = useReveal<HTMLDivElement>();
  
  return (
    <section ref={ref} className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="group glass reveal relative overflow-hidden rounded-3xl border-primary/30 p-0">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: Text Content */}
            <div className="relative z-10 flex-1 p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              
              <div className="relative flex flex-col items-start gap-6">
                <span className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl border border-primary/40 bg-primary/15 text-primary glow-sm">
                  <Trophy className="h-8 w-8" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    Achievement
                  </p>
                  <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Finalist · IEEE HACKSAGON
                  </h3>
                  <p className="mt-2 text-muted-foreground max-w-lg">
                    Selected as a finalist at the IEEE HACKSAGON hackathon hosted at{" "}
                    <span className="text-foreground font-semibold">IIIT Gwalior</span>, 
                    competing among top engineering teams across the country.
                  </p>
                  
                  {/* Optional: Add a verification link or event link */}
                  <div className="mt-6">
                    <a 
                      href="https://www.hacksagon.com/" 
                      target="_blank" 
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
                    >
                      VIEW EVENT <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Achievement Image/Photo */}
            <div className="relative h-64 w-full md:h-auto md:w-1/3 overflow-hidden">
              <img 
                src={hacksagonCert}// Apni hackathon ki photo ya logo yahan daalo
                alt="IEEE Hacksagon Finalist"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent md:block hidden" />
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Hi Rocky,\n\n${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:rockypawar.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel num="06" title="Contact" />
        <h2 className="reveal mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let's build something solid together.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Card className="glass reveal rounded-2xl p-6 sm:p-8 lg:col-span-3">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-xs uppercase tracking-widest">
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="border-border bg-surface/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="border-border bg-surface/60"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-widest">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project…"
                  className="border-border bg-surface/60"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary-glow glow-sm"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </Card>

          <div className="reveal flex flex-col gap-4 lg:col-span-2">
            <ContactLink
              href="mailto:rockypawar.dev@gmail.com"
              icon={Mail}
              label="Email"
              value="rockypawar.dev@gmail.com"
            />
            <ContactLink
              href="https://www.linkedin.com/in/rocky-pawar/"
              icon={Linkedin}
              label="LinkedIn"
              value="/in/rocky-pawar"
            />
            <ContactLink
              href="https://github.com/rockypawar960"
              icon={Github}
              label="GitHub"
              value="@rockypawar"
            />

            <Card className="glass mt-2 rounded-2xl border-primary/20 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Open to
              </p>
              <p className="mt-3 text-sm text-foreground">
                Internships · Junior Backend Roles · Full-time SDE positions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="glass hover-lift group flex items-center gap-4 rounded-2xl p-5"
    >
      <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition group-hover:glow-sm">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm text-foreground group-hover:text-primary">
          {value}
        </p>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
    </a>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary">
            RP
          </span>
          <div>
            <p className="text-sm font-semibold">Rocky Pawar</p>
            <p className="font-mono text-xs text-muted-foreground">
              Building scalable backends.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SocialIcon href="mailto:rockypawar.dev@gmail.com" icon={Mail} label="Email" />
          <SocialIcon
            href="https://www.linkedin.com/in/rocky-pawar/"
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://github.com/rockypawar"
            icon={Github}
            label="GitHub"
          />
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rocky Pawar — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

/* -------------------- shared -------------------- */
function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="reveal flex items-center gap-3">
      <span className="font-mono text-sm text-primary">{num}.</span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </span>
      <span className="ml-2 h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/50 to-transparent" />
    </div>
  );
}

