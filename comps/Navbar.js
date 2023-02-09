import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} alt="Ninja List" />
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/ninjas" legacyBehavior>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
