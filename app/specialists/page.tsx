"use client"

import { BackButton } from "@/components/back-button"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

export default function SpecialistsPage() {
  const { translations, language } = useLanguage()
  const t = translations.pages?.specialists || {}
  const [activeSection, setActiveSection] = useState("none")

  const handleSectionChange = (section: "nurses" | "doctors" | "none") => {
    setActiveSection(section)
  }

  const sections = [
    {
      title: t.articles,
      description: t.articlesDesc,
      href: "/specialists/articles",
      icon: "📄"
    },
    {
      title: t.legal,
      description: t.legalDesc,
      href: "/specialists/legal",
      icon: "⚖️"
    },
    {
      title: t.info,
      description: t.infoDesc,
      href: "/specialists/info",
      icon: "📚"
    },
    {
      title: t.more,
      description: t.moreDesc,
      href: "/specialists/more",
      icon: "💼"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <BackButton />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{t.title}</h1>
            <p className="text-lg text-gray-600">
              {t.description}
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => handleSectionChange("nurses")}
              className={`px-4 py-2 rounded-lg font-medium text-white ${
                activeSection === "nurses" ? "bg-blue-600" : "bg-gray-400"
              } hover:bg-blue-700 transition-colors`}
            >
              {t.nursesButton}
            </button>
            <button
              onClick={() => handleSectionChange("doctors")}
              className={`px-4 py-2 rounded-lg font-medium text-white ${
                activeSection === "doctors" ? "bg-blue-600" : "bg-gray-400"
              } hover:bg-blue-700 transition-colors`}
            >
              {t.doctorsButton}
            </button>
          </div>

          {activeSection === "nurses" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.nurses}
              </h2>
              <p className="text-gray-700 mb-4">
                Облыстық тері - венерология диспансерінде 41 орта буын және 18 кіші буын медицина қызметкері жұмыс істейді. Оның ішінде 61 пайызы жоғары, 19,7 пайызы бірінші, 2,4 пайызы екінші санатты мамандар.
              </p>
              <p className="text-gray-700 mb-4">
                Жұматаева Жанат Байзаққызы - "Қызылорда облыстық тері - венерология диспансері" ШЖҚ МКК бас мейірбикесі. 1981 жылы Қызылорда облысы Қармақшы ауданында дүниеге келген. 1997-1998 жылдары қазақ орта мектебін бітіріп, 1998-2001ж Қызылорда медициналық колледжінің "Мейірбикелік іс" мамандығы бойынша толық курсын бітіріп шықты. 2002-2017 жылдары Қызылорда облыстық қан орталығында аға, бас мейірбике қызметін атқарды. Қазіргі таңда облыстық тері - венерологиялық диспансерінде жоғары санатты бас мейірбике қызметін атқарады. "Мейірі"м төсбелгісінің иегері, Облыстық денсаулық сақтау басқармасының Алғыс хатымен, "Нұр Отан" партиясы Қызылорда қалалық филиалының Алғыс хатымен марапатталып, "Үздік мейірбике" төсбелгісінің иегері.
              </p>
              <p className="text-gray-700">
                Тажмағамбетова  Сәуле Ануарбекқызы - 1968 жылы Қызылорда қаласында дүниеге келген. 1987 жылдан бері облыстық тері - венерология диспансерінде жұмыс істеп келеді. 1995 жылы тері бөлімінің аға мейірбике қызметіне тағайындалды. 2011-2013 ж аралығында тері - венерология бөліміне аға мейірбике қызметіне ауыстырылды. Облыстық денсаулық сақтау басқармасының Алғыс хат иегері.
              </p>
            </div>
          )}

          {activeSection === "doctors" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.doctors}
              </h2>
              <p className="text-gray-700">
                {t.contentComing}
              </p>
            </div>
          )}

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t.legalBase}</h3>
            <p className="text-gray-700 mb-4">
              {t.legalDescription}
            </p>
            <Link 
              href="/specialists/legal"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t.viewFull}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
