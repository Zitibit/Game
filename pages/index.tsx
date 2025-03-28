import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticProps() {
  let menu = {};

  try {
    const filePath = path.join(process.cwd(), "public", "content.json");
    const data = fs.readFileSync(filePath, "utf-8");
    menu = JSON.parse(data);
  } catch (err) {
    console.error("Error loading menu:", err);
  }

  return {
    props: { menu },
  };
}

export default function Home({ menu }: { menu: any }) {
  return (
    <div className="homepage">
      <div className="homepage__brand">
        <h1>Zitibit</h1>
        <div className="homepage__brand__brandintro">
          Zitibit is an open-source platform for software and game development,
          where contributors can collaborate, share ideas, and build innovative
          projects together. Whether you're a developer, designer, or
          enthusiast, Zitibit provides a space to contribute, learn, and grow
          with the open-source community.
        </div>
      </div>

      <div className="homepage__category">
        {/* // Coding */}
        <Link href={"/games/shooter"}><div className="homepage__category__item">
          <div className="homepage__category__item__image">
            <Image
              src="/zitibit/shootergame.png"
              alt="Coding"
              width={300}
              height={200}
            />
          </div>
          <div className="homepage__category__item__body">
            <div className="homepage__category__item__body__intro">
              1Bit-Shooter
            </div>
            <div className="homepage__category__item__body__desc">
              1Bit Shooter is an action-packed arcade-style shooting game where
              you control a fighter jet to take down incoming enemies. Navigate
              your plane using the mouse and shoot down enemies before they
              reach the bottom. Each level brings faster enemies and greater
              challenges. Keep an eye on your lives—once they reach zero, it's
              game over! Can you survive and set the highest score?{" "}
            </div>
          </div>
        </div></Link>
      </div>
    </div>
  );
}
