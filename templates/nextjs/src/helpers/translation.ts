import { useTranslations } from "next-intl"
import uzTranslations from '../messages/oz.json';

export type TranslationKeys = keyof typeof uzTranslations;

const translation = (key: TranslationKeys) => {
  const t = useTranslations()
  return t(key)
}

export default translation