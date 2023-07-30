import Image from "next/image";
import styles from "./page.module.css";
import ImageGrid from "../../components/ImageGrid";
import { BsDiscord, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  const images = ["/Game.jpg", "/Server.jpg", "/Sniper.png"];

  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Central Arma Community</h1>
        <p className={styles.heroDescription}>
          EXPERIENCE TRUE COMBAT GAMEPLAY IN A MASSIVE MILITARY SANDBOX.
        </p>
      </div>

      <div className={styles.about}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <Image src={"/CAC.jpg"} width={1280} height={720} />
        <p className={styles.aboutDescription}>
          Who are we?<br></br>We are a friendly Arma 3 Community, who look to
          take Arma communities further, by providing more exciting versions of
          the game.
        </p>
      </div>

      <div className={styles.serverPictures}>
        <h1 className={styles.serverPicsTitle}>
          Some pictures from our server
        </h1>
        <ImageGrid images={images} />
      </div>

      <div className={styles.info}>
        <h1 className={styles.infoTitle}>How to find us?</h1>
        <div className={styles.IconContainer}>
          <Link href="https://discord.gg/dNGcyEYK8F" className={styles.icons}>
            <BsDiscord />
          </Link>
          <Link href="https://github.com/TanRayCz/CAC" className={styles.icons}>
            <BsGithub />
          </Link>
        </div>

        <div className={styles.serverList}>
          <p>
            CAC Exile Tanoa
            <br /> Map: Tanoa <br /> Location: South Africa
          </p>
          <p>
            CAC Exile Escape - On demand <br />
            Map: Tanoa{" "}
          </p>
          <p>
            CAC King Of The Hill - On demand <br />
            Map: Altis <br />
            Location: Czech Republic
          </p>
          <p>
            CAC Antistasi 1 Maps: Anizay, Chernarus Summer, Chernarus Winter,
            Kunduz, Sahrani, Takistan, Tembelan, Virolahti <br />
            Location: South Africa
          </p>
          <p>
            CAC Antistasi 2 Maps: Malden, Altis, Tanoa, Livonia <br />Location: UK
          </p>
        </div>
      </div>
    </>
  );
}
