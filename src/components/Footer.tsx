import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">EmlakPro</span>
            </div>
            <p className="text-sm text-gray-400">
              Türkiye&apos;nin en modern emlak platformu. Hayalinizdeki evi bulmanıza yardımcı oluyoruz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li><Link href="/ilanlar?type=satilik" className="hover:text-white transition-colors">Satılık İlanlar</Link></li>
              <li><Link href="/ilanlar?type=kiralik" className="hover:text-white transition-colors">Kiralık İlanlar</Link></li>
              <li><Link href="/ilanlar?category=arsa" className="hover:text-white transition-colors">Arsa İlanları</Link></li>
              <li><Link href="/ilanlar?category=dukkan" className="hover:text-white transition-colors">Dükkan İlanları</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Popüler Şehirler</h3>
            <ul className="space-y-2">
              <li><Link href="/ilanlar?city=İstanbul" className="hover:text-white transition-colors">İstanbul</Link></li>
              <li><Link href="/ilanlar?city=Ankara" className="hover:text-white transition-colors">Ankara</Link></li>
              <li><Link href="/ilanlar?city=İzmir" className="hover:text-white transition-colors">İzmir</Link></li>
              <li><Link href="/ilanlar?city=Antalya" className="hover:text-white transition-colors">Antalya</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@emlakpro.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0850 123 45 67
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 EmlakPro. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
