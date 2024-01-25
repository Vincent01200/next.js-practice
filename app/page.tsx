import Link from "next/link";

export default function Home() {
  return (
    <div className="body">
      <br/>
      <p>Cek Di Bawah Ini</p>
      <br/>
      <Link href="/posts">﹡ POSTINGAN</Link>
      <br/>
      <Link href="/albums">﹡ ALBUM</Link>
    </div>
  );
}
