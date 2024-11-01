import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200?sig=1",
      title: "Wattana Panich",
      description: "50 year old beef broth with succulent meat and noodles.",
      link: "https://maps.app.goo.gl/uxkKu1EqjAMg4Hzk7",
    },
    {
      image:
        "https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200?sig=2",
      title: "Card Title 2",
      description: "Description for card 2.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200?sig=3",
      title: "Card Title 3",
      description: "Description for card 3.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200?sig=4",
      title: "Card Title 4",
      description: "Description for card 4.",
      link: "#",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button>HELL</Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardsData.map((card, index) => (
            <Card key={index} style={{ padding: "12px" }}>
              <Image
                aria-hidden
                src={card.image}
                alt="File icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <CardTitle style={{ paddingTop: "12px" }}>{card.title}</CardTitle>
              <CardDescription style={{ paddingTop: "16px" }}>
                {card.description}
              </CardDescription>
              <a
                style={{ paddingTop: "12px" }}
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </a>
            </Card>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
