import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default function Home() {
  const { t, i18n } = useTranslation("common")

  function toggleLang() {
    return i18n.language === "en-US" ? "es-MX" : "en-US"
  }

  return (
    <>
      <Head>
        <title>NextJs Asset</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {t("WELCOME")}
        <br/>
        <Link href="/" locale={toggleLang()}>
          Toggle Language 
        </Link>
      </main>
    </>
  )
}
