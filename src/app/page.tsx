import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di Video<span className="text-[#E4C904]">Bay</span></h1>
        <p className="text-lg mb-6">
          Jelajahi koleksi video youtube dengan mengklik tombol di bawah ini.
        </p>
        <Link href="/videos">
          <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
            Lihat Video
          </p>
        </Link>
      </div>
    </div>
  );
}
