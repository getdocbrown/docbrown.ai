import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return <Link className="db-logo" href="/" aria-label="DocBrown home">
    <Image src="/docbrown.png" width={40} height={40} alt="" unoptimized />
    docbrown<span className="db-domain">.ai</span>
  </Link>;
}
