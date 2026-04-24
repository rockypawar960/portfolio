import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Rocky Pawar — Java Backend Developer | Spring Boot, REST APIs, MySQL",
      },
      {
        name: "description",
        content:
          "Portfolio of Rocky Pawar, a Java Backend Developer building scalable Spring Boot APIs, MySQL systems, and AI-powered applications. MCA · CGPA 8.47 · IEEE HACKSAGON Finalist.",
      },
      {
        name: "keywords",
        content:
          "Rocky Pawar, Java Backend Developer, Spring Boot, REST API, MySQL, JWT, AWS, portfolio, Chanakya The Mentor",
      },
      {
        property: "og:title",
        content: "Rocky Pawar — Java Backend Developer",
      },
      {
        property: "og:description",
        content:
          "Building scalable backend systems and AI-powered applications with Spring Boot, REST APIs, and MySQL.",
      },
      { property: "og:type", content: "website" },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Rocky Pawar — Java Backend Developer",
      },
      {
        name: "twitter:description",
        content:
          "Spring Boot · REST APIs · MySQL · AWS — building scalable backends and AI-powered apps.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio_unused() {
  return null;
}
void Portfolio_unused;
