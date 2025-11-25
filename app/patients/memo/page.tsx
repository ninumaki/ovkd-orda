"use client"

import Link from "next/link"
import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/components/language-provider"

export default function MemoPage() {
  const { translations, language } = useLanguage()
  const t = translations.pages?.patients?.memo || {}
  
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
            {t.title}
          </h1>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* Section 1 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {t.section1?.title}
              </h2>
              <p className="mb-4 text-sm text-gray-600">{t.section1?.subtitle}</p>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>{t.section1?.paragraph1}</p>
                <p>{t.section1?.paragraph2}</p>
              </div>
            </div>

            {/* What Is Section */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {t.whatIs?.title}
              </h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>{t.whatIs?.paragraph1}</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {t.section2?.title}
              </h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>{t.section2?.paragraph1}</p>
                <p>{t.section2?.paragraph2}</p>
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t.section2?.subsectionTitle}
                </h3>
                <ol className="list-decimal space-y-3 pl-6 text-gray-700">
                  <li>{t.section2?.listItem1}</li>
                  <li>{t.section2?.listItem2}</li>
                  <li>{t.section2?.listItem3}</li>
                  <li>{t.section2?.listItem4}</li>
                  <li>{t.section2?.listItem5}</li>
                  <li>{t.section2?.listItem6}</li>
                  <li>{t.section2?.listItem7}</li>
                  <li>{t.section2?.listItem8}</li>
                  <li>{t.section2?.listItem9}</li>
                  <li>{t.section2?.listItem10}</li>
                </ol>
              </div>
            </div>

            {/* Section 3 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {t.section3?.title}
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 mb-6">
                <li>{t.section3?.listItem1}</li>
                <li>{t.section3?.listItem2}</li>
                <li>{t.section3?.listItem3}</li>
                <li>{t.section3?.listItem4}</li>
              </ul>
              <p className="font-semibold text-red-600">{t.section3?.warning}</p>
            </div>

            {/* Section 4 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {t.section4?.title}
              </h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>{t.section4?.paragraph1}</p>
                <p>{t.section4?.paragraph2}</p>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-blue-900">
                {t.note?.title}
              </h3>
              <p className="text-blue-800">{t.note?.content}</p>
            </div>

            <div className="mt-8 pt-4 border-t">
              <Link href="/patients" className="inline-block bg-red-600 text-white px-6 py-3 rounded font-semibold">
                ← {t.backToPatients}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

