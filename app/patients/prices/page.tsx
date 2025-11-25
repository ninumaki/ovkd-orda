'use client'

import { BackButton } from "@/components/back-button"
import { Download } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function PricesPage() {
  const { translations, language } = useLanguage()
  const t = translations.pages?.patients?.prices || {}

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />
          
          <div className="mx-auto max-w-4xl">
            {/* Header Section */}
            <div className="rounded-lg bg-white p-8 shadow-md mb-8">
              <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
                {t.title}
              </h1>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  {t.downloadFile}
                </p>
                
                <a
                  href="/reports/prejskurant-2025.pdf"
                  download={t.downloadButton}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>{t.downloadButton}</span>
                  <span className="text-sm ml-2">{t.fileSize}</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  {t.downloadInfo}
                  <br />
                  {t.downloadInfo2}
                </p>
              </div>
            </div>

            {/* Info Section */}
            <div className="rounded-lg bg-blue-50 p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-blue-900">
                {t.infoTitle}
              </h2>
              <p className="text-blue-800 mb-4">
                {t.infoDescription}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>{t.servicesList?.outpatient}</li>
                <li>{t.servicesList?.consultations}</li>
                <li>{t.servicesList?.physiotherapy}</li>
                <li>{t.servicesList?.laboratory}</li>
                <li>{t.servicesList?.dermatocosmetology}</li>
                <li>{t.servicesList?.inpatient}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
